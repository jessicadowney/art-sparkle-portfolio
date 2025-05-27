
import React from 'react';
import WorkCard from './WorkCard';

const Work: React.FC = () => {
  const projects = [
    {
      title: "",
      description: "",
      tags: [],
      image: "",
      link: "/project1"
    },
    {
      title: "",
      description: "",
      tags: [],
      image: "",
      link: "/project2"
    },
    {
      title: "",
      description: "",
      tags: [],
      image: "",
      link: "/gofetch"
    },
    {
      title: "Amped Wireless Ally",
      description: "A white-labeled security and parental control app designed for Wi-Fi routers, featuring streamlined setup flows and intuitive network management for families.",
      tags: ["Mobile Design", "UX Strategy", "Information Architecture", "User Research"],
      image: "/lovable-uploads/247125df-8a71-4d2d-ab6a-d13b1a061447.png",
      link: "/ally"
    },
    {
      title: "Microsoft OneNote: Cloud Attachment Insertion Prompt",
      description: "A collaborative note-taking platform feature that reinstated cloud attachment capabilities with contextual options based on file type, improving user workflow and platform parity.",
      tags: ["Product Design", "UX Research", "Accessibility", "Fluent UI"],
      image: "/lovable-uploads/ff2b8e20-f09f-46f7-a76b-4c18e3bd0f07.png",
      link: "/onenote"
    },
    {
      title: "syngo® Lab Inventory Manager (sLIM)",
      description: "A cloud-based inventory management system redesign for Siemens Healthineers, focusing on simplifying complex navigation and improving usability for lab professionals.",
      tags: ["Information Architecture", "UX Research", "Interface Design", "Healthcare Technology"],
      image: "/lovable-uploads/1679930e-73ec-4331-bbf1-af89667007ec.png",
      link: "/slim"
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
