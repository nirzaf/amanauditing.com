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
            <p className="text-gray-400 mt-2">
              Professional audit and assurance services tailored to your business needs.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/useful-links" className="text-gray-400 hover:text-white transition-colors">
                  Useful Links
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-[#5616b3]" />
                <span className="text-gray-400">+1 234 567 890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-[#5616b3]" />
                <span className="text-gray-400">info@amnaauditing.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-[#5616b3]" />
                <span className="text-gray-400">123 Business Avenue, Suite 100</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Amna Auditing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;