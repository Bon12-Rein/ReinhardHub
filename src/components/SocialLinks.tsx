import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
}

const SocialLinks: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      name: 'Facebook',
      icon: <Facebook size={24} />,
      url: 'https://facebook.com/telispacdigital'
    },
    {
      name: 'Instagram',
      icon: <Instagram size={24} />,
      url: 'https://instagram.com/telispacdigital'
    },
    {
      name: 'Twitter',
      icon: <Twitter size={24} />,
      url: 'https://twitter.com/telispacdigital'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      url: 'https://linkedin.com/company/telispacdigital'
    },
    {
      name: 'YouTube',
      icon: <Youtube size={24} />,
      url: 'https://youtube.com/@telispacdigital'
    }
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-primary transition-colors duration-200 p-2 rounded-full hover:bg-gray-100"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;