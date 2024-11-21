import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import LOGO_URL from './logo.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-black/50 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
          <img 
                  src={LOGO_URL}
                  alt="DD214 Vet Solutions"
                  className="w-12 h-12 text-blue-400" 
                  
                />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
              DD214 Vet Solutions
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('law-enforcement-solutions')}
              className="text-gray-300 hover:text-blue-400 transition"
            >
              Law Enforcement
            </button>
            <button
              onClick={() => scrollToSection('business-solutions')}
              className="text-gray-300 hover:text-blue-400 transition"
            >
              Business Solutions
            </button>
            <a
              href="https://forms.gle/5yJfNxZNgeRe4hmL7"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 transition"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-blue-400 transition"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('law-enforcement-solutions')}
                className="text-gray-300 hover:text-blue-400 transition text-left px-4"
              >
                Law Enforcement
              </button>
              <button
                onClick={() => scrollToSection('business-solutions')}
                className="text-gray-300 hover:text-blue-400 transition text-left px-4"
              >
                Business Solutions
              </button>
              <a
                href="https://forms.gle/5yJfNxZNgeRe4hmL7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition text-left px-4"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
