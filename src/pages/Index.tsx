
import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Work from '@/components/Work';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import { useSeo } from '@/hooks/useSeo';

const Index = () => {
  useSeo({ path: '/' });
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <About />
      <Work />
      <Experience />
      <Contact />
    </main>
  );
};

export default Index;
