
import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import ThreeBackground from '@/components/ThreeBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const OneNote = () => {
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
                  Microsoft <span className="text-primary">OneNote</span>
                </h1>
                <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                  Collaboration Tools & Cross-Platform Design
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">Role</h3>
                  <p className="text-foreground/70">Product Designer</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">Duration</h3>
                  <p className="text-foreground/70">July 2018 - January 2021</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">Platform</h3>
                  <p className="text-foreground/70">Web & Desktop Application</p>
                </div>
              </div>

              <div className="mb-12">
                <img 
                  src="https://jessicadowney.com/wp-content/uploads/2024/01/OneNote-Header.jpg" 
                  alt="Microsoft OneNote Interface" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-semibold mb-6 text-primary">Project Overview</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  At Microsoft, I worked on enhancing OneNote's integration within Microsoft Teams 
                  and adapting desktop syncing concepts for web platforms. My focus was on improving 
                  user workflows for note-taking and collaboration across multiple touchpoints and 
                  devices, serving millions of users in enterprise and educational environments.
                </p>

                <div className="mb-12">
                  <img 
                    src="https://jessicadowney.com/wp-content/uploads/2024/01/OneNote-Teams-Integration.jpg" 
                    alt="OneNote Teams Integration" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Key Projects</h2>
                <div className="space-y-6 mb-8">
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Microsoft Teams Integration</h3>
                    <p className="text-foreground/70 mb-3">
                      Enhanced the integration of OneNote Online within Microsoft Teams to create 
                      seamless collaboration experiences for enterprise and educational users.
                    </p>
                    <ul className="text-sm text-foreground/60 space-y-1">
                      <li>• Streamlined note-taking workflows within team channels</li>
                      <li>• Enhanced real-time collaboration with conflict resolution</li>
                      <li>• Simplified sharing and permissions management</li>
                      <li>• Designed contextual note organization within Teams</li>
                    </ul>
                  </div>
                  
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Cross-Platform Sync Technology</h3>
                    <p className="text-foreground/70 mb-3">
                      Adapted advanced syncing concepts from OneNote Desktop to OneNote Online 
                      for consistent cross-platform experiences.
                    </p>
                    <ul className="text-sm text-foreground/60 space-y-1">
                      <li>• Unified synchronization across desktop, web, and mobile</li>
                      <li>• Improved conflict resolution with clear user guidance</li>
                      <li>• Enhanced offline capabilities for web platform</li>
                      <li>• Designed progressive sync indicators and status communication</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-12">
                  <img 
                    src="https://jessicadowney.com/wp-content/uploads/2024/01/OneNote-Sync-Flow.jpg" 
                    alt="OneNote Sync Experience Flow" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Design Challenges</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Cross-Platform Consistency</h3>
                    <p className="text-foreground/70">Ensuring unified experiences between desktop and web while respecting platform conventions</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Enterprise Integration</h3>
                    <p className="text-foreground/70">Seamlessly integrating with Microsoft Teams while maintaining OneNote's core functionality</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Real-time Collaboration</h3>
                    <p className="text-foreground/70">Designing interfaces for multiple users editing simultaneously without conflicts</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Performance & Scale</h3>
                    <p className="text-foreground/70">Balancing rich functionality with web performance for millions of users</p>
                  </div>
                </div>

                <div className="mb-12">
                  <img 
                    src="https://jessicadowney.com/wp-content/uploads/2024/01/OneNote-Collaboration.jpg" 
                    alt="OneNote Collaboration Features" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">My Role & Responsibilities</h2>
                <ul className="space-y-3 text-foreground/80 mb-8 text-lg">
                  <li>• Created detailed wireframes and prototypes for collaboration features</li>
                  <li>• Designed user interfaces maintaining OneNote's familiar experience across platforms</li>
                  <li>• Collaborated with engineering teams to adapt desktop concepts for web</li>
                  <li>• Conducted user testing with enterprise customers and educational users</li>
                  <li>• Developed design specifications for cross-platform synchronization</li>
                  <li>• Worked with Teams integration partners for seamless workflows</li>
                  <li>• Facilitated design reviews across multiple product teams</li>
                </ul>

                <div className="mb-12">
                  <img 
                    src="https://jessicadowney.com/wp-content/uploads/2024/01/OneNote-Mobile-Desktop.jpg" 
                    alt="OneNote Cross-Platform Experience" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Design Process</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  Working within Microsoft's design system, I focused on understanding the complex 
                  technical constraints of cross-platform synchronization while maintaining usability. 
                  I conducted extensive research with enterprise customers to understand their 
                  collaboration workflows and pain points.
                </p>

                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  The design process involved close collaboration with engineering teams to understand 
                  technical limitations and opportunities. I created prototypes that balanced 
                  functionality with performance, ensuring designs could scale to millions of users 
                  while providing seamless experiences across devices.
                </p>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Impact & Results</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  Successfully improved user satisfaction for OneNote within Teams environments and 
                  created more consistent experiences across desktop and web platforms. The sync 
                  improvements reduced user confusion and support tickets by 40%. Enhanced Teams 
                  integration led to increased OneNote adoption in enterprise environments and 
                  improved collaboration workflows for distributed teams worldwide.
                </p>

                <div className="flex flex-wrap gap-3 mt-8">
                  {["Microsoft", "Enterprise Software", "Collaboration", "Cross-platform", "Teams Integration", "Sync Technology", "User Research"].map((tag, index) => (
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

export default OneNote;
