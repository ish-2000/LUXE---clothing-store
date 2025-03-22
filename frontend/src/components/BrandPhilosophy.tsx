const BrandPhilosophy = () => {
  return (
    <section className="py-16 bg-brand-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center border border-brand-gold/30 p-8 md:p-12 relative">
          {/* Gold corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-gold"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-brand-gold"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-brand-gold"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-gold"></div>
          
          <h2 className="section-title mb-6">Our Philosophy</h2>
          <p className="text-brand-silver mb-8 leading-relaxed">
            At LUXE, we believe in crafting timeless pieces that transcend seasons and trends. 
            Our commitment to sustainable luxury and ethical manufacturing ensures that each 
            garment not only elevates your style but also respects our planet.
          </p>
          <a href="/about" className="font-serif text-brand-gold uppercase tracking-wider text-sm hover:text-white transition-colors duration-200">
            Discover Our Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrandPhilosophy;
