
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useTheme } from './ThemeProvider';

const ThreeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const { theme } = useTheme();

  // Vibrant pastel colors inspired by blobmixer
  const vibrantColors = [
    0xFF6B9D, // Hot pink
    0x4ECDC4, // Turquoise
    0xFFE66D, // Bright yellow
    0xFF8A65, // Coral
    0x81C784, // Light green
    0x64B5F6, // Sky blue
    0xBA68C8, // Purple
    0xF48FB1, // Pink
    0x4DB6AC, // Teal
    0xAED581, // Lime green
    0xFFB74D, // Orange
    0x9575CD  // Lavender
  ];

  // Create mouse cursor shape
  const createMouseCursor = () => {
    const group = new THREE.Group();
    
    // Cursor arrow with translucent plastic material
    const arrowGeometry = new THREE.ConeGeometry(0.4, 1.2, 3);
    const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
    const arrowMaterial = new THREE.MeshPhysicalMaterial({ 
      color: randomColor,
      transparent: true,
      opacity: 0.85,
      roughness: 0.1,
      metalness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1
    });
    const arrow = new THREE.Mesh(arrowGeometry, arrowMaterial);
    arrow.rotation.z = Math.PI / 4;
    
    group.add(arrow);
    return group;
  };

  // Create hourglass shape
  const createHourglass = () => {
    const group = new THREE.Group();
    
    // Top and bottom bulbs
    const bulbGeometry = new THREE.SphereGeometry(0.6, 16, 8);
    const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
    const glassMaterial = new THREE.MeshPhysicalMaterial({ 
      color: randomColor,
      transparent: true,
      opacity: 0.7,
      roughness: 0.0,
      metalness: 0.0,
      transmission: 0.9,
      ior: 1.5
    });
    
    const topBulb = new THREE.Mesh(bulbGeometry, glassMaterial);
    topBulb.position.y = 0.8;
    topBulb.scale.y = 0.8;
    group.add(topBulb);
    
    const bottomBulb = new THREE.Mesh(bulbGeometry, glassMaterial);
    bottomBulb.position.y = -0.8;
    bottomBulb.scale.y = 0.8;
    group.add(bottomBulb);
    
    // Narrow middle
    const middleGeometry = new THREE.CylinderGeometry(0.15, 0.15, 0.3, 8);
    const middle = new THREE.Mesh(middleGeometry, glassMaterial);
    group.add(middle);
    
    return group;
  };

  // Create hand cursor shape
  const createHandCursor = () => {
    const group = new THREE.Group();
    
    // Palm
    const palmGeometry = new THREE.BoxGeometry(0.8, 1.2, 0.3);
    const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
    const rubberMaterial = new THREE.MeshPhysicalMaterial({ 
      color: randomColor,
      roughness: 0.8,
      metalness: 0.0,
      clearcoat: 0.3
    });
    const palm = new THREE.Mesh(palmGeometry, rubberMaterial);
    group.add(palm);
    
    // Fingers
    for (let i = 0; i < 4; i++) {
      const fingerGeometry = new THREE.CylinderGeometry(0.1, 0.08, 0.6, 8);
      const finger = new THREE.Mesh(fingerGeometry, rubberMaterial);
      finger.position.set(-0.3 + i * 0.2, 0.8, 0);
      finger.rotation.z = (Math.random() - 0.5) * 0.3;
      group.add(finger);
    }
    
    // Thumb
    const thumbGeometry = new THREE.CylinderGeometry(0.12, 0.1, 0.5, 8);
    const thumb = new THREE.Mesh(thumbGeometry, rubberMaterial);
    thumb.position.set(-0.6, 0.2, 0);
    thumb.rotation.z = Math.PI / 3;
    group.add(thumb);
    
    return group;
  };

  // Create flat smiling emoji
  const createSmilingEmoji = () => {
    const group = new THREE.Group();
    
    // Face
    const faceGeometry = new THREE.CylinderGeometry(0.8, 0.8, 0.2, 32);
    const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
    const plasticMaterial = new THREE.MeshPhysicalMaterial({ 
      color: randomColor,
      roughness: 0.2,
      metalness: 0.1,
      clearcoat: 0.8
    });
    const face = new THREE.Mesh(faceGeometry, plasticMaterial);
    group.add(face);
    
    // Eyes
    const eyeGeometry = new THREE.SphereGeometry(0.12, 16, 8);
    const eyeMaterial = new THREE.MeshPhysicalMaterial({ color: 0x000000 });
    
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.25, 0.15, 0.11);
    group.add(leftEye);
    
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.25, 0.15, 0.11);
    group.add(rightEye);
    
    // Smile
    const smileGeometry = new THREE.TorusGeometry(0.25, 0.04, 8, 16, Math.PI);
    const smileMaterial = new THREE.MeshPhysicalMaterial({ color: 0x000000 });
    const smile = new THREE.Mesh(smileGeometry, smileMaterial);
    smile.position.set(0, -0.1, 0.11);
    smile.rotation.z = Math.PI;
    group.add(smile);
    
    return group;
  };

  // Create croissant shape
  const createCroissant = () => {
    const group = new THREE.Group();
    
    // Main body - curved tube
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0.5, 0.2, 0.1),
      new THREE.Vector3(1.0, 0.6, 0.3),
      new THREE.Vector3(1.2, 1.0, 0.6)
    ]);
    
    const tubeGeometry = new THREE.TubeGeometry(curve, 20, 0.3, 8, false);
    const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
    const organicMaterial = new THREE.MeshPhysicalMaterial({ 
      color: randomColor,
      roughness: 0.6,
      metalness: 0.0,
      clearcoat: 0.2
    });
    const croissant = new THREE.Mesh(tubeGeometry, organicMaterial);
    group.add(croissant);
    
    return group;
  };

  // Create sprinkled donut
  const createSprinkledDonut = () => {
    const group = new THREE.Group();
    
    // Donut base
    const donutGeometry = new THREE.TorusGeometry(0.8, 0.35, 16, 100);
    const baseColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
    const donutMaterial = new THREE.MeshPhysicalMaterial({ 
      color: baseColor,
      roughness: 0.3,
      metalness: 0.0,
      clearcoat: 0.6
    });
    const donut = new THREE.Mesh(donutGeometry, donutMaterial);
    group.add(donut);
    
    // Frosting
    const frostingGeometry = new THREE.TorusGeometry(0.82, 0.28, 16, 100);
    const frostingColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
    const frostingMaterial = new THREE.MeshPhysicalMaterial({ 
      color: frostingColor,
      roughness: 0.1,
      metalness: 0.0,
      clearcoat: 0.9
    });
    const frosting = new THREE.Mesh(frostingGeometry, frostingMaterial);
    frosting.position.y = 0.12;
    group.add(frosting);
    
    // Colorful sprinkles
    for (let i = 0; i < 20; i++) {
      const sprinkleGeometry = new THREE.CylinderGeometry(0.02, 0.02, 0.15);
      const sprinkleColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
      const sprinkleMaterial = new THREE.MeshPhysicalMaterial({ 
        color: sprinkleColor,
        roughness: 0.2,
        metalness: 0.1
      });
      const sprinkle = new THREE.Mesh(sprinkleGeometry, sprinkleMaterial);
      
      const angle = (i / 20) * Math.PI * 2;
      sprinkle.position.set(
        Math.cos(angle) * (0.4 + Math.random() * 0.4),
        0.18 + Math.random() * 0.08,
        Math.sin(angle) * (0.4 + Math.random() * 0.4)
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

  // Create glitter particles
  const createGlitterParticles = (scene: THREE.Scene) => {
    const glitterGeometry = new THREE.BufferGeometry();
    const glitterCount = 200;
    const positions = new Float32Array(glitterCount * 3);
    
    for (let i = 0; i < glitterCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 50;
      positions[i + 1] = (Math.random() - 0.5) * 40;
      positions[i + 2] = (Math.random() - 0.5) * 30;
    }
    
    glitterGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const glitterMaterial = new THREE.PointsMaterial({
      color: Math.random() > 0.5 ? 0xE91E63 : 0x9C27B0, // Pink or purple
      size: 0.1,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
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
    renderer.toneMappingExposure = 1.2;
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Create playful shapes
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
    for (let i = 0; i < 18; i++) {
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
        (Math.random() - 0.5) * 45,
        (Math.random() - 0.5) * 35,
        (Math.random() - 0.5) * 25
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

    // Add glitter particles
    const glitter = createGlitterParticles(scene);

    // Soft, colorful lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    // Main directional light with very soft shadows
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight.position.set(15, 15, 8);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 100;
    directionalLight.shadow.camera.left = -30;
    directionalLight.shadow.camera.right = 30;
    directionalLight.shadow.camera.top = 30;
    directionalLight.shadow.camera.bottom = -30;
    directionalLight.shadow.bias = -0.0001;
    directionalLight.shadow.radius = 15;
    scene.add(directionalLight);

    // Colorful point lights
    const pointLight1 = new THREE.PointLight(0xFF6B9D, 0.3, 40);
    pointLight1.position.set(-15, -15, -8);
    pointLight1.castShadow = true;
    pointLight1.shadow.radius = 10;
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x4ECDC4, 0.25, 35);
    pointLight2.position.set(15, -15, 8);
    pointLight2.castShadow = true;
    pointLight2.shadow.radius = 10;
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xFFE66D, 0.2, 30);
    pointLight3.position.set(0, 20, 0);
    pointLight3.castShadow = true;
    pointLight3.shadow.radius = 10;
    scene.add(pointLight3);

    // Hemisphere light for global illumination
    const hemisphereLight = new THREE.HemisphereLight(0x87CEEB, 0xFFB6C1, 0.4);
    scene.add(hemisphereLight);

    camera.position.z = 20;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate and float all shapes
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.003 + index * 0.0008;
        shape.rotation.y += 0.002 + index * 0.0005;
        shape.rotation.z += 0.001 + index * 0.0003;
        
        // Floating motion with different rhythms
        shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.003;
        shape.position.x += Math.cos(Date.now() * 0.0008 + index * 0.5) * 0.002;
        shape.position.z += Math.sin(Date.now() * 0.0006 + index * 0.3) * 0.001;
      });

      // Animate glitter
      glitter.rotation.y += 0.001;
      glitter.rotation.x += 0.0005;

      // Gentle camera movement
      camera.position.x = Math.sin(Date.now() * 0.0003) * 3;
      camera.position.y = Math.cos(Date.now() * 0.0002) * 2;
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
      sceneRef.current.fog = new THREE.Fog(0x0f172a, 15, 60);
      rendererRef.current.setClearColor(0x0f172a, 0.2);
    } else {
      sceneRef.current.fog = new THREE.Fog(0xf0f9ff, 15, 60);
      rendererRef.current.setClearColor(0xf0f9ff, 0.2);
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
