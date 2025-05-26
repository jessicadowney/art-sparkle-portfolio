
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
              <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                GoFetch.ca - <span className="text-primary">Pet Care Service Platform</span>
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Role</h3>
                  <p className="text-foreground/70">Head of Product Design & Senior Product Designer</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Duration</h3>
                  <p className="text-foreground/70">November 2016 - May 2018</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Platform</h3>
                  <p className="text-foreground/70">Web & iOS Application</p>
                </div>
              </div>

              <div className="aspect-video bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-lg mb-8 flex items-center justify-center">
                <p className="text-foreground/60">GoFetch.ca Platform Preview</p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  Led the complete redesign of GoFetch.ca, a pet care service platform that connects pet owners with trusted sitters. 
                  The project involved creating unified experiences across web and iOS platforms while diversifying service offerings 
                  and improving user engagement.
                </p>

                <h2 className="text-2xl font-semibold mb-4">Key Responsibilities</h2>
                <ul className="space-y-3 text-foreground/80 mb-6">
                  <li>• Redesigned the GoFetch iOS application to diversify service offering and create unified experience across platforms</li>
                  <li>• Created and maintained comprehensive UI style guides for web and iOS platforms</li>
                  <li>• Provided UX and art direction for complete web platform redesign</li>
                  <li>• Led requirements definition and UX architecture for new features</li>
                  <li>• Designed wireframes, UI mockups, and prototypes for sitter onboarding and dashboard features</li>
                  <li>• Implemented new UI components using HTML/SASS and React JS</li>
                  <li>• Facilitated design meetings and brainstorming sessions for new feature development</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4">Design Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Research & Strategy</h3>
                    <p className="text-foreground/70">Conducted user research to understand pain points in pet care booking and sitter management workflows.</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Design Systems</h3>
                    <p className="text-foreground/70">Developed comprehensive style guides ensuring consistency across web and mobile platforms.</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Prototyping</h3>
                    <p className="text-foreground/70">Created interactive prototypes for user testing and stakeholder validation.</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Implementation</h3>
                    <p className="text-foreground/70">Collaborated with development teams to ensure pixel-perfect implementation of designs.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold mb-4">Key Outcomes</h2>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  Successfully launched a redesigned platform that improved user engagement and simplified the pet care booking process. 
                  The unified design system reduced development time and ensured consistent user experiences across all touchpoints.
                </p>

                <div className="flex flex-wrap gap-2 mt-8">
                  {["Product Design", "iOS Design", "Web Platform", "UI Systems", "User Research", "Prototyping"].map((tag, index) => (
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

export default GoFetch;
