import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useTheme } from './ThemeProvider';

// "Messy ideas click." Design-tool glyphs (frames, circles, cursors, text carets) start
// scattered and tumbling, then snap into neat columns as the page scrolls or the pointer
// nears them. Shapes live in the page margins so they never cross the reading column.
// One InstancedMesh per shape family and a fresnel shader instead of real glass keep it
// to a handful of draw calls.
const PALETTE_LIGHT = ['#2a2a2e', '#3a3a40', '#4a4a52', '#57565e', '#33333a'];
const PALETTE_DARK = ['#d9d2c4', '#c4bdae', '#aaa496', '#948e82', '#cfc8b9'];

const COUNTS = { frames: 6, circles: 6, cursors: 4, ibeams: 6, carets: 6 }; // 28 shapes: 14 per margin, so settled neighbours don't touch
const CONTENT_HALF_WIDTH = 576; // px, matches the 1152px reading column
const NARROW = 1100; // below this the content fills the screen: shapes get quieter instead of living in margins
const FOG_DARK = 0x141210;
const FOG_LIGHT = 0xefeee9;
const INTRO_SPREAD = 0.9; // seconds over which shapes arrive, staggered
const INTRO_TIME = 1.1; // seconds each shape takes to arrive
const FOV = 75;
const CAM_Z = 12;

const rand = (a: number, b: number) => a + Math.random() * (b - a);
const smooth = (t: number) => t * t * (3 - 2 * t);
const clamp01 = (t: number) => Math.min(1, Math.max(0, t));

function frameShape() {
  const s = new THREE.Shape();
  const hw = 0.42, r = 0.12;
  s.moveTo(-hw + r, -hw);
  s.lineTo(hw - r, -hw);
  s.quadraticCurveTo(hw, -hw, hw, -hw + r);
  s.lineTo(hw, hw - r);
  s.quadraticCurveTo(hw, hw, hw - r, hw);
  s.lineTo(-hw + r, hw);
  s.quadraticCurveTo(-hw, hw, -hw, hw - r);
  s.lineTo(-hw, -hw + r);
  s.quadraticCurveTo(-hw, -hw, -hw + r, -hw);
  return s;
}
function circleShape() {
  const s = new THREE.Shape();
  s.absarc(0, 0, 0.42, 0, Math.PI * 2, false);
  return s;
}
function cursorShape() {
  const s = new THREE.Shape();
  s.moveTo(0, 0);
  s.lineTo(0, 1.2);
  s.lineTo(0.3, 1);
  s.lineTo(0.5, 1.4);
  s.lineTo(0.7, 1.3);
  s.lineTo(0.4, 0.9);
  s.lineTo(0.8, 0.8);
  s.lineTo(0, 0);
  return s;
}
// I-beam text cursor: a serifed "I" (top bar, stem, bottom bar).
function ibeamShape() {
  const s = new THREE.Shape();
  const hw = 0.2, sw = 0.06, st = 0.12, hh = 0.5;
  s.moveTo(-hw, hh);
  s.lineTo(hw, hh);
  s.lineTo(hw, hh - st);
  s.lineTo(sw, hh - st);
  s.lineTo(sw, -hh + st);
  s.lineTo(hw, -hh + st);
  s.lineTo(hw, -hh);
  s.lineTo(-hw, -hh);
  s.lineTo(-hw, -hh + st);
  s.lineTo(-sw, -hh + st);
  s.lineTo(-sw, hh - st);
  s.lineTo(-hw, hh - st);
  s.closePath();
  return s;
}
// Insertion caret: the slim text-insertion bar.
function caretShape() {
  const s = new THREE.Shape();
  const w = 0.055, hh = 0.5;
  s.moveTo(-w, -hh);
  s.lineTo(w, -hh);
  s.lineTo(w, hh);
  s.lineTo(-w, hh);
  s.closePath();
  return s;
}

