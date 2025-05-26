
import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import ThreeBackground from '@/components/ThreeBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Ally = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <div className="min-h-screen relative">
        <ThreeBackground />
        <Header />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="mb-8 text-primary hover:text-primary/80"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
            
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 mb-8">
              <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                Ally - <span className="text-primary">Inclusive Financial Services</span>
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Focus</h3>
                  <p className="text-foreground/70">Financial Accessibility & Inclusion</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Platform</h3>
                  <p className="text-foreground/70">Web & Mobile Banking</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Scope</h3>
                  <p className="text-foreground/70">UX/UI Design & Research</p>
                </div>
              </div>

              <div className="aspect-video bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-lg mb-8 flex items-center justify-center">
                <p className="text-foreground/60">Ally Financial Services Interface</p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  Designed accessible financial service interfaces with a focus on creating inclusive user experiences. 
                  The project centered on simplifying complex financial processes while ensuring full compliance with 
                  accessibility standards and regulations.
                </p>

                <h2 className="text-2xl font-semibold mb-4">Design Challenges</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Accessibility First</h3>
                    <p className="text-foreground/70">Ensuring WCAG 2.1 AA compliance while maintaining intuitive user flows for all abilities.</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Complex Workflows</h3>
                    <p className="text-foreground/70">Simplifying banking processes without sacrificing functionality or security requirements.</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Trust & Security</h3>
                    <p className="text-foreground/70">Building user confidence through transparent design and clear security indicators.</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Cross-Platform Consistency</h3>
                    <p className="text-foreground/70">Maintaining unified experiences across web, mobile, and accessibility tools.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <ul className="space-y-3 text-foreground/80 mb-6">
                  <li>• Simplified account management with clear visual hierarchy and navigation</li>
                  <li>• Accessible transaction flows with screen reader optimization</li>
                  <li>• Inclusive design patterns supporting diverse user needs</li>
                  <li>• Clear error handling and guidance systems</li>
                  <li>• Mobile-first responsive design with touch accessibility</li>
                  <li>• High contrast modes and customizable display options</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4">Design Process</h2>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  Conducted extensive user research with diverse user groups including users with disabilities. 
                  Utilized inclusive design methodologies and accessibility testing throughout the design process. 
                  Collaborated closely with accessibility experts and compliance teams to ensure all designs met 
                  regulatory requirements while providing excellent user experiences.
                </p>

                <h2 className="text-2xl font-semibold mb-4">Impact</h2>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  The redesigned interfaces significantly improved usability scores across all user segments, 
                  with particular success in serving users with accessibility needs. The project established 
                  new standards for inclusive financial design and compliance.
                </p>

                <div className="flex flex-wrap gap-2 mt-8">
                  {["Financial Services", "Accessibility", "User Experience", "Interface Design", "Inclusive Design", "WCAG Compliance"].map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
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

export default Ally;
