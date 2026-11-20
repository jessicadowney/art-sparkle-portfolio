import React, { lazy, Suspense, useEffect, useState } from 'react';

// Lazy wrapper: keeps three.js (~500KB) out of the main bundle. It starts loading only
// once the browser is idle, so it never competes with the first paint, and not at all
// when the visitor asked to save data.
const ThreeBackgroundImpl = lazy(() => import('./ThreeBackgroundImpl'));

const ThreeBackground: React.FC = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if ((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData) return;
    const w: { requestIdleCallback?: typeof window.requestIdleCallback } = window;
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(() => setReady(true), { timeout: 2000 });
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(() => setReady(true), 300); // Safari has no requestIdleCallback
    return () => window.clearTimeout(id);
  }, []);

  return ready ? (
    <Suspense fallback={null}>
      <ThreeBackgroundImpl />
    </Suspense>
  ) : null;
};

export default ThreeBackground;
