import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  const socialLinks = [
    { letter: 'F', name: 'Facebook', url: 'https://facebook.com/telispacdigital' },
    { letter: 'X', name: 'Twitter', url: 'https://twitter.com/telispacdigital' },
    { letter: 'Y', name: 'YouTube', url: 'https://youtube.com/@telispacdigital' },
    { letter: 'L', name: 'LinkedIn', url: 'https://linkedin.com/company/telispacdigital' },
    { letter: 'T', name: 'TikTok', url: 'https://tiktok.com/@telispacdigital' },
    { letter: 'I', name: 'Instagram', url: 'https://instagram.com/telispacdigital' }
  ];

  const resourceLinks = [
    'Blog & Insights',
    'Tutorials & How-Tos',
    'Case Studies',
    'Webinars & Workshops',
    'Digital Tools & Templates',
    'Help Center / FAQs',
    'My Account'
  ];

  const accountLinks = [
    'My Projects',
    'Downloads & Deliverables',
    'Messages / Support',
    'Invoices & Payments',
    'Account Settings'
  ];

  return (
    <footer className="text-white pt-16 pb-8" style={{ backgroundColor: '#00BCA1' }}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-3xl font-bold mb-6">
              <span className="text-white">TELISPAC </span>
              <span className="text-secondary">DIGITAL</span>
            </div>
            <p className="text-gray-400 mb-6">
              {t('Empowering your brand with smart digital solutions.')}
            </p>
            <h4 className="text-white font-semibold mb-4">{t('Follow Us')}</h4>
            <div className="flex space-x-4">
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center bg-gray-800 hover:bg-primary text-gray-400 hover:text-white rounded-full transition-all duration-200"
                  aria-label={link.name}
                >
                  {link.letter}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('Services')}</h3>
            <ul className="space-y-3">
              {['Personal & Corporate Branding', 'Web Design & eCommerce Development', 'Digital Marketing', 'AI & Automation', 'Content Creation'].map(service => (
                <li key={service}>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {t(service)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('Resources')}</h3>
            <ul className="space-y-3">
              {resourceLinks.map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {t(item)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('My Account')}</h3>
            <ul className="space-y-3">
              {accountLinks.map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {t(item)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              {t('Copyright © 2025 Telispac Digital. All Rights Reserved.')}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm">{t('Security')}</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm">{t('Terms')}</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm">{t('Privacy')}</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm">{t('Quality & Information')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;