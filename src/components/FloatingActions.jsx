import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <Button
        size="lg"
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 p-0"
        onClick={() => window.open("https://wa.me/8801716718020?text=Hello, I am interested in your construction services", "_blank")}
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      {/* Call Button */}
      <Button
        size="lg"
        className="w-14 h-14 rounded-full bg-orange-500 hover:bg-orange-600 shadow-lg hover:shadow-xl transition-all duration-300 p-0"
        onClick={() => window.open("tel:+8801716718020")}
      >
        <Phone className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default FloatingActions;

