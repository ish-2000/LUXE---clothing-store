import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const HeroVideoSection = () => {
  // State for tracking video loading
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle video loaded event
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setVideoLoaded(true);
      // Add a slight delay before showing video to ensure smooth transition
      setTimeout(() => setVideoReady(true), 800);
    };

    // Set a timeout in case video takes too long to load
    const timeoutId = setTimeout(() => {
      if (!videoLoaded) setVideoReady(true);
    }, 5000);

    video.addEventListener('loadeddata', handleLoadedData);
    
    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      clearTimeout(timeoutId);
    };
  }, [videoLoaded]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Loading Screen */}
      <AnimatePresence>
        {!videoReady && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-20 flex items-center justify-center bg-black"
          >
            <motion.h2
              className="text-1xl md:text-5xl text-brand-gold font-serif tracking-wider"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              LUXE
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Background */}
      <motion.video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: videoReady ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <source src="/videos/luxe-intro.mp4" type="video/mp4" />
      </motion.video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content - Appears once video is ready */}
      <AnimatePresence>
        {videoReady && (
          <motion.div 
            className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-brand-white mb-4 tracking-wider">
              ELEVATE YOUR STYLE
            </h1>
            <p className="font-sans text-brand-silver max-w-xl text-lg mb-8">
              Timeless elegance meets contemporary design in our premium collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/shop" className="btn-primary">
                Shop Now
              </Link>
              <Link to="/collections" className="btn-secondary">
                Explore Collections
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Down Button */}
      {videoReady && (
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <p className="text-sm mb-2 text-brand-silver uppercase tracking-widest text-center">Scroll</p>
          <FiChevronDown className="mx-auto text-brand-gold animate-bounce" size={24} />
        </motion.div>
      )}
    </section>
  );
};

export default HeroVideoSection;
