
import * as THREE from 'three';

export const createHourglass = (vibrantColors: number[]) => {
  const group = new THREE.Group();
  
  // Top and bottom bulbs
  const topBulbGeometry = new THREE.SphereGeometry(0.7, 48, 24);
  const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
  const opacity = 0.4 + Math.random() * 0.5;
  
  // Layered frosted glass and resin-like material
  const glassMaterial = new THREE.MeshPhysicalMaterial({ 
    color: randomColor,
    transparent: true,
    opacity: opacity,
    roughness: 0.12,
    metalness: 0.0,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    transmission: 0.92,
    ior: 1.4,
    thickness: 0.5,
    emissive: randomColor,
    emissiveIntensity: 0.08,
    sheen: 0.8,
    sheenRoughness: 0.15,
    sheenColor: new THREE.Color(randomColor).multiplyScalar(0.35)
  });
  
  const topBulb = new THREE.Mesh(topBulbGeometry, glassMaterial);
  topBulb.position.y = 0.8;
  topBulb.scale.set(1, 0.8, 1);
  topBulb.castShadow = false;
  topBulb.receiveShadow = false;
  group.add(topBulb);
  
  const bottomBulb = new THREE.Mesh(topBulbGeometry, glassMaterial);
  bottomBulb.position.y = -0.8;
  bottomBulb.scale.set(1, 0.8, 1);
  bottomBulb.castShadow = false;
  bottomBulb.receiveShadow = false;
  group.add(bottomBulb);
  
  // Narrow middle
  const middleGeometry = new THREE.CylinderGeometry(0.15, 0.15, 0.4, 24);
  const middle = new THREE.Mesh(middleGeometry, glassMaterial);
  middle.castShadow = false;
  middle.receiveShadow = false;
  group.add(middle);
  
  // Sand particles inside with soft pastel colors
  const sandColors = [0xFFF3E6, 0xFFE6CC, 0xF0FFE6];
  for (let i = 0; i < 60; i++) {
    const sandGeometry = new THREE.SphereGeometry(0.025, 8, 8);
    const sandColor = sandColors[Math.floor(Math.random() * sandColors.length)];
    const sandMaterial = new THREE.MeshPhysicalMaterial({ 
      color: sandColor,
      roughness: 0.8,
      metalness: 0.0,
      emissive: sandColor,
      emissiveIntensity: 0.05
    });
    const sand = new THREE.Mesh(sandGeometry, sandMaterial);
    sand.position.set(
      (Math.random() - 0.5) * 0.5,
      -0.8 + Math.random() * 0.4,
      (Math.random() - 0.5) * 0.5
    );
    sand.castShadow = false;
    sand.receiveShadow = false;
    group.add(sand);
  }
  
  return group;
};
