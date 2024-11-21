import React from 'react';
import { Shield, Award } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-900/20 z-0" />
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Shield className="w-12 h-12 text-blue-400" />
            <Award className="w-12 h-12 text-blue-400" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
            Veteran-Owned Technology Solutions
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Empowering law enforcement and businesses with cutting-edge technology solutions. 
            Maximizing efficiency through innovation and expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={() => scrollToSection('law-enforcement-solutions')}
              className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg"
            >
              Law Enforcement Solutions
            </button>
            <button
              onClick={() => scrollToSection('business-solutions')}
              className="w-full sm:w-auto px-8 py-3 bg-black/50 text-white rounded-lg hover:bg-black/60 transition shadow-lg"
            >
              Business Solutions
            </button>
          </div>
          
          <a
            href="https://forms.gle/5yJfNxZNgeRe4hmL7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 transition shadow-lg"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  );
}