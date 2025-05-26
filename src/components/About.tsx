
import React from 'react';
import { Users, Lightbulb, Target, Award } from 'lucide-react';

const About: React.FC = () => {
  const principles = [
    {
      icon: Users,
      title: "Human-Centered",
      description: "Every design decision starts with understanding user needs, behaviors, and motivations through deep research and empathy."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing creative boundaries while maintaining usability and accessibility standards across all touchpoints."
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
           Hi! I’m Jessica — a senior UX designer who loves turning fuzzy ideas into clear, delightful digital experiences.
I specialize in designing helpful, beautiful, and well-thought-out interfaces that make everyday life a little easier (and a lot more joyful). Whether it’s through early concepts, wireframes, or high-fidelity prototypes, I’m all about validating ideas early and often—because guessing is fun, but knowing is better.

              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
         I believe in the power of technology to make everyday life better and empower people to do more with less friction. Also: I really, really love discovering the latest baked good or trendy new bakery. When I’m not designing or taste-testing pastries, I’m usually hanging out with my kids, walking our very good corgi Maple, or chasing tiny adventures around the city.
Originally from France, I’ve lived and worked across the USA, the Netherlands, and Canada, collaborating with teams and users from all over the world. These days, I’m based in Vancouver and working at Microsoft, where I help build products that solve real problems and (hopefully) spark a little delight along the way.

              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed">



Curious how I think? Here’s something I wrote on early-stage product strategy:
Jumpstarting your app conception without drawing any UI
              </p>
            </div>
            
            <div className="animate-scale-in">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <p className="text-foreground/60 font-medium">Design is not just what it looks like</p>
                  <p className="text-foreground/60">— it's how it works</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
