
import React, { useRef, useEffect } from 'react';

interface GrantorProps {
  name: string;
  title: string;
  linkedIn: string;
  delay: number;
}

const Grantor = ({ name, title, linkedIn, delay }: GrantorProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      card.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.05, 1.05, 1.05)`;
    };
    
    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale3d(1, 1, 1)';
    };
    
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className="bg-white shadow-lg rounded-xl p-8 border border-border hover:border-fellowship-gold/30 transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${delay}s`, transformStyle: 'preserve-3d', transition: 'transform 0.2s ease-out' }}
    >
      <div 
        className="w-16 h-16 bg-fellowship-gold/20 rounded-full mb-4 flex items-center justify-center text-2xl font-bold text-fellowship-gold"
        style={{ transform: 'translateZ(20px)' }}
      >
        {name.charAt(0)}
      </div>
      <h3 
        className="text-xl font-display font-bold mb-1"
        style={{ transform: 'translateZ(15px)' }}
      >
        {name}
      </h3>
      <p 
        className="text-muted-foreground mb-4"
        style={{ transform: 'translateZ(10px)' }}
      >
        {title}
      </p>
      <a 
        href={linkedIn} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-sm text-fellowship-gold hover:underline inline-flex items-center"
        style={{ transform: 'translateZ(15px)' }}
      >
        LinkedIn Profile
        <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  );
};

const GrantorsSection = () => {
  return (
    <section className="py-20 relative" id="grantors">
      <div className="absolute inset-0 bg-grain-pattern opacity-40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16">
          <span className="gradient-text">Grantors</span>
        </h2>
        
        <p className="text-xl text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          We're three brothers — Pranav, Akshay, and Nikunj. We all grew up in Ahmedabad, 
          ventured to the US for college, and have been incredibly fortunate to embark on 
          various entrepreneurial journeys.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Grantor
            name="Pranav Kothari"
            title="Entrepreneur & Investor"
            linkedIn="https://www.linkedin.com/in/pranav-kothari/"
            delay={0.1}
          />
          <Grantor
            name="Akshay Kothari"
            title="Entrepreneur & Investor"
            linkedIn="https://www.linkedin.com/in/akothari/"
            delay={0.3}
          />
          <Grantor
            name="Nikunj Kothari"
            title="Entrepreneur & Investor"
            linkedIn="https://www.linkedin.com/in/nikunjk/"
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};

export default GrantorsSection;
