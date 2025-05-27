
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
                  for Azure Communication Services
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-semibold mb-6 text-primary">Background</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  Azure Communication Services enables developers to embed voice and SMS into their applications. One core requirement is the ability to provision phone numbers. However, the original experience was rigid and transactional—customers could only purchase one number at a time, creating friction for teams needing to scale or test multiple scenarios quickly.
                </p>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Problem Statement</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  Customer feedback highlighted major usability gaps in the Azure Portal's number acquisition experience:
                </p>
                <ul className="space-y-2 text-foreground/80 text-lg mb-6">
                  <li>• Only one phone number could be purchased per session</li>
                  <li>• The process required navigating multiple steps with unclear terminology</li>
                  <li>• Regulatory requirements caused drop-off due to lack of in-context guidance</li>
                  <li>• Competitors offered multi-number checkout and better filtering options</li>
                </ul>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  These limitations directly impacted product adoption and satisfaction for Azure Communication Services.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <img 
                      src="/lovable-uploads/55c6fc45-24dc-46a3-8d3a-b70cbf703656.png" 
                      alt="Original phone number wizard showing UI issues"
                      className="w-full rounded-lg border border-border/50 shadow-sm bg-white p-2"
                    />
                    <p className="text-sm text-foreground/60 text-center">Double piping and unclear wizard patterns in the original interface</p>
                  </div>
                  
                  <div className="space-y-4">
                    <img 
                      src="/lovable-uploads/b8d28d0e-5db4-4a8f-9c64-1465ef39e899.png" 
                      alt="Confusing use case selection step"
                      className="w-full rounded-lg border border-border/50 shadow-sm bg-white p-2"
                    />
                    <p className="text-sm text-foreground/60 text-center">Lengthy and confusing use case selection that caused customer confusion</p>
                  </div>
                  
                  <div className="space-y-4">
                    <img 
                      src="/lovable-uploads/62a1358d-d1f3-4857-ab2b-0652e4541ecc.png" 
                      alt="Number availability issues and frustrating experience"
                      className="w-full rounded-lg border border-border/50 shadow-sm bg-white p-2"
                    />
                    <p className="text-sm text-foreground/60 text-center">Stock availability issues and frustrating restrictions based on use case selection</p>
                  </div>
                  
                  <div className="space-y-4">
                    <img 
                      src="/lovable-uploads/d6f3a4b2-0c65-4617-b17a-ca7760c5c55b.png" 
                      alt="Single number limitation with timer pressure"
                      className="w-full rounded-lg border border-border/50 shadow-sm bg-white p-2"
                    />
                    <p className="text-sm text-foreground/60 text-center">Single number limitation with timer pressure creating urgency and stress</p>
                  </div>
                  
                  <div className="space-y-4 md:col-span-2">
                    <img 
                      src="/lovable-uploads/410086e0-e20f-4790-b165-0397804ab49f.png" 
                      alt="Summary step with poor labeling"
                      className="w-full rounded-lg border border-border/50 shadow-sm max-w-lg mx-auto bg-white p-2"
                    />
                    <p className="text-sm text-foreground/60 text-center">Summary step with poor labeling and unclear review process</p>
                  </div>
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Research Insights</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  To inform redesign priorities, we ran usability studies and partnered with customer-facing teams. Findings included:
                </p>
                <ul className="space-y-2 text-foreground/80 text-lg mb-8">
                  <li>• Users wanted faster, clearer access to available numbers</li>
                  <li>• Many expected a "shopping cart" experience to select and manage multiple numbers before purchase</li>
                  <li>• Frustration was highest during service and regulatory selection steps</li>
                  <li>• Customers needed a way to browse and explore without committing upfront</li>
                </ul>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Design Hypotheses</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  From research, we defined four key hypotheses:
                </p>
                <ol className="space-y-2 text-foreground/80 text-lg mb-8 list-decimal list-inside">
                  <li>A cart model will enable faster multi-number provisioning and better user satisfaction.</li>
                  <li>Eliminating the use case/service selection step will improve completion rates.</li>
                  <li>Simplifying regulatory information and showing only what's relevant will reduce abandonment.</li>
                  <li>Streamlining the flow to five clicks or fewer from the Portal Overview page will boost task success.</li>
                </ol>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Solution Overview</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  We introduced a new phone number acquisition experience centered around a flexible shopping cart. Users can:
                </p>
                <ul className="space-y-2 text-foreground/80 text-lg mb-6">
                  <li>• Search by country, city, area code, and capabilities</li>
                  <li>• Select multiple phone numbers to add to their cart</li>
                  <li>• Review and purchase all selected numbers in a single transaction</li>
                  <li>• See contextual guidance for region-specific requirements</li>
                </ul>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  This design replaces the rigid one-at-a-time flow with a more modern, batch-friendly experience aligned with user expectations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <img 
                      src="https://learn.microsoft.com/en-us/azure/communication-services/quickstarts/telephony/media/phone-numbers-portal/get-phone-number-start.png" 
                      alt="Phone number acquisition starting page"
                      className="w-full rounded-lg border border-border/50 shadow-sm bg-white p-2"
                    />
                    <p className="text-sm text-foreground/60 text-center">Starting the phone number acquisition process</p>
                  </div>
                  
                  <div className="space-y-4">
                    <img 
                      src="https://learn.microsoft.com/en-us/azure/communication-services/quickstarts/telephony/media/phone-numbers-portal/get-phone-number-search.png" 
                      alt="Phone number search interface"
                      className="w-full rounded-lg border border-border/50 shadow-sm bg-white p-2"
                    />
                    <p className="text-sm text-foreground/60 text-center">Searching for available phone numbers with filters</p>
                  </div>
                  
                  <div className="space-y-4">
                    <img 
                      src="https://learn.microsoft.com/en-us/azure/communication-services/quickstarts/telephony/media/phone-numbers-portal/get-phone-number-cart.png" 
                      alt="Phone numbers added to shopping cart"
                      className="w-full rounded-lg border border-border/50 shadow-sm bg-white p-2"
                    />
                    <p className="text-sm text-foreground/60 text-center">Adding multiple phone numbers to the cart</p>
                  </div>
                  
                  <div className="space-y-4">
                    <img 
                      src="https://learn.microsoft.com/en-us/azure/communication-services/quickstarts/telephony/media/phone-numbers-portal/get-phone-number-cart-2.png" 
                      alt="Shopping cart with multiple phone numbers"
                      className="w-full rounded-lg border border-border/50 shadow-sm bg-white p-2"
                    />
                    <p className="text-sm text-foreground/60 text-center">Managing multiple numbers in the shopping cart</p>
                  </div>
                  
                  <div className="space-y-4">
                    <img 
                      src="https://learn.microsoft.com/en-us/azure/communication-services/quickstarts/telephony/media/phone-numbers-portal/get-phone-number-review.png" 
                      alt="Reviewing phone number order before purchase"
                      className="w-full rounded-lg border border-border/50 shadow-sm bg-white p-2"
                    />
                    <p className="text-sm text-foreground/60 text-center">Reviewing the order before finalizing purchase</p>
                  </div>
                  
                  <div className="space-y-4">
                    <img 
                      src="https://learn.microsoft.com/en-us/azure/communication-services/quickstarts/telephony/media/phone-numbers-portal/get-phone-number-purchased.png" 
                      alt="Successful phone number purchase confirmation"
                      className="w-full rounded-lg border border-border/50 shadow-sm bg-white p-2"
                    />
                    <p className="text-sm text-foreground/60 text-center">Confirmation of successful phone number purchase</p>
                  </div>
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">Outcomes</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  The redesigned shopping cart launched in Public Preview in February 2024. It is currently being flighted to 10% of Azure Portal users to measure impact on usability, satisfaction, and conversion rates. Early indicators show increased completion rates and lower support volume. The experience will also roll out to Azure Communication Services SDKs, helping unify phone number acquisition across customer journeys.
                </p>

                <div className="flex flex-wrap gap-3 mt-8 mb-12">
                  {["Product Design", "UX Research", "Azure Portal", "Developer Experience", "E-commerce UX"].map((tag, index) => (
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
