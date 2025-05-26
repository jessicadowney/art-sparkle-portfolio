
import * as THREE from 'three';

export const createHandCursor = (vibrantColors: number[]) => {
  const group = new THREE.Group();
  
  // Palm with rounded edges
  const palmGeometry = new THREE.BoxGeometry(0.8, 1.2, 0.4);
  palmGeometry.translate(0, 0, 0);
  const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
  const skinMaterial = new THREE.MeshPhysicalMaterial({ 
    color: randomColor,
    roughness: 0.6,
    metalness: 0.0,
    clearcoat: 0.4,
    clearcoatRoughness: 0.3
  });
  const palm = new THREE.Mesh(palmGeometry, skinMaterial);
  group.add(palm);
  
  // Detailed fingers with joints
  for (let i = 0; i < 4; i++) {
    // Lower finger segment
    const lowerFingerGeometry = new THREE.CylinderGeometry(0.08, 0.1, 0.4, 12);
    const lowerFinger = new THREE.Mesh(lowerFingerGeometry, skinMaterial);
    lowerFinger.position.set(-0.3 + i * 0.2, 0.8, 0);
    group.add(lowerFinger);
    
    // Upper finger segment
    const upperFingerGeometry = new THREE.CylinderGeometry(0.06, 0.08, 0.3, 12);
    const upperFinger = new THREE.Mesh(upperFingerGeometry, skinMaterial);
    upperFinger.position.set(-0.3 + i * 0.2, 1.15, 0);
    group.add(upperFinger);
    
    // Fingertip
    const tipGeometry = new THREE.SphereGeometry(0.06, 12, 8);
    const tip = new THREE.Mesh(tipGeometry, skinMaterial);
    tip.position.set(-0.3 + i * 0.2, 1.35, 0);
    group.add(tip);
  }
  
  // Detailed thumb
  const thumbLowerGeometry = new THREE.CylinderGeometry(0.1, 0.12, 0.35, 12);
  const thumbLower = new THREE.Mesh(thumbLowerGeometry, skinMaterial);
  thumbLower.position.set(-0.6, 0.2, 0);
  thumbLower.rotation.z = Math.PI / 3;
  group.add(thumbLower);
  
  const thumbUpperGeometry = new THREE.CylinderGeometry(0.08, 0.1, 0.25, 12);
  const thumbUpper = new THREE.Mesh(thumbUpperGeometry, skinMaterial);
  thumbUpper.position.set(-0.75, 0.45, 0);
  thumbUpper.rotation.z = Math.PI / 3;
  group.add(thumbUpper);
  
  return group;
};
