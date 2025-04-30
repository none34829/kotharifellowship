
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const floatingElementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!floatingElementRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate movement based on mouse position
      const moveX = (clientX - innerWidth / 2) / 50;
      const moveY = (clientY - innerHeight / 2) / 50;
      
      // Apply the transform
      floatingElementRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-20 lg:pt-0">
      {/* Decorative background elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-fellowship-gold/20 rounded-full blur-3xl animate-float" />
      <div className="absolute top-20 -left-20 w-72 h-72 bg-fellowship-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-fellowship-gold/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      
      <div ref={floatingElementRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-grain-pattern opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="animated-border inline-block mb-6">
            <span className="relative z-10 text-xs md:text-sm font-medium tracking-wider px-4 py-2 uppercase">
              Empower Young Indian Builders
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight">
            <span className="gradient-text">Kothari Fellowship</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-slow">
            Providing grants and mentorship to young Indians under 25 years old who want to build, 
            empowering them to turn ideas into reality, instead of being held back by societal norms.
          </p>
          
          <div className="animate-fade-in-slower">
            <Button size="lg" className="group text-base rounded-full bg-fellowship-gold hover:bg-fellowship-gold/90 text-black">
              <span>Apply now</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
