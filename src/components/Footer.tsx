import React from 'react';
import { useTranslation } from 'react-i18next';
import { Facebook, Youtube, Linkedin, Instagram } from 'lucide-react';

// Custom TikTok icon component
const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

// Custom X (formerly Twitter) icon component
const XIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  const socialLinks = [
    { 
      icon: <Facebook size={18} />, 
      name: 'Facebook', 
      url: 'https://facebook.com/telispacdigital',
      bgColor: 'bg-[#1877F2]',
      hoverColor: 'hover:bg-[#166FE5]'
    },
    { 
      icon: <XIcon size={18} />, 
      name: 'X', 
      url: 'https://x.com/telispacdigital',
      bgColor: 'bg-[#000000]',
      hoverColor: 'hover:bg-[#333333]'
    },
    { 
      icon: <Youtube size={18} />, 
      name: 'YouTube', 
      url: 'https://youtube.com/@telispacdigital',
      bgColor: 'bg-[#FF0000]',
      hoverColor: 'hover:bg-[#E60000]'
    },
    { 
      icon: <Linkedin size={18} />, 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/company/telispacdigital',
      bgColor: 'bg-[#0A66C2]',
      hoverColor: 'hover:bg-[#095BB0]'
    },
    { 
      icon: <Instagram size={18} />, 
      name: 'Instagram', 
      url: 'https://instagram.com/telispacdigital',
      bgColor: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737]',
      hoverColor: 'hover:from-[#7A2FB3] hover:via-[#E41A1A] hover:to-[#E56B2F]'
    },
    { 
      icon: <TikTokIcon size={18} />, 
      name: 'TikTok', 
      url: 'https://tiktok.com/@telispacdigital',
      bgColor: 'bg-[#000000]',
      hoverColor: 'hover:bg-[#333333]'
    }
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
              <span className="text-black font-extrabold">DIGITAL</span>
            </div>
            <p className="text-white mb-6">
              {t('Empowering your brand with smart digital solutions.')}
            </p>
            <h4 className="text-white font-semibold mb-4">{t('Follow Us')}</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 flex items-center justify-center ${link.bgColor} ${link.hoverColor} text-white rounded-full transition-all duration-300 transform hover:scale-110`}
                  aria-label={link.name}
                >
                  {link.icon}
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
        
        <div className="border-t border-white/30 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm mb-4 md:mb-0">
              {t('Copyright © 2025 Telispac Digital. All Rights Reserved.')}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-black text-sm font-medium">{t('Security')}</a>
              <a href="#" className="text-white hover:text-black text-sm font-medium">{t('Terms')}</a>
              <a href="#" className="text-white hover:text-black text-sm font-medium">{t('Privacy')}</a>
              <a href="#" className="text-white hover:text-black text-sm font-medium">{t('Quality & Information')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;