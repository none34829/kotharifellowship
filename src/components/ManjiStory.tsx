
import React, { useEffect } from 'react';
import { Card } from '@/components/ui/card';

const ManjiStory = () => {
  
  useEffect(() => {
    // Only track scroll for the yellow underline animation
    const handleScroll = () => {
      const element = document.getElementById('manji-story');
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight * 0.8;
      
      if (isInView) {
        element.classList.add('section-in-view');
      } else {
        element.classList.remove('section-in-view');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section className="py-20 bg-secondary/70 relative" id="why">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16">
          <span className="gradient-text">Why?</span>
        </h2>
        
        <div id="manji-story" className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Inspired by <span className="highlight">Our Grandmother</span>
            </h3>
            <p className="text-lg mb-6 text-muted-foreground">
              This fellowship is inspired by our grandmother, <strong>Manju</strong>, who recently celebrated her 80th birthday. She's one of the most creative and entrepreneurial people we know.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              Manju grew up in a traditional Marwari family and never worked professionally. However, in another life, she could have been the CEO of Fortune 500 company. We're excited for you all to meet her!
            </p>
            <Card className="p-4 bg-fellowship-gold/10 border-fellowship-gold/20">
              <p className="font-serif italic">
                "The world is full of untapped potential. We hope this fellowship helps unlock yours."
              </p>
            </Card>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="relative overflow-hidden border-4 border-white shadow-xl rounded-full aspect-square">
              <img 
                src="/5ac246c0-92a7-440f-bea6-0468fbfcfbc1.png" 
                alt="Manju" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManjiStory;
