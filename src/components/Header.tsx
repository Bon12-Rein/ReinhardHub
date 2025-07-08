import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import SignUpModal from './SignUpModal';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const { t, i18n } = useTranslation();
  
  const languages = [
    { code: 'en', name: 'English', label: 'EN', flag: '🇬🇧' },
    { code: 'sw', name: 'Kiswahili', label: 'SW', flag: '🇰🇪' },
    { code: 'fr', name: 'Français', label: 'FR', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', label: 'AR', flag: '🇸🇦' },
    { code: 'pt', name: 'Português', label: 'PT', flag: '🇵🇹' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSignUpModal(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    { name: 'Branding & Strategy', href: '#services' },
    { name: 'Marketing', href: '#services' },
    { name: 'Web & ECommerce', href: '#services' },
    { name: 'AI & Automation', href: '#services' },
    { name: 'Tech & Innovation', href: '#services' }
  ];

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#work' },
    { name: 'Resources', href: '#blog' },
    { name: 'Careers', href: '#careers' },
    { name: 'Academy', href: '#digital-products' }
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    Cookies.set('language', lng, { expires: 365 });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-sm py-4' : 'bg-white py-4'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between w-full">
            {/* Logo - Fixed width */}
            <div className="flex-shrink-0 w-64">
              <a href="#" className="flex items-center">
                <div className="text-2xl font-bold">
                  <span className="text-primary">TELISPAC </span>
                  <span className="text-secondary">DIGITAL</span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation - Centered with even spacing */}
            <nav className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-10">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-sm uppercase tracking-wide whitespace-nowrap"
                  >
                    {t(link.name)}
                  </a>
                ))}

                <div className="relative group">
                  <a
                    href="#services"
                    className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-sm uppercase tracking-wide whitespace-nowrap"
                  >
                    {t('Services')}
                  </a>
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-100 whitespace-nowrap">
                      <div className="flex space-x-6">
                        {services.map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium text-sm whitespace-nowrap"
                          >
              </div>
            </nav>

            {/* Right Side Actions - Fixed width */}
            <div className="hidden lg:flex items-center justify-end space-x-8 w-64">
              <a
                href="#contact"
                className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-medium text-sm transition-all duration-200 transform hover:scale-105 whitespace-nowrap"
              >
                {t('Work With Us')}
              </a>

              <div className="relative group">
                <button className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors duration-200">
                  <Globe size={18} />
                  <span className="text-sm">{languages.find(lang => lang.code === i18n.language)?.label || 'EN'}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center space-x-3 text-sm"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                      <span className="ml-auto text-xs text-gray-500">{lang.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden ml-auto text-3xl focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="text-primary" size={28} />
              ) : (
                <Menu className="text-gray-700" size={28} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } lg:hidden`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="text-xl font-bold">
                <span className="text-primary">TELISPAC </span>
                <span className="text-secondary">DIGITAL</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {t(link.name)}
                  </a>
                ))}

                <div className="border-t border-gray-200 pt-6">
                  <div className="text-gray-500 font-medium text-sm uppercase tracking-wide mb-4">
                    {t('Services')}
                  </div>
                  <div className="space-y-4 pl-4">
                    {services.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="block text-gray-600 hover:text-primary transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {t(service.name)}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <a
                    href="#contact"
                    className="inline-block bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-medium text-lg transition-all duration-200 transform hover:scale-105 mb-6"
                    onClick={() => setIsOpen(false)}
                  >
                    {t('Work With Us')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <SignUpModal isOpen={showSignUpModal} onClose={() => setShowSignUpModal(false)} />
    </>
  );
};

export default Header;