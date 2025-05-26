
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Product Designer",
      company: "Instacart",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading design for Instacart's core shopping experience, focusing on personalization and AI-driven features. Designing end-to-end experiences that serve millions of customers and shoppers daily.",
      achievements: [
        "Led design for AI-powered shopping recommendations serving 50M+ users",
        "Improved checkout conversion by 23% through UX optimization",
        "Established design system standards across 15+ product teams"
      ]
    },
    {
      title: "Senior Product Designer",
      company: "Square",
      location: "San Francisco, CA", 
      period: "2019 - 2022",
      description: "Designed financial products and tools for small businesses, focusing on payment processing, analytics, and business management solutions.",
      achievements: [
        "Designed features used by 2M+ merchants globally",
        "Increased seller onboarding completion by 40% through UX improvements",
        "Led accessibility initiative achieving WCAG AA compliance"
      ]
    },
    {
      title: "Product Designer",
      company: "Airbnb",
      location: "San Francisco, CA",
      period: "2016 - 2019", 
      description: "Worked on host and guest experiences, focusing on trust and safety, booking flows, and mobile-first design for global markets.",
      achievements: [
        "Designed booking flow improvements increasing conversion by 18%",
        "Led internationalization design for 15+ countries",
        "Mentored junior designers and established design critique processes"
      ]
    },
    {
      title: "UX Designer",
      company: "Facebook (Meta)",
      location: "Menlo Park, CA",
      period: "2013 - 2016",
      description: "Designed features for Facebook's core platform, focusing on news feed, messaging, and mobile experiences during period of rapid growth.",
      achievements: [
        "Designed mobile features used by 1B+ daily active users",
        "Improved news feed engagement metrics by 15%",
        "Contributed to Facebook's first design system guidelines"
      ]
    },
    {
      title: "Visual Designer",
      company: "IDEO",
      location: "Palo Alto, CA", 
      period: "2010 - 2013",
      description: "Worked on human-centered design projects for Fortune 500 companies, focusing on digital transformation and innovation consulting.",
      achievements: [
        "Led design research and strategy for 20+ client projects",
        "Developed design thinking workshops for enterprise clients",
        "Created digital experiences across healthcare, finance, and retail"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-accent/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight antialiased">
              <span className="text-primary">Experience</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto antialiased">
              15+ years designing products that millions of people use every day, from startups to Fortune 500 companies.
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
                      <h3 className="text-xl font-semibold mb-1 antialiased">{exp.title}</h3>
                      <h4 className="text-lg text-primary font-medium antialiased">{exp.company}</h4>
                    </div>
                    
                    <div className="flex flex-col md:items-end text-sm text-foreground/60 mt-2 md:mt-0 antialiased">
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
                  
                  <p className="text-foreground/80 mb-4 leading-relaxed antialiased">
                    {exp.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li 
                        key={achievementIndex}
                        className="flex items-start text-sm text-foreground/70 antialiased"
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
