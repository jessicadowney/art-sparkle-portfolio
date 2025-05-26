
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
                  Health & Wellness Platform Design
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">Focus</h3>
                  <p className="text-foreground/70">Behavior Change & User Engagement</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">Platform</h3>
                  <p className="text-foreground/70">Mobile Health Application</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">Methodology</h3>
                  <p className="text-foreground/70">User-Centered Design</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <img 
                  src="/lovable-uploads/slim-onboarding.jpg" 
                  alt="Slim Onboarding Experience" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <img 
                  src="/lovable-uploads/slim-dashboard.jpg" 
                  alt="Slim Health Dashboard" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-semibold mb-6 text-primary">Project Overview</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  Developed user-centered design solutions for a comprehensive health and wellness 
                  platform focused on sustainable behavior change and long-term user engagement. 
                  The project emphasized creating interfaces that motivated users while maintaining 
                  simplicity and clarity throughout their wellness journey, utilizing behavioral 
                  psychology principles to drive lasting habit formation.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <img 
                    src="/lovable-uploads/slim-tracking.jpg" 
                    alt="Slim Progress Tracking" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                  <img 
                    src="/lovable-uploads/slim-goals.jpg" 
                    alt="Slim Goal Setting" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Design Philosophy</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Behavioral Psychology</h3>
                    <p className="text-foreground/70">Applied behavioral design principles to encourage positive habit formation and sustained engagement through scientifically-backed motivational techniques</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Motivational Design</h3>
                    <p className="text-foreground/70">Created reward systems and progress visualization to maintain user motivation without creating dependency or addiction</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Simplicity First</h3>
                    <p className="text-foreground/70">Prioritized clear, uncluttered interfaces that reduce cognitive load during wellness activities and decision-making</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Personalization</h3>
                    <p className="text-foreground/70">Designed adaptive interfaces that evolve with user preferences and progress, providing tailored experiences</p>
                  </div>
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Key Features</h2>
                <ul className="space-y-3 text-foreground/80 mb-8 text-lg">
                  <li>• Intuitive goal setting with personalized wellness plans based on user lifestyle and preferences</li>
                  <li>• Progress tracking with meaningful visualizations and milestone celebrations</li>
                  <li>• Social features that foster community support and accountability without comparison pressure</li>
                  <li>• Habit formation tools based on behavioral science research and proven methodologies</li>
                  <li>• Seamless integration with health devices and apps for comprehensive data tracking</li>
                  <li>• Mindful notification systems that encourage without overwhelming or interrupting</li>
                  <li>• Educational content delivery system with bite-sized, actionable wellness tips</li>
                </ul>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <img 
                    src="/lovable-uploads/slim-social.jpg" 
                    alt="Slim Social Features" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                  <img 
                    src="/lovable-uploads/slim-insights.jpg" 
                    alt="Slim Health Insights" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Design Challenges</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  The primary challenge was balancing motivation with sustainability. Many health apps 
                  suffer from high initial engagement followed by rapid drop-off. Our approach focused 
                  on creating gentle, consistent experiences that users could maintain long-term rather 
                  than intense short-term motivation. We had to carefully design reward mechanisms 
                  that promoted intrinsic motivation rather than external validation dependency.
                </p>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Research & Validation</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  Conducted extensive user research including interviews with health professionals, 
                  behavioral psychologists, and users at various stages of their wellness journeys. 
                  Used A/B testing to validate design decisions and continuously refined the experience 
                  based on user feedback and engagement metrics. Partnered with universities to study 
                  long-term behavior change patterns and incorporated findings into the design strategy.
                </p>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Impact & Results</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  The platform achieved significantly higher user retention rates compared to industry 
                  averages, with users reporting sustained engagement with their wellness goals over 
                  extended periods. The design patterns developed for Slim have been adopted across 
                  other health-focused products and have influenced industry standards for ethical 
                  engagement in health technology. User studies showed measurable improvements in 
                  long-term habit formation and wellness outcomes.
                </p>

                <div className="flex flex-wrap gap-3 mt-8">
                  {["Health Tech", "Behavior Design", "Mobile Experience", "User Engagement", "Wellness", "UX Research", "Psychology", "Habit Formation"].map((tag, index) => (
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
