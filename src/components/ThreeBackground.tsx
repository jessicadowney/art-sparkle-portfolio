import React, { lazy, Suspense } from 'react';

// Lazy wrapper: keeps three.js (~600KB) out of the main bundle so pages
// render immediately; the background fades in once its chunk loads.
const ThreeBackgroundImpl = lazy(() => import('./ThreeBackgroundImpl'));

const ThreeBackground: React.FC = () => (
  <Suspense fallback={null}>
    <ThreeBackgroundImpl />
  </Suspense>
);

export default ThreeBackground;
