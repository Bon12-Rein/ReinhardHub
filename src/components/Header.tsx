import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, LogIn } from 'lucide-react';
import SignUpModal from './SignUpModal';
import LoginModal from './LoginModal';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
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

  const solutions = [
    { name: 'Branding & Strategy', href: '#services' },
    { name: 'Marketing Strategy', href: '#services' },
    { name: 'Web & ECommerce', href: '#services' },
    { name: 'Creative Services', href: '#services' },
    { name: 'AI & Automation', href: '#services' },
    { name: 'Tech & Innovation', href: '#services' }
  ];

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Digital Products', href: '#digital-products' },
    { name: 'Case Studies', href: '#work' }
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    Cookies.set('language', lng, { expires: 365 });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <div className="text-2xl font-bold">
                <span className={scrolled ? 'text-primary' : 'text-white'}>TELISPAC </span>
                <span className="text-secondary">DIGITAL</span>
              </div>
            </a>

            <nav className="hidden md:flex items-center ml-12 space-x-8">
              <div className="relative group">
                <a
                  href="#services"
                  className={`${
                    scrolled ? 'text-gray-800' : 'text-white'
                  } hover:text-secondary transition-colors duration-200 font-medium`}
                >
                  {t('Solutions')}
                </a>
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-primary rounded-xl shadow-lg p-2 flex space-x-1 whitespace-nowrap">
                    {solutions.map((solution) => (
                      <a
                        key={solution.name}
                        href={solution.href}
                        className="px-4 py-2 text-secondary hover:text-white hover:bg-primary-dark rounded-lg transition-colors duration-200"
                      >
                        {t(solution.name)}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`${
                    scrolled ? 'text-gray-800' : 'text-white'
                  } hover:text-secondary transition-colors duration-200 font-medium`}
                >
                  {t(link.name)}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center ml-auto space-x-6">
              <a
                href="#contact"
                className={`font-medium transition-colors duration-200 ${
                  scrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-secondary'
                }`}
              >
                {t('Contact Us')}
              </a>

              <button
                onClick={() => setShowLoginModal(true)}
                className={`font-medium transition-colors duration-200 ${
                  scrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-secondary'
                }`}
              >
                {t('Log In')}
              </button>

              <button
                onClick={() => setShowSignUpModal(true)}
                className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105"
              >
                {t('Get Started')}
              </button>

              <div className="relative group">
                <button className={`flex items-center space-x-2 ${
                  scrolled ? 'text-gray-800' : 'text-white'
                }`}>
                  <Globe size={20} />
                  <span className="ml-1">{languages.find(lang => lang.code === i18n.language)?.label || 'EN'} ({languages.find(lang => lang.code === i18n.language)?.flag || '🇬🇧'})</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center space-x-3"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                      <span className="ml-auto text-sm text-gray-500">{lang.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              className="md:hidden ml-auto text-3xl focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className={scrolled ? 'text-primary' : 'text-white'} size={30} />
              ) : (
                <Menu className={scrolled ? 'text-primary' : 'text-white'} size={30} />
              )}
            </button>
          </div>
        </div>

        <div
          className={`fixed inset-0 bg-gray-900 bg-opacity-95 z-40 transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-6 text-white text-xl">
            <div className="flex flex-col items-center space-y-4">
              <span className="text-secondary font-medium">{t('Solutions')}</span>
              {solutions.map((solution) => (
                <a
                  key={solution.name}
                  href={solution.href}
                  className="text-white hover:text-secondary transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {t(solution.name)}
                </a>
              ))}
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-secondary transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {t(link.name)}
              </a>
            ))}
            <a
              href="#contact"
              className="hover:text-secondary transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {t('Contact Us')}
            </a>
            <button
              onClick={() => {
                setShowLoginModal(true);
                setIsOpen(false);
              }}
              className="hover:text-secondary transition-colors duration-200"
            >
              {t('Log In')}
            </button>
            <button
              onClick={() => {
                setShowSignUpModal(true);
                setIsOpen(false);
              }}
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-medium transition-all duration-200"
            >
              {t('Get Started')}
            </button>
          </div>
        </div>
      </header>

      <SignUpModal isOpen={showSignUpModal} onClose={() => setShowSignUpModal(false)} />
      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </>
  );
};

export default Header;