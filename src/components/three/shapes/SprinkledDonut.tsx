
import * as THREE from 'three';

export const createSprinkledDonut = (vibrantColors: number[]) => {
  const group = new THREE.Group();
  
  // Donut base with higher segments
  const donutGeometry = new THREE.TorusGeometry(0.8, 0.35, 24, 64);
  const baseColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
  const donutMaterial = new THREE.MeshPhysicalMaterial({ 
    color: baseColor,
    roughness: 0.4,
    metalness: 0.0,
    clearcoat: 0.5
  });
  const donut = new THREE.Mesh(donutGeometry, donutMaterial);
  group.add(donut);
  
  // Glazing that actually sits on top
  const glazingGeometry = new THREE.TorusGeometry(0.82, 0.25, 16, 64);
  const glazingColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
  const glazingMaterial = new THREE.MeshPhysicalMaterial({ 
    color: glazingColor,
    transparent: true,
    opacity: 0.9,
    roughness: 0.05,
    metalness: 0.1,
    clearcoat: 1.0,
    clearcoatRoughness: 0.05
  });
  const glazing = new THREE.Mesh(glazingGeometry, glazingMaterial);
  glazing.position.y = 0.15; // Position on top
  group.add(glazing);
  
  // Sprinkles that are actually ON the donut
  for (let i = 0; i < 25; i++) {
    const sprinkleGeometry = new THREE.CylinderGeometry(0.015, 0.015, 0.12);
    const sprinkleColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
    const sprinkleMaterial = new THREE.MeshPhysicalMaterial({ 
      color: sprinkleColor,
      roughness: 0.2,
      metalness: 0.1
    });
    const sprinkle = new THREE.Mesh(sprinkleGeometry, sprinkleMaterial);
    
    // Position sprinkles ON the glazing surface
    const angle = (i / 25) * Math.PI * 2;
    const radius = 0.5 + Math.random() * 0.4;
    sprinkle.position.set(
      Math.cos(angle) * radius,
      0.22 + Math.random() * 0.05, // Slightly above glazing
      Math.sin(angle) * radius
    );
    sprinkle.rotation.set(
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    );
    
    group.add(sprinkle);
  }
  
  return group;
};
