
import React from 'react';
import WorkCard from './WorkCard';

const Work: React.FC = () => {
  const projects = [
    {
      title: "Sustainable Fashion E-commerce Platform",
      description: "Led the complete redesign of an eco-conscious fashion marketplace, focusing on transparency and sustainable shopping behaviors. Increased conversion rates by 40% while improving user understanding of sustainability metrics.",
      tags: ["E-commerce", "Sustainability", "User Research", "Mobile Design"],
      image: "/placeholder-project1.jpg",
      link: "#"
    },
    {
      title: "Mental Health App for Gen Z",
      description: "Designed an accessible mental wellness platform specifically for young adults, incorporating peer support and professional guidance. Achieved 85% user retention rate and positive mental health outcomes.",
      tags: ["Health Tech", "Mobile App", "Accessibility", "User Journey"],
      image: "/placeholder-project2.jpg",
      link: "#"
    },
    {
      title: "AI-Powered Learning Management System",
      description: "Created an intuitive LMS that adapts to different learning styles using AI. Simplified complex educational workflows and improved student engagement by 60% across diverse age groups.",
      tags: ["EdTech", "AI/ML", "Design Systems", "User Testing"],
      image: "/placeholder-project3.jpg",
      link: "#"
    },
    {
      title: "Smart Home IoT Dashboard",
      description: "Designed a comprehensive IoT control center that makes smart home technology accessible to non-technical users. Reduced customer support tickets by 45% through intuitive interface design.",
      tags: ["IoT", "Dashboard Design", "Information Architecture", "Prototyping"],
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
