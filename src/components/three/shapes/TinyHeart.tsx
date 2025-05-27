
import * as THREE from 'three';

export const createTinyHeart = (vibrantColors: number[]) => {
  const group = new THREE.Group();
  
  // Create heart shape using bezier curves
  const heartShape = new THREE.Shape();
  
  // Heart shape coordinates (scaled down for tiny size)
  const x = 0, y = 0;
  heartShape.moveTo(x + 0.05, y + 0.05);
  heartShape.bezierCurveTo(x + 0.05, y + 0.05, x + 0.02, y, x, y);
  heartShape.bezierCurveTo(x - 0.03, y, x - 0.03, y + 0.035, x - 0.03, y + 0.035);
  heartShape.bezierCurveTo(x - 0.03, y + 0.055, x - 0.015, y + 0.075, x + 0.025, y + 0.095);
  heartShape.bezierCurveTo(x + 0.065, y + 0.075, x + 0.08, y + 0.055, x + 0.08, y + 0.035);
  heartShape.bezierCurveTo(x + 0.08, y + 0.035, x + 0.08, y, x + 0.05, y);
  heartShape.bezierCurveTo(x + 0.02, y, x + 0.05, y + 0.05, x + 0.05, y + 0.05);

  const extrudeSettings = {
    depth: 0.01,
    bevelEnabled: true,
    bevelSegments: 4,
    steps: 1,
    bevelSize: 0.005,
    bevelThickness: 0.005
  };

  const heartGeometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
  const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
  const heartMaterial = new THREE.MeshPhysicalMaterial({ 
    color: randomColor,
    transparent: true,
    opacity: 0.9,
    roughness: 0.1,
    metalness: 0.0,
    clearcoat: 0.8,
    clearcoatRoughness: 0.1,
    emissive: randomColor,
    emissiveIntensity: 0.4
  });
  
  const heart = new THREE.Mesh(heartGeometry, heartMaterial);
  heart.scale.set(0.5, 0.5, 0.5); // Make them tiny
  
  group.add(heart);
  return group;
};
