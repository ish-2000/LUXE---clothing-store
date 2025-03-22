import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiHeart, FiShoppingBag, FiEye } from 'react-icons/fi';
import { Product } from '../data/collections';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-brand-dark group relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* New Tag */}
      {product.new && (
        <div className="absolute top-4 left-4 z-10 bg-brand-gold text-brand-black text-xs uppercase font-medium py-1 px-2 tracking-wider">
          New
        </div>
      )}
      
      {/* Product Image */}
      <div className="overflow-hidden aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      
      {/* Quick Action Buttons - Appears on Hover */}
      <motion.div
        className="absolute inset-0 bg-brand-black/30 opacity-0 flex items-center justify-center gap-3 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      >
        <button className="bg-brand-gold text-brand-black p-3 rounded-full hover:bg-white transition-colors duration-200">
          <FiShoppingBag size={18} />
        </button>
        <button className="bg-brand-white text-brand-black p-3 rounded-full hover:bg-brand-gold transition-colors duration-200">
          <FiHeart size={18} />
        </button>
        <button className="bg-brand-white text-brand-black p-3 rounded-full hover:bg-brand-gold transition-colors duration-200">
          <FiEye size={18} />
        </button>
      </motion.div>
      
      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-serif text-lg text-brand-white group-hover:text-brand-gold transition-colors duration-200">
          {product.name}
        </h3>
        <p className="text-brand-silver text-sm line-clamp-1 mb-2">
          {product.description}
        </p>
        <p className="text-brand-gold font-medium">${product.price.toFixed(2)}</p>
        
        {/* Color Options */}
        {product.colors && (
          <div className="mt-3 flex gap-1">
            {product.colors.slice(0, 3).map((color, idx) => (
              <span
                key={idx}
                className="w-3 h-3 rounded-full border border-brand-silver/30"
                title={color}
                style={{
                  backgroundColor: 
                    color.toLowerCase() === 'white' ? '#FFFFFF' :
                    color.toLowerCase() === 'black' ? '#000000' :
                    color.toLowerCase() === 'navy' ? '#0C2340' :
                    color.toLowerCase() === 'silver' ? '#C0C0C0' :
                    color.toLowerCase() === 'gold' ? '#D4AF37' :
                    color.toLowerCase() === 'beige' ? '#F5F5DC' :
                    color.toLowerCase() === 'cream' ? '#FFFDD0' :
                    color.toLowerCase() === 'tan' ? '#D2B48C' :
                    color.toLowerCase() === 'ivory' ? '#FFFFF0' : 
                    color.toLowerCase() === 'grey' ? '#808080' : 
                    color.toLowerCase() === 'sage' ? '#BCB88A' : 
                    color.toLowerCase() === 'khaki' ? '#C3B091' : 
                    color.toLowerCase() === 'olive' ? '#808000' : 
                    color.toLowerCase() === 'burgundy' ? '#800020' : 
                    color.toLowerCase() === 'rust' ? '#B7410E' : 
                    color.toLowerCase() === 'forest green' ? '#228B22' : 
                    color.toLowerCase() === 'camel' ? '#C19A6B' : 
                    color.toLowerCase().includes('blue') ? '#1E90FF' : 
                    color.toLowerCase().includes('red') ? '#FF0000' : 
                    color.toLowerCase().includes('green') ? '#008000' : 
                    color.toLowerCase().includes('brown') ? '#A52A2A' : 
                    color.toLowerCase().includes('pink') ? '#FFC0CB' : 
                    color.toLowerCase().includes('blush') ? '#DE5D83' : 
                    color.toLowerCase().includes('multi') ? 'linear-gradient(45deg, #FF0000, #0000FF, #FFFF00)' : 
                    '#CCCCCC'
                }}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="text-xs text-brand-silver ml-1">+{product.colors.length - 3}</span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCard;
