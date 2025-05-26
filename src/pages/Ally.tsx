
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
              <div className="text-center mb-12">
                <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
                  <span className="text-primary">Ally</span>
                </h1>
                <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                  Inclusive Financial Services Design
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">Focus</h3>
                  <p className="text-foreground/70">Financial Accessibility & Inclusion</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">Platform</h3>
                  <p className="text-foreground/70">Web & Mobile Banking</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">Scope</h3>
                  <p className="text-foreground/70">UX/UI Design & Research</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <img 
                  src="/lovable-uploads/ally-dashboard.jpg" 
                  alt="Ally Dashboard Interface" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <img 
                  src="/lovable-uploads/ally-mobile.jpg" 
                  alt="Ally Mobile Banking" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-semibold mb-6 text-primary">Project Overview</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  Designed accessible financial service interfaces with a focus on creating inclusive 
                  user experiences. The project centered on simplifying complex financial processes 
                  while ensuring full compliance with accessibility standards and regulations, making 
                  banking services truly accessible to all users.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <img 
                    src="/lovable-uploads/ally-accessibility.jpg" 
                    alt="Ally Accessibility Features" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                  <img 
                    src="/lovable-uploads/ally-transactions.jpg" 
                    alt="Ally Transaction Interface" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Design Challenges</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Accessibility First</h3>
                    <p className="text-foreground/70">Ensuring WCAG 2.1 AA compliance while maintaining intuitive user flows for all abilities and ensuring screen reader compatibility</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Complex Workflows</h3>
                    <p className="text-foreground/70">Simplifying banking processes without sacrificing functionality or security requirements</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Trust & Security</h3>
                    <p className="text-foreground/70">Building user confidence through transparent design and clear security indicators</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Cross-Platform Consistency</h3>
                    <p className="text-foreground/70">Maintaining unified experiences across web, mobile, and accessibility tools</p>
                  </div>
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Key Features</h2>
                <ul className="space-y-3 text-foreground/80 mb-8 text-lg">
                  <li>• Simplified account management with clear visual hierarchy and navigation</li>
                  <li>• Accessible transaction flows with screen reader optimization and keyboard navigation</li>
                  <li>• Inclusive design patterns supporting diverse user needs and disabilities</li>
                  <li>• Clear error handling and guidance systems with descriptive error messages</li>
                  <li>• Mobile-first responsive design with touch accessibility and gesture support</li>
                  <li>• High contrast modes and customizable display options for visual impairments</li>
                  <li>• Voice banking capabilities and audio feedback for transactions</li>
                </ul>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <img 
                    src="/lovable-uploads/ally-settings.jpg" 
                    alt="Ally Accessibility Settings" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                  <img 
                    src="/lovable-uploads/ally-transfers.jpg" 
                    alt="Ally Transfer Interface" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Design Process</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  Conducted extensive user research with diverse user groups including users with 
                  disabilities, elderly users, and those with varying levels of financial literacy. 
                  Utilized inclusive design methodologies and accessibility testing throughout the 
                  design process. Collaborated closely with accessibility experts, compliance teams, 
                  and assistive technology specialists to ensure all designs met regulatory requirements 
                  while providing excellent user experiences.
                </p>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Impact & Results</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  The redesigned interfaces significantly improved usability scores across all user 
                  segments, with particular success in serving users with accessibility needs. The 
                  project established new standards for inclusive financial design and compliance, 
                  resulting in industry recognition and improved customer satisfaction scores. The 
                  accessible design patterns were adopted across other Ally products and services.
                </p>

                <div className="flex flex-wrap gap-3 mt-8">
                  {["Financial Services", "Accessibility", "User Experience", "Interface Design", "Inclusive Design", "WCAG Compliance", "User Research"].map((tag, index) => (
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

export default Ally;
