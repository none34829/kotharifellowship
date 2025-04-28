
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FellowshipOverview from "@/components/FellowshipOverview";
import WhoSection from "@/components/WhoSection";
import HowSection from "@/components/HowSection";
import ManjiStory from "@/components/ManjiStory";
import GrantorsSection from "@/components/GrantorsSection";
import InspirationSection from "@/components/InspirationSection";
import MarqueeSection from "@/components/MarqueeSection";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  // Smooth scroll to anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for navbar height
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <FellowshipOverview />
      <WhoSection />
      <HowSection />
      <div className="container mx-auto px-4">
        <Separator className="my-8 bg-fellowship-gold/30 h-0.5" />
      </div>
      <ManjiStory />
      <GrantorsSection />
      <InspirationSection />
      <Footer />
    </div>
  );
};

export default Index;
