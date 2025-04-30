
import React, { useRef } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    let ref;
    
    switch (section) {
      case 'home':
        ref = homeRef.current;
        break;
      case 'about':
        ref = aboutRef.current;
        break;
      case 'portfolio':
        ref = portfolioRef.current;
        break;
      case 'contact':
        ref = contactRef.current;
        break;
      default:
        ref = null;
    }
    
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavClick={scrollToSection} />
      
      <div ref={homeRef}>
        <HeroSection onScrollToSection={scrollToSection} />
      </div>
      
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      
      <div ref={portfolioRef}>
        <PortfolioSection />
      </div>
      
      <div ref={contactRef}>
        <ContactSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
