
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Product Designer",
      company: "Sustainable Tech Solutions",
      location: "Remote",
      period: "2022 - Present",
      description: "Leading design strategy for climate-tech products, focusing on user education and behavioral change through design. Managing cross-functional teams and establishing design standards.",
      achievements: [
        "Increased user engagement with sustainability features by 65%",
        "Led design system implementation across 5 product teams",
        "Conducted comprehensive user research informing product roadmap"
      ]
    },
    {
      title: "Product Designer",
      company: "HealthTech Innovations",
      location: "San Francisco, CA",
      period: "2020 - 2022",
      description: "Designed end-to-end experiences for mental health and wellness applications, with focus on accessibility and inclusive design practices.",
      achievements: [
        "Designed features serving 500K+ active users daily",
        "Improved app accessibility compliance to WCAG AAA standards",
        "Reduced user onboarding time by 50% through UX optimization"
      ]
    },
    {
      title: "UX Designer",
      company: "EduTech Collective",
      location: "New York, NY",
      period: "2018 - 2020",
      description: "Specialized in educational technology and learning experience design, working on products for diverse age groups and learning abilities.",
      achievements: [
        "Designed learning platforms used by 1M+ students globally",
        "Increased course completion rates by 35% through UX improvements",
        "Established user research practice and mentored junior designers"
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
              A journey through meaningful work that has shaped my design philosophy and approach to solving complex user problems.
            </p>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative pl-8 pb-8 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute left-0 top-0 w-px h-full bg-border"></div>
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
