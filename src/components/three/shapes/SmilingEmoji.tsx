
import * as THREE from 'three';

export const createSmilingEmoji = (vibrantColors: number[]) => {
  const group = new THREE.Group();
  
  // Face
  const faceGeometry = new THREE.CylinderGeometry(0.9, 0.9, 0.2, 64);
  const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
  const opacity = 0.4 + Math.random() * 0.5;
  
  // Layered frosted glass and resin-like material
  const faceMaterial = new THREE.MeshPhysicalMaterial({ 
    color: randomColor,
    transparent: true,
    opacity: opacity,
    roughness: 0.08,
    metalness: 0.0,
    clearcoat: 1.0,
    clearcoatRoughness: 0.05,
    transmission: 0.95,
    ior: 1.5,
    thickness: 0.4,
    emissive: randomColor,
    emissiveIntensity: 0.18,
    sheen: 1.0,
    sheenRoughness: 0.08,
    sheenColor: new THREE.Color(randomColor).multiplyScalar(0.6)
  });
  
  const face = new THREE.Mesh(faceGeometry, faceMaterial);
  face.castShadow = false;
  face.receiveShadow = false;
  group.add(face);
  
  // Eyes with soft pastel colors
  const eyeGeometry = new THREE.SphereGeometry(0.18, 24, 16);
  const eyeMaterial = new THREE.MeshPhysicalMaterial({ 
    color: 0xE6E6FF,
    roughness: 0.1,
    metalness: 0.0,
    emissive: 0xE6E6FF,
    emissiveIntensity: 0.1
  });
  
  const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
  leftEye.position.set(-0.3, 0.25, 0.1);
  leftEye.scale.set(1, 1.2, 0.8);
  leftEye.castShadow = false;
  leftEye.receiveShadow = false;
  group.add(leftEye);
  
  const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
  rightEye.position.set(0.3, 0.25, 0.1);
  rightEye.scale.set(1, 1.2, 0.8);
  rightEye.castShadow = false;
  rightEye.receiveShadow = false;
  group.add(rightEye);
  
  // Smile
  const smileGeometry = new THREE.TorusGeometry(0.35, 0.06, 12, 48, Math.PI);
  const smileMaterial = new THREE.MeshPhysicalMaterial({ 
    color: 0xFFE6F3,
    roughness: 0.2,
    metalness: 0.0,
    emissive: 0xFFE6F3,
    emissiveIntensity: 0.15
  });
  const smile = new THREE.Mesh(smileGeometry, smileMaterial);
  smile.position.set(0, -0.1, 0.1);
  smile.rotation.z = Math.PI;
  smile.castShadow = false;
  smile.receiveShadow = false;
  group.add(smile);
  
  return group;
};
