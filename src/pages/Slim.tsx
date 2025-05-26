
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
              <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                Slim - <span className="text-primary">Health & Wellness Platform</span>
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Focus</h3>
                  <p className="text-foreground/70">Behavior Change & User Engagement</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Platform</h3>
                  <p className="text-foreground/70">Mobile Health Application</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Methodology</h3>
                  <p className="text-foreground/70">User-Centered Design</p>
                </div>
              </div>

              <div className="aspect-video bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-lg mb-8 flex items-center justify-center">
                <p className="text-foreground/60">Slim Health Platform Interface</p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  Developed user-centered design solutions for a comprehensive health and wellness platform focused on 
                  sustainable behavior change and long-term user engagement. The project emphasized creating interfaces 
                  that motivated users while maintaining simplicity and clarity throughout their wellness journey.
                </p>

                <h2 className="text-2xl font-semibold mb-4">Design Philosophy</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Behavioral Psychology</h3>
                    <p className="text-foreground/70">Applied behavioral design principles to encourage positive habit formation and sustained engagement.</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Motivational Design</h3>
                    <p className="text-foreground/70">Created reward systems and progress visualization to maintain user motivation.</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Simplicity First</h3>
                    <p className="text-foreground/70">Prioritized clear, uncluttered interfaces that reduce cognitive load during wellness activities.</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Personalization</h3>
                    <p className="text-foreground/70">Designed adaptive interfaces that evolve with user preferences and progress.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <ul className="space-y-3 text-foreground/80 mb-6">
                  <li>• Intuitive goal setting with personalized wellness plans</li>
                  <li>• Progress tracking with meaningful visualizations and celebrations</li>
                  <li>• Social features that foster community support and accountability</li>
                  <li>• Habit formation tools based on behavioral science research</li>
                  <li>• Seamless integration with health devices and apps</li>
                  <li>• Mindful notification systems that encourage without overwhelming</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4">Design Challenges</h2>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  The primary challenge was balancing motivation with sustainability. Many health apps suffer from 
                  high initial engagement followed by rapid drop-off. Our approach focused on creating gentle, 
                  consistent experiences that users could maintain long-term rather than intense short-term motivation.
                </p>

                <h2 className="text-2xl font-semibold mb-4">Research & Validation</h2>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  Conducted extensive user research including interviews with health professionals, behavioral 
                  psychologists, and users at various stages of their wellness journeys. Used A/B testing to 
                  validate design decisions and continuously refined the experience based on user feedback and 
                  engagement metrics.
                </p>

                <h2 className="text-2xl font-semibold mb-4">Impact</h2>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  The platform achieved significantly higher user retention rates compared to industry averages, 
                  with users reporting sustained engagement with their wellness goals over extended periods. 
                  The design patterns developed for Slim have been adopted across other health-focused products.
                </p>

                <div className="flex flex-wrap gap-2 mt-8">
                  {["Health Tech", "Behavior Design", "Mobile Experience", "User Engagement", "Wellness", "UX Research"].map((tag, index) => (
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

export default Slim;
