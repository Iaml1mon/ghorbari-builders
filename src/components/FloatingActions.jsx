import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col space-y-3">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          size="lg"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-600 hover:bg-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 p-0 mobile-focus touch-target mobile-slide-in"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </Button>
      )}

      {/* WhatsApp Button */}
      <Button
        size="lg"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 p-0 mobile-focus touch-target animate-pulse hover:animate-none"
        onClick={() => window.open("https://wa.me/8801716718020?text=Hello, I am interested in your construction services", "_blank")}
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </Button>

      {/* Call Button */}
      <Button
        size="lg"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-orange-500 hover:bg-orange-600 shadow-lg hover:shadow-xl transition-all duration-300 p-0 mobile-focus touch-target"
        onClick={() => window.open("tel:+8801716718020")}
        aria-label="Call now"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
      </Button>
    </div>
  );
};

export default FloatingActions;

