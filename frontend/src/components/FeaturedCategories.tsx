import { useRef } from 'react';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

const categories = [
  {
    id: 1,
    name: 'Men',
    image: 'https://images.unsplash.com/photo-1532660621034-fb55e2e59762?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    link: '/shop/men'
  },
  {
    id: 2,
    name: 'Women',
    image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    link: '/shop/women'
  },
  {
    id: 3,
    name: 'Unisex',
    image: 'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    link: '/shop/unisex'
  },
  {
    id: 4,
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1547949003-9792a18a2645?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    link: '/shop/accessories'
  },
  {
    id: 5,
    name: 'Footwear',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
    link: '/shop/footwear'
  }
];

const FeaturedCategories = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-brand-dark relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-brand-white">Shop by Category</h2>
          
          {/* Navigation Arrows - Desktop */}
          <div className="hidden md:flex space-x-4">
            <button 
              onClick={() => scroll('left')}
              className="bg-brand-black hover:bg-brand-gold text-brand-white hover:text-brand-black w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <FiArrowLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="bg-brand-black hover:bg-brand-gold text-brand-white hover:text-brand-black w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
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
          {categories.map((category) => (
            <a 
              key={category.id}
              href={category.link}
              className="group relative flex-none w-[280px] md:w-[300px] h-[300px] overflow-hidden"
            >
              {/* Category Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              ></div>
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-brand-black/50 group-hover:bg-brand-black/40 transition-colors duration-300"></div>
              
              {/* Category Name */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative z-10 text-center">
                  <h3 className="font-serif text-2xl text-brand-white mb-2">{category.name}</h3>
                  <div className="w-10 h-[1px] bg-brand-gold mx-auto transition-all duration-300 group-hover:w-16"></div>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        {/* Mobile Scroll Indicator */}
        <div className="flex justify-center mt-4 md:hidden">
          <div className="w-16 h-1 bg-brand-gold/30"></div>
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

export default FeaturedCategories;
