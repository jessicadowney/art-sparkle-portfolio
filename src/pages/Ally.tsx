import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import ThreeBackground from '@/components/ThreeBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Ally = () => {
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
                  Amped Wireless <span className="text-primary">Ally</span>
                </h1>
                <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                  White-labeled security and parental control app for Wi-Fi routers
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">Role</h3>
                  <p className="text-foreground/70">Senior Product Designer</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">Company</h3>
                  <p className="text-foreground/70">AVG Innovation Group</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">Platform</h3>
                  <p className="text-foreground/70">iOS & Android</p>
                </div>
              </div>

              <div className="mb-12">
                <img 
                  src="/lovable-uploads/247125df-8a71-4d2d-ab6a-d13b1a061447.png" 
                  alt="Amped Wireless Ally App Branding" 
                  className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-semibold mb-6 text-primary">Overview</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  As part of AVG Innovation Group, our mandate was to develop new revenue opportunities for AVG through innovative digital products. One such opportunity was the creation of a white-labeled security and parental control app that would be sold alongside Wi-Fi routers. The project evolved into a full collaboration with Amped Wireless, who integrated our software into their Ally product line.
                </p>

                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  As the Senior Product Designer on this project, I was responsible for the end-to-end user experience, including information architecture, UI mockups and high-fidelity wireframes, end-to-end user flows, user story creation, and close collaboration with developers to ensure implementation quality.
                </p>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">My Role</h3>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• Led UX design and information architecture</li>
                    <li>• Created setup flows and security management UX</li>
                    <li>• Partnered with research and visual design</li>
                    <li>• Delivered production-ready designs for iOS and Android</li>
                  </ul>
                </div>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">Challenge 1: Designing a Best-in-Class Setup Experience</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  Setting up a home Wi-Fi router is often frustrating for users, particularly those less tech-savvy. Many routers require complex desktop-based installation and use overly technical language.
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Our goals:</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Create a mobile-first, simplified setup experience</li>
                    <li>• Minimize steps required</li>
                    <li>• Use plain language and visuals to guide the user</li>
                  </ul>
                </div>

                <div className="mb-12">
                  <img 
                    src="/lovable-uploads/4ef70443-9eb6-47ea-8fd9-97a1257e8ab6.png" 
                    alt="Setup Flow - Mobile Setup Process" 
                    className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                  />
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Research & Benchmarking:</h3>
                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    I audited the setup flows of top routers including Apple Airport Extreme, Google OnHub, TP-Link, Netgear, and Asus. From this, I distilled best practices and identified friction points.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Design Outcomes:</h3>
                  <ul className="space-y-2 text-foreground/80 mb-6">
                    <li>• Created a streamlined, mobile-first setup flow</li>
                    <li>• Reduced technical jargon and simplified inputs</li>
                    <li>• Designed for both single routers and mesh network expansion</li>
                  </ul>
                  <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                    As the partnership evolved, I adapted the flow to account for Amped Wireless's specific hardware installation needs.
                  </p>
                </div>

                <div className="mb-12">
                  <img 
                    src="/lovable-uploads/2f854d4a-e286-429f-9d93-a00755d55a5e.png" 
                    alt="Setup Flow - Decision Tree and User Paths" 
                    className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                  />
                </div>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">Challenge 2: Simplifying Security and Parental Controls</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  As the product focus shifted to home network security and family safety, the app needed to offer powerful controls while remaining approachable.
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Design Principles:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-accent/30 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3 text-primary">Humanly Readable</h4>
                      <p className="text-foreground/70">Devices are labeled clearly (e.g., "Samsung Tablet" instead of MAC addresses)</p>
                    </div>
                    <div className="bg-accent/30 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3 text-primary">Smart Defaults</h4>
                      <p className="text-foreground/70">Child profiles auto-apply appropriate filters</p>
                    </div>
                    <div className="bg-accent/30 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3 text-primary">Inclusive Design</h4>
                      <p className="text-foreground/70">Works even if the user has no children</p>
                    </div>
                    <div className="bg-accent/30 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3 text-primary">User Empowerment</h4>
                      <p className="text-foreground/70">Celebrate the user for taking action to protect their network</p>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <img 
                    src="/lovable-uploads/28c1745a-4fd1-41d1-943c-9ffe7c4b0d28.png" 
                    alt="App Interface Concepts - Main Dashboard Screens" 
                    className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                  />
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Concept Development:</h3>
                  <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                    I proposed three distinct home screen concepts emphasizing network safety and content management. Through user testing, we validated Concept A as the most effective and intuitive.
                  </p>
                </div>

                <div className="mb-12">
                  <img 
                    src="/lovable-uploads/5d8b7f40-f027-45bb-b649-888938af482f.png" 
                    alt="User Testing Results and Design Iterations" 
                    className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                  />
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">User Profile Management:</h3>
                  <ul className="space-y-2 text-foreground/80 mb-8">
                    <li>• Users can assign devices to custom profiles</li>
                    <li>• Profiles allow setting time limits and blocking content categories</li>
                    <li>• Profiles work seamlessly across family and non-family use cases</li>
                  </ul>
                </div>

                <div className="mb-12">
                  <img 
                    src="/lovable-uploads/4e2579b8-ffbd-43b4-b204-0c6669f4200d.png" 
                    alt="User Management Screens - Users List and Profile Details" 
                    className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                  />
                </div>

                <div className="mb-12">
                  <img 
                    src="/lovable-uploads/a72a1653-35a7-4b9b-8b48-212f2bf038c0.png" 
                    alt="Content Filtering and Device Management Screens" 
                    className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                  />
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Onboarding:</h3>
                  <ul className="space-y-2 text-foreground/80 mb-8">
                    <li>• Personalized tips and security alerts at launch</li>
                    <li>• Prompt users to enable key parental and malware protection features</li>
                  </ul>
                </div>

                <div className="mb-12">
                  <img 
                    src="/lovable-uploads/3f8cb404-0f37-4ddd-b25d-b25208d8b1c1.png" 
                    alt="Security Features - AVG Protection Integration" 
                    className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                  />
                </div>

                <div className="mb-12">
                  <img 
                    src="/lovable-uploads/ec9681c4-9a25-43b2-8134-d97a49899d96.png" 
                    alt="Activity Monitoring and Time Management Features" 
                    className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                  />
                </div>

                <div className="mb-12">
                  <img 
                    src="/lovable-uploads/e238524c-864f-4019-8ed0-26f425c503d8.png" 
                    alt="Content Blocking and App Management Controls" 
                    className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                  />
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Final Design Deliverables:</h3>
                  <ul className="space-y-2 text-foreground/80 mb-8">
                    <li>• High-fidelity screens for onboarding, content filtering, scheduling, and security alerts</li>
                    <li>• Delivered production specs to developers</li>
                    <li>• Shipped on time for launch in 2017 on both iOS and Android</li>
                  </ul>
                </div>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">Results</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  The Amped Wireless Ally app successfully launched and became a key value-add for their router product line. The design supported user-friendly installation, intuitive control, and accessible security management for a wide range of users.
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Impact:</h3>
                  <ul className="space-y-2 text-foreground/80 mb-8">
                    <li>• Enabled Amped Wireless to enter the smart home market with a strong UX differentiator</li>
                    <li>• Increased customer confidence in setting up and managing their networks</li>
                    <li>• Provided AVG with a scalable model for future white-labeled security products</li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                  {["Mobile Design", "UX Strategy", "Information Architecture", "User Research", "iOS Design", "Android Design", "Security UX", "Parental Controls"].map((tag, index) => (
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

export default Ally;
