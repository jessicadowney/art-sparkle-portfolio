import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import ThreeBackground from '@/components/ThreeBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// One shared shell: the 3D background keeps running while the page inside changes.
const Layout: React.FC = () => (
  <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
    <div className="min-h-screen relative">
      <ThreeBackground />
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  </ThemeProvider>
);

export default Layout;
