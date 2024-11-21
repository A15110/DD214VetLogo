import React, { ReactNode } from 'react';

interface ServiceProps {
  icon: ReactNode;
  title: string;
  description: string;
  services: {
    icon: ReactNode;
    title: string;
    description: string;
  }[];
}

export default function ServiceSection({ icon, title, description, services }: ServiceProps) {
  const sectionId = title.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <section className="py-16" id={sectionId}>
      <div className="text-center mb-16">
        <div className="flex justify-center mb-4">
          {React.cloneElement(icon as React.ReactElement, { 
            className: 'w-12 h-12 text-blue-400' 
          })}
        </div>
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6">
          {description}
        </p>
        <a
          href="https://forms.gle/5yJfNxZNgeRe4hmL7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 transition shadow-lg"
        >
          Get Started
        </a>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-black/30 backdrop-blur-md rounded-xl p-6 hover:bg-black/40 transition">
            <div className="text-blue-400 mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-gray-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}