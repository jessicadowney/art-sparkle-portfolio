
import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import ThreeBackground from '@/components/ThreeBackground';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Work from '@/components/Work';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <div className="min-h-screen relative">
        <ThreeBackground />
        <Header />
        <main>
          <Hero />
          <About />
          <Work />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
