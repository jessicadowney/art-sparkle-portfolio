
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
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  2018
                </div>
                <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
                  <span className="text-primary">GoFetch.ca</span> Case Study
                </h1>
                <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                  Pet Care Service Platform
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">Role</h3>
                  <p className="text-foreground/70">Lead Product Designer<br/>Head of Design</p>
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

              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-semibold mb-6 text-primary">Overview</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  GoFetch.ca set out to simplify dog ownership by connecting dog parents with trusted care providers. 
                  The platform offered services like boarding, dog walking, daycare, and house sitting. I joined the 
                  company in November 2016, when the team was operating from a basement in Vancouver and included two 
                  cofounders, four engineers, and one junior designer. As the team grew, I led the design practice 
                  and brought on an illustrator to support the brand and product experience.
                </p>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">My Role</h3>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• Lead Product Designer and Head of Design</li>
                    <li>• UX research, wireframing, interaction design, and UI</li>
                    <li>• Branding and design system development</li>
                    <li>• Art direction and hiring</li>
                  </ul>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Results</h3>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• Created a cross-platform design system</li>
                    <li>• Doubled sitter conversion rate (6% to 12%)</li>
                    <li>• Brought brand and UX consistency to a fragmented product</li>
                  </ul>
                </div>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">Challenge #1: Platform Discrepancies</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  GoFetch originally launched as an iOS app offering dog walking only. Later, the company expanded 
                  services through a website modeled after Airbnb (circa 2016). However, this resulted in fragmented experiences:
                </p>

                <div className="mb-8 text-center">
                  <img 
                    src="/lovable-uploads/gfinitialioshome.png" 
                    alt="Initial iOS Home Screen" 
                    className="rounded-lg shadow-lg h-auto bg-white p-2 max-h-96 mx-auto"
                  />
                </div>

                <ul className="space-y-2 text-foreground/80 text-lg mb-8">
                  <li>• The app and website used different information architectures and terminology</li>
                  <li>• Users struggled to navigate due to inconsistent structure</li>
                  <li>• The web platform prioritized boarding, while the app only highlighted walking</li>
                </ul>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <img 
                      src="/lovable-uploads/GoFetch-Web-Home.png" 
                      alt="GoFetch Web Home Page" 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    />
                  </div>
                  <div>
                    <img 
                      src="/lovable-uploads/Old-GoFetch-Web-Find.png" 
                      alt="Old GoFetch Web Find Page" 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <img 
                    src="/lovable-uploads/Old-GoFetch-Web-Sitter.png" 
                    alt="Old GoFetch Web Sitter Profile" 
                    className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                  />
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Examples of the problem:</h3>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• iOS and web homepages showed different services</li>
                    <li>• Key navigation labels were inconsistent</li>
                    <li>• Web design borrowed from Airbnb's focus on spaces, which didn't translate to pet care</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold mb-6 text-primary">The Solution: Unified Design System & Navigation</h3>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  To address these issues, I created a brand and design system applied across both iOS and web platforms. This included:
                </p>

                <div className="mb-8">
                  <img 
                    src="/lovable-uploads/gofetch-sitemaps.png" 
                    alt="GoFetch Site Maps and Information Architecture" 
                    className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                  />
                </div>

                <div className="mb-8">
                  <img 
                    src="/lovable-uploads/gf-brand-square001.png" 
                    alt="GoFetch Brand Guidelines" 
                    className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                  />
                </div>

                <ul className="space-y-2 text-foreground/80 text-lg mb-8">
                  <li>• A cohesive visual identity with shared UI components</li>
                  <li>• Color palette, button styles, type system, and iconography</li>
                  <li>• Consistent naming and IA across all platforms</li>
                </ul>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <img 
                      src="/lovable-uploads/GoFetch_UI_Kit_1.png" 
                      alt="GoFetch UI Kit Part 1" 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    />
                  </div>
                  <div>
                    <img 
                      src="/lovable-uploads/GoFetch_UI_Kit_2.png" 
                      alt="GoFetch UI Kit Part 2" 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-3 text-primary">Key updates:</h4>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Aligned homepage layouts for app and web</li>
                    <li>• Introduced tabs for core services (walks, boarding, daycare)</li>
                    <li>• Redesigned search and profile experiences to reflect consistent logic</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <img 
                      src="/lovable-uploads/homepage-integration.png" 
                      alt="Homepage Integration" 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    />
                  </div>
                  <div>
                    <img 
                      src="/lovable-uploads/search-integration.png" 
                      alt="Search Integration" 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    />
                  </div>
                  <div>
                    <img 
                      src="/lovable-uploads/dashboard-integration.png" 
                      alt="Dashboard Integration" 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    />
                  </div>
                </div>

                <div className="mb-8 text-center">
                  <img 
                    src="/lovable-uploads/gfios-home.png" 
                    alt="Updated GoFetch iOS Home Screen" 
                    className="rounded-lg shadow-lg h-auto bg-white p-2 max-h-96 mx-auto"
                  />
                </div>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">Challenge #2: Improving Pet Sitter Application Conversion</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  When GoFetch expanded into peer-to-peer services, the sitter application process became a critical funnel. However:
                </p>

                <div className="mb-8">
                  <img 
                    src="/lovable-uploads/gfinitialsprprocess.png" 
                    alt="Initial Service Provider Process" 
                    className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                  />
                </div>

                <ul className="space-y-2 text-foreground/80 text-lg mb-8">
                  <li>• Only 6% of potential sitters completed their profiles</li>
                  <li>• Out of 1,394 applicants, only 260 were onboarded</li>
                  <li>• Most traffic came from mobile, but the form was not responsive</li>
                  <li>• Error handling and input validation were poor</li>
                </ul>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <img 
                      src="/lovable-uploads/gfga1.png" 
                      alt="Google Analytics Data Part 1" 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    />
                  </div>
                  <div>
                    <img 
                      src="/lovable-uploads/gfga2.png" 
                      alt="Google Analytics Data Part 2" 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <img 
                    src="/lovable-uploads/gfinitialmobilesp.png" 
                    alt="Initial Mobile Service Provider Experience" 
                    className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                  />
                </div>

                <h3 className="text-2xl font-semibold mb-6 text-primary">The Solution: Mobile-First, Guided Application Flow</h3>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  I redesigned the sitter application as a mobile-first experience, introducing:
                </p>

                <ul className="space-y-2 text-foreground/80 text-lg mb-8">
                  <li>• A multi-step wizard for first-time users</li>
                  <li>• A two-level nav for returning applicants</li>
                  <li>• Per-step validation and better error recovery</li>
                  <li>• Responsive form layout across devices</li>
                </ul>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <img 
                      src="/lovable-uploads/gfwiz1.png" 
                      alt="GoFetch Wizard Step 1" 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    />
                  </div>
                  <div>
                    <img 
                      src="/lovable-uploads/gfwiz2.png" 
                      alt="GoFetch Wizard Step 2" 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    />
                  </div>
                  <div>
                    <img 
                      src="/lovable-uploads/gfwiz3.png" 
                      alt="GoFetch Wizard Step 3" 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <img 
                    src="/lovable-uploads/newgfspform.png" 
                    alt="New GoFetch Service Provider Form" 
                    className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <img 
                      src="/lovable-uploads/aboutyou-ftu.png" 
                      alt="About You - First Time User Flow" 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    />
                  </div>
                  <div>
                    <img 
                      src="/lovable-uploads/aboutyou-ru.png" 
                      alt="About You - Returning User Flow" 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mb-6 text-primary">Results</h3>
                <ul className="space-y-2 text-foreground/80 text-lg mb-8">
                  <li>• Doubled conversion from 6% to 12%</li>
                  <li>• Improved user satisfaction and decreased abandonment</li>
                  <li>• Set foundation for future service provider onboarding improvements</li>
                </ul>

                <div className="flex flex-wrap gap-3 mt-8">
                  {["Product Design", "Design Systems", "Mobile UX", "Conversion Optimization", "Brand Design", "User Research", "Information Architecture"].map((tag, index) => (
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
