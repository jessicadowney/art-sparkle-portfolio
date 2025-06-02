
import * as THREE from 'three';

export const createSceneLighting = (scene: THREE.Scene) => {
  // Soft ambient light for luminous effect with warmer tone
  const ambientLight = new THREE.AmbientLight(0xfff8f0, 1.2);
  scene.add(ambientLight);

  // Very soft directional light with no shadows for luminous effect
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.3);
  directionalLight.position.set(25, 25, 15);
  directionalLight.castShadow = false;
  scene.add(directionalLight);

  // Soft colored point lights for glowing edges and soft ambient light
  const pointLights = [
    { color: 0xE6F3FF, position: [-25, -25, -15], intensity: 0.15 }, // Soft blue
    { color: 0xF0E6FF, position: [25, -25, 15], intensity: 0.12 }, // Soft violet
    { color: 0xFFE6F3, position: [0, 30, 0], intensity: 0.1 }, // Soft pink
    { color: 0xFFF3E6, position: [-20, 20, 20], intensity: 0.08 }, // Soft amber
    { color: 0xE6FFFF, position: [20, 20, -20], intensity: 0.1 } // Soft cyan
  ];

  pointLights.forEach(lightConfig => {
    const pointLight = new THREE.PointLight(lightConfig.color, lightConfig.intensity, 100);
    pointLight.position.set(...lightConfig.position);
    pointLight.castShadow = false;
    scene.add(pointLight);
  });

  // Enhanced hemisphere light for gentle global illumination
  const hemisphereLight = new THREE.HemisphereLight(0xfff8f0, 0xf0f8ff, 0.6);
  scene.add(hemisphereLight);

  // Add subtle rim lighting for glowing edges
  const rimLight1 = new THREE.DirectionalLight(0xE6F3FF, 0.2);
  rimLight1.position.set(-20, 10, 20);
  rimLight1.castShadow = false;
  scene.add(rimLight1);

  const rimLight2 = new THREE.DirectionalLight(0xFFE6F3, 0.15);
  rimLight2.position.set(20, -10, -20);
  rimLight2.castShadow = false;
  scene.add(rimLight2);
};
