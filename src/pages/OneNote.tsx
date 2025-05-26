
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
              <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                Microsoft OneNote - <span className="text-primary">Collaboration Tools</span>
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Role</h3>
                  <p className="text-foreground/70">Product Designer</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Duration</h3>
                  <p className="text-foreground/70">July 2018 - January 2021</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Platform</h3>
                  <p className="text-foreground/70">Web & Desktop Application</p>
                </div>
              </div>

              <div className="aspect-video bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-lg mb-8 flex items-center justify-center">
                <p className="text-foreground/60">Microsoft OneNote Interface</p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  Enhanced OneNote's integration within Microsoft Teams and adapted desktop syncing concepts for web platforms. 
                  Focused on improving user workflows for note-taking and collaboration across multiple touchpoints and devices 
                  within the Microsoft ecosystem.
                </p>

                <h2 className="text-2xl font-semibold mb-4">Key Projects</h2>
                <div className="space-y-6 mb-6">
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Teams Integration</h3>
                    <p className="text-foreground/70 mb-3">
                      Improved the integration of OneNote Online within Microsoft Teams to create seamless collaboration experiences.
                    </p>
                    <ul className="text-sm text-foreground/60 space-y-1">
                      <li>• Streamlined note-taking workflows within team channels</li>
                      <li>• Enhanced real-time collaboration features</li>
                      <li>• Simplified sharing and permissions management</li>
                    </ul>
                  </div>
                  
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Sync Technology Adaptation</h3>
                    <p className="text-foreground/70 mb-3">
                      Adapted advanced syncing concepts from OneNote Desktop to OneNote Online for consistent cross-platform experiences.
                    </p>
                    <ul className="text-sm text-foreground/60 space-y-1">
                      <li>• Unified synchronization experience across platforms</li>
                      <li>• Improved conflict resolution interfaces</li>
                      <li>• Enhanced offline capabilities for web platform</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold mb-4">Design Challenges</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Cross-Platform Consistency</h3>
                    <p className="text-foreground/70">Ensuring unified experiences between desktop and web while respecting platform conventions.</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Enterprise Integration</h3>
                    <p className="text-foreground/70">Seamlessly integrating with Microsoft Teams while maintaining OneNote's core functionality.</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Real-time Collaboration</h3>
                    <p className="text-foreground/70">Designing interfaces that handle multiple users editing simultaneously without conflicts.</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Performance Optimization</h3>
                    <p className="text-foreground/70">Balancing rich functionality with web performance requirements and constraints.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold mb-4">Design Process</h2>
                <ul className="space-y-3 text-foreground/80 mb-6">
                  <li>• Created detailed wireframes and prototypes for new collaboration features</li>
                  <li>• Designed user interfaces that maintained OneNote's familiar note-taking experience</li>
                  <li>• Collaborated with engineering teams to adapt desktop concepts for web implementation</li>
                  <li>• Conducted user testing with enterprise customers and individual users</li>
                  <li>• Developed design specifications for cross-platform synchronization experiences</li>
                  <li>• Worked closely with Teams integration partners to ensure seamless workflows</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4">Impact & Results</h2>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  Successfully improved user satisfaction for OneNote within Teams environments and created more 
                  consistent experiences across desktop and web platforms. The sync improvements reduced user confusion 
                  and support tickets related to cross-platform note synchronization.
                </p>

                <div className="flex flex-wrap gap-2 mt-8">
                  {["Microsoft", "Collaboration", "Enterprise Software", "Cross-platform", "Teams Integration", "Sync Technology"].map((tag, index) => (
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

export default OneNote;