const glassVert = /* glsl */ `
  varying vec3 vColor; varying float vFres; varying float vDepth;
  void main() {
    vColor = instanceColor;
    mat4 im = instanceMatrix;
    vec4 mv = modelViewMatrix * im * vec4(position, 1.0);
    vec3 n = normalize(mat3(modelViewMatrix * im) * normal);
    vec3 v = normalize(-mv.xyz);
    vFres = pow(1.0 - abs(dot(n, v)), 2.0);
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }`;
const glassFrag = /* glsl */`
  varying vec3 vColor; varying float vFres; varying float vDepth;
  uniform vec3 uFog; uniform float uFogNear, uFogFar, uAlpha;
  void main() {
    vec3 col = vColor * (0.85 + 0.5 * vFres);
    float fog = smoothstep(uFogNear, uFogFar, vDepth);
    float alpha = (0.16 + 0.34 * vFres) * (1.0 - fog) * uAlpha;
    gl_FragColor = vec4(mix(col, uFog, fog), alpha);
  }`;

type Inst = {
  side: number; // -1 left margin, 1 right margin
  mx: number; // 0..1 across the margin when scattered
  my: number; // -1..1 down the viewport when scattered
  z: number;
  slotSide: number;
  slotY: number; // -1..1, the neat column position
  messScale: number;
  mess: THREE.Vector2; // scattered position in screen space (NDC)
  slot: THREE.Vector2; // clicked-into-place position in screen space (NDC)
  cur: THREE.Vector2;
  q: THREE.Quaternion; // tumbling orientation while scattered
  axis: THREE.Vector3; // axis it tumbles around
  speed: number; // rad/s
  seed: number;
  color: number;
  o: number; // 0 = scattered, 1 = clicked into place
  v: number; // spring velocity of o
  k: number; // spring stiffness (about 0.6-1s to settle); varies per shape so the field lands as a ripple
  delay: number; // seconds before the entrance starts
  clicked: boolean;
  pulse: number; // 1 -> 0 over the "tick" as a shape lands
};

