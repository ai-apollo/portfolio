
import { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="font-display text-2xl font-bold text-apollo-secondary hover:text-apollo-primary transition-colors">
              あぽろ
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="font-medium text-gray-700 hover:text-apollo-primary transition-colors">
              About
            </a>
            <a href="#works" className="font-medium text-gray-700 hover:text-apollo-primary transition-colors">
              Works
            </a>
            <a href="#skills" className="font-medium text-gray-700 hover:text-apollo-primary transition-colors">
              Skills
            </a>
            <a href="#contact" className="font-medium text-gray-700 hover:text-apollo-primary transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://twitter.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-apollo-primary transition-colors">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="https://instagram.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-apollo-primary transition-colors">
              <Instagram size={20} />
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-apollo-primary focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#about" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-apollo-primary hover:bg-gray-50"
            >
              About
            </a>
            <a 
              href="#works" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-apollo-primary hover:bg-gray-50"
            >
              Works
            </a>
            <a 
              href="#skills" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-apollo-primary hover:bg-gray-50"
            >
              Skills
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-apollo-primary hover:bg-gray-50"
            >
              Contact
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center space-x-4 px-4">
              <a href="https://twitter.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-apollo-primary transition-colors">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="https://instagram.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-apollo-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
