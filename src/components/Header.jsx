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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/src/assets/ghorbaribuilders_logo.png" alt="Ghorbari Builders Logo" className="h-10" />
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-gray-900">{t.hero.name}</div>
              <div className="text-xs text-gray-600">{t.hero.title}</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
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
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-1"
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
              className="flex items-center space-x-2"
              onClick={() => window.open("https://wa.me/8801716718020", "_blank")}
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.hero.whatsapp}</span>
            </Button>
            
            <Button
              size="sm"
              className="bg-orange-600 hover:bg-orange-700 flex items-center space-x-2"
              onClick={() => window.open("tel:+8801716718020")}
            >
              <Phone className="w-4 h-4" />
              <span>{t.hero.call}</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="p-2"
            >
              <Globe className="w-5 h-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-orange-600 bg-orange-50'
                      : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Contact Buttons */}
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
                  <span>{t.hero.whatsapp}</span>
                </Button>
                
                <Button
                  className="w-full bg-orange-600 hover:bg-orange-700 flex items-center justify-center space-x-2"
                  onClick={() => {
                    window.open('tel:+8801XXXXXXXXX');
                    setIsMenuOpen(false);
                  }}
                >
                  <Phone className="w-4 h-4" />
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

