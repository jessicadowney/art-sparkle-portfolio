import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Product Designer",
      company: "Microsoft - Azure Communication Services",
      location: "Vancouver, BC, Canada",
      period: "2021 - Present",
      description: "Owning UX/UI vision and design direction for new Azure Communication Services features in Azure portal, including Short Codes & Sample Builder, improving developer adoption and usability.",
      achievements: [
        "Hacked a redesign of telephone number purchasing experience during FHL 2022, securing executive approval for full-scale redesign",
        "Facilitated cross-functional alignment to drive API evolution supporting UX improvements across global markets",
        "Validated design hypotheses using hypothesis testing framework with usability testing, A/B testing, and heuristic evaluations",
        "Led team ideation sessions and cross-functional design sprints with PMs and engineers for data-driven decisions"
      ]
    },
    {
      title: "Product Designer",
      company: "Microsoft - Azure Communication Services",
      location: "Vancouver, BC, Canada",
      period: "Jan 2021 - Sep 2021",
      description: "Designing wireframes, UI and prototypes for Azure Communication Services, focusing on Direct Routing UX and improving customer onboarding in Azure Portal.",
      achievements: [
        "Created UX for Direct Routing functionality",
        "Improved customer onboarding experience for Azure Communication Services",
        "Contributed to design systems through wireframes and high-fidelity mockups"
      ]
    },
    {
      title: "Product Designer",
      company: "Microsoft - OneNote",
      location: "Vancouver, BC, Canada",
      period: "2018 - 2021",
      description: "Designing wireframes, UI and prototypes for Microsoft OneNote, focusing on integration improvements and syncing concepts across platforms.",
      achievements: [
        "Improved integration of OneNote Online in Microsoft Teams",
        "Adapted new syncing concept from OneNote Desktop to OneNote Online",
        "Enhanced cross-platform user experience consistency"
      ]
    },
    {
      title: "Head of Product Design",
      company: "GoFetch.ca",
      location: "Vancouver, BC, Canada",
      period: "2017 - 2018",
      description: "Leading design meetings and running brainstorming sessions for new feature development. Provided UX and art direction to redesign web & iOS platforms.",
      achievements: [
        "Led requirements definition and UX architecture for platform redesign",
        "Designed wireframes, UI and prototypes for web, iOS and Android features",
        "Created unified experience across all platforms",
        "Implemented new UI using HTML/SASS and React JS"
      ]
    },
    {
      title: "Senior Interaction Designer",
      company: "AVG Technologies - Innovation Group",
      location: "Amsterdam, Netherlands",
      period: "2015 - 2016",
      description: "Supported concept development within the Innovation Group, facilitating design sprints and creating high-fidelity prototypes for user testing.",
      achievements: [
        "Facilitated design sprints and design iteration sessions",
        "Created concept designs through storyboards, wireframes & prototypes",
        "Provided UX support for Scrum development teams",
        "Coded interactive prototypes for mobile, web & desktop products"
      ]
    },
    {
      title: "Interaction Designer",
      company: "AVG Technologies - Innovation Group",
      location: "Amsterdam, Netherlands",
      period: "2012 - 2015",
      description: "Supported concept development within the Innovation Group with focus on concept generation, storyboarding, and rapid prototyping.",
      achievements: [
        "Led concept generation and wireframe sketching processes",
        "Created quick prototypes for concept validation",
        "Contributed to innovation initiatives across multiple product lines"
      ]
    },
    {
      title: "IXD/UX Designer",
      company: "Siemens Corporate Research USA",
      location: "Princeton, NJ, USA",
      period: "2011 - 2012", 
      description: "Designed user interfaces for new Siemens products & systems, leading requirements definition and UX for healthcare & industry sector products.",
      achievements: [
        "Led new product development from requirement elicitation to final visual assets",
        "Conducted user testing and stakeholder alignment for agile teams",
        "Produced information architecture and wireframes for stakeholder approval",
        "Provided UX consultancy across healthcare and industry business units"
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
Designing at the intersection of UX and product for 15+ years — across enterprise, industrial, and consumer experiences.            </p>
          </div>
          
          <div className="space-y-0">
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
