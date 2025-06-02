
import * as THREE from 'three';

export const createTinyHeart = (vibrantColors: number[]) => {
  const group = new THREE.Group();
  
  // Create heart shape using bezier curves
  const heartShape = new THREE.Shape();
  
  const x = 0, y = 0;
  heartShape.moveTo(x + 0.25, y + 0.25);
  heartShape.bezierCurveTo(x + 0.25, y + 0.25, x + 0.1, y, x, y);
  heartShape.bezierCurveTo(x - 0.15, y, x - 0.15, y + 0.175, x - 0.15, y + 0.175);
  heartShape.bezierCurveTo(x - 0.15, y + 0.275, x - 0.075, y + 0.375, x + 0.125, y + 0.475);
  heartShape.bezierCurveTo(x + 0.325, y + 0.375, x + 0.4, y + 0.275, x + 0.4, y + 0.175);
  heartShape.bezierCurveTo(x + 0.4, y + 0.175, x + 0.4, y, x + 0.25, y);
  heartShape.bezierCurveTo(x + 0.1, y, x + 0.25, y + 0.25, x + 0.25, y + 0.25);

  const extrudeSettings = {
    depth: 0.08,
    bevelEnabled: true,
    bevelSegments: 12,
    steps: 3,
    bevelSize: 0.03,
    bevelThickness: 0.03
  };

  const heartGeometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
  const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
  const opacity = 0.4 + Math.random() * 0.5;
  
  // Layered frosted glass and resin-like material
  const heartMaterial = new THREE.MeshPhysicalMaterial({ 
    color: randomColor,
    transparent: true,
    opacity: opacity,
    roughness: 0.1,
    metalness: 0.0,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    transmission: 0.95,
    ior: 1.4,
    thickness: 0.5,
    emissive: randomColor,
    emissiveIntensity: 0.15,
    sheen: 0.8,
    sheenRoughness: 0.2,
    sheenColor: new THREE.Color(randomColor).multiplyScalar(0.3)
  });
  
  const heart = new THREE.Mesh(heartGeometry, heartMaterial);
  heart.scale.set(1.5, 1.5, 1.5);
  heart.castShadow = false;
  heart.receiveShadow = false;
  
  group.add(heart);
  return group;
};
