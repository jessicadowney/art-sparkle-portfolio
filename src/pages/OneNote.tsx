
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
                  Microsoft OneNote: <span className="text-primary">Cloud Attachment Insertion Prompt</span>
                </h1>
                <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                  Bringing cloud attachment to OneNote UWP and Mac
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">Role</h3>
                  <p className="text-foreground/70">Product Designer</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">Company</h3>
                  <p className="text-foreground/70">Microsoft</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">Platform</h3>
                  <p className="text-foreground/70">UWP & Mac</p>
                </div>
              </div>

              <div className="mb-12">
                <img 
                  src="/lovable-uploads/ff2b8e20-f09f-46f7-a76b-4c18e3bd0f07.png" 
                  alt="Microsoft OneNote Logo" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-semibold mb-6 text-primary">Overview</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  Microsoft OneNote is a collaborative note-taking platform used to capture and share ideas, drawings, clippings, and recordings. While working on the OneNote design team, I collaborated with product managers and engineers to deliver new features. Due to confidentiality, most of my work remains unreleased. However, one impactful feature I led—cloud attachment prompts—shipped in 2019 and is now available on OneNote for UWP (Universal Windows Platform) and Mac.
                </p>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">My Role</h3>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• Product Designer leading user flow and interface design</li>
                    <li>• Collaborated closely with PM and 3 engineers</li>
                    <li>• Conducted design analysis across Microsoft ecosystem</li>
                    <li>• Delivered responsive, localized, and accessible designs</li>
                  </ul>
                </div>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">Challenge: Reinstate a Popular Cloud Attachment Feature</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  The ability to attach cloud files had existed in OneNote 2016 but was missing in UWP and Mac. Restoring it was a high-priority request from users.
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Goals:</h3>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• Reinstate cloud attachments to OneNote UWP and Mac</li>
                    <li>• Provide contextual options based on file type</li>
                    <li>• Align with Microsoft's Fluent UI and accessibility guidelines</li>
                  </ul>
                </div>

                <div className="mb-12">
                  <img 
                    src="/lovable-uploads/33810cc1-c871-466c-a7ca-0a19b5abb118.png" 
                    alt="OneNote Cloud Attachment Prompt - Allow online file conversion" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">Research & Inspiration</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  I started by collecting UI references across OneNote's existing platforms and Microsoft's design systems. I analyzed how similar prompts work in products like Outlook and Word.
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Key insights:</h3>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• Different file types require different insert options</li>
                    <li>• A modal format was the preferred and expected pattern</li>
                  </ul>
                </div>

                <div className="mb-12">
                  <img 
                    src="/lovable-uploads/e12a3a45-18df-42cb-ad13-255fe2966928.png" 
                    alt="File insertion options across different scenarios" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">Design Process</h2>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Use Case Mapping</h3>
                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    I mapped scenarios based on file type:
                  </p>
                  <ul className="space-y-2 text-foreground/80 text-lg mb-8">
                    <li>• <strong>Office Files (Word, Excel, PowerPoint):</strong> Show 3 options with disclaimer</li>
                    <li>• <strong>PDFs:</strong> Show 3 options</li>
                    <li>• <strong>Other File Types or Mixed Files:</strong> Show 2 options</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <img 
                      src="/lovable-uploads/44eb7cd7-93f3-4537-8bfb-5e030fb17b90.png" 
                      alt="French localization - Comment voulez-vous insérer ce fichier?" 
                      className="rounded-lg shadow-lg w-full h-auto"
                    />
                  </div>
                  <div>
                    <img 
                      src="/lovable-uploads/6fc51124-ba16-4f67-b7a0-9ca19ffcc0ff.png" 
                      alt="File insertion dialog with three options" 
                      className="rounded-lg shadow-lg w-full h-auto"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Modal Options:</h3>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• Upload to OneDrive and insert link</li>
                    <li>• Insert as attachment</li>
                    <li>• Insert as printout (when applicable)</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <img 
                      src="/lovable-uploads/3f4dfbe1-d9d2-49eb-96dd-134e23cc0365.png" 
                      alt="German localization - Wie wollen Sie diese Datei einfügen?" 
                      className="rounded-lg shadow-lg w-full h-auto"
                    />
                  </div>
                  <div>
                    <img 
                      src="/lovable-uploads/4f7965c9-474f-4fa2-9b1d-aac92f409da6.png" 
                      alt="PDF file insertion options" 
                      className="rounded-lg shadow-lg w-full h-auto"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Exploration & Localization Testing</h3>
                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    I explored different layouts and UI variants, ensuring compatibility with long strings in German and French.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <img 
                      src="/lovable-uploads/9cb21830-f039-4a89-be57-e013c6a33982.png" 
                      alt="Structural assessment file insertion dialog" 
                      className="rounded-lg shadow-lg w-full h-auto"
                    />
                  </div>
                  <div>
                    <img 
                      src="/lovable-uploads/80dff5ae-a43e-47f8-b3e9-2f8a0104d036.png" 
                      alt="Multiple files insertion dialog" 
                      className="rounded-lg shadow-lg w-full h-auto"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Accessibility</h3>
                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    I created specs for high contrast mode and ensured keyboard and screen reader compliance.
                  </p>
                </div>

                <div className="mb-12">
                  <img 
                    src="/lovable-uploads/cede914a-c532-4dbe-86e7-5e395cf3e3e9.png" 
                    alt="OneNote design system and UI components overview" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">Implementation</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  Final deliverables included:
                </p>

                <div className="mb-8">
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• Responsive modals for all use cases</li>
                    <li>• Redlines and specs for engineering</li>
                    <li>• High contrast accessibility visuals</li>
                    <li>• Assets for both UWP and Mac platforms</li>
                  </ul>
                </div>

                <div className="mb-12">
                  <img 
                    src="/lovable-uploads/4e447225-25bc-414e-8180-3f2d58e1374e.png" 
                    alt="High contrast design specifications and color coding" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <img 
                      src="/lovable-uploads/854feffc-fe90-447b-baf8-d72c2e3208d6.png" 
                      alt="French dialog with spacing specifications" 
                      className="rounded-lg shadow-lg w-full h-auto"
                    />
                  </div>
                  <div>
                    <img 
                      src="/lovable-uploads/284582bd-5f18-4ffe-957a-3204aab29352.png" 
                      alt="French dialog in context with precise measurements" 
                      className="rounded-lg shadow-lg w-full h-auto"
                    />
                  </div>
                </div>

                <div className="mb-12">
                  <img 
                    src="/lovable-uploads/44010bc8-c30e-47aa-b6ac-ad3d9b419761.png" 
                    alt="macOS implementation of cloud file insertion dialog" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">Results</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  The feature successfully shipped in 2019 across UWP and Mac platforms.
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Impact:</h3>
                  <ul className="space-y-2 text-foreground/80 mb-8">
                    <li>• Met user demand for a highly requested feature</li>
                    <li>• Increased parity across OneNote platforms</li>
                    <li>• Reinforced design consistency with Microsoft ecosystem</li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                  {["Product Design", "UX Research", "Accessibility", "Fluent UI", "Cross-platform Design", "Localization", "User Flows"].map((tag, index) => (
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
