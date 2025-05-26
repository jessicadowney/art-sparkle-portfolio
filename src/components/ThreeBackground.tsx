import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useTheme } from './ThemeProvider';

const ThreeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const { theme } = useTheme();

  // More vibrant rainbow pastel colors
  const vibrantColors = [
    0xFF69B4, // Hot pink
    0x00CED1, // Dark turquoise
    0xFFD700, // Gold
    0xFF6347, // Tomato
    0x7FFF00, // Chartreuse
    0x1E90FF, // Dodger blue
    0xDA70D6, // Orchid
    0xFF1493, // Deep pink
    0x00FFFF, // Cyan
    0xADFF2F, // Green yellow
    0xFF8C00, // Dark orange
    0x9370DB, // Medium purple
    0xFF00FF, // Magenta
    0x00FF7F, // Spring green
    0xFFA500, // Orange
    0x8A2BE2  // Blue violet
  ];

  // Create detailed mouse cursor shape
  const createMouseCursor = () => {
    const group = new THREE.Group();
    
    // Main arrow body
    const arrowShape = new THREE.Shape();
    arrowShape.moveTo(0, 0);
    arrowShape.lineTo(0, 1.2);
    arrowShape.lineTo(0.3, 1.0);
    arrowShape.lineTo(0.5, 1.4);
    arrowShape.lineTo(0.7, 1.3);
    arrowShape.lineTo(0.4, 0.9);
    arrowShape.lineTo(0.8, 0.8);
    arrowShape.lineTo(0, 0);

    const extrudeSettings = {
      depth: 0.1,
      bevelEnabled: true,
      bevelSegments: 8,
      steps: 2,
      bevelSize: 0.02,
      bevelThickness: 0.02
    };

    const arrowGeometry = new THREE.ExtrudeGeometry(arrowShape, extrudeSettings);
    const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
    const arrowMaterial = new THREE.MeshPhysicalMaterial({ 
      color: randomColor,
      transparent: true,
      opacity: 0.9,
      roughness: 0.1,
      metalness: 0.2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1
    });
    const arrow = new THREE.Mesh(arrowGeometry, arrowMaterial);
    arrow.scale.set(0.8, 0.8, 0.8);
    
    group.add(arrow);
    return group;
  };

  // Create detailed hourglass shape
  const createHourglass = () => {
    const group = new THREE.Group();
    
    // Top bulb with more detail
    const topBulbGeometry = new THREE.SphereGeometry(0.6, 32, 16);
    const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
    const glassMaterial = new THREE.MeshPhysicalMaterial({ 
      color: randomColor,
      transparent: true,
      opacity: 0.8,
      roughness: 0.0,
      metalness: 0.0,
      transmission: 0.95,
      ior: 1.5,
      clearcoat: 1.0
    });
    
    const topBulb = new THREE.Mesh(topBulbGeometry, glassMaterial);
    topBulb.position.y = 0.8;
    topBulb.scale.set(1, 0.8, 1);
    group.add(topBulb);
    
    const bottomBulb = new THREE.Mesh(topBulbGeometry, glassMaterial);
    bottomBulb.position.y = -0.8;
    bottomBulb.scale.set(1, 0.8, 1);
    group.add(bottomBulb);
    
    // Narrow middle with more segments
    const middleGeometry = new THREE.CylinderGeometry(0.12, 0.12, 0.3, 16);
    const middle = new THREE.Mesh(middleGeometry, glassMaterial);
    group.add(middle);
    
    // Sand particles inside
    for (let i = 0; i < 50; i++) {
      const sandGeometry = new THREE.SphereGeometry(0.02, 8, 8);
      const sandMaterial = new THREE.MeshPhysicalMaterial({ 
        color: 0xF4A460,
        roughness: 0.9 
      });
      const sand = new THREE.Mesh(sandGeometry, sandMaterial);
      sand.position.set(
        (Math.random() - 0.5) * 0.4,
        -0.8 + Math.random() * 0.3,
        (Math.random() - 0.5) * 0.4
      );
      group.add(sand);
    }
    
    return group;
  };

  // Create detailed hand cursor shape
  const createHandCursor = () => {
    const group = new THREE.Group();
    
    // Palm with rounded edges
    const palmGeometry = new THREE.BoxGeometry(0.8, 1.2, 0.4);
    palmGeometry.translate(0, 0, 0);
    const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
    const skinMaterial = new THREE.MeshPhysicalMaterial({ 
      color: randomColor,
      roughness: 0.6,
      metalness: 0.0,
      clearcoat: 0.4,
      clearcoatRoughness: 0.3
    });
    const palm = new THREE.Mesh(palmGeometry, skinMaterial);
    group.add(palm);
    
    // Detailed fingers with joints
    for (let i = 0; i < 4; i++) {
      // Lower finger segment
      const lowerFingerGeometry = new THREE.CylinderGeometry(0.08, 0.1, 0.4, 12);
      const lowerFinger = new THREE.Mesh(lowerFingerGeometry, skinMaterial);
      lowerFinger.position.set(-0.3 + i * 0.2, 0.8, 0);
      group.add(lowerFinger);
      
      // Upper finger segment
      const upperFingerGeometry = new THREE.CylinderGeometry(0.06, 0.08, 0.3, 12);
      const upperFinger = new THREE.Mesh(upperFingerGeometry, skinMaterial);
      upperFinger.position.set(-0.3 + i * 0.2, 1.15, 0);
      group.add(upperFinger);
      
      // Fingertip
      const tipGeometry = new THREE.SphereGeometry(0.06, 12, 8);
      const tip = new THREE.Mesh(tipGeometry, skinMaterial);
      tip.position.set(-0.3 + i * 0.2, 1.35, 0);
      group.add(tip);
    }
    
    // Detailed thumb
    const thumbLowerGeometry = new THREE.CylinderGeometry(0.1, 0.12, 0.35, 12);
    const thumbLower = new THREE.Mesh(thumbLowerGeometry, skinMaterial);
    thumbLower.position.set(-0.6, 0.2, 0);
    thumbLower.rotation.z = Math.PI / 3;
    group.add(thumbLower);
    
    const thumbUpperGeometry = new THREE.CylinderGeometry(0.08, 0.1, 0.25, 12);
    const thumbUpper = new THREE.Mesh(thumbUpperGeometry, skinMaterial);
    thumbUpper.position.set(-0.75, 0.45, 0);
    thumbUpper.rotation.z = Math.PI / 3;
    group.add(thumbUpper);
    
    return group;
  };

  // Create detailed flat smiling emoji
  const createSmilingEmoji = () => {
    const group = new THREE.Group();
    
    // Face with more segments for smoothness
    const faceGeometry = new THREE.CylinderGeometry(0.8, 0.8, 0.15, 64);
    const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
    const faceMaterial = new THREE.MeshPhysicalMaterial({ 
      color: randomColor,
      roughness: 0.1,
      metalness: 0.0,
      clearcoat: 0.9,
      clearcoatRoughness: 0.1
    });
    const face = new THREE.Mesh(faceGeometry, faceMaterial);
    group.add(face);
    
    // More detailed eyes
    const eyeGeometry = new THREE.SphereGeometry(0.15, 16, 12);
    const eyeMaterial = new THREE.MeshPhysicalMaterial({ 
      color: 0x000000,
      roughness: 0.2 
    });
    
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.25, 0.2, 0.08);
    leftEye.scale.set(1, 1.2, 0.8);
    group.add(leftEye);
    
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.25, 0.2, 0.08);
    rightEye.scale.set(1, 1.2, 0.8);
    group.add(rightEye);
    
    // Detailed smile with depth
    const smileGeometry = new THREE.TorusGeometry(0.3, 0.05, 8, 32, Math.PI);
    const smileMaterial = new THREE.MeshPhysicalMaterial({ 
      color: 0x000000,
      roughness: 0.3 
    });
    const smile = new THREE.Mesh(smileGeometry, smileMaterial);
    smile.position.set(0, -0.15, 0.08);
    smile.rotation.z = Math.PI;
    group.add(smile);
    
    return group;
  };

  // Create detailed croissant shape
  const createCroissant = () => {
    const group = new THREE.Group();
    
    // More detailed curved path for croissant
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0.4, 0.1, 0.05),
      new THREE.Vector3(0.8, 0.3, 0.15),
      new THREE.Vector3(1.1, 0.6, 0.35),
      new THREE.Vector3(1.2, 1.0, 0.6),
      new THREE.Vector3(1.1, 1.3, 0.8)
    ]);
    
    // Main body with varying radius
    const radiusFunction = (t: number) => {
      return 0.25 + 0.15 * Math.sin(t * Math.PI * 3);
    };
    
    const tubeGeometry = new THREE.TubeGeometry(curve, 32, 0.25, 16, false);
    const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
    const croissantMaterial = new THREE.MeshPhysicalMaterial({ 
      color: randomColor,
      roughness: 0.7,
      metalness: 0.0,
      clearcoat: 0.3,
      clearcoatRoughness: 0.4
    });
    const croissant = new THREE.Mesh(tubeGeometry, croissantMaterial);
    group.add(croissant);
    
    // Add texture bumps
    for (let i = 0; i < 15; i++) {
      const bumpGeometry = new THREE.SphereGeometry(0.05, 8, 8);
      const bump = new THREE.Mesh(bumpGeometry, croissantMaterial);
      const t = i / 15;
      const pos = curve.getPoint(t);
      bump.position.copy(pos);
      bump.position.add(new THREE.Vector3(
        (Math.random() - 0.5) * 0.2,
        (Math.random() - 0.5) * 0.2,
        (Math.random() - 0.5) * 0.2
      ));
      group.add(bump);
    }
    
    return group;
  };

  // Create detailed sprinkled donut
  const createSprinkledDonut = () => {
    const group = new THREE.Group();
    
    // Donut base with higher segments
    const donutGeometry = new THREE.TorusGeometry(0.8, 0.35, 24, 64);
    const baseColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
    const donutMaterial = new THREE.MeshPhysicalMaterial({ 
      color: baseColor,
      roughness: 0.4,
      metalness: 0.0,
      clearcoat: 0.5
    });
    const donut = new THREE.Mesh(donutGeometry, donutMaterial);
    group.add(donut);
    
    // Glazing that actually sits on top
    const glazingGeometry = new THREE.TorusGeometry(0.82, 0.25, 16, 64);
    const glazingColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
    const glazingMaterial = new THREE.MeshPhysicalMaterial({ 
      color: glazingColor,
      transparent: true,
      opacity: 0.9,
      roughness: 0.05,
      metalness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05
    });
    const glazing = new THREE.Mesh(glazingGeometry, glazingMaterial);
    glazing.position.y = 0.15; // Position on top
    group.add(glazing);
    
    // Sprinkles that are actually ON the donut
    for (let i = 0; i < 25; i++) {
      const sprinkleGeometry = new THREE.CylinderGeometry(0.015, 0.015, 0.12);
      const sprinkleColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
      const sprinkleMaterial = new THREE.MeshPhysicalMaterial({ 
        color: sprinkleColor,
        roughness: 0.2,
        metalness: 0.1
      });
      const sprinkle = new THREE.Mesh(sprinkleGeometry, sprinkleMaterial);
      
      // Position sprinkles ON the glazing surface
      const angle = (i / 25) * Math.PI * 2;
      const radius = 0.5 + Math.random() * 0.4;
      sprinkle.position.set(
        Math.cos(angle) * radius,
        0.22 + Math.random() * 0.05, // Slightly above glazing
        Math.sin(angle) * radius
      );
      sprinkle.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      group.add(sprinkle);
    }
    
    return group;
  };

  // Create rainbow glitter particles
  const createGlitterParticles = (scene: THREE.Scene) => {
    const glitterGeometry = new THREE.BufferGeometry();
    const glitterCount = 300;
    const positions = new Float32Array(glitterCount * 3);
    const colors = new Float32Array(glitterCount * 3);
    
    for (let i = 0; i < glitterCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 60;
      positions[i + 1] = (Math.random() - 0.5) * 45;
      positions[i + 2] = (Math.random() - 0.5) * 35;
      
      // Rainbow colors for glitter
      const color = new THREE.Color(vibrantColors[Math.floor(Math.random() * vibrantColors.length)]);
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }
    
    glitterGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    glitterGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const glitterMaterial = new THREE.PointsMaterial({
      size: 0.15,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      vertexColors: true
    });
    
    const glitter = new THREE.Points(glitterGeometry, glitterMaterial);
    scene.add(glitter);
    
    return glitter;
  };

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    rendererRef.current = renderer;
    
    // Enable soft shadows
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.shadowMap.autoUpdate = true;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Create playful shapes with improved models
    const shapes = [];
    const shapeCreators = [
      createMouseCursor, 
      createHourglass, 
      createHandCursor, 
      createSmilingEmoji, 
      createCroissant, 
      createSprinkledDonut
    ];
    
    // Create multiple instances of each shape
    for (let i = 0; i < 24; i++) {
      const shapeCreator = shapeCreators[i % shapeCreators.length];
      const shape = shapeCreator();
      
      // Enable shadows on all meshes
      shape.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      
      // Random positioning
      shape.position.set(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 30
      );
      
      // Random rotation
      shape.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      // Random scale
      const scale = Math.random() * 0.8 + 0.6;
      shape.scale.set(scale, scale, scale);

      scene.add(shape);
      shapes.push(shape);
    }

    // Add rainbow glitter particles
    const glitter = createGlitterParticles(scene);

    // Enhanced lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Main directional light with very soft shadows
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(20, 20, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 4096;
    directionalLight.shadow.mapSize.height = 4096;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 120;
    directionalLight.shadow.camera.left = -40;
    directionalLight.shadow.camera.right = 40;
    directionalLight.shadow.camera.top = 40;
    directionalLight.shadow.camera.bottom = -40;
    directionalLight.shadow.bias = -0.0001;
    directionalLight.shadow.radius = 20;
    scene.add(directionalLight);

    // Multiple colored point lights for rainbow effect
    const pointLights = [
      { color: 0xFF69B4, position: [-20, -20, -10], intensity: 0.4 },
      { color: 0x00CED1, position: [20, -20, 10], intensity: 0.35 },
      { color: 0xFFD700, position: [0, 25, 0], intensity: 0.3 },
      { color: 0x7FFF00, position: [-15, 15, 15], intensity: 0.25 },
      { color: 0x9370DB, position: [15, 15, -15], intensity: 0.3 }
    ];

    pointLights.forEach(lightConfig => {
      const pointLight = new THREE.PointLight(lightConfig.color, lightConfig.intensity, 50);
      pointLight.position.set(...lightConfig.position);
      pointLight.castShadow = true;
      pointLight.shadow.radius = 15;
      pointLight.shadow.mapSize.width = 1024;
      pointLight.shadow.mapSize.height = 1024;
      scene.add(pointLight);
    });

    // Hemisphere light for global illumination
    const hemisphereLight = new THREE.HemisphereLight(0x87CEEB, 0xFFB6C1, 0.3);
    scene.add(hemisphereLight);

    camera.position.z = 25;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate and float all shapes
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.002 + index * 0.0005;
        shape.rotation.y += 0.003 + index * 0.0007;
        shape.rotation.z += 0.001 + index * 0.0003;
        
        // Floating motion with different rhythms
        shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
        shape.position.x += Math.cos(Date.now() * 0.0008 + index * 0.5) * 0.001;
        shape.position.z += Math.sin(Date.now() * 0.0006 + index * 0.3) * 0.001;
      });

      // Animate glitter
      glitter.rotation.y += 0.002;
      glitter.rotation.x += 0.001;

      // Gentle camera movement
      camera.position.x = Math.sin(Date.now() * 0.0002) * 2;
      camera.position.y = Math.cos(Date.now() * 0.0001) * 1.5;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      shapes.forEach(shape => {
        shape.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.geometry.dispose();
            if (child.material instanceof THREE.Material) {
              child.material.dispose();
            }
          }
        });
      });
    };
  }, []);

  // Update scene based on theme
  useEffect(() => {
    if (!sceneRef.current || !rendererRef.current) return;

    const isDark = theme === 'dark' || 
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    // Update background and fog
    if (isDark) {
      sceneRef.current.fog = new THREE.Fog(0x0f172a, 20, 80);
      rendererRef.current.setClearColor(0x0f172a, 0.1);
    } else {
      sceneRef.current.fog = new THREE.Fog(0xf0f9ff, 20, 80);
      rendererRef.current.setClearColor(0xf0f9ff, 0.1);
    }
  }, [theme]);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default ThreeBackground;
