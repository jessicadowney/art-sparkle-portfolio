
import React from 'react';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact: React.FC = () => {
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:alex.chen@example.com",
      username: "alex.chen@example.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/alexchen",
      username: "/in/alexchen"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/alexchen",
      username: "@alexchen"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/alexchen",
      username: "@alexchen"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Let's <span className="text-primary">Connect</span>
            </h2>
            
            <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              I'm always excited to discuss new opportunities, collaborations, or just chat about design. 
              Drop me a line and let's create something amazing together.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                    <link.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium mb-2 group-hover:text-primary transition-colors duration-300">
                    {link.label}
                  </h3>
                  <p className="text-sm text-foreground/60">{link.username}</p>
                </a>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-2xl p-8 border border-border/50">
              <h3 className="text-2xl font-semibold mb-4">Ready to start a project?</h3>
              <p className="text-foreground/70 mb-6">
                I'm currently available for freelance work and interesting full-time opportunities.
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105"
              >
                Get In Touch
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
