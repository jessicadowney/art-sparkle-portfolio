import React, { useEffect } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import ThreeBackground from '@/components/ThreeBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useSeo } from '@/hooks/useSeo';

// TODO: every "TODO" string below is a placeholder to replace with real content.
const FrontierTuning = () => {
  const navigate = useNavigate();
  useSeo({
    title: 'Frontier Tuning — Microsoft Copilot Extensibility',
    description: 'TODO: one-sentence summary of the case study for search and social previews.',
    path: '/frontier-tuning',
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <div className="min-h-screen relative">
        <ThreeBackground />
        <Header />
        <main id="main-content" tabIndex={-1} className="pt-24 pb-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="mb-8 text-primary hover:text-primary/80"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>

            <div className="glass-container rounded-lg p-6 md:p-8 mb-8">
              <div className="text-center mb-12">
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  2025
                </div>
                <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
                  Frontier <span className="text-primary">Tuning</span>
                </h1>
                <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                  TODO: one-line subtitle
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">Role</h3>
                  <p className="text-foreground/70">Senior Product Designer</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">Company</h3>
                  <p className="text-foreground/70">Microsoft - Copilot Extensibility</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">Platform</h3>
                  <p className="text-foreground/70">TODO</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="bg-accent/30 rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-primary">TL;DR</h2>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• TODO: the problem</li>
                    <li>• TODO: what you led / owned</li>
                    <li>• TODO: the outcome</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">The Problem</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">TODO</p>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">Design Process</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">TODO</p>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">Results</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">TODO</p>

                <div className="flex flex-wrap gap-3 mt-8">
                  {["Product Design", "AI/ML", "Copilot Extensibility"].map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default FrontierTuning;
