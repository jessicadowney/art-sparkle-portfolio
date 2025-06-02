
import * as THREE from 'three';

export const createTinyHeart = (vibrantColors: number[]) => {
  const group = new THREE.Group();
  
  // Create heart shape using bezier curves - made larger and more defined
  const heartShape = new THREE.Shape();
  
  // Heart shape coordinates (increased size for better visibility)
  const x = 0, y = 0;
  heartShape.moveTo(x + 0.25, y + 0.25);
  heartShape.bezierCurveTo(x + 0.25, y + 0.25, x + 0.1, y, x, y);
  heartShape.bezierCurveTo(x - 0.15, y, x - 0.15, y + 0.175, x - 0.15, y + 0.175);
  heartShape.bezierCurveTo(x - 0.15, y + 0.275, x - 0.075, y + 0.375, x + 0.125, y + 0.475);
  heartShape.bezierCurveTo(x + 0.325, y + 0.375, x + 0.4, y + 0.275, x + 0.4, y + 0.175);
  heartShape.bezierCurveTo(x + 0.4, y + 0.175, x + 0.4, y, x + 0.25, y);
  heartShape.bezierCurveTo(x + 0.1, y, x + 0.25, y + 0.25, x + 0.25, y + 0.25);

  const extrudeSettings = {
    depth: 0.05,
    bevelEnabled: true,
    bevelSegments: 6,
    steps: 2,
    bevelSize: 0.02,
    bevelThickness: 0.02
  };

  const heartGeometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
  const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
  const opacity = 0.4 + Math.random() * 0.5; // 40-90% opacity
  
  // Shiny translucency for hearts
  const heartMaterial = new THREE.MeshPhysicalMaterial({ 
    color: randomColor,
    transparent: true,
    opacity: opacity,
    roughness: 0.0,
    metalness: 0.1,
    clearcoat: 1.0,
    clearcoatRoughness: 0.0,
    transmission: 0.8,
    ior: 1.5,
    emissive: randomColor,
    emissiveIntensity: 0.2
  });
  
  const heart = new THREE.Mesh(heartGeometry, heartMaterial);
  heart.scale.set(1.5, 1.5, 1.5); // Made them larger for better visibility
  
  group.add(heart);

  // Add visible vertices
  const positions = heartGeometry.attributes.position;
  const vertexMaterial = new THREE.MeshBasicMaterial({ 
    color: 0xffffff, 
    transparent: true, 
    opacity: 0.8 
  });
  
  for (let i = 0; i < positions.count; i += 10) { // Show every 10th vertex to avoid clutter
    const vertexGeometry = new THREE.SphereGeometry(0.01, 8, 8);
    const vertex = new THREE.Mesh(vertexGeometry, vertexMaterial);
    
    vertex.position.set(
      positions.getX(i) * 1.5,
      positions.getY(i) * 1.5,
      positions.getZ(i) * 1.5
    );
    
    group.add(vertex);
  }
  
  return group;
};
