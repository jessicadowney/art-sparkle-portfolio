
import React from 'react';
import { Menu, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If we're already on the home page, just scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = () => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
    }
    // Always scroll to top with smooth behavior
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={handleLogoClick}
            className="text-2xl font-bold hover:opacity-80 transition-opacity flex items-center gap-2 font-pixelify bg-gradient-to-r from-[#A0EDE6] via-[#D6B5FF] to-[#FFB2BC] bg-clip-text text-transparent glass-stroke"
          >
            👩‍💻 Jessica Downey
          </button>
          
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
