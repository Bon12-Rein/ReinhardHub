import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Blog from './components/Blog';
import DigitalProducts from './components/DigitalProducts';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import VoiceSearch from './components/VoiceSearch';
import SmartNavigation from './components/SmartNavigation';
import SectionObserver from './components/SectionObserver';

const App = () => {
  const [currentSection, setCurrentSection] = useState('hero');

  const navigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleSectionChange = (sectionId: string) => {
    setCurrentSection(sectionId);
  };

  return (
    <SectionObserver onSectionChange={handleSectionChange}>
      <div className="bg-[#FEFFFF] text-gray-800">
        <Header />
        <Hero />
        <Services />
        <Work />
        <Blog />
        <DigitalProducts />
        <Partners />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
        <CookieConsent />
        
        {/* Voice Search & Smart Navigation */}
        <VoiceSearch onNavigate={navigateToSection} />
        <SmartNavigation onNavigate={navigateToSection} />
      </div>
    </SectionObserver>
  );
};

export default App;