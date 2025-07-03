import React, { useEffect, useState } from 'react';

interface SectionObserverProps {
  children: React.ReactNode;
  onSectionChange: (sectionId: string) => void;
}

const SectionObserver: React.FC<SectionObserverProps> = ({ children, onSectionChange }) => {
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setCurrentSection(sectionId);
          onSectionChange(sectionId);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [onSectionChange]);

  return <>{children}</>;
};

export default SectionObserver;