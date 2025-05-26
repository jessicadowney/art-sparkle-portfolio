
import React from 'react';
import WorkCard from './WorkCard';

const Work: React.FC = () => {
  const projects = [
    {
      title: "GoFetch.ca",
      description: "Led the complete redesign of a pet care service platform as Head of Product Design. Created unified experiences across web and iOS while diversifying service offerings and improving user engagement.",
      tags: ["Product Design", "iOS Design", "Web Platform", "UI Systems"],
      image: "https://jessicadowney.com/wp-content/uploads/2024/01/GoFetch-Header.jpg",
      link: "/gofetch"
    },
    {
      title: "Ally",
      description: "Design accessible and inclusive financial service interfaces that serve millions of customers. Focus on creating experiences that make complex financial processes simple and accessible to users of all abilities.",
      tags: ["Financial Services", "Accessibility", "WCAG Compliance", "Inclusive Design"],
      image: "https://jessicadowney.com/wp-content/uploads/2024/01/Ally-Header.jpg",
      link: "/ally"
    },
    {
      title: "Slim",
      description: "Developed user-centered design solutions for a health and wellness platform focused on sustainable behavior change. Created interfaces that motivated users while maintaining simplicity and scientific backing.",
      tags: ["Health Tech", "Behavior Design", "Mobile UX", "User Research"],
      image: "https://jessicadowney.com/wp-content/uploads/2024/01/Slim-Header.jpg",
      link: "/slim"
    },
    {
      title: "Microsoft OneNote",
      description: "Enhanced OneNote's integration within Microsoft Teams and adapted desktop syncing concepts for web platforms. Improved collaboration workflows for millions of enterprise and educational users.",
      tags: ["Microsoft", "Enterprise Software", "Collaboration", "Cross-platform"],
      image: "https://jessicadowney.com/wp-content/uploads/2024/01/OneNote-Header.jpg",
      link: "/onenote"
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
            and creating meaningful, accessible user experiences.
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
