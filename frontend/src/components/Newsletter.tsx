const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-brand-black to-brand-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="section-title">Join Our Community</h2>
          <p className="text-brand-silver mb-8">
            Subscribe to our newsletter and be the first to receive exclusive offers, 
            early access to new collections, and style insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent border border-brand-gold/50 text-brand-white px-4 py-3 flex-1 focus:outline-none focus:border-brand-gold"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
          
          <p className="text-xs text-brand-silver/70 mt-4">
            Join our community for exclusive offers. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
