
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
        Hi! I'm Jessica — a senior UX designer who loves making messy ideas make sense.</p>
                                              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
I design thoughtful, intuitive digital products that are grounded in user needs and validated early (because why guess when you can know?). From concept to prototype, I bring clarity and delight to complex problems through sharp thinking and clean interfaces.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
       Originally from France, I've worked in the US, the Netherlands, and now Canada, where I'm currently at Microsoft. I believe technology, shaped by thoughtful design, has the power to improve our lives in meaningful ways and make interactions feel more seamless and human.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
When I'm not designing, I'm usually hunting the latest trendy food find (mochi donuts, bingsu, matcha lattes), playing with my kids, or walking our corgi, <a target="_blank" href="https://www.instagram.com/maplecorgi/?hl=en">Maple.</a></p>
              <p className="text-lg text-foreground/80 leading-relaxed">
Curious how I think? Here's something I wrote:
<a target="_blank" href="https://medium.com/@jessicadowney/jumpstarting-your-app-conception-without-drawing-any-ui-8e5be35876c9#.h8nbq1bfn/">Jumpstarting your app conception without drawing any UI</a>
              </p>
            </div>
            
            <div className="animate-scale-in">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-2xl flex flex-col items-center justify-center p-8">
                <div className="relative w-64 h-48 mb-6">
                  {/* First image - back layer */}
                  <div className="absolute top-0 left-0 w-32 h-32 group cursor-pointer">
                    <img 
                      src="/lovable-uploads/daec6d9b-bfe6-4ff8-a782-31d6d1d0a88f.png" 
                      alt="Jessica with baby in hiking carrier"
                      className="w-full h-full object-cover rounded-[20px] transition-transform duration-500 group-hover:scale-105 shadow-lg"
                    />
                  </div>
                  
                  {/* Second image - middle layer, overlapping */}
                  <div className="absolute top-4 left-20 w-32 h-32 group cursor-pointer z-10">
                    <img 
                      src="/lovable-uploads/90982b97-9bcd-4f49-bde7-1c2f08f108e6.png" 
                      alt="Jessica under cherry blossoms"
                      className="w-full h-full object-cover rounded-[20px] transition-transform duration-500 group-hover:scale-105 shadow-lg"
                    />
                  </div>
                  
                  {/* Third image - front layer, overlapping */}
                  <div className="absolute top-8 left-40 w-32 h-32 group cursor-pointer z-20">
                    <img 
                      src="/lovable-uploads/e1547e16-1b69-4e9f-ad12-438f3d035dd3.png" 
                      alt="Jessica with heart sunglasses making peace sign"
                      className="w-full h-full object-cover rounded-[20px] transition-transform duration-500 group-hover:scale-105 shadow-lg"
                    />
                  </div>
                </div>
                
                <div className="text-center">
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
