
import * as THREE from 'three';

export const createMouseCursor = (vibrantColors: number[]) => {
  const group = new THREE.Group();
  
  // Main arrow body
  const arrowShape = new THREE.Shape();
  arrowShape.moveTo(0, 0);
  arrowShape.lineTo(0, 1.2);
  arrowShape.lineTo(0.3, 1.0);
  arrowShape.lineTo(0.5, 1.4);
  arrowShape.lineTo(0.7, 1.3);
  arrowShape.lineTo(0.4, 0.9);
  arrowShape.lineTo(0.8, 0.8);
  arrowShape.lineTo(0, 0);

  const extrudeSettings = {
    depth: 0.1,
    bevelEnabled: true,
    bevelSegments: 8,
    steps: 2,
    bevelSize: 0.02,
    bevelThickness: 0.02
  };

  const arrowGeometry = new THREE.ExtrudeGeometry(arrowShape, extrudeSettings);
  const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
  const opacity = 0.4 + Math.random() * 0.5; // 40-90% opacity
  
  // Frosted glass effect for cursors
  const arrowMaterial = new THREE.MeshPhysicalMaterial({ 
    color: randomColor,
    transparent: true,
    opacity: opacity,
    roughness: 0.8,
    metalness: 0.0,
    clearcoat: 0.3,
    clearcoatRoughness: 0.9,
    transmission: 0.6,
    ior: 1.3,
    emissive: randomColor,
    emissiveIntensity: 0.1
  });
  const arrow = new THREE.Mesh(arrowGeometry, arrowMaterial);
  arrow.scale.set(0.8, 0.8, 0.8);
  
  group.add(arrow);

  // Add visible vertices with darker tone of the same color
  const positions = arrowGeometry.attributes.position;
  const darkerColor = new THREE.Color(randomColor).multiplyScalar(0.6); // 60% darker
  const vertexMaterial = new THREE.MeshBasicMaterial({ 
    color: darkerColor, 
    transparent: true, 
    opacity: 0.8 
  });
  
  for (let i = 0; i < positions.count; i += 8) { // Show every 8th vertex
    const vertexGeometry = new THREE.SphereGeometry(0.008, 6, 6);
    const vertex = new THREE.Mesh(vertexGeometry, vertexMaterial);
    
    vertex.position.set(
      positions.getX(i) * 0.8,
      positions.getY(i) * 0.8,
      positions.getZ(i) * 0.8
    );
    
    group.add(vertex);
  }
  
  return group;
};
