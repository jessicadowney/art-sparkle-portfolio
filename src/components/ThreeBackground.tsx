
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

    // Create playful shapes with MORE hearts and better positioning
    const shapes = [];
    
    // Create hearts (80% of shapes - increased from 60%)
    for (let i = 0; i < 50; i++) {
      const heart = createTinyHeart(vibrantColors);
      
      // Disable shadows for luminous effect
      heart.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = false;
          child.receiveShadow = false;
        }
      });
      
      // Better positioning - closer to camera and more spread out
      heart.position.set(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20 - 5 // Bring them closer to camera
      );
      
      // Random rotation
      heart.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      // Better scale variation for hearts
      const scale = Math.random() * 0.8 + 0.6;
      heart.scale.set(scale, scale, scale);

      scene.add(heart);
      shapes.push(heart);
      
      console.log(`Added heart ${i + 1} at position:`, heart.position);
    }

    // Create fewer stars and cursors (20% of shapes)
    const otherShapeCreators = [createOctagramStar, createMouseCursor];
    for (let i = 0; i < 12; i++) {
      const shapeCreator = otherShapeCreators[i % otherShapeCreators.length];
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
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20 - 5
      );
      
      // Random rotation
      shape.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      // Random scale for other shapes
      const scale = Math.random() * 0.8 + 0.6;
      shape.scale.set(scale, scale, scale);

      scene.add(shape);
      shapes.push(shape);
    }

    // Add soft lighting for luminous effect
    createSceneLighting(scene);

    camera.position.z = 15; // Moved camera closer to see hearts better

    console.log(`Total shapes created: ${shapes.length} (${50} hearts + ${12} other shapes)`);

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
      sceneRef.current.fog = new THREE.Fog(0x0f172a, 20, 80);
      rendererRef.current.setClearColor(0x0f172a, 0.05);
    } else {
      sceneRef.current.fog = new THREE.Fog(0xf0f9ff, 20, 80);
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
