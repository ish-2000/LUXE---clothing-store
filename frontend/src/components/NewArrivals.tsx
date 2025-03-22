import { FiShoppingBag, FiHeart, FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Silk Evening Dress',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
  },
  {
    id: 2,
    name: 'Classic Fitted Blazer',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1611485988300-b7ef6a1766fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
  },
  {
    id: 3,
    name: 'Leather Statement Bag',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1590739293931-a38b376d1c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
  },
  {
    id: 4,
    name: 'Fine Knit Cashmere Sweater',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1736&q=80',
  },
  {
    id: 5,
    name: 'Designer Watch',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1594576722512-582d9a58ed71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 6,
    name: 'Premium Denim Jeans',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80',
  },
];

const NewArrivals = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-brand-black relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-brand-white">New Arrivals</h2>
          
          {/* Navigation Arrows - Desktop */}
          <div className="hidden md:flex space-x-4">
            <button 
              onClick={() => scroll('left')}
              className="bg-brand-dark hover:bg-brand-gold text-brand-white hover:text-brand-black w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <FiArrowLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="bg-brand-dark hover:bg-brand-gold text-brand-white hover:text-brand-black w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <FiArrowRight size={20} />
            </button>
          </div>
        </div>
        
        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto pb-8 space-x-6 scrollbar-hide"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {products.map((product) => (
            <div 
              key={product.id} 
              className="product-card group flex-none w-[280px] md:w-[320px]"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Action Buttons */}
                <div className="absolute inset-0 bg-brand-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="bg-brand-gold p-3 rounded-full text-brand-black hover:bg-white transition-colors duration-200">
                    <FiShoppingBag size={18} />
                  </button>
                  <button className="bg-brand-white p-3 rounded-full text-brand-black hover:bg-brand-gold transition-colors duration-200">
                    <FiHeart size={18} />
                  </button>
                </div>
              </div>
              
              {/* Product Info */}
              <h3 className="font-serif text-lg text-brand-white mb-2 group-hover:text-brand-gold transition-colors duration-200">
                {product.name}
              </h3>
              <p className="text-brand-gold font-medium">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
        
        {/* Mobile Scroll Indicator */}
        <div className="flex justify-center mt-4 md:hidden">
          <div className="w-16 h-1 bg-brand-gold/30"></div>
        </div>
        
        <div className="text-center mt-12">
          <Link to="/shop" className="btn-primary">
            View All Products
          </Link>
        </div>
      </div>
      
      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default NewArrivals;
