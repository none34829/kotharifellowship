import React from 'react';
import ThemeToggle from './ThemeToggle';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-display font-bold text-xl">
            Kothari Fellowship
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link to="#who" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Who
            </Link>
            <Link to="#how" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How
            </Link>
            <a href="mailto:info@kotharifellowship.org" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
