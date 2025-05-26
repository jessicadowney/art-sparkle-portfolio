
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
                  Pet Care Service Platform
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">Role</h3>
                  <p className="text-foreground/70">Head of Product Design<br/>Senior Product Designer</p>
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

              <div className="mb-12">
                <img 
                  src="https://jessicadowney.com/wp-content/uploads/2024/01/GoFetch-Header.jpg" 
                  alt="GoFetch App Overview" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-semibold mb-6 text-primary">Project Overview</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  GoFetch is a pet care service platform that connects pet owners with trusted sitters 
                  for services ranging from dog walking to overnight care. As the Head of Product Design 
                  and Senior Product Designer, I led the complete redesign of both the iOS application 
                  and web platform, creating unified experiences while diversifying service offerings.
                </p>

                <div className="mb-12">
                  <img 
                    src="https://jessicadowney.com/wp-content/uploads/2024/01/GoFetch-iPhone-Mockups.jpg" 
                    alt="GoFetch iPhone App Screens" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">My Role & Responsibilities</h2>
                <ul className="space-y-3 text-foreground/80 mb-8 text-lg">
                  <li>• Redesigned the GoFetch iOS application to diversify service offering and create unified experience</li>
                  <li>• Created and maintained UI style guides for web and iOS platforms</li>
                  <li>• Provided UX and art direction for complete web platform redesign</li>
                  <li>• Led requirements definition and UX architecture for new features</li>
                  <li>• Designed wireframes, UI mockups, and prototypes for sitter onboarding and dashboard</li>
                  <li>• Implemented new UI components using HTML/SASS and React JS</li>
                  <li>• Facilitated design meetings and brainstorming sessions</li>
                </ul>

                <div className="mb-12">
                  <img 
                    src="https://jessicadowney.com/wp-content/uploads/2024/01/GoFetch-Desktop.jpg" 
                    alt="GoFetch Web Platform" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">The Challenge</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  The original GoFetch platform had limited service offerings and inconsistent experiences 
                  across web and mobile. Pet owners needed a more comprehensive platform that could handle 
                  various pet care services while maintaining trust and reliability. The design needed to 
                  accommodate both pet owners seeking care and sitters offering services.
                </p>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Design Process</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  I began with extensive user research to understand the pain points of both pet owners 
                  and pet sitters. Through interviews and usability testing, I identified key areas for 
                  improvement in the booking flow, communication tools, and service management.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <img 
                    src="https://jessicadowney.com/wp-content/uploads/2024/01/GoFetch-Wireframes.jpg" 
                    alt="GoFetch Wireframes" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                  <img 
                    src="https://jessicadowney.com/wp-content/uploads/2024/01/GoFetch-UserFlow.jpg" 
                    alt="GoFetch User Flow" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Key Features Designed</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Enhanced Booking Flow</h3>
                    <p className="text-foreground/70">Streamlined the process for pet owners to book services with clear pricing and availability</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Sitter Dashboard</h3>
                    <p className="text-foreground/70">Comprehensive dashboard for sitters to manage bookings, availability, and earnings</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Real-time Updates</h3>
                    <p className="text-foreground/70">Live updates and photo sharing during pet care sessions for peace of mind</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Trust & Safety</h3>
                    <p className="text-foreground/70">Enhanced verification processes and safety features for both pets and sitters</p>
                  </div>
                </div>

                <div className="mb-12">
                  <img 
                    src="https://jessicadowney.com/wp-content/uploads/2024/01/GoFetch-Final-Screens.jpg" 
                    alt="GoFetch Final App Screens" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Results & Impact</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  The redesigned platform successfully launched with improved user engagement and expanded 
                  service offerings. The unified design system reduced development time and ensured 
                  consistent experiences across all touchpoints. User satisfaction scores increased 
                  significantly, and the platform was able to accommodate new types of pet care services.
                </p>

                <div className="flex flex-wrap gap-3 mt-8">
                  {["Product Design", "iOS Design", "Web Platform", "UI Systems", "User Research", "Prototyping", "React", "HTML/SASS"].map((tag, index) => (
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
