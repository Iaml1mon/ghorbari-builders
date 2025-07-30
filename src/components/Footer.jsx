import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src="/src/assets/ghorbaribuilders_logo.png" alt="Ghorbari Builders Logo" className="h-10" />
              <div>
                <div className="text-lg font-bold">{t.hero.name}</div>
                <div className="text-sm text-gray-400">{t.hero.title}</div>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              {t.hero.bio}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://wa.me/8801XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.contact}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <a 
                  href="tel:+8801XXXXXXXXX"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t.footer.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <a 
                  href="mailto:rahman.builder@email.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t.footer.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span className="text-gray-400">{t.footer.address}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.services}</h3>
            <div className="space-y-2">
              {t.services.items.map((service, index) => (
                <Link
                  key={index}
                  to="/quote"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 {t.hero.name}. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/" className="text-gray-400 hover:text-white text-sm transition-colors">
              {t.nav.home}
            </Link>
            <Link to="/projects" className="text-gray-400 hover:text-white text-sm transition-colors">
              {t.nav.projects}
            </Link>
            <Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
              {t.nav.about}
            </Link>
            <Link to="/quote" className="text-gray-400 hover:text-white text-sm transition-colors">
              {t.nav.quote}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

