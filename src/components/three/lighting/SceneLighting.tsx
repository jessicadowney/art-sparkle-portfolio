
import * as THREE from 'three';

export const createSceneLighting = (scene: THREE.Scene) => {
  // Very soft ambient light for luminous effect
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);

  // Extremely soft directional light with no shadows for luminous effect
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.2);
  directionalLight.position.set(20, 20, 10);
  directionalLight.castShadow = false; // No shadows for luminous effect
  scene.add(directionalLight);

  // Very soft, faint colored point lights for subtle luminosity
  const pointLights = [
    { color: 0xFAFA90, position: [-20, -20, -10], intensity: 0.1 },
    { color: 0xC7E4EB, position: [20, -20, 10], intensity: 0.08 },
    { color: 0xFFCCC8, position: [0, 25, 0], intensity: 0.06 },
    { color: 0xE4F4E1, position: [-15, 15, 15], intensity: 0.05 },
    { color: 0xEAA1CC, position: [15, 15, -15], intensity: 0.07 }
  ];

  pointLights.forEach(lightConfig => {
    const pointLight = new THREE.PointLight(lightConfig.color, lightConfig.intensity, 80);
    pointLight.position.set(...lightConfig.position);
    pointLight.castShadow = false; // No shadows for luminous effect
    scene.add(pointLight);
  });

  // Very soft hemisphere light for gentle global illumination
  const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.4);
  scene.add(hemisphereLight);
};