const ThreeBackgroundImpl: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const fogColorRef = useRef<THREE.Color | null>(null);
  const paletteRef = useRef<((dark: boolean) => void) | null>(null);
  const staticRenderRef = useRef<(() => void) | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!mountRef.current) return;

    const probe = document.createElement('canvas');
    if (!probe.getContext('webgl2') && !probe.getContext('webgl')) {
      console.warn('WebGL not supported, skipping Three.js background');
      return;
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(FOV, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = CAM_Z;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'default' });
    rendererRef.current = renderer;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const fogUniforms = {
      uFog: { value: new THREE.Color(FOG_LIGHT) },
      uFogNear: { value: 15 },
      uFogFar: { value: 40 },
      uAlpha: { value: 1 },
    };
    fogColorRef.current = fogUniforms.uFog.value;

    const glassMat = new THREE.ShaderMaterial({
      vertexShader: glassVert,
      fragmentShader: glassFrag,
      uniforms: fogUniforms,
      transparent: true,
      depthWrite: false,
    });

    const dummy = new THREE.Object3D();
    const families: { mesh: THREE.InstancedMesh; items: Inst[]; orderScale: number }[] = [];
    const geo = (shape: THREE.Shape, depth: number, scale: number) => {
      const g = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: true, bevelSegments: 4, steps: 1, bevelSize: 0.02, bevelThickness: 0.02 });
      g.center();
      g.scale(scale, scale, scale);
      return g;
    };
    const defs: [THREE.ExtrudeGeometry, number, number][] = [
      [geo(frameShape(), 0.06, 1), COUNTS.frames, 0.9],
      [geo(circleShape(), 0.06, 1), COUNTS.circles, 0.9],
      [geo(cursorShape(), 0.1, 0.7), COUNTS.cursors, 0.9],
      [geo(ibeamShape(), 0.06, 1), COUNTS.ibeams, 1],
      [geo(caretShape(), 0.06, 1), COUNTS.carets, 1],
    ];
    const total = defs.reduce((n, d) => n + d[1], 0);

    // Neat column slots, half per margin, handed out in shuffled order so shape types mix.
    const slots: { side: number; y: number }[] = [];
    const perSide = Math.ceil(total / 2);
    for (let k = 0; k < perSide; k++) {
      const y = -0.74 + (1.5 * k) / (perSide - 1); // clear of the footer below and the header above
      slots.push({ side: -1, y }, { side: 1, y });
    }
    for (let i = slots.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [slots[i], slots[j]] = [slots[j], slots[i]];
    }

    let slotIdx = 0;
    for (const [g, count, orderScale] of defs) {
      const mesh = new THREE.InstancedMesh(g, glassMat, count);
      mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      const items: Inst[] = [];
      for (let i = 0; i < count; i++) {
        const slot = slots[slotIdx++ % slots.length];
        items.push({
          side: slot.side, // scattered and settled on the same margin, so shapes never cross the page
          mx: Math.random(),
          my: rand(-1, 1),
          z: rand(-9, 2),
          slotSide: slot.side,
          slotY: slot.y,
          messScale: rand(0.5, 1.3),
          mess: new THREE.Vector2(),
          slot: new THREE.Vector2(),
          cur: new THREE.Vector2(),
          q: new THREE.Quaternion().setFromEuler(new THREE.Euler(rand(-Math.PI, Math.PI), rand(-Math.PI, Math.PI), rand(-Math.PI, Math.PI))),
          axis: new THREE.Vector3(rand(-1, 1), rand(-1, 1), rand(-0.4, 0.4)).normalize(),
          speed: rand(0.12, 0.5),
          seed: Math.random() * 100,
          color: Math.floor(Math.random() * 5),
          o: 0,
          v: 0,
          k: rand(26, 62),
          delay: Math.random() * INTRO_SPREAD,
          clicked: false,
          pulse: 0,
        });
      }
      scene.add(mesh);
      families.push({ mesh, items, orderScale });
    }

    // Positions live in screen space (NDC) so the margins track the viewport and shapes
    // travel between scattered and settled without ever crossing the reading column.
    let dark = document.documentElement.classList.contains('dark');
    let narrow = false;
    const layout = () => {
      const w = window.innerWidth;
      narrow = w < NARROW;
      const inner = narrow ? 0 : Math.min(0.9, CONTENT_HALF_WIDTH / (w / 2));
      const pad = narrow ? 0 : Math.min(0.08, (1.05 - inner) * 0.5); // keeps scattered shapes off the content edge
      fogUniforms.uAlpha.value = (narrow ? 0.4 : 1) * (dark ? 1.8 : 1);
      for (const { items } of families) {
        for (const s of items) {
          s.mess.set(s.side * (inner + pad + (1.05 - inner - pad) * s.mx), s.my * 1.05);
          s.slot.set(s.slotSide * (narrow ? 0.9 : inner + (1 - inner) * 0.5), s.slotY);
        }
      }
    };
    layout();

    paletteRef.current = (isDark: boolean) => {
      dark = isDark;
      fogUniforms.uAlpha.value = (narrow ? 0.4 : 1) * (dark ? 1.8 : 1);
      const palette = isDark ? PALETTE_DARK : PALETTE_LIGHT;
      const c = new THREE.Color();
      for (const { mesh, items } of families) {
        items.forEach((s, i) => mesh.setColorAt(i, c.set(palette[s.color])));
        if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
      }
    };
    paletteRef.current(dark);

    // Scroll progress drives how settled the whole field is; the pointer settles shapes locally.
    let scrollOrder = reduced ? 1 : 0;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? clamp01(window.scrollY / max) : 0;
      scrollOrder = smooth(clamp01((p - 0.02) / 0.83));
    };
    const pointer = { x: 9, y: 9 }; // NDC; parked off screen until the pointer moves
    const onPointerMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    if (!reduced) {
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('pointermove', onPointerMove);
      onScroll();
    }

    const tan = Math.tan(THREE.MathUtils.degToRad(FOV / 2));
    const identity = new THREE.Quaternion();
    const tmpQ = new THREE.Quaternion();
    const dq = new THREE.Quaternion();
    let raf: number | null = null;
    let last = 0;
    let t0 = -1;

    // dt-based so motion is the same on 60Hz and 120Hz screens.
    const renderFrame = (t: number, dt: number) => {
      const time = t * 0.001;
      if (t0 < 0) t0 = time;
      const aspect = window.innerWidth / window.innerHeight;
      for (const { mesh, items, orderScale } of families) {
        items.forEach((s, i) => {
          // Local pull: shapes near the pointer click into place sooner than the rest.
          const d = Math.hypot((s.mess.x - pointer.x) * aspect, s.mess.y - pointer.y); // anchored to the scattered spot so the pull doesn't fade as it settles
          const target = reduced ? scrollOrder : Math.max(scrollOrder, 1 - smooth(clamp01((d - 0.12) / 0.45)));
          if (reduced) {
            s.o = target;
          } else {
            // Critically damped spring: eases in, eases out, never overshoots.
            s.v += (s.k * (target - s.o) - 2 * Math.sqrt(s.k) * s.v) * dt;
            s.o = clamp01(s.o + s.v * dt);
          }
          const e = smooth(s.o);
          const loose = 1 - e;

          // The tick: a short, soft swell as a shape lands in its column.
          if (!reduced) {
            if (!s.clicked && e > 0.985) { s.clicked = true; s.pulse = 1; }
            else if (s.clicked && e < 0.9) s.clicked = false;
            s.pulse = Math.max(0, s.pulse - dt / 0.3);
            dq.setFromAxisAngle(s.axis, s.speed * dt * loose);
            s.q.premultiply(dq).normalize();
          }

          // Entrance: each shape drifts in from beyond its margin and grows in, staggered.
          const p = reduced ? 1 : clamp01((time - t0 - s.delay) / INTRO_TIME);
          const arrive = 1 - Math.pow(1 - p, 4);

          s.cur.lerpVectors(s.mess, s.slot, e);
          const z = THREE.MathUtils.lerp(s.z, 0, e);
          const halfH = tan * (CAM_Z - z);
          const driftX = Math.cos(time * 0.3 + s.seed * 0.5) * 0.02 * loose + s.side * 0.2 * (1 - arrive);
          const driftY = Math.sin(time * 0.4 + s.seed) * 0.05 * loose;
          dummy.position.set((s.cur.x + driftX) * halfH * aspect, (s.cur.y + driftY) * halfH, z);
          // Settling takes the shortest turn back to upright instead of lerping Euler angles.
          dummy.quaternion.copy(tmpQ.copy(s.q).slerp(identity, e));
          const swell = 1 + 0.1 * Math.sin(Math.PI * (1 - s.pulse)) * (s.pulse > 0 ? 1 : 0);
          dummy.scale.setScalar(THREE.MathUtils.lerp(s.messScale, orderScale * 0.7, e) * swell * arrive);
          dummy.updateMatrix();
          mesh.setMatrixAt(i, dummy.matrix);
        });
        mesh.instanceMatrix.needsUpdate = true;
      }
      if (!reduced) {
        const a = 1 - Math.exp(-dt * 2);
        camera.position.x += (pointer.x * 0.8 - camera.position.x) * a * (Math.abs(pointer.x) > 1 ? 0 : 1);
        camera.position.y += (pointer.y * 0.5 - camera.position.y) * a * (Math.abs(pointer.y) > 1 ? 0 : 1);
      }
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };
    const loop = (t: number) => {
      raf = requestAnimationFrame(loop);
      const dt = last ? Math.min((t - last) / 1000, 0.05) : 0; // clamp so a hidden tab can't jump
      last = t;
      renderFrame(t, dt);
    };
    if (reduced) {
      staticRenderRef.current = () => renderFrame(0, 0);
      renderFrame(0, 0); // one static, settled frame for reduced-motion visitors
    } else {
      raf = requestAnimationFrame(loop);
    }

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      layout();
      if (reduced) renderFrame(0, 0);
      else onScroll();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onPointerMove);
      if (raf !== null) cancelAnimationFrame(raf);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      scene.traverse((o) => {
        const obj = o as THREE.Mesh;
        if (obj.geometry) obj.geometry.dispose();
        const mats = Array.isArray(obj.material) ? obj.material : obj.material ? [obj.material] : [];
        mats.forEach((m) => m.dispose());
      });
      renderer.dispose();
      rendererRef.current = null;
      fogColorRef.current = null;
      paletteRef.current = null;
      staticRenderRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!rendererRef.current || !fogColorRef.current) return;
    const dark = theme === 'dark';
    const fog = dark ? FOG_DARK : FOG_LIGHT;
    fogColorRef.current.set(fog);
    rendererRef.current.setClearColor(fog, 0.05);
    paletteRef.current?.(dark);
    staticRenderRef.current?.(); // reduced motion has no loop, so repaint with the new colours
  }, [theme]);

  return <div ref={mountRef} aria-hidden="true" className="fixed inset-0 -z-10" style={{ pointerEvents: 'none' }} />;
};

export default ThreeBackgroundImpl;
