import React from 'react';
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

const App = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
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
    </div>
  );
};

export default App;