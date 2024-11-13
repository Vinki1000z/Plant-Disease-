import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <Leaf className="h-8 w-8 text-green-600" />
                <span className="text-xl font-bold text-gray-900">AgriFlow</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink to="/" active={isActive('/')}>Home</NavLink>
              <NavLink to="/supplements" active={isActive('/supplements')}>Supplements</NavLink>
              <NavLink to="/ai-engine" active={isActive('/ai-engine')}>AI Engine</NavLink>
              <NavLink to="/contact" active={isActive('/contact')}>Contact</NavLink>
              <Link 
                to="/ai-engine"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-green-100">
            <MobileNavLink to="/" active={isActive('/')}>Home</MobileNavLink>
            <MobileNavLink to="/supplements" active={isActive('/supplements')}>Supplements</MobileNavLink>
            <MobileNavLink to="/ai-engine" active={isActive('/ai-engine')}>AI Engine</MobileNavLink>
            <MobileNavLink to="/contact" active={isActive('/contact')}>Contact</MobileNavLink>
            <Link
              to="/ai-engine"
              className="block w-full text-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) => (
  <Link
    to={to}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      active ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
    }`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) => (
  <Link
    to={to}
    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
      active ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
    }`}
  >
    {children}
  </Link>
);

export default Navbar;