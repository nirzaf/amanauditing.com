import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              src="https://ik.imagekit.io/c1glhbr6p/Logo-PNG.png?updatedAt=1732211620352"
              alt="Amna Auditing"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mt-2 font-medium">
              Professional audit and assurance services tailored to your business needs.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors font-medium">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/useful-links" className="text-gray-300 hover:text-white transition-colors font-medium">
                  Useful Links
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-[#7c42d9]" />
                <span className="text-gray-300 font-medium">+974 5530 4717</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-[#7c42d9]" />
                <span className="text-gray-300 font-medium">info@amnaauditing.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-[#7c42d9]" />
                <span className="text-gray-300 font-medium">Building No 189, Zone 53, Street 790, Umm Al Dome St, Ar Rayyan, Qatar</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="mb-2 text-gray-300 font-medium">&copy; {new Date().getFullYear()} Amna Auditing. All rights reserved.</p>
          <p className="text-sm text-gray-300">
            Powered by{' '}
            <a
              href="https://quadrate.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7c42d9] hover:text-[#9e6ae3] transition-colors duration-300 font-medium"
            >
              Quadrate Tech Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;