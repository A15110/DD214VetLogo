import React from 'react';
import { Shield, Mail } from 'lucide-react';

export default function Footer() {
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
    <footer className="bg-black/50 backdrop-blur-md" id="contact">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-6 h-6 text-blue-400" />
              <span className="text-lg font-bold text-white">DD214 Vet Solutions</span>
            </div>
            <p className="text-gray-400 mb-4">
              Veteran-owned technology consulting firm dedicated to maximizing efficiency and achieving technology goals.
            </p>
            <a
              href="https://forms.gle/5yJfNxZNgeRe4hmL7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 transition shadow-lg"
            >
              Get in Touch
            </a>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-2">
              <a href="mailto:Info@dd214vet.com" className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition">
                <Mail className="w-5 h-5" />
                <span>Info@dd214vet.com</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('law-enforcement-solutions')}
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Law Enforcement Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('business-solutions')}
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Business Solutions
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DD214 Vet Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}