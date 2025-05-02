
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ProcessStep = ({ 
  number, 
  title, 
  description 
}: { 
  number: number; 
  title: string; 
  description: string;
}) => (
  <div className="relative animate-fade-in" style={{ animationDelay: `${number * 0.2}s` }}>
    <div className="flex items-start">
      <div className="relative mr-6">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-fellowship-gold text-black font-bold">
          {number}
        </div>
        {number < 4 && (
          <div className="absolute top-10 bottom-0 left-1/2 w-0.5 h-16 bg-gradient-to-b from-fellowship-gold/50 to-transparent -translate-x-1/2"></div>
        )}
      </div>
      <div>
        <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  </div>
);

const HowSection = () => {
  return (
    <section className="py-20 relative" id="how">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16">
          <span className="gradient-text">How?</span>
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-12">
          <ProcessStep 
            number={1}
            title="Submit Your Application"
            description="Applications are accepted on a rolling basis. Share your background, ideas, and aspirations with us."
          />
          
          <ProcessStep 
            number={2}
            title="Initial Review"
            description="Our team reviews applications as they come in. Our goal is to respond to all applications within 2–4 weeks."
          />
          
          <ProcessStep 
            number={3}
            title="Video Interview"
            description="If we find a potential fit, we'll invite you for a video interview to learn more about you and your vision."
          />
          
          <ProcessStep 
            number={4}
            title="Join the Fellowship"
            description="Selected fellows receive funding, join our WhatsApp mentorship group, and become part of our community."
          />
        </div>
        
        <div className="mt-20 text-center">
          <Button size="lg" className="group text-base rounded-full bg-fellowship-gold hover:bg-fellowship-gold/90 text-black animate-fade-in" onClick={() => window.open('https://www.kotharifellowship.com/1374ace8044580dbb31af1a919cfd0e9', '_blank')}>
            <span>Apply now</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowSection;
