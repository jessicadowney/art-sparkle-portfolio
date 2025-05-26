
import * as THREE from 'three';

export const createSmilingEmoji = (vibrantColors: number[]) => {
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
