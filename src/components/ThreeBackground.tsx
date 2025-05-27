
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useTheme } from './ThemeProvider';
import { createMouseCursor } from './three/shapes/MouseCursor';
import { createOctagramStar } from './three/shapes/OctagramStar';
import { createTinyHeart } from './three/shapes/TinyHeart';
import { createSceneLighting } from './three/lighting/SceneLighting';
import { createGlitterParticles } from './three/effects/GlitterParticles';
import { vibrantColors } from './three/constants/Colors';

const ThreeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const { theme } = useTheme();

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
    
    // Disable shadows for luminous effect
    renderer.shadowMap.enabled = false;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Create playful shapes - octagram stars, mouse cursors, and tiny hearts
    const shapes = [];
    const shapeCreators = [
      createOctagramStar,
      createMouseCursor,
      createTinyHeart
    ];
    
    // Create multiple instances of each shape
    for (let i = 0; i < 45; i++) { // Increased count to accommodate hearts
      const shapeCreator = shapeCreators[i % shapeCreators.length];
      const shape = shapeCreator(vibrantColors);
      
      // Disable shadows for luminous effect
      if (shape instanceof THREE.Mesh) {
        shape.castShadow = false;
        shape.receiveShadow = false;
      } else {
        shape.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = false;
            child.receiveShadow = false;
          }
        });
      }
      
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

      // Random scale with hearts being smaller
      const isHeart = i % 3 === 2; // Every third shape is a heart
      const scale = isHeart ? Math.random() * 0.4 + 0.3 : Math.random() * 0.8 + 0.6;
      shape.scale.set(scale, scale, scale);

      scene.add(shape);
      shapes.push(shape);
    }

    // Add rainbow glitter particles
    const glitter = createGlitterParticles(scene, vibrantColors);

    // Add soft lighting for luminous effect
    createSceneLighting(scene);

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
        if (shape instanceof THREE.Mesh) {
          shape.geometry.dispose();
          if (shape.material instanceof THREE.Material) {
            shape.material.dispose();
          }
        } else {
          shape.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              child.geometry.dispose();
              if (child.material instanceof THREE.Material) {
                child.material.dispose();
              }
            }
          });
        }
      });
    };
  }, []);

  // Update scene based on theme
  useEffect(() => {
    if (!sceneRef.current || !rendererRef.current) return;

    const isDark = theme === 'dark' || 
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    // Update background and fog for luminous effect
    if (isDark) {
      sceneRef.current.fog = new THREE.Fog(0x0f172a, 30, 100);
      rendererRef.current.setClearColor(0x0f172a, 0.05);
    } else {
      sceneRef.current.fog = new THREE.Fog(0xf0f9ff, 30, 100);
      rendererRef.current.setClearColor(0xf0f9ff, 0.05);
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
