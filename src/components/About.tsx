import React from 'react';
import { Users, Lightbulb, Target, Award } from 'lucide-react';

const About: React.FC = () => {
  const principles = [
    {
      icon: Users,
      title: "Human-Centered",
      description: "Every design decision begins with understanding user jobs and motivations, validated through hypotheses to create impactful experiences."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Championing fast-paced innovation with design sprints and user-centered frameworks to explore, test and build inclusive solutions"
    },
    {
      icon: Target,
      title: "Strategic",
      description: "Aligning design solutions with business objectives to drive measurable outcomes and user satisfaction."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Commitment to crafting polished, detailed experiences that delight users and exceed expectations."
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              About <span className="text-primary">Me</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-16">
            <div className="lg:col-span-2 animate-fade-in glass-container rounded-2xl p-8">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Hi! I'm Jessica — a senior UX designer who makes messy ideas click.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                I turn ambiguity into clarity, aligning teams around intuitive solutions that solve real user problems and drive business outcomes. Whether I'm shaping product direction, untangling complex systems, or pushing pixels with intent, I design with both empathy and precision.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Right now, I'm at Microsoft, designing at Azure Communication Services. I work best in spaces where things are a bit undefined — where sharp thinking, strong collaboration, and good taste can change the trajectory of a product.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                I've lived and worked across France, the US, the Netherlands, and now Canada, and I bring that global perspective into how I think, design, and lead. I believe good design makes technology feel human — not just usable, but considerate.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Outside of work, I'm a food nerd, a corgi-walker, and a mom of two. (Ask me about mochi donuts or bingsu.)
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Want to see how I approach design from zero? Here's something I wrote: <a target="_blank" href="https://medium.com/@jessicadowney/jumpstarting-your-app-conception-without-drawing-any-ui-8e5be35876c9#.h8nbq1bfn/">Jumpstarting your app conception without drawing any UI</a>.
              </p>
            </div>
            
            <div className="lg:col-span-1 animate-scale-in">
              <div className="flex flex-col items-center space-y-6 max-w-xs mx-auto">
                <div className="w-48 h-48 group cursor-pointer">
                  <img 
                    src="/lovable-uploads/daec6d9b-bfe6-4ff8-a782-31d6d1d0a88f.png" 
                    alt="Jessica with baby in hiking carrier"
                    className="w-full h-full object-cover rounded-[20px] transition-transform duration-500 group-hover:scale-105 shadow-lg"
                  />
                </div>
                
                <div className="w-48 h-48 group cursor-pointer">
                  <img 
                    src="/lovable-uploads/90982b97-9bcd-4f49-bde7-1c2f08f108e6.png" 
                    alt="Jessica under cherry blossoms"
                    className="w-full h-full object-cover rounded-[20px] transition-transform duration-500 group-hover:scale-105 shadow-lg"
                  />
                </div>
                
                <div className="w-48 h-48 group cursor-pointer">
                  <img 
                    src="/lovable-uploads/e1547e16-1b69-4e9f-ad12-438f3d035dd3.png" 
                    alt="Jessica with heart sunglasses making peace sign"
                    className="w-full h-full object-cover rounded-[20px] transition-transform duration-500 group-hover:scale-105 shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {principles.map((principle, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <principle.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{principle.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
