
import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import ThreeBackground from '@/components/ThreeBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const GoFetch = () => {
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
                  <span className="text-primary">GoFetch.ca</span>
                </h1>
                <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                  Pet Care Service Platform - Mobile & Web Design
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">Role</h3>
                  <p className="text-foreground/70">Head of Product Design & Senior Product Designer</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">Duration</h3>
                  <p className="text-foreground/70">November 2016 - May 2018</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">Platform</h3>
                  <p className="text-foreground/70">Web & iOS Application</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <img 
                  src="/lovable-uploads/gofetch-home.jpg" 
                  alt="GoFetch Home Screen" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <img 
                  src="/lovable-uploads/gofetch-sitter.jpg" 
                  alt="GoFetch Sitter Profile" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-semibold mb-6 text-primary">Project Overview</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  GoFetch.ca is a pet care service platform that connects pet owners with trusted sitters. 
                  As Head of Product Design and Senior Product Designer, I led the complete redesign of 
                  the platform, creating unified experiences across web and iOS while diversifying service 
                  offerings and improving user engagement.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <img 
                    src="/lovable-uploads/gofetch-booking.jpg" 
                    alt="GoFetch Booking Flow" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                  <img 
                    src="/lovable-uploads/gofetch-dashboard.jpg" 
                    alt="GoFetch Dashboard" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Key Responsibilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">iOS App Redesign</h3>
                    <p className="text-foreground/70">Redesigned the GoFetch iOS application to diversify service offering and create unified experience across platforms</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Design Systems</h3>
                    <p className="text-foreground/70">Created and maintained comprehensive UI style guides for web and iOS platforms</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">UX Direction</h3>
                    <p className="text-foreground/70">Provided UX and art direction for complete web platform redesign</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Requirements & Architecture</h3>
                    <p className="text-foreground/70">Led requirements definition and UX architecture for new features</p>
                  </div>
                </div>

                <ul className="space-y-3 text-foreground/80 mb-8 text-lg">
                  <li>• Designed wireframes, UI mockups, and prototypes for sitter onboarding and dashboard features</li>
                  <li>• Implemented new UI components using HTML/SASS and React JS</li>
                  <li>• Facilitated design meetings and brainstorming sessions for new feature development</li>
                  <li>• Defined and updated UX and product requirements throughout the project lifecycle</li>
                </ul>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <img 
                    src="/lovable-uploads/gofetch-mobile.jpg" 
                    alt="GoFetch Mobile Experience" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                  <img 
                    src="/lovable-uploads/gofetch-onboarding.jpg" 
                    alt="GoFetch Onboarding Flow" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Design Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Research & Strategy</h3>
                    <p className="text-foreground/70">Conducted user research to understand pain points in pet care booking and sitter management workflows</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Cross-Platform Design</h3>
                    <p className="text-foreground/70">Developed comprehensive style guides ensuring consistency across web and mobile platforms</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Prototyping & Testing</h3>
                    <p className="text-foreground/70">Created interactive prototypes for user testing and stakeholder validation</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Implementation Collaboration</h3>
                    <p className="text-foreground/70">Worked closely with development teams to ensure pixel-perfect implementation of designs</p>
                  </div>
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Key Outcomes</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  Successfully launched a redesigned platform that improved user engagement and simplified 
                  the pet care booking process. The unified design system reduced development time and 
                  ensured consistent user experiences across all touchpoints. The project resulted in 
                  increased user satisfaction and platform adoption.
                </p>

                <div className="flex flex-wrap gap-3 mt-8">
                  {["Product Design", "iOS Design", "Web Platform", "UI Systems", "User Research", "Prototyping", "Design Leadership"].map((tag, index) => (
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

export default GoFetch;
