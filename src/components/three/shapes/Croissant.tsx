
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
  const opacity = 0.4 + Math.random() * 0.5; // 40-90% opacity
  
  // Frosted glass effect for croissants
  const croissantMaterial = new THREE.MeshPhysicalMaterial({ 
    color: randomColor,
    transparent: true,
    opacity: opacity,
    roughness: 0.9,
    metalness: 0.0,
    clearcoat: 0.2,
    clearcoatRoughness: 1.0,
    transmission: 0.5,
    ior: 1.2
  });
  const croissant = new THREE.Mesh(tubeGeometry, croissantMaterial);
  group.add(croissant);

  // Add visible vertices
  const positions = tubeGeometry.attributes.position;
  const vertexMaterial = new THREE.MeshBasicMaterial({ 
    color: 0xffffff, 
    transparent: true, 
    opacity: 0.7 
  });
  
  for (let i = 0; i < positions.count; i += 12) { // Show every 12th vertex
    const vertexGeometry = new THREE.SphereGeometry(0.008, 6, 6);
    const vertex = new THREE.Mesh(vertexGeometry, vertexMaterial);
    
    vertex.position.set(
      positions.getX(i),
      positions.getY(i),
      positions.getZ(i)
    );
    
    group.add(vertex);
  }
  
  // Add texture bumps with same material
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
