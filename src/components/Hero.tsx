
import React from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openResume = () => {
    window.open('https://drive.google.com/file/d/1UCw89u3GRPw3xHg0_14dQt18N3iD9S5E/view?usp=drive_link', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-tight antialiased leading-relaxed pb-8">
            <span className="block text-foreground/90">Senior</span>
            <span className="block bg-gradient-to-r from-[#A0EDE6] via-[#D6B5FF] to-[#FFB2BC] bg-clip-text text-transparent glass-stroke" style={{ height: '120px', lineHeight: '120px' }}>
              Product Designer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed antialiased">
            Designing intuitive, human-centered digital experiences that solve real problems 
            and create meaningful connections between users and technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToWork}
              size="lg"
              className="animated-gradient text-white glass-stroke px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 antialiased"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              onClick={openResume}
              variant="outline"
              size="lg"
              className="px-8 py-3 rounded-full text-lg border-2 hover:bg-accent transition-all duration-300 hover:scale-105 antialiased"
            >
              Download Resume
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex justify-center space-x-8 text-sm text-foreground/60 antialiased">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div>Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Microsoft</div>
              <div>Senior Designer</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Global</div>
              <div>Scale Impact</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-foreground/40" />
      </div>
    </section>
  );
};

export default Hero;
