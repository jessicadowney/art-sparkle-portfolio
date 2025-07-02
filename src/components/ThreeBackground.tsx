import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useTheme } from './ThemeProvider';
import { createMouseCursor } from './three/shapes/MouseCursor';
import { createOctagramStar } from './three/shapes/OctagramStar';
import { createTinyHeart } from './three/shapes/TinyHeart';
import { createSceneLighting } from './three/lighting/SceneLighting';
import { vibrantColors } from './three/constants/Colors';

const ThreeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!mountRef.current) return;

    try {
      // Check WebGL availability before creating renderer
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      
      if (!gl) {
        console.warn('WebGL not supported, skipping Three.js background');
        return;
      }

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
        antialias: true,
        powerPreference: "high-performance" // Performance optimization
      });
      rendererRef.current = renderer;
      
      // Performance optimizations
      renderer.shadowMap.enabled = false;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);

      // Reduced number of shapes for better performance
      const shapes = [];
      
      // Create hearts (reduced from 50 to 25)
      for (let i = 0; i < 25; i++) {
        const heart = createTinyHeart(vibrantColors);
        
        // Disable shadows for luminous effect
        heart.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = false;
            child.receiveShadow = false;
            child.frustumCulled = true; // Performance optimization
          }
        });
        
        // Better positioning - closer to camera and more spread out
        heart.position.set(
          (Math.random() - 0.5) * 30, // Reduced spread
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 15 - 5
        );
        
        // Random rotation
        heart.rotation.set(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        );

        // Better scale variation for hearts
        const scale = Math.random() * 0.6 + 0.4; // Smaller range for performance
        heart.scale.set(scale, scale, scale);

        scene.add(heart);
        shapes.push(heart);
      }

      // Create fewer stars and cursors (reduced from 12 to 8)
      const otherShapeCreators = [createOctagramStar, createMouseCursor];
      for (let i = 0; i < 8; i++) {
        const shapeCreator = otherShapeCreators[i % otherShapeCreators.length];
        const shape = shapeCreator(vibrantColors);
        
        // Performance optimizations
        shape.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = false;
            child.receiveShadow = false;
            child.frustumCulled = true;
          }
        });
        
        // Random positioning
        shape.position.set(
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 15 - 5
        );
        
        // Random rotation
        shape.rotation.set(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        );

        // Random scale for other shapes
        const scale = Math.random() * 0.6 + 0.4;
        shape.scale.set(scale, scale, scale);

        scene.add(shape);
        shapes.push(shape);
      }

      // Add soft lighting for luminous effect
      createSceneLighting(scene);

      camera.position.z = 12; // Moved camera closer

      console.log(`Total shapes created: ${shapes.length} (${25} hearts + ${8} other shapes)`);

      // Optimized animation loop
      let lastTime = 0;
      const animate = (currentTime: number) => {
        animationFrameRef.current = requestAnimationFrame(animate);

        // Throttle to 60fps max
        if (currentTime - lastTime < 16.67) return;
        lastTime = currentTime;

        // Simplified rotation and float all shapes
        const time = currentTime * 0.001;
        shapes.forEach((shape, index) => {
          // Reduced rotation speed for performance
          shape.rotation.x += 0.001 + index * 0.0002;
          shape.rotation.y += 0.002 + index * 0.0003;
          shape.rotation.z += 0.0005 + index * 0.0001;
          
          // Simplified floating motion
          shape.position.y += Math.sin(time + index) * 0.001;
          shape.position.x += Math.cos(time + index * 0.5) * 0.0005;
        });

        // Simplified camera movement
        camera.position.x = Math.sin(time * 0.0001) * 1;
        camera.position.y = Math.cos(time * 0.00005) * 0.5;
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
      };

      animate(0);

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
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
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
    } catch (error) {
      console.warn('Failed to initialize Three.js background:', error);
      return;
    }
  }, []);

  // Update scene based on theme
  useEffect(() => {
    if (!sceneRef.current || !rendererRef.current) return;

    const isDark = theme === 'dark' || 
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    // Update background and fog for luminous effect
    if (isDark) {
      sceneRef.current.fog = new THREE.Fog(0x0f172a, 15, 60); // Reduced fog distance for performance
      rendererRef.current.setClearColor(0x0f172a, 0.05);
    } else {
      sceneRef.current.fog = new THREE.Fog(0xf0f9ff, 15, 60);
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