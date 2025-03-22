import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-dark pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="font-serif text-xl text-brand-white mb-6">LUXE</h3>
            <p className="text-brand-silver text-sm leading-relaxed mb-6">
              Premium clothing and accessories for those who appreciate 
              timeless elegance and exceptional quality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-white hover:text-brand-gold transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-brand-white hover:text-brand-gold transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-brand-white hover:text-brand-gold transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-brand-white hover:text-brand-gold transition-colors">
                <FiYoutube size={20} />
              </a>
            </div>
          </div>
          
          {/* Shop Links */}
          <div>
            <h4 className="font-serif text-brand-white uppercase text-sm tracking-wider mb-6">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-brand-silver hover:text-brand-gold text-sm transition-colors">All Products</Link></li>
              <li><Link to="/collections" className="text-brand-silver hover:text-brand-gold text-sm transition-colors">Collections</Link></li>
              <li><Link to="/shop" className="text-brand-silver hover:text-brand-gold text-sm transition-colors">New Arrivals</Link></li>
              <li><Link to="/shop" className="text-brand-silver hover:text-brand-gold text-sm transition-colors">Sale</Link></li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h4 className="font-serif text-brand-white uppercase text-sm tracking-wider mb-6">Customer Service</h4>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-brand-silver hover:text-brand-gold text-sm transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping" className="text-brand-silver hover:text-brand-gold text-sm transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/faq" className="text-brand-silver hover:text-brand-gold text-sm transition-colors">FAQ</Link></li>
              <li><Link to="/size-guide" className="text-brand-silver hover:text-brand-gold text-sm transition-colors">Size Guide</Link></li>
              <li><Link to="/privacy" className="text-brand-silver hover:text-brand-gold text-sm transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          {/* About Us */}
          <div>
            <h4 className="font-serif text-brand-white uppercase text-sm tracking-wider mb-6">About</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-brand-silver hover:text-brand-gold text-sm transition-colors">Our Story</Link></li>
              <li><Link to="/about/sustainability" className="text-brand-silver hover:text-brand-gold text-sm transition-colors">Sustainability</Link></li>
              <li><Link to="/careers" className="text-brand-silver hover:text-brand-gold text-sm transition-colors">Careers</Link></li>
              <li><Link to="/press" className="text-brand-silver hover:text-brand-gold text-sm transition-colors">Press</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent my-8"></div>
        
        {/* Copyright */}
        <div className="text-center text-brand-silver/70 text-sm">
          <p>&copy; {currentYear} LUXE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
