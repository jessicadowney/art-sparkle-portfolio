
import * as THREE from 'three';

export const createSceneLighting = (scene: THREE.Scene) => {
  // Enhanced lighting setup
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambientLight);

  // Main directional light with very soft shadows
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
  directionalLight.position.set(20, 20, 10);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 4096;
  directionalLight.shadow.mapSize.height = 4096;
  directionalLight.shadow.camera.near = 0.5;
  directionalLight.shadow.camera.far = 120;
  directionalLight.shadow.camera.left = -40;
  directionalLight.shadow.camera.right = 40;
  directionalLight.shadow.camera.top = 40;
  directionalLight.shadow.camera.bottom = -40;
  directionalLight.shadow.bias = -0.0001;
  directionalLight.shadow.radius = 20;
  scene.add(directionalLight);

  // Multiple colored point lights for rainbow effect
  const pointLights = [
    { color: 0xFF69B4, position: [-20, -20, -10], intensity: 0.4 },
    { color: 0x00CED1, position: [20, -20, 10], intensity: 0.35 },
    { color: 0xFFD700, position: [0, 25, 0], intensity: 0.3 },
    { color: 0x7FFF00, position: [-15, 15, 15], intensity: 0.25 },
    { color: 0x9370DB, position: [15, 15, -15], intensity: 0.3 }
  ];

  pointLights.forEach(lightConfig => {
    const pointLight = new THREE.PointLight(lightConfig.color, lightConfig.intensity, 50);
    pointLight.position.set(...lightConfig.position);
    pointLight.castShadow = true;
    pointLight.shadow.radius = 15;
    pointLight.shadow.mapSize.width = 1024;
    pointLight.shadow.mapSize.height = 1024;
    scene.add(pointLight);
  });

  // Hemisphere light for global illumination
  const hemisphereLight = new THREE.HemisphereLight(0x87CEEB, 0xFFB6C1, 0.3);
  scene.add(hemisphereLight);
};
