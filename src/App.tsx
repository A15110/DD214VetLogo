import React from 'react';
import { Shield, Building2, Brain, Database, BarChart3, Monitor, MessageSquareCode, Share2, Cpu } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceSection from './components/ServiceSection';
import Footer from './components/Footer';

function App() {
  const lawEnforcementServices = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Records Management",
      description: "Streamlined digital solutions for efficient police records management and implementation"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Advanced analytics tools for evidence-based decision making and resource optimization"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Integration",
      description: "Cutting-edge AI solutions for predictive policing, pattern recognition, and automated reporting"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "CAD Consulting",
      description: "Expert Computer-Aided Dispatch consulting for improved emergency response systems"
    }
  ];

  const businessServices = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Solutions",
      description: "Custom AI implementation to streamline operations and boost efficiency"
    },
    {
      icon: <MessageSquareCode className="w-8 h-8" />,
      title: "Web Development",
      description: "Professional website design and development services"
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Comprehensive social media marketing and digital presence management"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "IT Support",
      description: "Reliable technical support and IT infrastructure management"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-blue-950">
      <Navbar />
      <Hero />
      
      <main className="container mx-auto px-4 py-16">
        <ServiceSection 
          icon={<Shield />}
          title="Law Enforcement Solutions"
          description="Empowering law enforcement agencies with cutting-edge technology solutions"
          services={lawEnforcementServices}
        />
        
        <ServiceSection 
          icon={<Building2 />}
          title="Business Solutions"
          description="Helping businesses thrive in the digital age with comprehensive tech services"
          services={businessServices}
        />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;