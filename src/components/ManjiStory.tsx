
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

const ManjiStory = () => {
  const [animated, setAnimated] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('manji-story');
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight * 0.8;
      
      if (isInView) {
        setAnimated(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section className="py-20 relative" id="why">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16">
          <span className="gradient-text">Why?</span>
        </h2>
        
        <div id="manji-story" className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
          <div className={`w-full md:w-1/2 order-2 md:order-1 transition-all duration-1000 ${animated ? 'opacity-100' : 'opacity-0 translate-x-20'}`}>
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Inspired by <span className="highlight">Manju</span>
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
          
          <div className={`w-full md:w-1/2 order-1 md:order-2 transition-all duration-1000 ${animated ? 'opacity-100' : 'opacity-0 -translate-x-20'}`}>
            <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="https://prod-files-secure.s3.us-west-2.amazonaws.com/1bf6599f-b473-4961-b7a4-c9d3f36ac476/64ccfae8-ce5a-478a-9cd1-81ef51b6bb29/5ac246c0-92a7-440f-bea6-0468fbfcfbc1.png" 
                alt="Manju" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white text-xl font-display font-medium">
                Manju Kothari
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManjiStory;
