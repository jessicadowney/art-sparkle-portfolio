import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import ThreeBackground from '@/components/ThreeBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Azure = () => {
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
                  <span className="text-primary">Azure Communication Services</span>
                </h1>
                <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                  Virtual Visit Sample Builder
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-semibold mb-6 text-primary">Overview</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  Azure Communication Services enables developers to integrate voice, video, chat, and SMS into their applications using the same reliable platform that powers Microsoft Teams. As part of a cross-functional team, I led the UX and UI design for the **Virtual Visit Sample Builder**—a tool designed to help developers quickly create and customize virtual healthcare experiences using Azure Communication Services.
                </p>
                
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  The project aimed to reduce integration friction and accelerate adoption by providing a configurable, code-free starting point for developers and product managers.
                </p>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">My Role</h3>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• Lead Product Designer for developer experience</li>
                    <li>• Ran and facilitated the design sprint to kick off the project</li>
                    <li>• Conducted customer validation and user research</li>
                    <li>• Led research, information architecture, and UX/UI design</li>
                    <li>• Created the design system for all builder components</li>
                    <li>• Collaborated closely with product managers, engineers, and technical writers</li>
                  </ul>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Results</h3>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• Delivered an interactive sample builder used across healthcare partner engagements</li>
                    <li>• Supported faster proof-of-concept deployments by Microsoft field teams</li>
                    <li>• Used as a demo and training resource for Azure Communication Services adoption</li>
                  </ul>
                </div>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">Challenge #1: Simplifying Developer Onboarding</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  Many developers exploring Azure Communication Services were overwhelmed by the amount of code required to build a virtual visits experience from scratch. They needed:
                </p>

                <ul className="space-y-2 text-foreground/80 text-lg mb-8">
                  <li>• A guided entry point to try Azure Communication Services with minimal setup</li>
                  <li>• Clarity on what was configurable versus hardcoded</li>
                  <li>• A faster way to visualize Azure Communication Services features in action</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-6 text-primary">The Solution: Configurable Sample Builder</h3>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  We created an interactive sample builder that:
                </p>

                <ul className="space-y-2 text-foreground/80 text-lg mb-8">
                  <li>• Allows users to select key experience settings (e.g., lobby type, user roles, branding)</li>
                  <li>• Generates an Azure Resource Manager (ARM) template deployable to Azure</li>
                  <li>• Produces a downloadable repository containing all project assets</li>
                  <li>• Includes embedded documentation and guidance</li>
                </ul>

                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  This gave developers and product managers the ability to customize and launch a virtual visit experience without digging through multiple tutorials or documentation pages.
                </p>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 text-primary">Key Features:</h4>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• No-code configuration UI with live preview</li>
                    <li>• ARM template generation for Azure deployment</li>
                    <li>• Downloadable repository output</li>
                    <li>• Clear instructional scaffolding for healthcare scenarios</li>
                  </ul>
                </div>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">Challenge #2: Aligning with Azure & Microsoft Fluent Design</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  The tool needed to align with both Azure product standards and Microsoft's Fluent UI system. It also had to be usable for:
                </p>

                <ul className="space-y-2 text-foreground/80 text-lg mb-8">
                  <li>• Technical users (developers)</li>
                  <li>• Non-technical stakeholders (product managers, solution architects)</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-6 text-primary">The Solution: Design System & Interaction Patterns</h3>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  I established a UI kit and layout guidelines based on Fluent UI and Azure Dev Portal conventions, including:
                </p>

                <ul className="space-y-2 text-foreground/80 text-lg mb-8">
                  <li>• Tabbed configuration panels</li>
                  <li>• Consistent input and validation behaviors</li>
                  <li>• Accessible layout with clear structure and interactions</li>
                </ul>

                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  I partnered closely with engineering to ensure accessibility compliance, dark mode readiness, and localization support.
                </p>

                <div className="grid grid-cols-1 gap-8 mb-8">
                  <div className="rounded-lg overflow-hidden border border-border/50">
                    <img 
                      src="/lovable-uploads/2e2bc1f1-189f-4ecf-8660-b1a5a7318da8.png" 
                      alt="Azure Sample Builder - Template Selection and Call Interface"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden border border-border/50">
                    <img 
                      src="/lovable-uploads/6c3557f2-5021-4c11-a363-91319eadb0f8.png" 
                      alt="Azure Sample Builder - Configuration and Review Interface"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">Impact</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  The Virtual Visit Sample Builder became a go-to tool for internal Microsoft field teams and external partners building healthcare solutions with Azure Communication Services.
                </p>

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Outcomes:</h3>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• Accelerated Azure Communication Services adoption in healthcare by reducing setup time</li>
                    <li>• Showcased Azure Communication Services capabilities in a tangible, customizable way</li>
                    <li>• Contributed to broader platform understanding and confidence</li>
                  </ul>
                </div>

                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  The sample builder remains in active development, with new features such as AI meeting capabilities currently being added. It continues to serve as a template for developer-focused onboarding experiences across Azure Communication Services.
                </p>

                <div className="flex flex-wrap gap-3 mt-8 mb-12">
                  {["Product Design", "Developer Experience", "UX Research", "Design Systems", "Azure", "Healthcare Technology", "Information Architecture"].map((tag, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">Project Videos</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  Watch these demonstrations of the Azure Communication Services Virtual Visit Sample Builder in action.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/oYufdHbGJhA?start=3"
                      title="Azure Communication Services Demo 1"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </div>
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/oYufdHbGJhA?start=3"
                      title="Azure Communication Services Demo 2"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </div>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">Sample Builder Interface</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  Screenshots of the Azure Communication Services Virtual Visit Sample Builder interface, showing the configuration options and live preview capabilities.
                </p>

                <div className="grid grid-cols-1 gap-8 mb-8">
                  <div className="rounded-lg overflow-hidden border border-border/50">
                    <img 
                      src="/lovable-uploads/2e2bc1f1-189f-4ecf-8660-b1a5a7318da8.png" 
                      alt="Azure Sample Builder - Template Selection and Call Interface"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden border border-border/50">
                    <img 
                      src="/lovable-uploads/6c3557f2-5021-4c11-a363-91319eadb0f8.png" 
                      alt="Azure Sample Builder - Configuration and Review Interface"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                <div className="text-center mt-12">
                  <Button 
                    onClick={() => window.open('https://ms.portal.azure.com/#view/Microsoft_Azure_VirtualVisitsBuilder/SampleBuilder.ReactView', '_blank', 'noopener,noreferrer')}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
                  >
                    Try the Sample Builder
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
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

export default Azure;
