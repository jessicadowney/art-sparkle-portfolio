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
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  2012
                </div>
                <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
                  syngo® Lab Inventory Manager <span className="text-primary">(sLIM)</span>
                </h1>
                <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                  Cloud-based inventory management system redesign for Siemens Healthineers
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">Role</h3>
                  <p className="text-foreground/70">Interaction Design Consultant</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">Company</h3>
                  <p className="text-foreground/70">Siemens Corporate Research</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">Platform</h3>
                  <p className="text-foreground/70">Web Application</p>
                </div>
              </div>

              <div className="mb-12">
                <img 
                  src="/lovable-uploads/43c5653f-5641-40d0-be8c-5fc6bc7ca71b.png" 
                  alt="Siemens Brand Identity" 
                  className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-semibold mb-6 text-primary">Overview</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  syngo® Lab Inventory Manager (sLIM) is a cloud-based inventory management system developed by Siemens Healthineers that leverages RFID technology to streamline inventory across labs. Originally released with a complex interface, the product was facing usability complaints from customers. I was brought on as an interaction design consultant at Siemens Corporate Research to help redesign the experience.
                </p>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">My Role</h3>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• Led redesign of information architecture and UI</li>
                    <li>• Facilitated stakeholder workshops and user research</li>
                    <li>• Delivered wireframes and updated visual design</li>
                  </ul>
                </div>

  
                
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-12">
                  <div>
                    <img 
                      src="/lovable-uploads/39a12b50-9924-444b-94a6-c018d2626fd8.png" 
                      alt="sLIM Lab Workstation with RFID Scanner" 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    />
                  </div>
                </div>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">The Problem: Confusing Navigation & Inefficient Layout</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  The original sLIM interface had several major usability issues:
                </p>

                <div className="mb-8">
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• A three-tiered navigation system that was hard to understand</li>
                    <li>• Too much horizontal space taken by menus, leaving little room for content</li>
                    <li>• Important buttons changed location dynamically, frustrating users</li>
                  </ul>
                </div>
                <div className="mb-12">
                  <img 
                    src="/lovable-uploads/59fc189a-118c-4664-b3bc-63eeb559d1dd.png" 
                    alt="Streamlined Workflow Management" 
                    className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                  />
                </div>
                
                <div className="mb-12">
                  <img 
                    src="/lovable-uploads/7fb41454-02d2-47d7-b36c-0804a23c8bf6.png" 
                    alt="Original Interface - Complex Navigation System" 
                    className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                  />
                </div>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">Design Process</h2>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Stakeholder Discovery</h3>
                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    I began with stakeholder interviews, including district sales managers who collected feedback globally. We confirmed consistent patterns of frustration over interface complexity.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Card Sorting Workshop</h3>
                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    To reorganize the navigation structure, I ran a card sorting exercise with internal stakeholders. This helped reduce the hierarchy from 3 levels to 2, significantly simplifying the user flow.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Wireframing & Redesign</h3>
                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    With a clear structure defined, I created high-level wireframes and a refreshed look and feel. The layout emphasized:
                  </p>
                  <ul className="space-y-2 text-foreground/80 text-lg mb-8">
                    <li>• Consistent button placement</li>
                    <li>• Better use of screen real estate</li>
                    <li>• More intuitive content grouping</li>
                  </ul>
                </div>

                <div className="mb-12">
                  <img 
                    src="/lovable-uploads/e8eda6a9-4f4e-48bb-9024-830d86407f85.png" 
                    alt="Redesigned Interface in Modern Lab Environment" 
                    className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <img 
                      src="/lovable-uploads/3ab16492-9e3d-41b7-95cf-5814e1c06b16.png" 
                      alt="Redesigned Current Stock Interface" 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    />
                  </div>
                  <div>
                    <img 
                      src="/lovable-uploads/5d9f6508-c786-48eb-96a2-53f489f1ee86.png" 
                      alt="Improved Events Management Interface" 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    />
                  </div>
                </div>

                <div className="mb-12">
                  <img 
                    src="/lovable-uploads/79203c79-54ec-4315-9155-bd95ef97d107.png" 
                    alt="Lab Professionals Using Redesigned sLIM System" 
                    className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                  />
                </div>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">Results</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  The redesigned sLIM interface replaced the original software and is now widely sold by Siemens Healthineers. Although the software has since been rebranded, it still uses the core information architecture and assets I developed.
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Impact:</h3>
                  <ul className="space-y-2 text-foreground/80 mb-8">
                    <li>• Drastically reduced user confusion</li>
                    <li>• Improved interface consistency and efficiency</li>
                    <li>• Enhanced usability, supporting broader adoption across labs globally</li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                  {["Information Architecture", "UX Research", "Interface Design", "Healthcare Technology", "Stakeholder Workshops", "Card Sorting", "Wireframing"].map((tag, index) => (
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
