
import React from 'react';

const MarqueeSection = () => {
  const marqueeText = "BUILD • DREAM • CREATE • INNOVATE • GROW • LEAD • INSPIRE • TRANSFORM • ";

  return (
    <div className="py-10 bg-background overflow-hidden border-y border-border">
      <div className="w-full overflow-hidden relative">
        <div className="flex animate-marquee whitespace-nowrap">
          <div className="marquee-content font-display font-bold text-4xl md:text-6xl whitespace-nowrap text-primary">
            {marqueeText.repeat(4)}
          </div>
          <div className="marquee-content font-display font-bold text-4xl md:text-6xl whitespace-nowrap text-primary absolute left-[100%] top-0">
            {marqueeText.repeat(4)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;
