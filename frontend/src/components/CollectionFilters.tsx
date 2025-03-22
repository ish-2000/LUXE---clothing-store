import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiFilter, FiX } from 'react-icons/fi';

interface FiltersProps {
  onFilterChange: (filters: { sizes: string[], colors: string[], priceRange: [number, number] }) => void;
  availableSizes: string[];
  availableColors: string[];
  priceRange: [number, number];
}

const CollectionFilters = ({ onFilterChange, availableSizes, availableColors, priceRange }: FiltersProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<[number, number]>(priceRange);
  
  const handleSizeToggle = (size: string) => {
    const newSizes = selectedSizes.includes(size)
      ? selectedSizes.filter(s => s !== size)
      : [...selectedSizes, size];
    
    setSelectedSizes(newSizes);
    onFilterChange({ sizes: newSizes, colors: selectedColors, priceRange: selectedPriceRange });
  };
  
  const handleColorToggle = (color: string) => {
    const newColors = selectedColors.includes(color)
      ? selectedColors.filter(c => c !== color)
      : [...selectedColors, color];
    
    setSelectedColors(newColors);
    onFilterChange({ sizes: selectedSizes, colors: newColors, priceRange: selectedPriceRange });
  };
  
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    const isMin = event.target.id === 'min-price';
    
    const newRange: [number, number] = isMin
      ? [value, selectedPriceRange[1]]
      : [selectedPriceRange[0], value];
    
    setSelectedPriceRange(newRange);
    onFilterChange({ sizes: selectedSizes, colors: selectedColors, priceRange: newRange });
  };
  
  const clearAllFilters = () => {
    setSelectedSizes([]);
    setSelectedColors([]);
    setSelectedPriceRange(priceRange);
    onFilterChange({ sizes: [], colors: [], priceRange });
  };

  return (
    <div className="mb-8">
      {/* Mobile Filter Toggle */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 border border-brand-gold/30 text-brand-white"
        >
          {isOpen ? <FiX size={18} /> : <FiFilter size={18} />}
          <span>{isOpen ? "Close Filters" : "Filter Products"}</span>
        </button>
      </div>

      {/* Filters - Always visible on desktop, toggleable on mobile */}
      <motion.div 
        className={`${isOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0 bg-brand-dark p-5 border border-brand-gold/20`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen || window.innerWidth >= 768 ? 1 : 0,
          height: isOpen || window.innerWidth >= 768 ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          {/* Size Filter */}
          <div className="md:flex-1">
            <h3 className="font-serif text-brand-white text-lg mb-3">Size</h3>
            <div className="flex flex-wrap gap-2">
              {availableSizes.map(size => (
                <button
                  key={size}
                  onClick={() => handleSizeToggle(size)}
                  className={`px-3 py-1 border text-sm transition-colors ${
                    selectedSizes.includes(size)
                      ? 'border-brand-gold bg-brand-gold/10 text-brand-gold'
                      : 'border-brand-silver/30 text-brand-silver hover:border-brand-gold/50'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          {/* Color Filter */}
          <div className="md:flex-1">
            <h3 className="font-serif text-brand-white text-lg mb-3">Color</h3>
            <div className="flex flex-wrap gap-3">
              {availableColors.map(color => (
                <button
                  key={color}
                  onClick={() => handleColorToggle(color)}
                  className={`transition-transform ${
                    selectedColors.includes(color) ? 'ring-2 ring-brand-gold scale-110' : ''
                  }`}
                  title={color}
                >
                  <div 
                    className="w-6 h-6 rounded-full border border-brand-silver/30"
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
                </button>
              ))}
            </div>
          </div>
          
          {/* Price Range Filter */}
          <div className="md:flex-1">
            <h3 className="font-serif text-brand-white text-lg mb-3">Price Range</h3>
            <div className="flex items-center gap-3">
              <input
                type="number"
                id="min-price"
                placeholder="Min"
                value={selectedPriceRange[0]}
                onChange={handlePriceChange}
                className="w-full bg-transparent border border-brand-silver/30 px-3 py-1 text-brand-white focus:border-brand-gold/70 focus:outline-none"
              />
              <span className="text-brand-silver">to</span>
              <input
                type="number"
                id="max-price"
                placeholder="Max"
                value={selectedPriceRange[1]}
                onChange={handlePriceChange}
                className="w-full bg-transparent border border-brand-silver/30 px-3 py-1 text-brand-white focus:border-brand-gold/70 focus:outline-none"
              />
            </div>
          </div>
        </div>
        
        {/* Clear Filters Button */}
        {(selectedSizes.length > 0 || selectedColors.length > 0 || 
          selectedPriceRange[0] !== priceRange[0] || selectedPriceRange[1] !== priceRange[1]) && (
          <button
            onClick={clearAllFilters}
            className="mt-6 text-brand-gold text-sm hover:underline"
          >
            Clear All Filters
          </button>
        )}
      </motion.div>
    </div>
  );
};

export default CollectionFilters;
