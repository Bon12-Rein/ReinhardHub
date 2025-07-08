import React from 'react';
import { useTranslation } from 'react-i18next';
import { Facebook, Youtube, Linkedin, Instagram, Code, Database, Cpu, Globe, Zap, Bot } from 'lucide-react';

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

  const solutions = [
    { name: 'Branding & Strategy', icon: <Code size={16} />, href: '#services' },
    { name: 'Web Development', icon: <Globe size={16} />, href: '#services' },
    { name: 'AI & Automation', icon: <Bot size={16} />, href: '#services' },
    { name: 'Digital Marketing', icon: <Zap size={16} />, href: '#services' },
    { name: 'Data Analytics', icon: <Database size={16} />, href: '#services' },
    { name: 'Tech Innovation', icon: <Cpu size={16} />, href: '#services' }
  ];

  const industries = [
    'Startups',
    'E-Commerce',
    'Education',
    'Healthcare',
    'Finance',
    'More Industries'
  ];

  const resources = [
    'Content Library',
    'Blog & Insights',
    'Case Studies',
    'Webinars',
    'Templates & Tools',
    'Help Center'
  ];

  const company = [
    'About Us',
    'Our Team',
    'Careers',
    'Contact',
    'Privacy Policy',
    'Terms of Service'
  ];

  return (
    <footer className="relative overflow-hidden" style={{ 
      background: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 50%, #1E5F99 100%)'
    }}>
      {/* Tech Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-1/3 w-20 h-20 border border-white/20 rounded-full"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 text-white pt-16 pb-8">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-3">
                  <Code className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-xl font-bold">
                    <span className="text-white">TELISPAC</span>
                  </div>
                  <div className="text-sm font-bold text-secondary">DIGITAL</div>
                </div>
              </div>
              <p className="text-white/80 text-sm mb-6 leading-relaxed">
                Empowering Digital Innovation
              </p>
              <p className="text-white/60 text-xs mb-6">
                Transforming businesses through cutting-edge technology solutions and strategic digital innovation.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 flex items-center justify-center ${link.bgColor} ${link.hoverColor} text-white rounded-lg transition-all duration-300 transform hover:scale-110 shadow-lg`}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Solutions */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">SOLUTIONS</h3>
              <ul className="space-y-3">
                {solutions.map((solution) => (
                  <li key={solution.name}>
                    <a 
                      href={solution.href} 
                      className="flex items-center text-white/70 hover:text-white transition-colors duration-200 text-sm group"
                    >
                      <span className="mr-3 text-white/50 group-hover:text-white transition-colors">
                        {solution.icon}
                      </span>
                      {solution.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Industries */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">INDUSTRIES</h3>
              <ul className="space-y-3">
                {industries.map((industry) => (
                  <li key={industry}>
                    <a 
                      href="#work" 
                      className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {industry}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Resources */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">RESOURCES</h3>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource}>
                    <a 
                      href="#blog" 
                      className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {resource}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">COMPANY</h3>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item}>
                    <a 
                      href="#contact" 
                      className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-white/20 pt-8 mt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 mb-4 lg:mb-0">
                <p className="text-white/60 text-sm">
                  © 2025 Telispac Digital. All Rights Reserved.
                </p>
                <div className="flex items-center space-x-4 text-xs text-white/50">
                  <span>Nairobi, Kenya</span>
                  <span>•</span>
                  <span>+254 716 428 986</span>
                  <span>•</span>
                  <span>info@telispacdigital.com</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <a href="#" className="text-white/60 hover:text-white text-sm font-medium transition-colors">
                  Privacy
                </a>
                <a href="#" className="text-white/60 hover:text-white text-sm font-medium transition-colors">
                  Terms
                </a>
                <a href="#" className="text-white/60 hover:text-white text-sm font-medium transition-colors">
                  Security
                </a>
                <div className="flex items-center space-x-1 text-white/40">
                  <Linkedin size={14} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;