import React from 'react';
import { Calendar, Globe } from 'lucide-react';

const ConferenceBanner = () => {
  return (
    <div 
      className="w-full bg-cover bg-center py-8 relative " 
      style={{ 
        backgroundImage: "url('/picture1.jpg')", 
        backgroundSize: 'cover',
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-opacity-65"></div>
      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Left Logo - AFI EduTech Logo */}
        <div className="flex items-center gap-2 lg:flex-row flex-col">
          <div className="p-2 rounded-lg shadow-md bg-white">
            <img 
              src="/AFI_EDUTECH_LOGO.jpg" 
              alt="AFI EduTech Logo" 
              className="h-20 md:h-24 w-auto"
            />
          </div>
        </div>

        {/* Center - NAILO Details */}
        <div className="text-center text-white flex-grow">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
            National AI Literacy Olympiad
          </h1>
          <h2 className="text-xl md:text-2xl font-bold mb-2">NAILO 2026</h2>
          <p className="text-sm md:text-base font-semibold mb-2">
            Organiser: AFI EduTech
          </p>
          <div className="flex items-center justify-center text-sm md:text-base mb-2">
            <Globe className="mr-2" size={16} />
            <p>India's First National AI Literacy Initiative</p>
          </div>
          <p className="text-sm md:text-base font-semibold text-yellow-100">
            Empowering students with AI literacy and computational thinking
          </p>
        </div>

        {/* Right Logo - NAILO Logo */}
        <div className='flex gap-4 flex-col items-center'>
          <div className="p-2 rounded-lg shadow-md bg-white">
            <img
              src="/NAILO_LOGO.png"
              alt="NAILO Logo"
              className="h-20 md:h-24 w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConferenceBanner;
