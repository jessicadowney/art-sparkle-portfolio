
import * as THREE from 'three';

export const createSprinkledDonut = (vibrantColors: number[]) => {
  const group = new THREE.Group();
  
  // Donut base
  const donutGeometry = new THREE.TorusGeometry(0.9, 0.4, 32, 80);
  const baseColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
  const opacity = 0.4 + Math.random() * 0.5;
  
  // Layered frosted glass and resin-like material for donut
  const donutMaterial = new THREE.MeshPhysicalMaterial({ 
    color: baseColor,
    transparent: true,
    opacity: opacity,
    roughness: 0.15,
    metalness: 0.0,
    clearcoat: 0.9,
    clearcoatRoughness: 0.12,
    transmission: 0.88,
    ior: 1.35,
    thickness: 0.8,
    emissive: baseColor,
    emissiveIntensity: 0.1,
    sheen: 0.8,
    sheenRoughness: 0.15,
    sheenColor: new THREE.Color(baseColor).multiplyScalar(0.35)
  });
  
  const donut = new THREE.Mesh(donutGeometry, donutMaterial);
  donut.castShadow = false;
  donut.receiveShadow = false;
  group.add(donut);
  
  // Glazing
  const glazingGeometry = new THREE.TorusGeometry(0.92, 0.28, 24, 80);
  const glazingColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
  const glazingOpacity = 0.4 + Math.random() * 0.5;
  
  // Enhanced layered material for glazing
  const glazingMaterial = new THREE.MeshPhysicalMaterial({ 
    color: glazingColor,
    transparent: true,
    opacity: glazingOpacity,
    roughness: 0.05,
    metalness: 0.0,
    clearcoat: 1.0,
    clearcoatRoughness: 0.05,
    transmission: 0.95,
    ior: 1.6,
    thickness: 0.3,
    emissive: glazingColor,
    emissiveIntensity: 0.2,
    sheen: 1.0,
    sheenRoughness: 0.05,
    sheenColor: new THREE.Color(glazingColor).multiplyScalar(0.7)
  });
  
  const glazing = new THREE.Mesh(glazingGeometry, glazingMaterial);
  glazing.position.y = 0.18;
  glazing.castShadow = false;
  glazing.receiveShadow = false;
  group.add(glazing);
  
  // Sprinkles
  for (let i = 0; i < 30; i++) {
    const sprinkleGeometry = new THREE.CylinderGeometry(0.02, 0.02, 0.15);
    const sprinkleColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
    const sprinkleMaterial = new THREE.MeshPhysicalMaterial({ 
      color: sprinkleColor,
      roughness: 0.1,
      metalness: 0.0,
      emissive: sprinkleColor,
      emissiveIntensity: 0.3,
      clearcoat: 0.8,
      clearcoatRoughness: 0.1
    });
    const sprinkle = new THREE.Mesh(sprinkleGeometry, sprinkleMaterial);
    
    // Position sprinkles on the glazing surface
    const angle = (i / 30) * Math.PI * 2;
    const radius = 0.6 + Math.random() * 0.4;
    sprinkle.position.set(
      Math.cos(angle) * radius,
      0.25 + Math.random() * 0.06,
      Math.sin(angle) * radius
    );
    sprinkle.rotation.set(
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    );
    
    sprinkle.castShadow = false;
    sprinkle.receiveShadow = false;
    group.add(sprinkle);
  }
  
  return group;
};
