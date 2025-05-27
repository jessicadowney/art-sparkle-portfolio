
import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import ThreeBackground from '@/components/ThreeBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Slim = () => {
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
                  <span className="text-primary">Slim</span>
                </h1>
                <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                  Health & Wellness Platform
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">Role</h3>
                  <p className="text-foreground/70">Product Designer</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">Duration</h3>
                  <p className="text-foreground/70">January 2018 - June 2018</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">Platform</h3>
                  <p className="text-foreground/70">Mobile Health Application</p>
                </div>
              </div>

              <div className="mb-12">
                <img 
                  src="https://jessicadowney.com/wp-content/uploads/2024/01/Slim-Header.jpg" 
                  alt="Slim Health App Overview" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-semibold mb-6 text-primary">Project Overview</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  Slim is a comprehensive health and wellness platform that focuses on sustainable 
                  behavior change and long-term user engagement. As the Product Designer, I developed 
                  user-centered design solutions that motivated users while maintaining simplicity 
                  and clarity throughout their wellness journey.
                </p>

                <div className="mb-12">
                  <img 
                    src="https://jessicadowney.com/wp-content/uploads/2024/01/Slim-iPhone-Mockups.jpg" 
                    alt="Slim Mobile App Screens" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Design Challenge</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  The primary challenge was creating a health platform that could drive lasting 
                  behavior change without relying on addictive design patterns. Many health apps 
                  see high initial engagement followed by rapid drop-off. Our goal was to design 
                  sustainable motivation systems that users could maintain long-term.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Behavioral Psychology</h3>
                    <p className="text-foreground/70">Applied research-backed principles to encourage positive habit formation</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Sustainable Motivation</h3>
                    <p className="text-foreground/70">Created reward systems that promote intrinsic rather than external motivation</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Simplicity First</h3>
                    <p className="text-foreground/70">Prioritized clear, uncluttered interfaces that reduce cognitive load</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Personalization</h3>
                    <p className="text-foreground/70">Designed adaptive interfaces that evolve with user progress and preferences</p>
                  </div>
                </div>

                <div className="mb-12">
                  <img 
                    src="https://jessicadowney.com/wp-content/uploads/2024/01/Slim-User-Journey.jpg" 
                    alt="Slim User Journey Map" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Key Features Designed</h2>
                <ul className="space-y-3 text-foreground/80 mb-8 text-lg">
                  <li>• Intuitive goal setting with personalized wellness plans</li>
                  <li>• Progress tracking with meaningful visualizations</li>
                  <li>• Social features that foster community support without comparison pressure</li>
                  <li>• Habit formation tools based on behavioral science research</li>
                  <li>• Seamless integration with health devices and apps</li>
                  <li>• Mindful notification systems that encourage without overwhelming</li>
                  <li>• Educational content delivery with bite-sized, actionable tips</li>
                </ul>

                <div className="mb-12">
                  <img 
                    src="https://jessicadowney.com/wp-content/uploads/2024/01/Slim-Wireframes.jpg" 
                    alt="Slim App Wireframes" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Design Process</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  I began with extensive research into behavioral psychology and sustainable habit 
                  formation. Through user interviews and analysis of existing health platforms, I 
                  identified key factors that contribute to long-term engagement versus quick burnout.
                </p>

                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  The design process involved creating and testing multiple prototypes with users 
                  at different stages of their wellness journeys. I collaborated with behavioral 
                  psychologists and health professionals to ensure the interface supported 
                  scientifically-backed approaches to behavior change.
                </p>

                <div className="mb-12">
                  <img 
                    src="https://jessicadowney.com/wp-content/uploads/2024/01/Slim-Final-Designs.jpg" 
                    alt="Slim Final App Designs" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Research & Validation</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  Conducted extensive user research including interviews with health professionals 
                  and users at various stages of their wellness journeys. Used A/B testing to 
                  validate design decisions and continuously refined the experience based on user 
                  feedback and engagement metrics. The research revealed that gentle, consistent 
                  experiences led to better long-term outcomes than intense short-term motivation.
                </p>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Results & Impact</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  The platform achieved significantly higher user retention rates compared to 
                  industry averages, with users reporting sustained engagement with their wellness 
                  goals. The design patterns developed for Slim influenced industry standards for 
                  ethical engagement in health technology, prioritizing long-term user wellbeing 
                  over short-term engagement metrics.
                </p>

                <div className="flex flex-wrap gap-3 mt-8">
                  {["Health Tech", "Behavior Design", "Mobile UX", "User Research", "Psychology", "Wellness", "Habit Formation"].map((tag, index) => (
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

export default Slim;
