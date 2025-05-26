
import React from 'react';
import WorkCard from './WorkCard';

const Work: React.FC = () => {
  const projects = [
    {
      title: "GoFetch.ca - Pet Care Service Platform",
      description: "Led the complete redesign of a pet care service platform, creating unified experiences across web and iOS. Designed onboarding flows, dashboard interfaces, and maintained UI style guides while providing UX direction for platform diversification.",
      tags: ["Product Design", "iOS Design", "Web Platform", "UI Systems"],
      image: "/placeholder-project1.jpg",
      link: "/gofetch"
    },
    {
      title: "Ally - Inclusive Financial Services",
      description: "Designed accessible financial service interfaces focused on inclusive user experiences. Created intuitive workflows that simplified complex financial processes while ensuring compliance with accessibility standards.",
      tags: ["Financial Services", "Accessibility", "User Experience", "Interface Design"],
      image: "/placeholder-project2.jpg",
      link: "/ally"
    },
    {
      title: "Slim - Health & Wellness Platform",
      description: "Developed user-centered design solutions for a health and wellness platform, focusing on behavior change and user engagement. Created interfaces that motivated users while maintaining simplicity and clarity.",
      tags: ["Health Tech", "Behavior Design", "Mobile Experience", "User Engagement"],
      image: "/placeholder-project3.jpg",
      link: "/slim"
    },
    {
      title: "Microsoft OneNote - Collaboration Tools",
      description: "Enhanced OneNote's integration within Microsoft Teams and adapted desktop syncing concepts for web platforms. Improved user workflows for note-taking and collaboration across multiple touchpoints and devices.",
      tags: ["Microsoft", "Collaboration", "Enterprise Software", "Cross-platform"],
      image: "/placeholder-project4.jpg",
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
