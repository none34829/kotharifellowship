import React from 'react';
import { Check } from 'lucide-react';

const QualityTag = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center bg-secondary rounded-full px-3 py-1 text-sm mr-2 mb-2 animate-fade-in">
    <Check className="h-3 w-3 mr-1 text-fellowship-gold" />
    <span>{children}</span>
  </div>
);

const WhoSection = () => {
  return (
    <section className="py-20 bg-secondary/70 relative" id="who">
      <div className="absolute inset-0 bg-grain-pattern opacity-40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-8">
            <span className="gradient-text">Who?</span>
          </h2>
          
          <p className="text-xl text-center mb-10 animate-fade-in">
            We seek unconventional builders who demonstrate creativity, self-motivation, and a passion for learning.
          </p>
          
          <div className="flex flex-wrap justify-center mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <QualityTag>Unconventional Thinkers</QualityTag>
            <QualityTag>Creative Problem Solvers</QualityTag>
            <QualityTag>Self-motivated</QualityTag>
            <QualityTag>Passionate Learners</QualityTag>
            <QualityTag>Resilient Builders</QualityTag>
            <QualityTag>Under 25 Years Old</QualityTag>
            <QualityTag>Indian National</QualityTag>
          </div>
          
          <div className="bg-white/80 dark:bg-black/90 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-lg border border-fellowship-gold/20 dark:border-primary/30 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-display font-bold mb-4">What We Look For</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-4 mt-1">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-fellowship-gold text-black font-medium">1</span>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Demonstrated Creativity</h4>
                  <p className="text-muted-foreground dark:text-foreground/90">Evidence of creative thinking in past projects or initiatives, no matter how small.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="mr-4 mt-1">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-fellowship-gold text-black font-medium">2</span>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Clear Vision</h4>
                  <p className="text-muted-foreground dark:text-foreground/90">A compelling idea or project with potential for meaningful impact.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="mr-4 mt-1">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-fellowship-gold text-black font-medium">3</span>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Passion for Learning</h4>
                  <p className="text-muted-foreground dark:text-foreground/90">Hunger for knowledge and willingness to grow through challenges.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="mr-4 mt-1">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-fellowship-gold text-black font-medium">4</span>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Resilience</h4>
                  <p className="text-muted-foreground dark:text-foreground/90">Ability to persist despite obstacles and setbacks.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoSection;