import React from 'react';
import { Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <div className="flex items-center space-x-8">
            <a href="#" className="text-gray-500 hover:text-gray-600">About</a>
            <a href="#" className="text-gray-500 hover:text-gray-600">Features</a>
            <a href="#" className="text-gray-500 hover:text-gray-600">Pricing</a>
            <a href="#" className="text-gray-500 hover:text-gray-600">Contact</a>
          </div>
        </div>
        <div className="mt-8 md:order-1">
          <div className="flex items-center justify-center">
            <Leaf className="h-6 w-6 text-green-600" />
            <p className="ml-2 text-center text-base text-gray-500">
              &copy; {new Date().getFullYear()} AgriFlow. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;