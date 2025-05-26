
import * as THREE from 'three';

export const createGlitterParticles = (scene: THREE.Scene, vibrantColors: number[]) => {
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
