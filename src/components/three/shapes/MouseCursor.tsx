
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
  const arrowMaterial = new THREE.MeshPhysicalMaterial({ 
    color: randomColor,
    transparent: true,
    opacity: 0.95,
    roughness: 0.0,
    metalness: 0.0,
    clearcoat: 0.0,
    clearcoatRoughness: 0.0,
    emissive: randomColor,
    emissiveIntensity: 0.25
  });
  const arrow = new THREE.Mesh(arrowGeometry, arrowMaterial);
  arrow.scale.set(0.8, 0.8, 0.8);
  
  group.add(arrow);
  return group;
};
