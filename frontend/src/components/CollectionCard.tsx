import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Collection } from '../data/collections';

interface CollectionCardProps {
  collection: Collection;
  index: number;
}

const CollectionCard = ({ collection, index }: CollectionCardProps) => {
  return (
    <motion.div
      className="group relative overflow-hidden bg-brand-dark h-[450px]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${collection.image})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/30 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 transition-all duration-300 group-hover:translate-y-[-10px]">
        <h3 className="text-2xl font-serif text-brand-white mb-2">{collection.name}</h3>
        <p className="text-brand-silver text-sm mb-6 opacity-90">{collection.description}</p>
        
        {/* Shop Now Button - Visible on Hover */}
        <div className="overflow-hidden h-10">
          <motion.div
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to={`/collections/${collection.slug}`}
              className="inline-block btn-secondary"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CollectionCard;
