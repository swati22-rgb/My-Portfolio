
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-2xl font-poppins font-bold bg-gradient-to-r from-warm-peach to-warm-coral bg-clip-text text-transparent">
              Swati Rawat
            </h3>
            <p className="text-gray-400 mt-1">UI/UX Designer</p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Swati Rawat. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center md:text-left">
          <p className="text-gray-500 text-sm">
            Crafting beautiful digital experiences with passion and purpose.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
