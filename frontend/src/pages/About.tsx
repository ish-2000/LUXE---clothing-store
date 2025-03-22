import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import Breadcrumb from '../components/Breadcrumb';

const About = () => {
  // For smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle scroll animations
  useEffect(() => {
    // Optional: Initialize any scroll libraries or effects
  }, []);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Breadcrumb items
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' }
  ];

  return (
    <div className="bg-brand-black min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
            opacity: 0.3
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
  initial="initial"
  animate="animate"
  variants={staggerChildren}
  className="max-w-4xl mx-auto h-[70vh]"
>

            <motion.div variants={fadeInUp} className="mb-2">
              <div className="inline-block mb-2 px-4 py-1 border border-brand-gold/30 text-brand-gold text-xs uppercase tracking-widest">
                About LUXE
              </div>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
            >
              Our Story Begins <br/> With You
            </motion.h1>
            
            <motion.div 
              variants={fadeInUp}
              className="w-24 h-[1px] bg-brand-gold mx-auto mb-8"
            />
            
            <motion.p
              variants={fadeInUp}
              className="text-brand-silver md:text-lg max-w-2xl mx-auto mb-12"
            >
              Crafting timeless elegance since 2010, we combine heritage craftsmanship 
              with contemporary design—creating pieces that transcend trends and seasons.
            </motion.p>
          </motion.div>
          
          {/* Scroll hint */}
          <motion.div 
  onClick={() => scrollToSection('our-story')}
  className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer text-center mt-[18rem]"

  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.5, duration: 0.8 }}
>
  <p className="text-brand-silver text-xs uppercase tracking-widest mb-2">Discover</p>
  <FiChevronDown className="text-brand-gold animate-bounce" size={24} />
</motion.div>

        </div>
      </section>
      
      {/* Our Story Section */}
      <section id="our-story" className="py-24 bg-brand-dark">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left content */}
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">The Essence of <span className="text-brand-gold">LUXE</span></h2>
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-brand-silver mb-6 leading-relaxed">
                  Founded in 2010, LUXE emerged from a vision to redefine modern luxury fashion. We 
                  believed that true luxury isn't about logos or status symbols—it's about exceptional 
                  quality, timeless design, and responsible creation.
                </p>
                <p className="text-brand-silver mb-6 leading-relaxed">
                  Our journey began in a small Parisian atelier, where our founder collaborated with 
                  master craftspeople to create a capsule collection that honored traditional techniques 
                  while embracing contemporary aesthetics.
                </p>
                <p className="text-brand-silver leading-relaxed">
                  Today, LUXE has evolved into a global presence, but our core philosophy remains unchanged: 
                  we create pieces that transcend trends, honor craftsmanship, and respect our planet.
                </p>
              </div>
            </motion.div>
            
            {/* Right image */}
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 border border-brand-gold/20 transform translate-x-4 translate-y-4 -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1573879500655-98f2012dd1db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="LUXE atelier" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-brand-black to-brand-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Our Core Values</h2>
            <div className="w-20 h-[1px] bg-brand-gold mx-auto mb-8"></div>
            <p className="text-brand-silver">
              These principles guide every decision we make, from design conception to final delivery.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Quality",
                description: "We source the finest materials and partner with skilled artisans who share our dedication to excellence.",
                icon: "✦"
              },
              {
                title: "Craftsmanship",
                description: "Each piece is meticulously crafted, honoring traditional techniques passed down through generations.",
                icon: "✦"
              },
              {
                title: "Sustainability",
                description: "We're committed to responsible practices that minimize our environmental impact and promote ethical production.",
                icon: "✦"
              },
              {
                title: "Individuality",
                description: "We create distinctive pieces that empower self-expression and celebrate personal style.",
                icon: "✦"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-brand-dark/60 border border-brand-gold/10 p-8 hover:border-brand-gold/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-brand-gold text-3xl mb-4">{value.icon}</div>
                <h3 className="font-serif text-xl text-white mb-4">{value.title}</h3>
                <p className="text-brand-silver">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Founder's Message */}
      <section className="py-24 bg-brand-dark">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="text-brand-gold text-6xl font-serif mb-4">"</div>
            <h3 className="font-serif text-2xl md:text-3xl text-white italic mb-8 leading-relaxed">
              Fashion is not merely about clothing—it's about creating experiences, emotions, and memories. 
              At LUXE, we don't just make garments; we craft moments that become part of your personal story.
            </h3>
            <div className="w-20 h-[1px] bg-brand-gold mx-auto mb-4"></div>
            <p className="text-brand-silver">Élise Laurent, Founder & Creative Director</p>
          </motion.div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-24 bg-brand-black">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Our Journey</h2>
            <div className="w-20 h-[1px] bg-brand-gold mx-auto mb-8"></div>
            <p className="text-brand-silver">
              From our humble beginnings to our global presence today, each milestone has shaped our vision.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-brand-gold/20 z-0"></div>
            
            {/* Timeline items */}
            {[
              {
                year: "2010",
                title: "The Foundation",
                description: "LUXE is established in Paris with a small team of five designers."
              },
              {
                year: "2013",
                title: "First Flagship Store",
                description: "Opening our first boutique in the heart of Le Marais, Paris."
              },
              {
                year: "2016",
                title: "Sustainable Initiative",
                description: "Launch of our eco-conscious production practices and materials sourcing."
              },
              {
                year: "2019",
                title: "Global Expansion",
                description: "Opening of stores in New York, Tokyo, and Milan, bringing LUXE to a global audience."
              },
              {
                year: "2023",
                title: "Digital Revolution",
                description: "Embracing technology with our immersive online shopping experience."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'}`}>
                  <div className="bg-brand-dark border border-brand-gold/10 p-6 hover:border-brand-gold/30 transition-all duration-300">
                    <span className="inline-block text-brand-gold font-serif text-xl mb-2">{item.year}</span>
                    <h3 className="font-serif text-xl text-white mb-3">{item.title}</h3>
                    <p className="text-brand-silver">{item.description}</p>
                  </div>
                </div>
                
                {/* Center dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-brand-gold z-10"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Us CTA */}
      <section className="py-24 bg-gradient-to-b from-brand-dark to-brand-black">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Become Part of Our Story</h2>
            <p className="text-brand-silver mb-8">
              Join us on our journey as we continue to redefine luxury fashion with each collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/collections" className="btn-primary">
                Explore Collections
              </a>
              <a href="/contact" className="btn-secondary">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
