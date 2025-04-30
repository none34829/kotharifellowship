
import React from 'react';
import { Separator } from "@/components/ui/separator";

const MarqueeSection = () => {
  const marqueeText = "BUILD • DREAM • CREATE • INNOVATE • GROW • LEAD • INSPIRE • TRANSFORM • ";

  return (
    <div className="relative py-10 bg-primary dark:bg-fellowship-gold/5 overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content whitespace-nowrap font-display font-bold text-4xl md:text-6xl text-primary-foreground dark:text-fellowship-gold/80">
          {marqueeText.repeat(20)}
        </div>
        <div className="marquee-content whitespace-nowrap font-display font-bold text-4xl md:text-6xl text-primary-foreground dark:text-fellowship-gold/80" aria-hidden="true">
          {marqueeText.repeat(20)}
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;
