
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
    depth: 0.12,
    bevelEnabled: true,
    bevelSegments: 16,
    steps: 4,
    bevelSize: 0.04,
    bevelThickness: 0.04
  };

  const arrowGeometry = new THREE.ExtrudeGeometry(arrowShape, extrudeSettings);
  const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
  const opacity = 0.4 + Math.random() * 0.5;
  
  // Layered frosted glass and resin-like material
  const arrowMaterial = new THREE.MeshPhysicalMaterial({ 
    color: randomColor,
    transparent: true,
    opacity: opacity,
    roughness: 0.15,
    metalness: 0.0,
    clearcoat: 1.0,
    clearcoatRoughness: 0.08,
    transmission: 0.9,
    ior: 1.5,
    thickness: 0.8,
    emissive: randomColor,
    emissiveIntensity: 0.12,
    sheen: 0.9,
    sheenRoughness: 0.1,
    sheenColor: new THREE.Color(randomColor).multiplyScalar(0.4)
  });
  
  const arrow = new THREE.Mesh(arrowGeometry, arrowMaterial);
  arrow.scale.set(0.8, 0.8, 0.8);
  arrow.castShadow = false;
  arrow.receiveShadow = false;
  
  group.add(arrow);
  return group;
};
