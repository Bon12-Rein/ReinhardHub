import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3182765/pexels-photo-3182765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center overflow-hidden"
    >
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentImageIndex === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: `url("${image}") center/cover no-repeat`,
            filter: 'brightness(0.4) contrast(1.1)',
          }}
        />
      ))}
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#008080]/95 via-[#FF8C00]/85 to-[#00CCA4]/75 mix-blend-multiply z-0"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            We Innovate and <span className="text-secondary">Grow Brands</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            Helping start-ups, brands, and businesses grow through creative design, powerful marketing, and scalable web solutions, turning ideas into digital impact
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#contact"
              className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-full font-medium text-center transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-full font-medium text-center transition-all duration-200 transform hover:scale-105"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <a
          href="#services"
          className="animate-bounce bg-white bg-opacity-20 p-2 rounded-full"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;