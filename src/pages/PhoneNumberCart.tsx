
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
                <ul className="space-y-2 text-foreground/80 text-lg mb-8">
                  <li>• Only one phone number could be purchased per session</li>
                  <li>• The process required navigating multiple steps with unclear terminology</li>
                  <li>• Regulatory requirements caused drop-off due to lack of in-context guidance</li>
                  <li>• Competitors offered multi-number checkout and better filtering options</li>
                </ul>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  These limitations directly impacted product adoption and satisfaction for Azure Communication Services.
                </p>

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
                <ul className="space-y-2 text-foreground/80 text-lg mb-8">
                  <li>• Search by country, city, area code, and capabilities</li>
                  <li>• Select multiple phone numbers to add to their cart</li>
                  <li>• Review and purchase all selected numbers in a single transaction</li>
                  <li>• See contextual guidance for region-specific requirements</li>
                </ul>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  This design replaces the rigid one-at-a-time flow with a more modern, batch-friendly experience aligned with user expectations.
                </p>

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
