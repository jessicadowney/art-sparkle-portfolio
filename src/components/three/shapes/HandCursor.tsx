
import * as THREE from 'three';

export const createHandCursor = (vibrantColors: number[]) => {
  const group = new THREE.Group();
  
  // Palm
  const palmGeometry = new THREE.BoxGeometry(0.9, 1.4, 0.5);
  const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
  const opacity = 0.4 + Math.random() * 0.5;
  
  // Layered frosted glass and resin-like material
  const skinMaterial = new THREE.MeshPhysicalMaterial({ 
    color: randomColor,
    transparent: true,
    opacity: opacity,
    roughness: 0.1,
    metalness: 0.0,
    clearcoat: 0.95,
    clearcoatRoughness: 0.08,
    transmission: 0.88,
    ior: 1.45,
    thickness: 0.6,
    emissive: randomColor,
    emissiveIntensity: 0.12,
    sheen: 0.9,
    sheenRoughness: 0.1,
    sheenColor: new THREE.Color(randomColor).multiplyScalar(0.4)
  });
  
  const palm = new THREE.Mesh(palmGeometry, skinMaterial);
  palm.castShadow = false;
  palm.receiveShadow = false;
  group.add(palm);
  
  // Fingers
  for (let i = 0; i < 4; i++) {
    // Lower finger segment
    const lowerFingerGeometry = new THREE.CylinderGeometry(0.1, 0.12, 0.5, 16);
    const lowerFinger = new THREE.Mesh(lowerFingerGeometry, skinMaterial);
    lowerFinger.position.set(-0.35 + i * 0.23, 0.9, 0);
    lowerFinger.castShadow = false;
    lowerFinger.receiveShadow = false;
    group.add(lowerFinger);
    
    // Upper finger segment
    const upperFingerGeometry = new THREE.CylinderGeometry(0.08, 0.1, 0.35, 16);
    const upperFinger = new THREE.Mesh(upperFingerGeometry, skinMaterial);
    upperFinger.position.set(-0.35 + i * 0.23, 1.3, 0);
    upperFinger.castShadow = false;
    upperFinger.receiveShadow = false;
    group.add(upperFinger);
    
    // Fingertip
    const tipGeometry = new THREE.SphereGeometry(0.08, 16, 12);
    const tip = new THREE.Mesh(tipGeometry, skinMaterial);
    tip.position.set(-0.35 + i * 0.23, 1.55, 0);
    tip.castShadow = false;
    tip.receiveShadow = false;
    group.add(tip);
  }
  
  // Thumb
  const thumbLowerGeometry = new THREE.CylinderGeometry(0.12, 0.14, 0.4, 16);
  const thumbLower = new THREE.Mesh(thumbLowerGeometry, skinMaterial);
  thumbLower.position.set(-0.7, 0.25, 0);
  thumbLower.rotation.z = Math.PI / 3;
  thumbLower.castShadow = false;
  thumbLower.receiveShadow = false;
  group.add(thumbLower);
  
  const thumbUpperGeometry = new THREE.CylinderGeometry(0.1, 0.12, 0.3, 16);
  const thumbUpper = new THREE.Mesh(thumbUpperGeometry, skinMaterial);
  thumbUpper.position.set(-0.85, 0.5, 0);
  thumbUpper.rotation.z = Math.PI / 3;
  thumbUpper.castShadow = false;
  thumbUpper.receiveShadow = false;
  group.add(thumbUpper);
  
  return group;
};
