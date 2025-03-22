import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80)',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-brand-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-brand-white mb-4 tracking-wider animate-fade-in">
          ELEVATE YOUR STYLE
        </h1>
        <p className="font-sans text-brand-silver max-w-xl text-lg mb-8 animate-fade-in">
          Timeless elegance meets contemporary design in our premium collection.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
          <Link to="/shop" className="btn-primary">
            Shop Now
          </Link>
          <Link to="/collections" className="btn-secondary">
            Explore Collections
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
