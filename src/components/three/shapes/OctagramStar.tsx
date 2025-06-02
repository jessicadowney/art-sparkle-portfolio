
import * as THREE from 'three';

export const createOctagramStar = (vibrantColors: number[]) => {
  const group = new THREE.Group();
  
  // Create octagram star shape (8-pointed star)
  const starShape = new THREE.Shape();
  const outerRadius = 0.2;
  const innerRadius = 0.1;
  const points = 8;
  
  for (let i = 0; i < points * 2; i++) {
    const angle = (i / (points * 2)) * Math.PI * 2;
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    
    if (i === 0) {
      starShape.moveTo(x, y);
    } else {
      starShape.lineTo(x, y);
    }
  }
  starShape.closePath();

  const extrudeSettings = {
    depth: 0.05,
    bevelEnabled: true,
    bevelSegments: 4,
    steps: 1,
    bevelSize: 0.01,
    bevelThickness: 0.01
  };

  const starGeometry = new THREE.ExtrudeGeometry(starShape, extrudeSettings);
  const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
  const opacity = 0.4 + Math.random() * 0.5; // 40-90% opacity
  
  // Shiny translucency for stars
  const starMaterial = new THREE.MeshPhysicalMaterial({ 
    color: randomColor,
    transparent: true,
    opacity: opacity,
    roughness: 0.0,
    metalness: 0.2,
    clearcoat: 1.0,
    clearcoatRoughness: 0.0,
    transmission: 0.9,
    ior: 1.6,
    emissive: randomColor,
    emissiveIntensity: 0.25
  });
  const star = new THREE.Mesh(starGeometry, starMaterial);
  
  group.add(star);

  // Add visible vertices with darker tone of the same color
  const positions = starGeometry.attributes.position;
  const darkerColor = new THREE.Color(randomColor).multiplyScalar(0.6); // 60% darker
  const vertexMaterial = new THREE.MeshBasicMaterial({ 
    color: darkerColor, 
    transparent: true, 
    opacity: 0.9 
  });
  
  for (let i = 0; i < positions.count; i += 6) { // Show every 6th vertex
    const vertexGeometry = new THREE.SphereGeometry(0.006, 6, 6);
    const vertex = new THREE.Mesh(vertexGeometry, vertexMaterial);
    
    vertex.position.set(
      positions.getX(i),
      positions.getY(i),
      positions.getZ(i)
    );
    
    group.add(vertex);
  }
  
  return group;
};
