
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <img 
                  src="/lovable-uploads/onenote-teams.jpg" 
                  alt="OneNote Teams Integration" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <img 
                  src="/lovable-uploads/onenote-interface.jpg" 
                  alt="OneNote Interface Design" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-semibold mb-6 text-primary">Project Overview</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  Enhanced OneNote's integration within Microsoft Teams and adapted desktop syncing 
                  concepts for web platforms. Focused on improving user workflows for note-taking 
                  and collaboration across multiple touchpoints and devices within the Microsoft 
                  ecosystem, ensuring seamless experiences for millions of users worldwide.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <img 
                    src="/lovable-uploads/onenote-collaboration.jpg" 
                    alt="OneNote Collaboration Features" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                  <img 
                    src="/lovable-uploads/onenote-sync.jpg" 
                    alt="OneNote Sync Experience" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Key Projects</h2>
                <div className="space-y-6 mb-8">
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Microsoft Teams Integration</h3>
                    <p className="text-foreground/70 mb-3">
                      Improved the integration of OneNote Online within Microsoft Teams to create 
                      seamless collaboration experiences for enterprise and educational users.
                    </p>
                    <ul className="text-sm text-foreground/60 space-y-1">
                      <li>• Streamlined note-taking workflows within team channels and meetings</li>
                      <li>• Enhanced real-time collaboration features with conflict resolution</li>
                      <li>• Simplified sharing and permissions management across team hierarchies</li>
                      <li>• Designed contextual note organization within Teams structure</li>
                    </ul>
                  </div>
                  
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Cross-Platform Sync Technology</h3>
                    <p className="text-foreground/70 mb-3">
                      Adapted advanced syncing concepts from OneNote Desktop to OneNote Online 
                      for consistent cross-platform experiences and improved reliability.
                    </p>
                    <ul className="text-sm text-foreground/60 space-y-1">
                      <li>• Unified synchronization experience across desktop, web, and mobile</li>
                      <li>• Improved conflict resolution interfaces with clear user guidance</li>
                      <li>• Enhanced offline capabilities for web platform with smart caching</li>
                      <li>• Designed progressive sync indicators and status communication</li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <img 
                    src="/lovable-uploads/onenote-mobile.jpg" 
                    alt="OneNote Mobile Experience" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                  <img 
                    src="/lovable-uploads/onenote-desktop.jpg" 
                    alt="OneNote Desktop Integration" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Design Challenges</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Cross-Platform Consistency</h3>
                    <p className="text-foreground/70">Ensuring unified experiences between desktop and web while respecting platform conventions and technical constraints</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Enterprise Integration</h3>
                    <p className="text-foreground/70">Seamlessly integrating with Microsoft Teams while maintaining OneNote's core functionality and user workflows</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Real-time Collaboration</h3>
                    <p className="text-foreground/70">Designing interfaces that handle multiple users editing simultaneously without conflicts or data loss</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Performance Optimization</h3>
                    <p className="text-foreground/70">Balancing rich functionality with web performance requirements and bandwidth constraints</p>
                  </div>
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Design Process</h2>
                <ul className="space-y-3 text-foreground/80 mb-8 text-lg">
                  <li>• Created detailed wireframes and prototypes for new collaboration features and workflows</li>
                  <li>• Designed user interfaces that maintained OneNote's familiar note-taking experience across platforms</li>
                  <li>• Collaborated with engineering teams to adapt desktop concepts for web implementation</li>
                  <li>• Conducted user testing with enterprise customers and individual users in educational settings</li>
                  <li>• Developed design specifications for cross-platform synchronization experiences</li>
                  <li>• Worked closely with Teams integration partners to ensure seamless workflows and data consistency</li>
                  <li>• Facilitated design reviews and stakeholder alignment across multiple product teams</li>
                </ul>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Impact & Results</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  Successfully improved user satisfaction for OneNote within Teams environments and 
                  created more consistent experiences across desktop and web platforms. The sync 
                  improvements reduced user confusion and support tickets related to cross-platform 
                  note synchronization by 40%. The enhanced Teams integration led to increased 
                  adoption of OneNote in enterprise environments and improved collaboration workflows 
                  for distributed teams.
                </p>

                <div className="flex flex-wrap gap-3 mt-8">
                  {["Microsoft", "Collaboration", "Enterprise Software", "Cross-platform", "Teams Integration", "Sync Technology", "Product Design", "User Research"].map((tag, index) => (
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
