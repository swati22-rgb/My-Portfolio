
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface NavbarProps {
  onNavClick: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['contact', 'portfolio', 'about', 'home'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    onNavClick(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a 
          href="#home" 
          className="text-2xl font-poppins font-bold bg-gradient-to-r from-warm-peach to-warm-coral bg-clip-text text-transparent"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
        >
          Swati Rawat
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 hover:text-warm-coral"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          {['home', 'about', 'portfolio', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={cn(
                "nav-link",
                activeSection === section ? "active text-warm-coral" : ""
              )}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(section);
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
        
        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 animate-fade-in">
            {['home', 'about', 'portfolio', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={cn(
                  "block py-2 px-6 hover:bg-gray-50",
                  activeSection === section ? "text-warm-coral font-medium" : "text-gray-700"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(section);
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
