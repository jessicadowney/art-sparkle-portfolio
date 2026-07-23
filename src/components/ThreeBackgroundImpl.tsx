import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useTheme } from './ThemeProvider';
import { vibrantColors } from './three/constants/Colors';

// Optimized background renderer.
//
// The previous implementation drew each shape as its own mesh with a
// physically-based transmission (refraction) material, plus one tiny sphere
// mesh per Nth geometry vertex as "sparkles" — about 17,000 meshes and
// ~16,800 draw calls per frame. This version renders the same scene in
// 4 draw calls:
//   - one InstancedMesh per shape family (hearts, stars, cursors)
//   - one Points cloud for the sparkles
// Glass is approximated with a fresnel shader instead of real refraction,
// which removes the need for lights entirely. Raising the counts below is
// nearly free — 100 shapes costs about the same as 25.
const CONFIG = {
  hearts: 25,
  stars: 4,
  cursors: 4,
  dust: 250,
  parallax: true,
  pixelRatioCap: 1.5,
};

const FOG_DARK = 0x0f172a;
const FOG_LIGHT = 0xf0f9ff;

const rand = (a: number, b: number) => a + Math.random() * (b - a);
const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

// Same outlines as three/shapes/TinyHeart, OctagramStar, MouseCursor —
// only the outline is needed here; materials are handled by the shader.
function heartShape() {
  const s = new THREE.Shape();
  s.moveTo(0.25, 0.25);
  s.bezierCurveTo(0.25, 0.25, 0.1, 0, 0, 0);
  s.bezierCurveTo(-0.15, 0, -0.15, 0.175, -0.15, 0.175);
  s.bezierCurveTo(-0.15, 0.275, -0.075, 0.375, 0.125, 0.475);
  s.bezierCurveTo(0.325, 0.375, 0.4, 0.275, 0.4, 0.175);
  s.bezierCurveTo(0.4, 0.175, 0.4, 0, 0.25, 0);
  s.bezierCurveTo(0.1, 0, 0.25, 0.25, 0.25, 0.25);
  return s;
}
function starShape() {
  const s = new THREE.Shape();
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    const r = i % 2 === 0 ? 0.2 : 0.1;
    i === 0 ? s.moveTo(Math.cos(a) * r, Math.sin(a) * r) : s.lineTo(Math.cos(a) * r, Math.sin(a) * r);
  }
  s.closePath();
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
  uniform vec3 uFog; uniform float uFogNear, uFogFar;
  void main() {
    vec3 col = vColor * 0.55 + vColor * vFres * 1.7 + vec3(1.0) * vFres * 0.18;
    float fog = smoothstep(uFogNear, uFogFar, vDepth);
    float alpha = (0.35 + 0.6 * vFres) * (1.0 - fog);
    gl_FragColor = vec4(mix(col, uFog, fog), alpha);
  }`;
const dustVert = /* glsl */`
  attribute vec3 aColor; attribute float aPhase; attribute float aSize;
  varying vec3 vColor; varying float vTwinkle; varying float vDepth;
  uniform float uTime;
  void main() {
    vColor = aColor;
    vec3 p = position;
    p.y += sin(uTime * 0.3 + aPhase) * 0.6;
    p.x += cos(uTime * 0.2 + aPhase * 1.7) * 0.4;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    vTwinkle = 0.6 + 0.4 * sin(uTime * 1.5 + aPhase * 5.0);
    vDepth = -mv.z;
    gl_PointSize = aSize * vTwinkle * (140.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }`;
const dustFrag = /* glsl */`
  varying vec3 vColor; varying float vTwinkle; varying float vDepth;
  uniform float uFogNear, uFogFar;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float soft = smoothstep(0.5, 0.0, d);
    float fog = 1.0 - smoothstep(uFogNear, uFogFar, vDepth);
    gl_FragColor = vec4(vColor, soft * vTwinkle * fog * 0.8);
  }`;

const ThreeBackgroundImpl: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const fogColorRef = useRef<THREE.Color | null>(null);
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
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 12;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    rendererRef.current = renderer;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, CONFIG.pixelRatioCap));
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const fogUniforms = {
      uFog: { value: new THREE.Color(FOG_LIGHT) },
      uFogNear: { value: 15 },
      uFogFar: { value: 40 },
    };
    fogColorRef.current = fogUniforms.uFog.value;

    const glassMat = new THREE.ShaderMaterial({
      vertexShader: glassVert,
      fragmentShader: glassFrag,
      uniforms: fogUniforms,
      transparent: true,
      depthWrite: false,
    });

    type InstState = {
      pos: THREE.Vector3;
      rot: THREE.Euler;
      scale: number;
      spin: THREE.Vector3;
      seed: number;
    };
    const instanced: { mesh: THREE.InstancedMesh; state: InstState[] }[] = [];
    const dummy = new THREE.Object3D();

    const addInstanced = (geo: THREE.BufferGeometry, count: number, baseScale: number) => {
      const mesh = new THREE.InstancedMesh(geo, glassMat, count);
      const state: InstState[] = [];
      for (let i = 0; i < count; i++) {
        const s: InstState = {
          pos: new THREE.Vector3(
            (Math.random() - 0.5) * 30,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 15 - 5
          ),
          rot: new THREE.Euler(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI),
          scale: rand(0.4, 1) * baseScale,
          spin: new THREE.Vector3(
            0.001 + Math.random() * 0.005,
            0.002 + Math.random() * 0.007,
            0.0005 + Math.random() * 0.002
          ),
          seed: Math.random() * 100,
        };
        state.push(s);
        dummy.position.copy(s.pos);
        dummy.rotation.copy(s.rot);
        dummy.scale.setScalar(s.scale);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
        mesh.setColorAt(i, new THREE.Color(pick(vibrantColors)));
      }
      mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      scene.add(mesh);
      instanced.push({ mesh, state });
    };

    addInstanced(
      new THREE.ExtrudeGeometry(heartShape(), { depth: 0.05, bevelEnabled: true, bevelSegments: 6, steps: 2, bevelSize: 0.02, bevelThickness: 0.02 }),
      CONFIG.hearts,
      1.5
    );
    addInstanced(
      new THREE.ExtrudeGeometry(starShape(), { depth: 0.05, bevelEnabled: true, bevelSegments: 4, steps: 1, bevelSize: 0.01, bevelThickness: 0.01 }),
      CONFIG.stars,
      1
    );
    addInstanced(
      new THREE.ExtrudeGeometry(cursorShape(), { depth: 0.1, bevelEnabled: true, bevelSegments: 8, steps: 2, bevelSize: 0.02, bevelThickness: 0.02 }),
      CONFIG.cursors,
      0.8
    );

    // Sparkles: a single Points draw replaces the per-vertex sphere meshes
    const n = CONFIG.dust;
    const dustGeo = new THREE.BufferGeometry();
    const pos = new Float32Array(n * 3);
    const col = new Float32Array(n * 3);
    const phase = new Float32Array(n);
    const size = new Float32Array(n);
    const c = new THREE.Color();
    for (let i = 0; i < n; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 34;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 24;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 18 - 4;
      c.set(pick(vibrantColors)).multiplyScalar(0.9);
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
      phase[i] = Math.random() * Math.PI * 2;
      size[i] = rand(0.5, 2.2);
    }
    dustGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    dustGeo.setAttribute('aColor', new THREE.BufferAttribute(col, 3));
    dustGeo.setAttribute('aPhase', new THREE.BufferAttribute(phase, 1));
    dustGeo.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
    const dustUniforms = { uTime: { value: 0 }, uFogNear: fogUniforms.uFogNear, uFogFar: fogUniforms.uFogFar };
    const dust = new THREE.Points(
      dustGeo,
      new THREE.ShaderMaterial({
        vertexShader: dustVert,
        fragmentShader: dustFrag,
        uniforms: dustUniforms,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    scene.add(dust);

    const mouse = { x: 0, y: 0 };
    const onPointerMove = (e: PointerEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    if (CONFIG.parallax && !reduced) window.addEventListener('pointermove', onPointerMove);

    let raf: number | null = null;
    const renderFrame = (t: number) => {
      const time = t * 0.001;
      dustUniforms.uTime.value = time;
      for (const { mesh, state } of instanced) {
        for (let i = 0; i < state.length; i++) {
          const s = state[i];
          s.rot.x += s.spin.x;
          s.rot.y += s.spin.y;
          s.rot.z += s.spin.z;
          dummy.position.set(
            s.pos.x + Math.cos(time * 0.3 + s.seed * 0.5) * 0.5,
            s.pos.y + Math.sin(time * 0.4 + s.seed) * 0.7,
            s.pos.z
          );
          dummy.rotation.copy(s.rot);
          dummy.scale.setScalar(s.scale);
          dummy.updateMatrix();
          mesh.setMatrixAt(i, dummy.matrix);
        }
        mesh.instanceMatrix.needsUpdate = true;
      }
      if (CONFIG.parallax) {
        camera.position.x += (mouse.x * 1.6 - camera.position.x) * 0.03;
        camera.position.y += (-mouse.y * 1.0 - camera.position.y) * 0.03;
      }
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };
    const loop = (t: number) => {
      raf = requestAnimationFrame(loop);
      renderFrame(t);
    };
    if (reduced) {
      renderFrame(0); // a single static frame — no animation for reduced-motion users
    } else {
      raf = requestAnimationFrame(loop);
    }

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
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
    };
  }, []);

  useEffect(() => {
    if (!rendererRef.current || !fogColorRef.current) return;
    const isDark =
      theme === 'dark' ||
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    const fog = isDark ? FOG_DARK : FOG_LIGHT;
    fogColorRef.current.set(fog);
    rendererRef.current.setClearColor(fog, 0.05);
  }, [theme]);

  return <div ref={mountRef} aria-hidden="true" className="fixed inset-0 -z-10" style={{ pointerEvents: 'none' }} />;
};

export default ThreeBackgroundImpl;
