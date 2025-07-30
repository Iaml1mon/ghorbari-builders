import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto mobile-container mobile-section">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4 mobile-focus">
              <img src="/assets/ghorbaribuilders_logo_only.png" alt="Ghorbari Builders Logo" className="h-8 sm:h-10" />
              <div>
                <div className="text-base sm:text-lg font-bold">{t.hero.name}</div>
                <div className="text-sm text-gray-400">{t.hero.title}</div>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md mobile-body">
=======
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
>>>>>>> cd76d7d89ef093c840d8c6ddc4dc670b6ee42459
              {t.hero.bio}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
<<<<<<< HEAD
                href="https://wa.me/8801716718020"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors mobile-focus touch-target"
                aria-label="WhatsApp"
=======
                href="https://wa.me/8801XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
>>>>>>> cd76d7d89ef093c840d8c6ddc4dc670b6ee42459
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="#"
<<<<<<< HEAD
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors mobile-focus touch-target"
                aria-label="Facebook"
=======
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
>>>>>>> cd76d7d89ef093c840d8c6ddc4dc670b6ee42459
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
<<<<<<< HEAD
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors mobile-focus touch-target"
                aria-label="Instagram"
=======
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
>>>>>>> cd76d7d89ef093c840d8c6ddc4dc670b6ee42459
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
<<<<<<< HEAD
                  href="tel:+8801716718020"
                  className="text-gray-400 hover:text-white transition-colors mobile-focus"
=======
                  href="tel:+8801XXXXXXXXX"
                  className="text-gray-400 hover:text-white transition-colors"
>>>>>>> cd76d7d89ef093c840d8c6ddc4dc670b6ee42459
                >
                  {t.footer.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <a 
<<<<<<< HEAD
                  href="mailto:Info@Ghorbaribuilders.com"
                  className="text-gray-400 hover:text-white transition-colors mobile-focus"
=======
                  href="mailto:rahman.builder@email.com"
                  className="text-gray-400 hover:text-white transition-colors"
>>>>>>> cd76d7d89ef093c840d8c6ddc4dc670b6ee42459
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
<<<<<<< HEAD
                  className="block text-gray-400 hover:text-white transition-colors mobile-focus"
=======
                  className="block text-gray-400 hover:text-white transition-colors"
>>>>>>> cd76d7d89ef093c840d8c6ddc4dc670b6ee42459
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
<<<<<<< HEAD
          <div className="flex flex-wrap justify-center md:justify-end space-x-6 mt-4 md:mt-0">
            <Link to="/" className="text-gray-400 hover:text-white text-sm transition-colors mobile-focus">
              {t.nav.home}
            </Link>
            <Link to="/projects" className="text-gray-400 hover:text-white text-sm transition-colors mobile-focus">
              {t.nav.projects}
            </Link>
            <Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors mobile-focus">
              {t.nav.about}
            </Link>
            <Link to="/quote" className="text-gray-400 hover:text-white text-sm transition-colors mobile-focus">
=======
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
>>>>>>> cd76d7d89ef093c840d8c6ddc4dc670b6ee42459
              {t.nav.quote}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

