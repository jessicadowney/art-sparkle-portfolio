
import React from 'react';
import WorkCard from './WorkCard';

const Work: React.FC = () => {
  const projects = [
    {
      title: "E-commerce Mobile App Redesign",
      description: "Led the complete redesign of a mobile shopping experience, increasing conversion rates by 40% and user engagement by 60%.",
      tags: ["Mobile Design", "User Research", "Prototyping", "A/B Testing"],
      image: "/placeholder-project1.jpg",
      link: "#"
    },
    {
      title: "SaaS Dashboard Design System",
      description: "Created a comprehensive design system for a B2B analytics platform, improving design consistency across 15+ product teams.",
      tags: ["Design Systems", "Component Library", "Documentation", "Figma"],
      image: "/placeholder-project2.jpg",
      link: "#"
    },
    {
      title: "Healthcare Patient Portal",
      description: "Designed an intuitive patient portal that simplified appointment booking and medical record access for 100k+ users.",
      tags: ["Healthcare", "Accessibility", "User Journey", "Wireframing"],
      image: "/placeholder-project3.jpg",
      link: "#"
    },
    {
      title: "Financial Planning App",
      description: "Developed the UX strategy for a personal finance app that helps users track spending and achieve financial goals.",
      tags: ["FinTech", "Data Visualization", "User Testing", "Mobile"],
      image: "/placeholder-project4.jpg",
      link: "#"
    }
  ];

  return (
    <section id="work" className="py-20 bg-accent/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            Selected <span className="text-primary">Work</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            A collection of projects that showcase my approach to solving complex design challenges
            and creating meaningful user experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <WorkCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
