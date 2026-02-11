import React from 'react';
import { Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Shield className="h-6 w-6" />
            <span className="text-xl font-bold">Hybrid IDS</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400">Hybrid CNN & ConvNeXt-Tiny Based Intrusion Detection System</p>
            <p className="text-gray-400 text-sm mt-2">© {new Date().getFullYear()} Academic Project Demo</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;