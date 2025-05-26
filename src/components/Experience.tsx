
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Product Designer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      period: "2021 - Present",
      description: "Leading design for the core product suite, managing a team of 4 designers, and establishing design standards across the organization.",
      achievements: [
        "Increased user engagement by 45% through redesigned onboarding flow",
        "Built and maintained design system used by 20+ product teams",
        "Led user research initiatives that informed 3 major product pivots"
      ]
    },
    {
      title: "Product Designer",
      company: "StartupXYZ",
      location: "New York, NY",
      period: "2019 - 2021",
      description: "End-to-end product design for B2B SaaS platform, from user research to final implementation.",
      achievements: [
        "Designed features that contributed to 200% revenue growth",
        "Reduced customer support tickets by 30% through improved UX",
        "Collaborated with engineering to implement design system"
      ]
    },
    {
      title: "UX Designer",
      company: "DesignStudio",
      location: "Los Angeles, CA",
      period: "2017 - 2019",
      description: "Worked on diverse client projects ranging from e-commerce to healthcare applications.",
      achievements: [
        "Delivered 25+ successful client projects",
        "Specialized in user research and usability testing",
        "Mentored junior designers and interns"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-accent/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              <span className="text-primary">Experience</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              A journey through different companies and challenges that shaped my design philosophy.
            </p>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative pl-8 pb-8 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline line */}
                <div className="absolute left-0 top-0 w-px h-full bg-border"></div>
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-2 h-2 bg-primary rounded-full transform -translate-x-0.5"></div>
                
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 ml-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                      <h4 className="text-lg text-primary font-medium">{exp.company}</h4>
                    </div>
                    
                    <div className="flex flex-col md:items-end text-sm text-foreground/60 mt-2 md:mt-0">
                      <div className="flex items-center mb-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li 
                        key={achievementIndex}
                        className="flex items-start text-sm text-foreground/70"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
