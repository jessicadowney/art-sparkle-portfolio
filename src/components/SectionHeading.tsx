import React from 'react';

// Editorial section opener: a hairline, then a display-size title on the left with its
// intro set beside it. Every section shares it so the scroll has one steady voice.
const SectionHeading: React.FC<{ title: React.ReactNode; intro?: React.ReactNode }> = ({ title, intro }) => (
  <header className="mb-16 grid gap-6 border-t border-border pt-8 md:mb-20 md:grid-cols-[1fr_minmax(0,26rem)] md:items-end md:gap-12">
    <h2 className="text-5xl md:text-7xl font-light tracking-tight text-balance antialiased">{title}</h2>
    {intro && <p className="text-lg text-foreground/70 leading-relaxed antialiased">{intro}</p>}
  </header>
);

export default SectionHeading;
