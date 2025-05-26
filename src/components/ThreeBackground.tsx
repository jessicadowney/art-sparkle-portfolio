
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useTheme } from './ThemeProvider';

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
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Create floating geometric shapes
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.7, 32, 16),
      new THREE.ConeGeometry(0.7, 1.5, 8),
      new THREE.OctahedronGeometry(0.8),
      new THREE.TorusGeometry(0.7, 0.3, 16, 100),
    ];

    const meshes: THREE.Mesh[] = [];

    // Create multiple floating objects
    for (let i = 0; i < 12; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setHSL(
          Math.random() * 0.3 + 0.6, // Hue: purple to blue range
          0.6,
          0.7
        ),
        transparent: true,
        opacity: 0.3,
        wireframe: Math.random() > 0.5,
      });

      const mesh = new THREE.Mesh(geometry, material);
      
      // Random positioning
      mesh.position.set(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20
      );
      
      // Random rotation
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      // Random scale
      const scale = Math.random() * 0.8 + 0.5;
      mesh.scale.set(scale, scale, scale);

      scene.add(mesh);
      meshes.push(mesh);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x7c3aed, 0.5);
    pointLight.position.set(-10, -10, -5);
    scene.add(pointLight);

    camera.position.z = 15;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate and float all meshes
      meshes.forEach((mesh, index) => {
        mesh.rotation.x += 0.005 + index * 0.001;
        mesh.rotation.y += 0.003 + index * 0.0005;
        
        // Floating motion
        mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
        mesh.position.x += Math.cos(Date.now() * 0.0008 + index) * 0.001;
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
      geometries.forEach(geometry => geometry.dispose());
      meshes.forEach(mesh => {
        if (mesh.material instanceof THREE.Material) {
          mesh.material.dispose();
        }
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

    // Update mesh colors
    sceneRef.current.traverse((child) => {
      if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshPhongMaterial) {
        if (isDark) {
          child.material.color.setHSL(
            Math.random() * 0.3 + 0.6,
            0.8,
            0.8
          );
          child.material.opacity = 0.4;
        } else {
          child.material.color.setHSL(
            Math.random() * 0.3 + 0.6,
            0.6,
            0.6
          );
          child.material.opacity = 0.3;
        }
      }
    });
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
