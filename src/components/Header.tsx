
import React from 'react';
import { Menu, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
            Jessica Downey
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground/80 hover:text-foreground transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('work')}
              className="text-foreground/80 hover:text-foreground transition-colors duration-300"
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-foreground/80 hover:text-foreground transition-colors duration-300"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground/80 hover:text-foreground transition-colors duration-300"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
