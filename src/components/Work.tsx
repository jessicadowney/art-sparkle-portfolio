
import React from 'react';
import WorkCard from './WorkCard';

const Work: React.FC = () => {
  const projects = [
    {
      title: "",
      description: "",
      tags: [],
      image: "",
      link: "/gofetch"
    },
    {
      title: "",
      description: "",
      tags: [],
      image: "",
      link: "/ally"
    },
    {
      title: "",
      description: "",
      tags: [],
      image: "",
      link: "/slim"
    },
    {
      title: "",
      description: "",
      tags: [],
      image: "",
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
