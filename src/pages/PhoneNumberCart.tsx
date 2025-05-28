
import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import ThreeBackground from '@/components/ThreeBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const PhoneNumberCart = () => {
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
                  2022
                </div>
                <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
                  <span className="text-primary">Phone Number Shopping Cart</span>
                </h1>
                <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                  Redesigned a critical acquisition flow to reduce friction, increase transparency, and lower support burden
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="bg-accent/30 rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-primary">TL;DR</h2>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• Initiated project independently during FHL2022, pitched and secured executive sponsorship</li>
                    <li>• Led end-to-end UX for a complex, cross-functional revamp of the phone number acquisition flow</li>
                    <li>• Defined structure, logic, and visual system for a new cart-based model</li>
                    <li>• Collaborated with legal, engineering, support, and product to balance compliance and usability</li>
                    <li>• Launched to general availability with a significant drop in support tickets related to number acquisition</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary/30 pl-6 mb-8">
                  <div className="w-4 h-4 bg-primary rounded-full transform -translate-x-8 mb-2"></div>
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Background</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  Phone number acquisition is one of the first interactions new users have with the platform—and one of the most complex. Each number comes with eligibility rules, legal disclaimers, and usage limitations depending on location and carrier. The original flow surfaced critical requirements too late, confusing users and generating a high volume of support tickets.
                </p>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  Despite being high-friction and support-heavy, the problem wasn't on the roadmap. I decided to take it on as my personal project during Microsoft's FHL2022 innovation sprint. My early explorations revealed just how misaligned the experience was with user expectations—and how preventable the pain points were.
                </p>

                <div className="border-l-2 border-primary/30 pl-6 mb-8">
                  <div className="w-4 h-4 bg-primary rounded-full transform -translate-x-8 mb-2"></div>
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Initiating the Work</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  I built a functional prototype to reframe the flow through a clearer, modular cart-based system. The concept consolidated requirements upfront, gave users more control and visibility, and clarified legal disclosures without overloading them.
                </p>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  After testing the prototype with internal stakeholders and support teams, I pitched the work to senior leadership. With their support, I brought in product management and engineering to scope the initiative and align on a path to production.
                </p>

                <div className="border-l-2 border-primary/30 pl-6 mb-8">
                  <div className="w-4 h-4 bg-primary rounded-full transform -translate-x-8 mb-2"></div>
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Design Strategy</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  As the senior UX designer, I led the end-to-end redesign. My focus was on more than screens—it was about reshaping how users thought about phone number acquisition.
                </p>
                <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                  Key shifts included:
                </p>
                <ul className="space-y-3 text-foreground/80 text-lg mb-6 pl-6">
                  <li>• <strong>Upfront transparency:</strong> Eligibility rules and legal disclosures moved earlier in the flow, reducing surprise drop-offs.</li>
                  <li>• <strong>Cart-based interaction model:</strong> Let users select, review, and confirm numbers in one coherent space.</li>
                  <li>• <strong>Progressive disclosure:</strong> Complex details shown only when relevant, to prevent cognitive overload.</li>
                  <li>• <strong>Reusable logic and components:</strong> Created a UI framework and flow pattern that other acquisition surfaces could adapt.</li>
                </ul>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  To get there, I partnered across legal, compliance, support, and engineering to untangle requirements, define exceptions, and ensure the redesign aligned with regulatory standards.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <img 
                      src="/lovable-uploads/get-phone-number-start.png" 
                      alt="Phone number acquisition starting page"
                      className="w-full rounded-lg border border-border/50 shadow-sm bg-white p-2"
                    />
                    <p className="text-sm text-foreground/60 text-center">Starting the phone number acquisition process</p>
                  </div>
                  
                  <div className="space-y-4">
                    <img 
                      src="/lovable-uploads/get-phone-number-search.png" 
                      alt="Phone number search interface"
                      className="w-full rounded-lg border border-border/50 shadow-sm bg-white p-2"
                    />
                    <p className="text-sm text-foreground/60 text-center">Searching for available phone numbers with filters</p>
                  </div>
                  
                  <div className="space-y-4">
                    <img 
                      src="/lovable-uploads/get-phone-number-cart.png" 
                      alt="Phone numbers added to shopping cart"
                      className="w-full rounded-lg border border-border/50 shadow-sm bg-white p-2"
                    />
                    <p className="text-sm text-foreground/60 text-center">Adding multiple phone numbers to the cart</p>
                  </div>
                  
                  <div className="space-y-4">
                    <img 
                      src="/lovable-uploads/get-phone-number-cart-2.png" 
                      alt="Shopping cart with multiple phone numbers"
                      className="w-full rounded-lg border border-border/50 shadow-sm bg-white p-2"
                    />
                    <p className="text-sm text-foreground/60 text-center">Managing multiple numbers in the shopping cart</p>
                  </div>
                  
                  <div className="space-y-4">
                    <img 
                      src="/lovable-uploads/get-phone-number-review.png" 
                      alt="Reviewing phone number order before purchase"
                      className="w-full rounded-lg border border-border/50 shadow-sm bg-white p-2"
                    />
                    <p className="text-sm text-foreground/60 text-center">Reviewing the order before finalizing purchase</p>
                  </div>
                  
                  <div className="space-y-4">
                    <img 
                      src="/lovable-uploads/phone-number-purchased.png" 
                      alt="Successful phone number purchase confirmation"
                      className="w-full rounded-lg border border-border/50 shadow-sm bg-white p-2"
                    />
                    <p className="text-sm text-foreground/60 text-center">Confirmation of successful phone number purchase</p>
                  </div>
                </div>

                <div className="border-l-2 border-primary/30 pl-6 mb-8">
                  <div className="w-4 h-4 bg-primary rounded-full transform -translate-x-8 mb-2"></div>
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Outcome</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  The feature shipped to general availability and is now the default experience for number acquisition. Since launch:
                </p>
                <ul className="space-y-3 text-foreground/80 text-lg mb-6 pl-6">
                  <li>• Support tickets related to number purchases have dropped significantly</li>
                  <li>• Time-to-acquire is shorter, with clearer error handling and reduced back-and-forth</li>
                  <li>• The new pattern has been adopted for other complex onboarding flows involving legal and regional constraints</li>
                </ul>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  This project is a strong example of how user-centered thinking—when paired with proactive leadership—can move cross-functional priorities forward, even off the roadmap.
                </p>

                <div className="flex flex-wrap gap-3 mt-8 mb-12">
                  {["Product Design", "UX Research", "Azure Portal", "Developer Experience", "E-commerce UX", "Cross-functional Leadership"].map((tag, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <Button 
                    onClick={() => window.open('https://learn.microsoft.com/en-us/azure/communication-services/quickstarts/telephony/get-phone-number?tabs=windows&pivots=platform-azp-new', '_blank', 'noopener,noreferrer')}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
                  >
                    Try the Experience
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

export default PhoneNumberCart;
