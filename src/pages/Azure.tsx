

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
                  Azure Communication Services enables developers to integrate voice, video, chat, and SMS into their applications using the same reliable platform that powers Microsoft Teams. In May 2021, I led the UX and UI design for the **Virtual Visit Sample Builder**—a tool designed to help developers quickly create and customize virtual healthcare experiences using Azure Communication Services.
                </p>
                
                <div className="mb-8">
                  <img 
                    src="/lovable-uploads/dfec2eed-75b5-42ba-b425-61980e91c034.png" 
                    alt="Azure Communication Services Virtual Visit Sample Builder"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  The project began with Azure Communication Services' first remote design sprint, bringing together a cross-functional team to ideate, prototype, and validate a tool that reduces setup friction for customers deploying virtual visits.
                </p>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">My Role</h3>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• Lead Product Designer for developer experience</li>
                    <li>• Facilitated the remote design sprint</li>
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

                <h2 className="text-3xl font-semibold mb-6 text-primary">Design Sprint Process</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  The project followed a structured five-phase design sprint:
                </p>

                <ul className="space-y-2 text-foreground/80 text-lg mb-8">
                  <li>• **Understand:** Lightning talks framed the problem space through customer journeys and competitive analysis.</li>
                  <li>• **Define:** We framed our core challenge: "How might we stop hand-holding our customers and help them confidently build an Azure Communication Services virtual visits solution?"</li>
                  <li>• **Sketch & Decide:** Through sketching and critique, we aligned on a storyboard for a no-code virtual visit builder.</li>
                  <li>• **Prototype:** A clickable prototype was developed in Figma.</li>
                  <li>• **Validate:** We tested the prototype with real customers including Microsoft CSE, CTCA, NTT, Avanade, and Specsavers.</li>
                </ul>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Design Sprint Process</h3>
            <div className="max-w-4xl mx-auto">
              <img 
                src="/lovable-uploads/4edd9b31-c7a9-47a5-aaf3-aea2d49ee270.png" 
                alt="Design Sprint Process showing 6 phases: Understand, Define, Sketch, Decide, Prototype, and Validate with corresponding dates"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">Challenge #1: Simplifying Developer Onboarding</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  Many customers were overwhelmed by the amount of code required to build a virtual visit experience from scratch. They needed:
                </p>

                <ul className="space-y-2 text-foreground/80 text-lg mb-8">
                  <li>• A guided entry point to try Azure Communication Services with minimal setup</li>
                  <li>• Clarity on what was configurable versus hardcoded</li>
                  <li>• A faster way to visualize Azure Communication Services features in action</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-6 text-primary">Solution: Configurable Sample Builder</h3>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  We created an interactive sample builder that:
                </p>

                <ul className="space-y-2 text-foreground/80 text-lg mb-8">
                  <li>• Allows users to select key experience settings (e.g., lobby type, user roles, branding)</li>
                  <li>• Generates an Azure Resource Manager (ARM) template deployable to Azure</li>
                  <li>• Produces a downloadable repository containing all project assets</li>
                  <li>• Includes embedded documentation and guidance</li>
                </ul>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 text-primary">Key Features:</h4>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• No-code configuration UI with live preview</li>
                    <li>• ARM template generation for Azure deployment</li>
                    <li>• Clear instructional scaffolding for healthcare scenarios</li>
                  </ul>
                </div>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">Challenge #2: Aligning with Azure & Microsoft Fluent Design</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  The builder needed to align with Azure product standards and Microsoft's Fluent UI, and be usable by both developers and non-technical stakeholders.
                </p>

                <h3 className="text-2xl font-semibold mb-6 text-primary">Solution: Design System & Interaction Patterns</h3>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  I created a UI kit based on Fluent UI and Azure Dev Portal conventions, featuring:
                </p>

                <ul className="space-y-2 text-foreground/80 text-lg mb-8">
                  <li>• Tabbed configuration panels</li>
                  <li>• Consistent input and validation behaviors</li>
                  <li>• Accessible layout with clear structure and interactions</li>
                </ul>

                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  I worked closely with engineering to ensure compliance with accessibility standards, dark mode, and localization.
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

                <h2 className="text-3xl font-semibold mb-6 text-primary">Key Insights from Customer Validation</h2>
                <ul className="space-y-2 text-foreground/80 text-lg mb-8">
                  <li>• Simplicity and accessibility were key, especially in healthcare and retail.</li>
                  <li>• Customers valued customization of branding, layout, and user roles.</li>
                  <li>• Must-have features included call recording, file and screen sharing, and integration with existing systems.</li>
                  <li>• Smaller orgs wanted turnkey solutions; larger enterprises viewed it as a customizable starting point.</li>
                </ul>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">Design Outcomes</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  The final prototype offered:
                </p>

                <ul className="space-y-2 text-foreground/80 text-lg mb-8">
                  <li>• A template-driven builder with branding and layout options</li>
                  <li>• Preview modes by device and user role</li>
                  <li>• ARM template-based deployment to Azure</li>
                </ul>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">Impact and What's Next</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  The Virtual Visit Sample Builder was adopted by Microsoft field teams and partners as a key tool for Azure Communication Services adoption.
                </p>

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Outcomes:</h3>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• Accelerated Azure Communication Services implementation</li>
                    <li>• Helped customers onboard with less friction</li>
                    <li>• Provided a base for future development</li>
                  </ul>
                </div>

                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  The sample builder is still in active development. We are currently adding AI meeting capabilities to support more advanced scenarios and deepen the builder's value across sectors.
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

