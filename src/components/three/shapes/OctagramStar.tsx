
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
  const starMaterial = new THREE.MeshPhysicalMaterial({ 
    color: randomColor,
    transparent: true,
    opacity: 0.95,
    roughness: 0.0,
    metalness: 0.0,
    clearcoat: 0.0,
    clearcoatRoughness: 0.0,
    emissive: randomColor,
    emissiveIntensity: 0.3
  });
  const star = new THREE.Mesh(starGeometry, starMaterial);
  
  group.add(star);
  return group;
};
