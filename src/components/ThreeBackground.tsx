import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useTheme } from './ThemeProvider';

const ThreeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const { theme } = useTheme();

  // Create cursor shape
  const createCursor = () => {
    const group = new THREE.Group();
    
    // Cursor arrow
    const arrowGeometry = new THREE.ConeGeometry(0.3, 1, 3);
    const arrowMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xffffff,
      transparent: true,
      opacity: 0.8 
    });
    const arrow = new THREE.Mesh(arrowGeometry, arrowMaterial);
    arrow.rotation.z = Math.PI / 4;
    
    group.add(arrow);
    return group;
  };

  // Create emoji face with pink color
  const createEmoji = () => {
    const group = new THREE.Group();
    
    // Face (pink instead of yellow)
    const faceGeometry = new THREE.SphereGeometry(0.8, 32, 16);
    const faceMaterial = new THREE.MeshPhongMaterial({ color: 0xffc0cb });
    const face = new THREE.Mesh(faceGeometry, faceMaterial);
    group.add(face);
    
    // Eyes
    const eyeGeometry = new THREE.SphereGeometry(0.15, 16, 8);
    const eyeMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });
    
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.3, 0.2, 0.6);
    group.add(leftEye);
    
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.3, 0.2, 0.6);
    group.add(rightEye);
    
    // Mouth
    const mouthGeometry = new THREE.TorusGeometry(0.3, 0.05, 8, 16, Math.PI);
    const mouthMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });
    const mouth = new THREE.Mesh(mouthGeometry, mouthMaterial);
    mouth.position.set(0, -0.2, 0.6);
    mouth.rotation.z = Math.PI;
    group.add(mouth);
    
    return group;
  };

  // Create 5 stars rating
  const createStars = () => {
    const group = new THREE.Group();
    
    for (let i = 0; i < 5; i++) {
      const starGeometry = new THREE.ConeGeometry(0.2, 0.6, 5);
      const starMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xec4899,
        transparent: true,
        opacity: 0.9 
      });
      const star = new THREE.Mesh(starGeometry, starMaterial);
      star.position.x = (i - 2) * 0.5;
      group.add(star);
    }
    
    return group;
  };

  // Create donut
  const createDonut = () => {
    const group = new THREE.Group();
    
    // Donut base
    const donutGeometry = new THREE.TorusGeometry(0.8, 0.3, 16, 100);
    const donutMaterial = new THREE.MeshPhongMaterial({ color: 0xd2691e });
    const donut = new THREE.Mesh(donutGeometry, donutMaterial);
    group.add(donut);
    
    // Frosting (pink instead of bright pink)
    const frostingGeometry = new THREE.TorusGeometry(0.82, 0.25, 16, 100);
    const frostingMaterial = new THREE.MeshPhongMaterial({ color: 0xffc0cb });
    const frosting = new THREE.Mesh(frostingGeometry, frostingMaterial);
    frosting.position.y = 0.1;
    group.add(frosting);
    
    // Sprinkles
    for (let i = 0; i < 12; i++) {
      const sprinkleGeometry = new THREE.CylinderGeometry(0.02, 0.02, 0.2);
      const sprinkleMaterial = new THREE.MeshPhongMaterial({ 
        color: new THREE.Color().setHSL(Math.random(), 1, 0.7) 
      });
      const sprinkle = new THREE.Mesh(sprinkleGeometry, sprinkleMaterial);
      
      const angle = (i / 12) * Math.PI * 2;
      sprinkle.position.set(
        Math.cos(angle) * (0.5 + Math.random() * 0.4),
        0.15 + Math.random() * 0.1,
        Math.sin(angle) * (0.5 + Math.random() * 0.4)
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
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Create shapes
    const shapes = [];
    const shapeCreators = [createCursor, createEmoji, createStars, createDonut];
    
    // Create multiple instances of each shape
    for (let i = 0; i < 12; i++) {
      const shapeCreator = shapeCreators[i % shapeCreators.length];
      const shape = shapeCreator();
      
      // Random positioning
      shape.position.set(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20
      );
      
      // Random rotation
      shape.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      // Random scale
      const scale = Math.random() * 0.6 + 0.4;
      shape.scale.set(scale, scale, scale);

      scene.add(shape);
      shapes.push(shape);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xec4899, 0.5);
    pointLight.position.set(-10, -10, -5);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x4f46e5, 0.3);
    pointLight2.position.set(10, -10, 5);
    scene.add(pointLight2);

    camera.position.z = 15;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate and float all shapes
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.005 + index * 0.001;
        shape.rotation.y += 0.003 + index * 0.0005;
        
        // Floating motion
        shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
        shape.position.x += Math.cos(Date.now() * 0.0008 + index) * 0.001;
      });

      // Camera gentle movement
      camera.position.x = Math.sin(Date.now() * 0.0005) * 2;
      camera.position.y = Math.cos(Date.now() * 0.0003) * 1;
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

  // Update colors based on theme
  useEffect(() => {
    if (!sceneRef.current || !rendererRef.current) return;

    const isDark = theme === 'dark' || 
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    // Update background color
    if (isDark) {
      sceneRef.current.fog = new THREE.Fog(0x09090b, 10, 50);
      rendererRef.current.setClearColor(0x09090b, 0.1);
    } else {
      sceneRef.current.fog = new THREE.Fog(0xfafafa, 10, 50);
      rendererRef.current.setClearColor(0xfafafa, 0.1);
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
