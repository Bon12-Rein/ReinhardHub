import React, { useState, useEffect } from 'react';
import { Search, ArrowUp, Navigation } from 'lucide-react';

interface SmartNavigationProps {
  onNavigate: (section: string) => void;
}

const SmartNavigation: React.FC<SmartNavigationProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const sections = [
    { id: 'hero', name: 'Home', keywords: ['home', 'start', 'beginning', 'top'] },
    { id: 'services', name: 'Services', keywords: ['services', 'solutions', 'what we do', 'offerings'] },
    { id: 'work', name: 'Our Work', keywords: ['work', 'portfolio', 'projects', 'case studies', 'examples'] },
    { id: 'blog', name: 'Resources', keywords: ['blog', 'articles', 'insights', 'posts', 'news', 'resources'] },
    { id: 'digital-products', name: 'Academy', keywords: ['products', 'courses', 'ebooks', 'resources', 'tools', 'academy', 'learning'] },
    { id: 'partners', name: 'Partners', keywords: ['partners', 'clients', 'collaborations', 'who we work with'] },
    { id: 'testimonials', name: 'Testimonials', keywords: ['testimonials', 'reviews', 'feedback', 'what clients say'] },
    { id: 'faq', name: 'FAQ', keywords: ['faq', 'questions', 'help', 'support', 'answers'] },
    { id: 'contact', name: 'Contact', keywords: ['contact', 'get in touch', 'reach out', 'start project', 'hire us'] }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = sections.filter(section =>
        section.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        section.keywords.some(keyword => 
          keyword.toLowerCase().includes(searchQuery.toLowerCase())
        )
      ).map(section => section.name);
      setSuggestions(filtered.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    const section = sections.find(section =>
      section.name.toLowerCase().includes(query.toLowerCase()) ||
      section.keywords.some(keyword => 
        keyword.toLowerCase().includes(query.toLowerCase())
      )
    );

    if (section) {
      onNavigate(section.id);
      setSearchQuery('');
      setShowSearch(false);
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSearch(suggestion);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Smart Navigation Panel */}
      <div className={`fixed bottom-20 right-6 z-40 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}>
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 max-w-xs">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-gray-800 flex items-center">
              <Navigation size={16} className="mr-2 text-primary" />
              Quick Nav
            </h4>
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="text-primary hover:text-primary-dark"
            >
              <Search size={16} />
            </button>
          </div>

          {/* Search Input */}
          {showSearch && (
            <div className="mb-3 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search sections..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && suggestions.length > 0) {
                    handleSuggestionClick(suggestions[0]);
                  }
                }}
              />
              
              {/* Search Suggestions */}
              {suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg mt-1 shadow-lg z-50">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="w-full text-left px-3 py-2 hover:bg-gray-50 text-sm first:rounded-t-lg last:rounded-b-lg"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Quick Navigation Buttons */}
          <div className="grid grid-cols-2 gap-2">
            {sections.slice(1, 5).map((section) => (
              <button
                key={section.id}
                onClick={() => onNavigate(section.id)}
                className="px-3 py-2 bg-gray-50 hover:bg-primary hover:text-white rounded-lg text-xs font-medium transition-all duration-200"
              >
                {section.name}
              </button>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-full mt-3 px-3 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center"
          >
            <ArrowUp size={16} className="mr-1" />
            Back to Top
          </button>
        </div>
      </div>
    </>
  );
};

export default SmartNavigation;