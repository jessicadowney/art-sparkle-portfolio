
import React from 'react';
import WorkCard from './WorkCard';

const Work: React.FC = () => {
  const projects = [
    {
      title: "Phone Number Shopping Cart for Azure Communication Services",
      description: "A redesigned phone number acquisition experience that replaced rigid one-at-a-time purchasing with a flexible shopping cart, enabling multi-number provisioning and improving user satisfaction.",
      tags: ["Product Design", "UX Research", "Azure Portal", "Developer Experience", "E-commerce UX"],
      image: "/lovable-uploads/e8fbc49c-4872-4595-a175-5180913da088.png",
      link: "/phone-number-cart",
      year: "2022"
    },
    {
      title: "Virtual Visit Sample Builder for Azure Communication Services",
      description: "A developer tool for Azure Communication Services that helps create and customize virtual healthcare experiences with no-code configuration, ARM template generation, and downloadable repositories.",
      tags: ["Product Design", "Developer Experience", "UX Research", "Design Systems", "Azure", "Healthcare Technology"],
      image: "/lovable-uploads/dfec2eed-75b5-42ba-b425-61980e91c034.png",
      link: "/azure",
      year: "2021"
    },
    {
      title: "GoFetch.ca",
      description: "A pet care service platform that connects dog parents with trusted care providers, featuring unified design systems and improved sitter conversion rates through mobile-first experiences.",
      tags: ["Product Design", "Design Systems", "Mobile UX", "Conversion Optimization", "Brand Design"],
      image: "/lovable-uploads/577cf926-a215-446a-b74a-b4da42e6c3ab.png",
      link: "/gofetch",
      year: "2018"
    },
    {
      title: "Amped Wireless Ally",
      description: "A white-labeled security and parental control app designed for Wi-Fi routers, featuring streamlined setup flows and intuitive network management for families.",
      tags: ["Mobile Design", "UX Strategy", "Information Architecture", "Mobile UX"],
      image: "/lovable-uploads/247125df-8a71-4d2d-ab6a-d13b1a061447.png",
      link: "/ally",
      year: "2016"
    },
    {
      title: "Microsoft OneNote: Cloud Attachment Insertion Prompt",
      description: "A collaborative note-taking platform feature that reinstated cloud attachment capabilities with contextual options based on file type, improving user workflow and platform parity.",
      tags: ["Product Design", "UX Research", "Accessibility", "Fluent UI"],
      image: "/lovable-uploads/ff2b8e20-f09f-46f7-a76b-4c18e3bd0f07.png",
      link: "/onenote",
      year: "2019"
    },
    {
      title: "syngo® Lab Inventory Manager (sLIM)",
      description: "A cloud-based inventory management system redesign for Siemens Healthineers, focusing on simplifying complex navigation and improving usability for lab professionals.",
      tags: ["Information Architecture", "UX Research", "Interface Design", "Healthcare Technology"],
      image: "/lovable-uploads/1679930e-73ec-4331-bbf1-af89667007ec.png",
      link: "/slim",
      year: "2012"
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
