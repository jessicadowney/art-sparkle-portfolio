
import React from 'react';
import WorkCard from './WorkCard';

const Work: React.FC = () => {
  const projects = [
    {
      title: "Shopify Admin Experience",
      description: "Led the redesign of core administrative workflows, focusing on merchant efficiency and reducing task completion time by 35% across key user journeys.",
      tags: ["Product Design", "B2B SaaS", "User Research", "Design Systems"],
      image: "/placeholder-project1.jpg",
      link: "#"
    },
    {
      title: "E-commerce Checkout Optimization",
      description: "Redesigned the checkout experience for a major retail platform, resulting in a 28% increase in conversion rates and improved accessibility compliance.",
      tags: ["UX Design", "Conversion Optimization", "A/B Testing", "Accessibility"],
      image: "/placeholder-project2.jpg",
      link: "#"
    },
    {
      title: "Mobile Banking App Redesign",
      description: "Transformed a legacy banking app into a modern, intuitive experience that increased user engagement by 45% and reduced support tickets by 30%.",
      tags: ["Mobile Design", "FinTech", "User Journey", "Prototyping"],
      image: "/placeholder-project3.jpg",
      link: "#"
    },
    {
      title: "Design System Architecture",
      description: "Built a comprehensive design system from the ground up, scaling design consistency across 12 product teams and reducing design-to-development handoff time by 50%.",
      tags: ["Design Systems", "Component Library", "Documentation", "Scalability"],
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
