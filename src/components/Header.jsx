import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MessageCircle, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  const navigation = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.projects, href: '/projects' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.quote, href: '/quote' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto mobile-container">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 mobile-focus">
            <img src="/assets/ghorbaribuilders_logo_only.png" alt="Ghorbari Builders Logo" className="h-8 sm:h-10 w-auto" />
            <div className="hidden sm:block">
              <div className="text-base sm:text-lg font-bold text-gray-900">{t.hero.name}</div>
=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="public/ghorbaribuilders_logo.png" alt="Ghorbari Builders Logo" className="h-10" />
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-gray-900">{t.hero.name}</div>
>>>>>>> cd76d7d89ef093c840d8c6ddc4dc670b6ee42459
              <div className="text-xs text-gray-600">{t.hero.title}</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
<<<<<<< HEAD
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
=======
          <nav className="hidden md:flex space-x-8">
>>>>>>> cd76d7d89ef093c840d8c6ddc4dc670b6ee42459
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
<<<<<<< HEAD
                className={`px-3 py-2 text-sm font-medium transition-colors mobile-focus ${
=======
                className={`px-3 py-2 text-sm font-medium transition-colors ${
>>>>>>> cd76d7d89ef093c840d8c6ddc4dc670b6ee42459
                  isActive(item.href)
                    ? 'text-orange-600 border-b-2 border-orange-600'
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
<<<<<<< HEAD
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
=======
          <div className="hidden md:flex items-center space-x-4">
>>>>>>> cd76d7d89ef093c840d8c6ddc4dc670b6ee42459
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
<<<<<<< HEAD
              className="flex items-center space-x-1 mobile-focus touch-target"
=======
              className="flex items-center space-x-1"
>>>>>>> cd76d7d89ef093c840d8c6ddc4dc670b6ee42459
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">
                {language === 'en' ? 'বাংলা' : 'English'}
              </span>
            </Button>

            {/* Contact Buttons */}
            <Button
              variant="outline"
              size="sm"
<<<<<<< HEAD
              className="flex items-center space-x-2 mobile-focus touch-target"
              onClick={() => window.open("https://wa.me/8801716718020", "_blank")}
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden lg:inline">{t.hero.whatsapp}</span>
=======
              className="flex items-center space-x-2"
              onClick={() => window.open("https://wa.me/8801716718020", "_blank")}
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.hero.whatsapp}</span>
>>>>>>> cd76d7d89ef093c840d8c6ddc4dc670b6ee42459
            </Button>
            
            <Button
              size="sm"
<<<<<<< HEAD
              className="bg-orange-600 hover:bg-orange-700 flex items-center space-x-2 mobile-focus touch-target"
              onClick={() => window.open("tel:+8801716718020")}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">{t.hero.call}</span>
=======
              className="bg-orange-600 hover:bg-orange-700 flex items-center space-x-2"
              onClick={() => window.open("tel:+8801716718020")}
            >
              <Phone className="w-4 h-4" />
              <span>{t.hero.call}</span>
>>>>>>> cd76d7d89ef093c840d8c6ddc4dc670b6ee42459
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
<<<<<<< HEAD
              className="p-2 mobile-focus touch-target"
              aria-label="Toggle language"
=======
              className="p-2"
>>>>>>> cd76d7d89ef093c840d8c6ddc4dc670b6ee42459
            >
              <Globe className="w-5 h-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
<<<<<<< HEAD
              className="p-2 mobile-focus touch-target"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
=======
              className="p-2"
>>>>>>> cd76d7d89ef093c840d8c6ddc4dc670b6ee42459
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
<<<<<<< HEAD
          <div className="md:hidden mobile-nav mobile-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t custom-scrollbar">
=======
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
>>>>>>> cd76d7d89ef093c840d8c6ddc4dc670b6ee42459
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
<<<<<<< HEAD
                  className={`block px-4 py-3 text-base font-medium transition-colors mobile-focus touch-target ${
                    isActive(item.href)
                      ? 'text-orange-600 bg-orange-50 border-l-4 border-orange-600'
=======
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-orange-600 bg-orange-50'
>>>>>>> cd76d7d89ef093c840d8c6ddc4dc670b6ee42459
                      : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Contact Buttons */}
<<<<<<< HEAD
              <div className="pt-4 px-4 space-y-3 border-t border-gray-200">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center space-x-2 mobile-button mobile-focus"
                  onClick={() => {
                    window.open('https://wa.me/8801716718020', '_blank');
                    setIsMenuOpen(false);
                  }}
                >
                  <MessageCircle className="w-5 h-5" />
=======
              <div className="pt-4 space-y-2">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center space-x-2"
                  onClick={() => {
                    window.open('https://wa.me/8801XXXXXXXXX', '_blank');
                    setIsMenuOpen(false);
                  }}
                >
                  <MessageCircle className="w-4 h-4" />
>>>>>>> cd76d7d89ef093c840d8c6ddc4dc670b6ee42459
                  <span>{t.hero.whatsapp}</span>
                </Button>
                
                <Button
<<<<<<< HEAD
                  className="w-full bg-orange-600 hover:bg-orange-700 flex items-center justify-center space-x-2 mobile-button mobile-focus"
                  onClick={() => {
                    window.open('tel:+8801716718020');
                    setIsMenuOpen(false);
                  }}
                >
                  <Phone className="w-5 h-5" />
=======
                  className="w-full bg-orange-600 hover:bg-orange-700 flex items-center justify-center space-x-2"
                  onClick={() => {
                    window.open('tel:+8801XXXXXXXXX');
                    setIsMenuOpen(false);
                  }}
                >
                  <Phone className="w-4 h-4" />
>>>>>>> cd76d7d89ef093c840d8c6ddc4dc670b6ee42459
                  <span>{t.hero.call}</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

