
import * as THREE from 'three';

export const createHandCursor = (vibrantColors: number[]) => {
  const group = new THREE.Group();
  
  // Palm with rounded edges
  const palmGeometry = new THREE.BoxGeometry(0.8, 1.2, 0.4);
  palmGeometry.translate(0, 0, 0);
  const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
  const opacity = 0.4 + Math.random() * 0.5; // 40-90% opacity
  
  // Shiny translucency for hand cursor
  const skinMaterial = new THREE.MeshPhysicalMaterial({ 
    color: randomColor,
    transparent: true,
    opacity: opacity,
    roughness: 0.1,
    metalness: 0.0,
    clearcoat: 0.8,
    clearcoatRoughness: 0.1,
    transmission: 0.6,
    ior: 1.4
  });
  const palm = new THREE.Mesh(palmGeometry, skinMaterial);
  group.add(palm);

  // Add visible vertices for palm with darker tone
  const positions = palmGeometry.attributes.position;
  const darkerColor = new THREE.Color(randomColor).multiplyScalar(0.6); // 60% darker
  const vertexMaterial = new THREE.MeshBasicMaterial({ 
    color: darkerColor, 
    transparent: true, 
    opacity: 0.9 
  });
  
  for (let i = 0; i < positions.count; i += 4) { // Show every 4th vertex
    const vertexGeometry = new THREE.SphereGeometry(0.012, 6, 6);
    const vertex = new THREE.Mesh(vertexGeometry, vertexMaterial);
    
    vertex.position.set(
      positions.getX(i),
      positions.getY(i),
      positions.getZ(i)
    );
    
    group.add(vertex);
  }
  
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
