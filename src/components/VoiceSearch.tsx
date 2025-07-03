import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2, X } from 'lucide-react';

interface VoiceSearchProps {
  onNavigate: (section: string) => void;
}

const VoiceSearch: React.FC<VoiceSearchProps> = ({ onNavigate }) => {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [showCommands, setShowCommands] = useState(false);
  const [feedback, setFeedback] = useState('');
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const voiceCommands = {
    // Navigation commands
    'go to services': 'services',
    'show services': 'services',
    'view services': 'services',
    'services section': 'services',
    'what services': 'services',
    
    'go to work': 'work',
    'show work': 'work',
    'view portfolio': 'work',
    'case studies': 'work',
    'our work': 'work',
    
    'go to blog': 'blog',
    'show blog': 'blog',
    'latest posts': 'blog',
    'articles': 'blog',
    'insights': 'blog',
    
    'digital products': 'digital-products',
    'products': 'digital-products',
    'courses': 'digital-products',
    'ebooks': 'digital-products',
    
    'testimonials': 'testimonials',
    'reviews': 'testimonials',
    'client feedback': 'testimonials',
    'what clients say': 'testimonials',
    
    'partners': 'partners',
    'collaborations': 'partners',
    'who we work with': 'partners',
    
    'faq': 'faq',
    'questions': 'faq',
    'help': 'faq',
    'frequently asked': 'faq',
    
    'contact': 'contact',
    'get in touch': 'contact',
    'reach out': 'contact',
    'contact us': 'contact',
    'start project': 'contact',
    
    'home': 'hero',
    'top': 'hero',
    'beginning': 'hero',
    'start': 'hero'
  };

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      setIsSupported(true);
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      
      if (recognitionRef.current) {
        recognitionRef.current.continuous = true;
        recognitionRef.current.interimResults = true;
        recognitionRef.current.lang = 'en-US';

        recognitionRef.current.onresult = (event) => {
          let finalTranscript = '';
          for (let i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
              finalTranscript += event.results[i][0].transcript;
            }
          }
          
          if (finalTranscript) {
            setTranscript(finalTranscript.toLowerCase().trim());
            processVoiceCommand(finalTranscript.toLowerCase().trim());
          }
        };

        recognitionRef.current.onerror = (event) => {
          console.error('Speech recognition error:', event.error);
          setIsListening(false);
          setFeedback('Voice recognition error. Please try again.');
        };

        recognitionRef.current.onend = () => {
          setIsListening(false);
        };
      }
    }
  }, []);

  const processVoiceCommand = (command: string) => {
    // Find matching command
    const matchedCommand = Object.keys(voiceCommands).find(key => 
      command.includes(key) || key.includes(command)
    );

    if (matchedCommand) {
      const section = voiceCommands[matchedCommand as keyof typeof voiceCommands];
      setFeedback(`Navigating to ${section.replace('-', ' ')}...`);
      onNavigate(section);
      stopListening();
      
      // Clear feedback after 2 seconds
      setTimeout(() => setFeedback(''), 2000);
    } else {
      setFeedback('Command not recognized. Try "show services" or "contact us"');
      setTimeout(() => setFeedback(''), 3000);
    }
  };

  const startListening = () => {
    if (recognitionRef.current && isSupported) {
      setIsListening(true);
      setTranscript('');
      setFeedback('Listening... Try saying "show services" or "contact us"');
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  if (!isSupported) {
    return null;
  }

  return (
    <>
      {/* Voice Search Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Feedback Bubble */}
          {(feedback || transcript) && (
            <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-3 max-w-xs mb-2 border border-gray-200">
              <p className="text-sm text-gray-700">
                {feedback || `You said: "${transcript}"`}
              </p>
            </div>
          )}
          
          {/* Main Voice Button */}
          <button
            onClick={toggleListening}
            className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
              isListening 
                ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
                : 'bg-primary hover:bg-primary-dark'
            }`}
            aria-label={isListening ? 'Stop voice search' : 'Start voice search'}
          >
            {isListening ? (
              <MicOff className="text-white" size={24} />
            ) : (
              <Mic className="text-white" size={24} />
            )}
          </button>
          
          {/* Help Button */}
          <button
            onClick={() => setShowCommands(!showCommands)}
            className="absolute -top-2 -left-2 w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-white text-xs font-bold hover:bg-secondary-dark transition-colors"
            aria-label="Voice commands help"
          >
            ?
          </button>
        </div>
      </div>

      {/* Voice Commands Modal */}
      {showCommands && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-96 overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800 flex items-center">
                  <Volume2 className="mr-2 text-primary" size={24} />
                  Voice Commands
                </h3>
                <button
                  onClick={() => setShowCommands(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Navigation</h4>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="bg-gray-50 p-2 rounded">
                      <span className="font-medium">"Show services"</span> - View our services
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <span className="font-medium">"Our work"</span> - See case studies
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <span className="font-medium">"Contact us"</span> - Get in touch
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <span className="font-medium">"Digital products"</span> - View products
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <span className="font-medium">"Testimonials"</span> - Client reviews
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <span className="font-medium">"FAQ"</span> - Common questions
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <span className="font-medium">"Go to top"</span> - Return to homepage
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary/10 p-3 rounded-lg">
                  <p className="text-sm text-primary">
                    <strong>Tip:</strong> Speak clearly and wait for the system to process your command. 
                    You can also try variations like "view services\" or "show me your work".
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VoiceSearch;