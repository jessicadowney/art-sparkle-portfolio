
import * as THREE from 'three';

export const createHourglass = (vibrantColors: number[]) => {
  const group = new THREE.Group();
  
  // Top bulb with more detail
  const topBulbGeometry = new THREE.SphereGeometry(0.6, 32, 16);
  const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
  const glassMaterial = new THREE.MeshPhysicalMaterial({ 
    color: randomColor,
    transparent: true,
    opacity: 0.8,
    roughness: 0.0,
    metalness: 0.0,
    transmission: 0.95,
    ior: 1.5,
    clearcoat: 1.0
  });
  
  const topBulb = new THREE.Mesh(topBulbGeometry, glassMaterial);
  topBulb.position.y = 0.8;
  topBulb.scale.set(1, 0.8, 1);
  group.add(topBulb);
  
  const bottomBulb = new THREE.Mesh(topBulbGeometry, glassMaterial);
  bottomBulb.position.y = -0.8;
  bottomBulb.scale.set(1, 0.8, 1);
  group.add(bottomBulb);
  
  // Narrow middle with more segments
  const middleGeometry = new THREE.CylinderGeometry(0.12, 0.12, 0.3, 16);
  const middle = new THREE.Mesh(middleGeometry, glassMaterial);
  group.add(middle);
  
  // Sand particles inside
  for (let i = 0; i < 50; i++) {
    const sandGeometry = new THREE.SphereGeometry(0.02, 8, 8);
    const sandMaterial = new THREE.MeshPhysicalMaterial({ 
      color: 0xF4A460,
      roughness: 0.9 
    });
    const sand = new THREE.Mesh(sandGeometry, sandMaterial);
    sand.position.set(
      (Math.random() - 0.5) * 0.4,
      -0.8 + Math.random() * 0.3,
      (Math.random() - 0.5) * 0.4
    );
    group.add(sand);
  }
  
  return group;
};
