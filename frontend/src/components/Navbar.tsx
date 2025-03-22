import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiHeart, FiShoppingBag, FiUser, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-brand-black/90 backdrop-blur-sm py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-serif text-brand-white font-medium">
          LUXE
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/collections" className="nav-link">Collections</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-brand-white hover:text-brand-gold">
            <FiSearch size={20} />
          </button>
          <button className="text-brand-white hover:text-brand-gold">
            <FiHeart size={20} />
          </button>
          <button className="text-brand-white hover:text-brand-gold">
            <FiShoppingBag size={20} />
          </button>
          <button className="text-brand-white hover:text-brand-gold">
            <FiUser size={20} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button className="text-brand-white hover:text-brand-gold">
            <FiShoppingBag size={20} />
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-brand-white hover:text-brand-gold"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-dark absolute top-full left-0 w-full py-4 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/shop" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
            <Link to="/collections" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Collections</Link>
            <Link to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <div className="flex space-x-6 pt-2 border-t border-gray-700">
              <button className="text-brand-white hover:text-brand-gold">
                <FiSearch size={20} />
              </button>
              <button className="text-brand-white hover:text-brand-gold">
                <FiHeart size={20} />
              </button>
              <button className="text-brand-white hover:text-brand-gold">
                <FiUser size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
