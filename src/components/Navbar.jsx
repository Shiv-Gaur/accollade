
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar({ scrollY }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    setIsFloating(scrollY > 50);
  }, [scrollY]);

  return (
    <nav className={`w-full z-50 transition-all duration-300 ${
      isFloating 
        ? 'fixed top-0 bg-cyberdark/80 backdrop-blur-md py-3 shadow-lg shadow-neonblue/20' 
        : 'absolute py-6'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/assets/155a3d61-7409-4984-9d30-cfc2aa37839a.png" 
              alt="Accolade Logo" 
              className="h-10 mr-2"
            />
            <span className={`text-2xl font-bold ${isFloating ? 'cyber-glow' : ''}`}>
              <span className="text-neonblue"></span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-white hover:text-cyberteal transition-colors">About</a>
            <Link to="/events" className="text-white hover:text-cyberteal transition-colors">Events</Link>
            <Link to="/gallery" className="text-white hover:text-cyberteal transition-colors">Gallery</Link>
            <a 
              href="#register" 
              className="cyber-border px-6 py-2 bg-cyberdark hover:bg-cyberblue/20 transition-colors text-white"
            >
              Register
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-cyberdark/90 backdrop-blur-md mt-4 py-4 px-2 cyber-border">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-white hover:text-cyberteal px-3 py-2" onClick={() => setIsMenuOpen(false)}>About</a>
              <Link to="/events" className="text-white hover:text-cyberteal px-3 py-2" onClick={() => setIsMenuOpen(false)}>Events</Link>
              <Link to="/gallery" className="text-white hover:text-cyberteal px-3 py-2" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
              <a 
                href="#register" 
                className="mx-3 text-center cyber-border px-6 py-2 bg-cyberdark hover:bg-cyberblue/20 transition-colors text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
