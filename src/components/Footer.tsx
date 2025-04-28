
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-fellowship-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
          <div>
            <h2 className="text-3xl font-display font-bold mb-2">Kothari Fellowship</h2>
            <p className="text-white/70">Empowering young Indian builders</p>
          </div>
          
          <Button className="group bg-fellowship-gold hover:bg-fellowship-gold/90 text-black rounded-full">
            <span>Apply now</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/50 text-sm">
              &copy; {new Date().getFullYear()} Kothari Fellowship. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-white/70 hover:text-fellowship-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/70 hover:text-fellowship-gold transition-colors">
                Terms of Service
              </a>
              <a href="mailto:info@kotharifellowship.org" className="text-white/70 hover:text-fellowship-gold transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
