
import React from 'react';

const MarqueeSection = () => {
  const marqueeText = "BUILD • DREAM • CREATE • INNOVATE • GROW • LEAD • INSPIRE • TRANSFORM • ";

  return (
    <div className="py-10 bg-fellowship-gold text-black overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content font-display font-bold text-4xl md:text-6xl whitespace-nowrap">
          {marqueeText.repeat(4)}
        </div>
        <div className="marquee-content font-display font-bold text-4xl md:text-6xl whitespace-nowrap">
          {marqueeText.repeat(4)}
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;
