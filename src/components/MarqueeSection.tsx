
import React from 'react';
import { Separator } from "@/components/ui/separator";

const MarqueeSection = () => {
  const marqueeText = "BUILD • DREAM • CREATE • INNOVATE • GROW • LEAD • INSPIRE • TRANSFORM • ";

  return (
    <div className="relative py-10 bg-primary dark:bg-primary/10 text-primary-foreground overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content whitespace-nowrap font-display font-bold text-4xl md:text-6xl">
          {marqueeText.repeat(4)}
        </div>
        <div className="marquee-content whitespace-nowrap font-display font-bold text-4xl md:text-6xl" aria-hidden="true">
          {marqueeText.repeat(4)}
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;
