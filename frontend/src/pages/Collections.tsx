import { motion } from 'framer-motion';
import collections from '../data/collections';
import CollectionCard from '../components/CollectionCard';
import Breadcrumb from '../components/Breadcrumb';

const Collections = () => {
  // Breadcrumb items
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Collections', path: '/collections' }
  ];

  return (
    <div className="pt-24 pb-16 bg-brand-black min-h-screen">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Explore Our Collections
          </motion.h1>
          <motion.p 
            className="text-brand-silver text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="inline-block relative">
              Timeless styles curated for you
              <span className="absolute bottom-0 left-0 w-full h-px bg-brand-gold/50"></span>
            </span>
          </motion.p>
        </div>
        
        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((collection, index) => (
            <CollectionCard 
              key={collection.id} 
              collection={collection} 
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
