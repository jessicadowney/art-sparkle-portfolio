
import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface WorkCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ title, description, tags, image, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      if (link.startsWith('http')) {
        window.open(link, '_blank', 'noopener,noreferrer');
      } else {
        navigate(link);
      }
    }
  };

  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border border-border/50 cursor-pointer" onClick={handleClick}>
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-purple-600/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute top-4 right-4">
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <ExternalLink className="h-5 w-5 text-primary" />
          </div>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-foreground/70 mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-accent rounded-full text-xs font-medium text-accent-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <Button 
          variant="ghost" 
          className="p-0 h-auto font-medium text-primary hover:text-primary/80 group/btn"
        >
          View Case Study
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default WorkCard;
