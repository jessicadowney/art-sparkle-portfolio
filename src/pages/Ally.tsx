
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
                  <span className="text-primary">Ally</span>
                </h1>
                <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                  Accessible Financial Services
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">Role</h3>
                  <p className="text-foreground/70">Senior Product Designer</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">Duration</h3>
                  <p className="text-foreground/70">March 2021 - Present</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">Platform</h3>
                  <p className="text-foreground/70">Web & Mobile Banking</p>
                </div>
              </div>

              <div className="mb-12">
                <img 
                  src="https://jessicadowney.com/wp-content/uploads/2024/01/Ally-Header.jpg" 
                  alt="Ally Banking Interface" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-semibold mb-6 text-primary">Project Overview</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  At Ally, I work on creating accessible and inclusive financial service interfaces 
                  that serve millions of customers. My focus is on designing user experiences that 
                  make complex financial processes simple and accessible to users of all abilities, 
                  while maintaining compliance with banking regulations and accessibility standards.
                </p>

                <div className="mb-12">
                  <img 
                    src="https://jessicadowney.com/wp-content/uploads/2024/01/Ally-Mobile-App.jpg" 
                    alt="Ally Mobile Banking App" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">My Role & Impact</h2>
                <ul className="space-y-3 text-foreground/80 mb-8 text-lg">
                  <li>• Design accessible financial service interfaces with WCAG 2.1 AA compliance</li>
                  <li>• Create inclusive user experiences for diverse customer needs and abilities</li>
                  <li>• Simplify complex financial workflows without sacrificing functionality</li>
                  <li>• Collaborate with accessibility experts and compliance teams</li>
                  <li>• Conduct usability testing with users of varying abilities</li>
                  <li>• Design for multiple platforms including web, mobile, and assistive technologies</li>
                </ul>

                <div className="mb-12">
                  <img 
                    src="https://jessicadowney.com/wp-content/uploads/2024/01/Ally-Dashboard.jpg" 
                    alt="Ally Account Dashboard" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Design Challenges</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Accessibility First</h3>
                    <p className="text-foreground/70">Ensuring all financial interfaces meet WCAG guidelines while maintaining usability for all users</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Complex Workflows</h3>
                    <p className="text-foreground/70">Simplifying banking processes without sacrificing security or regulatory requirements</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Trust & Security</h3>
                    <p className="text-foreground/70">Building user confidence through transparent design and clear security indicators</p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Inclusive Design</h3>
                    <p className="text-foreground/70">Creating experiences that work for users with diverse abilities and technological literacy</p>
                  </div>
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Key Projects</h2>
                <div className="space-y-6 mb-8">
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Account Management Redesign</h3>
                    <p className="text-foreground/70">
                      Led the redesign of core account management features with enhanced accessibility 
                      and improved user flows for both web and mobile platforms.
                    </p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Transaction Experience</h3>
                    <p className="text-foreground/70">
                      Simplified complex transaction flows while maintaining security requirements 
                      and ensuring screen reader compatibility.
                    </p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-primary">Mobile Banking Enhancement</h3>
                    <p className="text-foreground/70">
                      Enhanced mobile banking experiences with focus on touch accessibility and 
                      voice banking capabilities.
                    </p>
                  </div>
                </div>

                <div className="mb-12">
                  <img 
                    src="https://jessicadowney.com/wp-content/uploads/2024/01/Ally-Accessibility.jpg" 
                    alt="Ally Accessibility Features" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Design Process</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  My approach begins with inclusive research, conducting usability testing with users 
                  of diverse abilities and technological backgrounds. I work closely with accessibility 
                  experts and utilize assistive technologies throughout the design process to ensure 
                  all interfaces are truly accessible.
                </p>

                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  Every design decision is validated through testing with screen readers, keyboard 
                  navigation, and other assistive technologies. I collaborate extensively with 
                  compliance teams to ensure all designs meet regulatory requirements while 
                  providing excellent user experiences.
                </p>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Results & Impact</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  The accessible design improvements have significantly enhanced usability for all 
                  users, with particular success in serving customers with disabilities. Customer 
                  satisfaction scores have increased, and the accessible design patterns have been 
                  adopted across other Ally products. The work has also contributed to industry 
                  best practices for inclusive financial design.
                </p>

                <div className="flex flex-wrap gap-3 mt-8">
                  {["Financial Services", "Accessibility", "WCAG Compliance", "Inclusive Design", "User Research", "Mobile Banking", "Enterprise Design"].map((tag, index) => (
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
