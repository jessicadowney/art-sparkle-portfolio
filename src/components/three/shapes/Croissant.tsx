
import * as THREE from 'three';

export const createCroissant = (vibrantColors: number[]) => {
  const group = new THREE.Group();
  
  // More detailed curved path for croissant
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0.4, 0.1, 0.05),
    new THREE.Vector3(0.8, 0.3, 0.15),
    new THREE.Vector3(1.1, 0.6, 0.35),
    new THREE.Vector3(1.2, 1.0, 0.6),
    new THREE.Vector3(1.1, 1.3, 0.8)
  ]);
  
  const tubeGeometry = new THREE.TubeGeometry(curve, 32, 0.25, 16, false);
  const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
  const croissantMaterial = new THREE.MeshPhysicalMaterial({ 
    color: randomColor,
    roughness: 0.7,
    metalness: 0.0,
    clearcoat: 0.3,
    clearcoatRoughness: 0.4
  });
  const croissant = new THREE.Mesh(tubeGeometry, croissantMaterial);
  group.add(croissant);
  
  // Add texture bumps
  for (let i = 0; i < 15; i++) {
    const bumpGeometry = new THREE.SphereGeometry(0.05, 8, 8);
    const bump = new THREE.Mesh(bumpGeometry, croissantMaterial);
    const t = i / 15;
    const pos = curve.getPoint(t);
    bump.position.copy(pos);
    bump.position.add(new THREE.Vector3(
      (Math.random() - 0.5) * 0.2,
      (Math.random() - 0.5) * 0.2,
      (Math.random() - 0.5) * 0.2
    ));
    group.add(bump);
  }
  
  return group;
};
