import React from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeroSection: React.FC<{onScrollToSection: (section: string) => void}> = ({ onScrollToSection }) => {
  return (
    <section className="min-h-screen flex items-center py-20 bg-gradient-to-b from-warm-peach/10 to-warm-coral/10">
      <div className="container mx-auto px-4">
        <div className="lg:w-1/2 mt-10 lg:mt-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-4 leading-tight">
            Hey, I'm <span className="bg-gradient-to-r from-warm-peach to-warm-coral bg-clip-text text-transparent">Swati Rawat</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">UI/UX Designer</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
            Crafting user-centered designs that tell a story. I transform complex problems into intuitive, engaging experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={() => onScrollToSection('portfolio')}
              className="bg-gradient-to-r from-warm-peach to-warm-coral hover:from-warm-coral hover:to-warm-peach text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => onScrollToSection('contact')}
              variant="outline" 
              className="px-6 py-3 rounded-full border-2 border-warm-coral text-gray-700 font-medium hover:bg-warm-coral/10 transition-all duration-300"
            >
              Contact Me
            </Button>
          </div>
        </div>
        
        <div className="lg:w-1/2 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 border-4 border-white shadow-xl overflow-hidden rounded-full">
              <div className="relative w-full h-full">
                <img 
                  src="/my image.jpg" 
                  alt="Profile"
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: 'center 20%'
                  }}
                />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-warm-peach/20 to-warm-coral/20 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
