import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="nav-header">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-primary to-accent-strong flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl text-text-primary">Skolative</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'text-text-primary bg-bg-section' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/kelas" 
              className={`nav-link ${isActive('/kelas') ? 'text-text-primary bg-bg-section' : ''}`}
            >
              Kelas
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-bg-section transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-bg-card rounded-2xl border border-border-light">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className={`nav-link text-center ${isActive('/') ? 'text-text-primary bg-bg-section' : ''}`}
              >
                Home
              </Link>
              <Link 
                to="/kelas" 
                onClick={() => setIsMenuOpen(false)}
                className={`nav-link text-center ${isActive('/kelas') ? 'text-text-primary bg-bg-section' : ''}`}
              >
                Kelas
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;