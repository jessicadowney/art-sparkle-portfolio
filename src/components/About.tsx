
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
                I'm Jessica Downey, a Senior Product Designer with over 10 years of experience 
                creating digital experiences that users love. My journey spans from early-stage 
                startups to established companies, where I've helped shape products that millions 
                of people use every day.
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                I believe great design is invisible—it solves problems so elegantly that users 
                don't even notice the complexity underneath. I specialize in user research, 
                design systems, and collaborative design processes that bring teams together 
                around a shared vision for exceptional user experiences.
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                Currently, I'm passionate about designing for accessibility, sustainability, 
                and inclusive experiences that make technology more human and approachable 
                for everyone.
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
