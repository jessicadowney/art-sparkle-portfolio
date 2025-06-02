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
  
  const tubeGeometry = new THREE.TubeGeometry(curve, 48, 0.3, 24, false);
  const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
  const opacity = 0.4 + Math.random() * 0.5;
  
  // Layered frosted glass and resin-like material
  const croissantMaterial = new THREE.MeshPhysicalMaterial({ 
    color: randomColor,
    transparent: true,
    opacity: opacity,
    roughness: 0.2,
    metalness: 0.0,
    clearcoat: 0.9,
    clearcoatRoughness: 0.15,
    transmission: 0.85,
    ior: 1.3,
    thickness: 0.7,
    emissive: randomColor,
    emissiveIntensity: 0.1,
    sheen: 0.7,
    sheenRoughness: 0.2,
    sheenColor: new THREE.Color(randomColor).multiplyScalar(0.3)
  });
  
  const croissant = new THREE.Mesh(tubeGeometry, croissantMaterial);
  croissant.castShadow = false;
  croissant.receiveShadow = false;
  group.add(croissant);
  
  // Add texture bumps with same material
  for (let i = 0; i < 20; i++) {
    const bumpGeometry = new THREE.SphereGeometry(0.06, 12, 12);
    const bump = new THREE.Mesh(bumpGeometry, croissantMaterial);
    const t = i / 20;
    const pos = curve.getPoint(t);
    bump.position.copy(pos);
    bump.position.add(new THREE.Vector3(
      (Math.random() - 0.5) * 0.25,
      (Math.random() - 0.5) * 0.25,
      (Math.random() - 0.5) * 0.25
    ));
    bump.castShadow = false;
    bump.receiveShadow = false;
    group.add(bump);
  }
  
  return group;
};
