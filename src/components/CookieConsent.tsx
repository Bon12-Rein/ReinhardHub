import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsent = Cookies.get('cookie-consent');
    if (!hasConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('cookie-consent', 'true', { expires: 365 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200">
      <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-gray-600 text-sm mb-4 sm:mb-0">
          This website uses cookies to enhance your browsing experience. By continuing to use this site, you agree to our use of cookies.{' '}
          <a href="/privacy-policy" className="text-primary hover:text-primary-dark underline">
            Learn more
          </a>
        </p>
        <div className="flex space-x-4">
          <button
            onClick={handleAccept}
            className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-200"
          >
            Accept
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-600 hover:text-gray-800 px-6 py-2 text-sm font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;