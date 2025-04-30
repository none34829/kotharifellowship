import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Coins, Users, UserPlus, Unlock, DollarSign } from 'lucide-react';

const OverviewItem = ({ title, description, icon: Icon }: { title: string; description: string; icon: React.ElementType }) => (
  <div className="p-6 border-2 border-fellowship-gold/50 rounded-xl bg-white/50 dark:bg-[#121212] backdrop-blur-sm hover:shadow-md hover:shadow-fellowship-gold/30 transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex items-center mb-6">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-fellowship-gold/20 text-fellowship-gold shadow-md shadow-fellowship-gold/10 border border-fellowship-gold/30">
        <Icon size={28} strokeWidth={1.5} />
      </div>
    </div>
    <h3 className="text-lg font-display font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground dark:text-gray-200">{description}</p>
  </div>
);

const FellowshipOverview = () => {
  const [inView, setInView] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('overview');
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      // Create a more precise trigger point specifically for the title
      const titleElement = section.querySelector('h2');
      const isInView = titleElement && 
        titleElement.getBoundingClientRect().top <= window.innerHeight * 0.6 &&
        titleElement.getBoundingClientRect().bottom >= 0;
      
      if (isInView) {
        setInView(true);
        section.classList.add('section-in-view');
      } else {
        section.classList.remove('section-in-view');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section className="py-20 relative" id="overview">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start">
          <div className="w-full md:w-1/3 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Fellowship at a <span className="highlight">glance</span>
            </h2>
            <p className="text-muted-foreground dark:text-gray-200 mb-8">
              Everything you need to know about what we offer and why this fellowship exists.
            </p>
            <div className="hidden md:block perspective-card-container">
              <Card className="perspective-card p-6 bg-fellowship-gold/10 border-2 border-fellowship-gold/50 dark:bg-[#121212] rounded-xl">
                <div className="font-serif italic text-xl dark:text-white">
                  "Our grandmother, Manju, is one of the most creative and entrepreneurial people we know. In another life, she could have been the CEO of a Fortune 500 company."
                </div>
                <div className="mt-4 text-right font-medium dark:text-white">
                  — The Kothari Brothers
                </div>
              </Card>
            </div>
          </div>
          
          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <OverviewItem 
              title="Financial Support" 
              description="Up to ₹1 lakh per month for 12 months (~$15k per year) to focus on your project."
              icon={DollarSign}
            />
            <OverviewItem 
              title="Mentorship" 
              description="Join a WhatsApp group with fellows and mentors for continuous guidance."
              icon={UserPlus}
            />
            <OverviewItem 
              title="Community" 
              description="Annual in-person reunion to connect with other innovators and builders."
              icon={Users}
            />
            <OverviewItem 
              title="No Strings Attached" 
              description="We believe in empowering you without taking equity or imposing conditions."
              icon={Unlock}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FellowshipOverview;