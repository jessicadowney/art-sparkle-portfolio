
import * as THREE from 'three';

export const createOctagramStar = (vibrantColors: number[]) => {
  const group = new THREE.Group();
  
  // Create octagram star shape (8-pointed star)
  const starShape = new THREE.Shape();
  const outerRadius = 0.25;
  const innerRadius = 0.12;
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
    depth: 0.1,
    bevelEnabled: true,
    bevelSegments: 12,
    steps: 3,
    bevelSize: 0.025,
    bevelThickness: 0.025
  };

  const starGeometry = new THREE.ExtrudeGeometry(starShape, extrudeSettings);
  const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
  const opacity = 0.4 + Math.random() * 0.5;
  
  // Layered frosted glass and resin-like material
  const starMaterial = new THREE.MeshPhysicalMaterial({ 
    color: randomColor,
    transparent: true,
    opacity: opacity,
    roughness: 0.05,
    metalness: 0.0,
    clearcoat: 1.0,
    clearcoatRoughness: 0.05,
    transmission: 0.98,
    ior: 1.6,
    thickness: 0.6,
    emissive: randomColor,
    emissiveIntensity: 0.2,
    sheen: 1.0,
    sheenRoughness: 0.05,
    sheenColor: new THREE.Color(randomColor).multiplyScalar(0.5)
  });
  
  const star = new THREE.Mesh(starGeometry, starMaterial);
  star.castShadow = false;
  star.receiveShadow = false;
  
  group.add(star);
  return group;
};
