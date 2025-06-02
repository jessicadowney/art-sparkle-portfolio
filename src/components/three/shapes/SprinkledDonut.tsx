
import * as THREE from 'three';

export const createSprinkledDonut = (vibrantColors: number[]) => {
  const group = new THREE.Group();
  
  // Donut base with higher segments
  const donutGeometry = new THREE.TorusGeometry(0.8, 0.35, 24, 64);
  const baseColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
  const opacity = 0.4 + Math.random() * 0.5; // 40-90% opacity
  
  // Frosted glass effect for donut base
  const donutMaterial = new THREE.MeshPhysicalMaterial({ 
    color: baseColor,
    transparent: true,
    opacity: opacity,
    roughness: 0.8,
    metalness: 0.0,
    clearcoat: 0.3,
    clearcoatRoughness: 0.9,
    transmission: 0.5,
    ior: 1.2
  });
  const donut = new THREE.Mesh(donutGeometry, donutMaterial);
  group.add(donut);

  // Add visible vertices for donut with darker tone
  const positions = donutGeometry.attributes.position;
  const darkerColor = new THREE.Color(baseColor).multiplyScalar(0.6); // 60% darker
  const vertexMaterial = new THREE.MeshBasicMaterial({ 
    color: darkerColor, 
    transparent: true, 
    opacity: 0.7 
  });
  
  for (let i = 0; i < positions.count; i += 25) { // Show every 25th vertex
    const vertexGeometry = new THREE.SphereGeometry(0.008, 6, 6);
    const vertex = new THREE.Mesh(vertexGeometry, vertexMaterial);
    
    vertex.position.set(
      positions.getX(i),
      positions.getY(i),
      positions.getZ(i)
    );
    
    group.add(vertex);
  }
  
  // Glazing that actually sits on top
  const glazingGeometry = new THREE.TorusGeometry(0.82, 0.25, 16, 64);
  const glazingColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
  const glazingOpacity = 0.4 + Math.random() * 0.5; // 40-90% opacity
  
  // Shiny translucency for glazing
  const glazingMaterial = new THREE.MeshPhysicalMaterial({ 
    color: glazingColor,
    transparent: true,
    opacity: glazingOpacity,
    roughness: 0.0,
    metalness: 0.1,
    clearcoat: 1.0,
    clearcoatRoughness: 0.0,
    transmission: 0.8,
    ior: 1.5
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
