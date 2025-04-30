
import React from 'react';

const InspirationItem = ({ 
  name, 
  url,
  index
}: { 
  name: string; 
  url: string;
  index: number;
}) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="block p-4 rounded-lg border-2 border-transparent transition-all duration-300 hover:bg-white hover:border-fellowship-gold/40 dark:hover:bg-[#121212] dark:hover:border-fellowship-gold/50 hover:shadow-md hover:shadow-fellowship-gold/10 dark:hover:shadow-fellowship-gold/20 animate-fade-in"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="text-lg font-medium dark:text-white">{name}</div>
    <div className="flex items-center mt-1 text-sm text-fellowship-gold">
      <span>Learn more</span>
      <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  </a>
);

const InspirationSection = () => {
  const programs = [
    { name: "Emergent Ventures", url: "https://www.mercatus.org/emergent-ventures" },
    { name: "Barji Gulab Scholarship", url: "https://uwaterloo.ca/math/news/barji-gulab-scholarship-women-computer-science" },
    { name: "Thiel Fellowship", url: "https://thielfellowship.org" },
    { name: "Interact Fellowship", url: "https://joininteract.com" },
    { name: "Eclipse Grant", url: "https://www.mothfund.com/eclipse" },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-6">
          Programs we look up to:
        </h2>
        
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {programs.map((program, index) => (
            <InspirationItem
              key={program.name}
              name={program.name}
              url={program.url}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;
