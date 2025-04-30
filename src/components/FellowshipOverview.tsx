import React from 'react';
import { Card } from "@/components/ui/card";

const OverviewItem = ({ title, description }: { title: string; description: string }) => (
  <div className="p-6 border border-border rounded-xl bg-white/50 dark:bg-gray-800 backdrop-blur-sm hover:shadow-md hover:shadow-fellowship-gold/10 transition-all duration-300 transform hover:-translate-y-1">
    <h3 className="text-lg font-display font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground dark:text-gray-300">{description}</p>
  </div>
);

const FellowshipOverview = () => {
  return (
    <section className="py-20 relative" id="overview">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start">
          <div className="w-full md:w-1/3 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Fellowship at a <span className="highlight">glance</span>
            </h2>
            <p className="text-muted-foreground dark:text-gray-300 mb-8">
              Everything you need to know about what we offer and why this fellowship exists.
            </p>
            <div className="hidden md:block perspective-card-container">
              <Card className="perspective-card p-6 bg-fellowship-gold/10 border-fellowship-gold/20 dark:bg-fellowship-gold/20">
                <div className="font-serif italic text-xl dark:text-white">
                  "Our grandmother Manju is one of the most creative and entrepreneurial people we know. In another life, she could have been the CEO of a Fortune 500 company."
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
            />
            <OverviewItem 
              title="Mentorship" 
              description="Join a WhatsApp group with fellows and mentors for continuous guidance."
            />
            <OverviewItem 
              title="Community" 
              description="Annual in-person reunion to connect with other innovators and builders."
            />
            <OverviewItem 
              title="No Strings Attached" 
              description="We believe in empowering you without taking equity or imposing conditions."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FellowshipOverview;