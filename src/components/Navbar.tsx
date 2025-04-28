
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowRight } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavItem = ({ href, children, onClick }: NavItemProps) => (
  <a 
    href={href} 
    className="text-foreground hover:text-fellowship-gold transition-colors px-4 py-2"
    onClick={onClick}
  >
    {children}
  </a>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-background/90 shadow-md backdrop-blur-md dark:bg-background/80' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-lg md:text-xl font-display font-bold">
            <span className={isScrolled ? "gradient-text" : ""}>Kothari Fellowship</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <NavItem href="#overview">Overview</NavItem>
            <NavItem href="#who">Who</NavItem>
            <NavItem href="#how">How</NavItem>
            <NavItem href="#why">Why</NavItem>
            <NavItem href="#grantors">Grantors</NavItem>
            
            <div className="ml-4 flex items-center">
              <ThemeToggle />
              <Button 
                size="sm" 
                className={`group rounded-full text-sm ${
                  isScrolled ? 'bg-fellowship-gold hover:bg-fellowship-gold/90 text-black' : 'bg-white hover:bg-white/90 text-black dark:bg-fellowship-gold dark:hover:bg-fellowship-gold/90 dark:text-black'
                }`}
              >
                <span>Apply now</span>
                <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button 
              className="text-foreground hover:text-fellowship-gold focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background dark:bg-background shadow-lg animate-fade-in py-4">
          <nav className="flex flex-col container mx-auto px-4">
            <NavItem href="#overview" onClick={closeMobileMenu}>Overview</NavItem>
            <NavItem href="#who" onClick={closeMobileMenu}>Who</NavItem>
            <NavItem href="#how" onClick={closeMobileMenu}>How</NavItem>
            <NavItem href="#why" onClick={closeMobileMenu}>Why</NavItem>
            <NavItem href="#grantors" onClick={closeMobileMenu}>Grantors</NavItem>
            
            <div className="mt-4 mb-2 px-4">
              <Button 
                size="sm" 
                className="group rounded-full w-full text-sm bg-fellowship-gold hover:bg-fellowship-gold/90 text-black"
              >
                <span>Apply now</span>
                <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
