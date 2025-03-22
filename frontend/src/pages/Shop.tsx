import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFilter, FiX, FiChevronDown } from 'react-icons/fi';
import Breadcrumb from '../components/Breadcrumb';
import ProductCard from '../components/ProductCard';
import ProductSkeleton from '../components/ProductSkeleton';
import collections, { Product } from '../data/collections';

// Flatten all products from collections
const allProducts = collections.flatMap(collection => 
  collection.products.map(product => ({
    ...product,
    collection: collection.name
  }))
);

// Get all unique categories from collections
const allCategories = ['All', ...new Set(collections.map(c => c.name))];

// All unique sizes
const allSizes = [...new Set(allProducts
  .flatMap(product => product.sizes || [])
  .filter(Boolean))];

// Sort options
const sortOptions = [
  { label: 'Newest', value: 'newest' },
  { label: 'Popular', value: 'popular' },
  { label: 'Price (Low to High)', value: 'price-asc' },
  { label: 'Price (High to Low)', value: 'price-desc' }
];

const Shop = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState('newest');
  const [sortMenuOpen, setSortMenuOpen] = useState(false);
  
  // Calculate min and max price from all products
  const priceMinMax = useMemo(() => {
    const prices = allProducts.map(p => p.price);
    return [
      Math.floor(Math.min(...prices)),
      Math.ceil(Math.max(...prices))
    ] as [number, number];
  }, []);
  
  // Initialize price range when component mounts
  useEffect(() => {
    setPriceRange(priceMinMax);
  }, [priceMinMax]);

  // Simulate loading data from an API
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Add a "popular" field to simulate popularity data
      const productsWithPopularity = allProducts.map(product => ({
        ...product,
        popular: Math.floor(Math.random() * 100) // Random popularity score for demo
      }));
      
      setProducts(productsWithPopularity);
      setFilteredProducts(productsWithPopularity);
      setLoading(false);
    };
    
    fetchProducts();
  }, []);

  // Apply filters and sorting
  useEffect(() => {
    if (products.length === 0) return;
    
    let result = [...products];
    
    // Apply category filter
    if (selectedCategory !== 'All') {
      result = result.filter(product => 
        product.collection === selectedCategory
      );
    }
    
    // Apply size filter
    if (selectedSizes.length > 0) {
      result = result.filter(product => 
        product.sizes && product.sizes.some(size => selectedSizes.includes(size))
      );
    }
    
    // Apply price range filter
    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Apply sorting
    switch (sortBy) {
      case 'newest':
        // Assume newer products have higher IDs for demo purposes
        result = result.sort((a, b) => b.id - a.id);
        break;
      case 'popular':
        result = result.sort((a, b) => (b.popular || 0) - (a.popular || 0));
        break;
      case 'price-asc':
        result = result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result = result.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    
    setFilteredProducts(result);
  }, [products, selectedCategory, selectedSizes, priceRange, sortBy]);

  // Handle size selection
  const handleSizeToggle = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) 
        ? prev.filter(s => s !== size) 
        : [...prev, size]
    );
  };
  
  // Handle price range change
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>, isMin: boolean) => {
    const value = Number(event.target.value);
    setPriceRange(prev => 
      isMin ? [value, prev[1]] : [prev[0], value]
    );
  };
  
  // Reset all filters
  const resetFilters = () => {
    setSelectedCategory('All');
    setSelectedSizes([]);
    setPriceRange(priceMinMax);
    setSortBy('newest');
  };
  
  // Breadcrumb items
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' }
  ];

  return (
    <div className="pt-24 pb-16 bg-brand-black min-h-screen">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />
        
        {/* Shop Header */}
        <div className="mb-12 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-white mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Shop All Products
          </motion.h1>
          <motion.p 
            className="text-brand-silver text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-block relative">
              Premium designs for discerning tastes
              <span className="absolute bottom-0 left-0 w-full h-px bg-brand-gold/50"></span>
            </span>
          </motion.p>
        </div>
        
        {/* Filter and Sort Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          {/* Mobile Filter Toggle */}
          <button 
            className="md:hidden flex items-center gap-2 px-4 py-2 border border-brand-gold/30 text-brand-white"
            onClick={() => setMobileFiltersOpen(true)}
          >
            <FiFilter size={18} />
            <span>Filter Products</span>
          </button>
          
          {/* Results count and sort on mobile */}
          <div className="flex justify-between w-full md:w-auto md:ml-auto">
            {!loading && (
              <p className="text-brand-silver">
                Showing <span className="text-brand-white">{filteredProducts.length}</span> products
              </p>
            )}
            
            {/* Sort dropdown */}
            <div className="relative ml-auto">
              <button 
                className="flex items-center gap-2 px-4 py-2 border border-brand-gold/30 text-brand-white"
                onClick={() => setSortMenuOpen(!sortMenuOpen)}
              >
                <span>Sort: {sortOptions.find(option => option.value === sortBy)?.label}</span>
                <FiChevronDown size={18} className={`transition-transform ${sortMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Sort options menu */}
              <AnimatePresence>
                {sortMenuOpen && (
                  <motion.div 
                    className="absolute right-0 top-full mt-1 bg-brand-dark border border-brand-gold/20 w-48 z-10"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ul>
                      {sortOptions.map(option => (
                        <li key={option.value}>
                          <button 
                            className={`w-full text-left px-4 py-2 hover:bg-brand-black/50 ${sortBy === option.value ? 'text-brand-gold' : 'text-brand-white'}`}
                            onClick={() => {
                              setSortBy(option.value);
                              setSortMenuOpen(false);
                            }}
                          >
                            {option.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Desktop */}
          {/* Filters - Desktop */}
<div className="hidden md:block w-64 flex-shrink-0 mb-10">
  <div className="bg-brand-dark p-4 border border-brand-gold/20 sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-lg space-y-4">
    <h3 className="font-serif text-brand-white text-lg mb-4 pb-1 border-b border-brand-gold/20">
      Filters
    </h3>

    {/* Category Filter */}
    <div className="mb-4">
      <h4 className="font-serif text-brand-white mb-2 text-sm">Category</h4>
      <ul className="space-y-1.5">
        {allCategories.map(category => (
          <li key={category}>
            <button 
              className={`w-full text-left text-sm transition-colors ${
                selectedCategory === category
                  ? 'text-brand-gold'
                  : 'text-brand-silver hover:text-brand-white'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>

    {/* Size Filter */}
    <div className="mb-4">
      <h4 className="font-serif text-brand-white mb-2 text-sm">Size</h4>
      <div className="flex flex-wrap gap-1.5">
        {allSizes.map(size => (
          <button
            key={size}
            onClick={() => handleSizeToggle(size)}
            className={`px-2 py-0.5 border text-xs transition-colors ${
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

    {/* Price Range Filter */}
    <div className="mb-4">
      <h4 className="font-serif text-brand-white mb-2 text-sm">Price Range</h4>
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <input
            type="number"
            value={priceRange[0]}
            onChange={(e) => handlePriceChange(e, true)}
            min={priceMinMax[0]}
            max={priceMinMax[1]}
            className="w-full bg-transparent border border-brand-silver/30 px-2 py-0.5 text-sm text-brand-white focus:border-brand-gold/70 focus:outline-none"
            placeholder="Min"
          />
          <span className="text-brand-silver text-xs">to</span>
          <input
            type="number"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(e, false)}
            min={priceMinMax[0]}
            max={priceMinMax[1]}
            className="w-full bg-transparent border border-brand-silver/30 px-2 py-0.5 text-sm text-brand-white focus:border-brand-gold/70 focus:outline-none"
            placeholder="Max"
          />
        </div>

        <div className="px-1">
          <div className="relative h-1 bg-brand-dark/80 rounded">
            <div 
              className="absolute h-full bg-brand-gold/50 rounded"
              style={{
                left: `${((priceRange[0] - priceMinMax[0]) / (priceMinMax[1] - priceMinMax[0])) * 100}%`,
                right: `${100 - ((priceRange[1] - priceMinMax[0]) / (priceMinMax[1] - priceMinMax[0])) * 100}%`
              }}
            ></div>
          </div>
        </div>

        <div className="flex justify-between text-[10px] text-brand-silver">
          <span>${priceMinMax[0]}</span>
          <span>${priceMinMax[1]}</span>
        </div>
      </div>
    </div>

    {/* Reset Button */}
    <button
      onClick={resetFilters}
      className="w-full mt-3 py-1.5 text-xs bg-brand-dark border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-colors"
    >
      Reset Filters
    </button>
  </div>
</div>

          
          {/* Mobile Filters Overlay */}
          <AnimatePresence>
            {mobileFiltersOpen && (
              <motion.div 
                className="fixed inset-0 bg-brand-black/90 z-50 flex md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="bg-brand-dark w-full max-w-sm mx-auto my-auto p-6 max-h-[80vh] overflow-y-auto"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.95 }}
                >
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-serif text-brand-white text-xl">Filters</h3>
                    <button 
                      onClick={() => setMobileFiltersOpen(false)}
                      className="text-brand-white p-1"
                    >
                      <FiX size={24} />
                    </button>
                  </div>
                  
                  {/* Category Filter */}
                  <div className="mb-6">
                    <h4 className="font-serif text-brand-white mb-3">Category</h4>
                    <ul className="space-y-3">
                      {allCategories.map(category => (
                        <li key={category}>
                          <button 
                            className={`w-full text-left transition-colors ${selectedCategory === category ? 'text-brand-gold' : 'text-brand-silver hover:text-brand-white'}`}
                            onClick={() => setSelectedCategory(category)}
                          >
                            {category}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Size Filter */}
                  <div className="mb-6">
                    <h4 className="font-serif text-brand-white mb-3">Size</h4>
                    <div className="flex flex-wrap gap-2">
                      {allSizes.map(size => (
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
                  
                  {/* Price Range Filter */}
                  <div className="mb-6">
                    <h4 className="font-serif text-brand-white mb-3">Price Range</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-2">
                        <input
                          type="number"
                          value={priceRange[0]}
                          onChange={(e) => handlePriceChange(e, true)}
                          min={priceMinMax[0]}
                          max={priceMinMax[1]}
                          className="w-full bg-transparent border border-brand-silver/30 px-3 py-1 text-brand-white focus:border-brand-gold/70 focus:outline-none"
                          placeholder="Min"
                        />
                        <span className="text-brand-silver">to</span>
                        <input
                          type="number"
                          value={priceRange[1]}
                          onChange={(e) => handlePriceChange(e, false)}
                          min={priceMinMax[0]}
                          max={priceMinMax[1]}
                          className="w-full bg-transparent border border-brand-silver/30 px-3 py-1 text-brand-white focus:border-brand-gold/70 focus:outline-none"
                          placeholder="Max"
                        />
                      </div>
                      
                      <div className="px-1">
                        <div className="relative h-1 bg-brand-dark/80 rounded">
                          <div 
                            className="absolute h-full bg-brand-gold/50 rounded"
                            style={{
                              left: `${((priceRange[0] - priceMinMax[0]) / (priceMinMax[1] - priceMinMax[0])) * 100}%`,
                              right: `${100 - ((priceRange[1] - priceMinMax[0]) / (priceMinMax[1] - priceMinMax[0])) * 100}%`
                            }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between text-xs text-brand-silver">
                        <span>${priceMinMax[0]}</span>
                        <span>${priceMinMax[1]}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Apply and Reset Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => setMobileFiltersOpen(false)}
                      className="flex-1 py-2 bg-brand-gold text-brand-black hover:bg-brand-gold/90 transition-colors"
                    >
                      Apply Filters
                    </button>
                    <button
                      onClick={resetFilters}
                      className="flex-1 py-2 bg-transparent border border-brand-gold text-brand-gold hover:bg-brand-gold/10 transition-colors"
                    >
                      Reset
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Products Grid */}
          <div className="flex-1">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(9)].map((_, index) => (
                  <ProductSkeleton key={index} />
                ))}
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <motion.div 
                className="py-20 text-center bg-brand-dark/30 rounded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-serif text-brand-white mb-3">No products found</h3>
                <p className="text-brand-silver mb-6">Try adjusting your filters to find what you're looking for.</p>
                <button 
                  onClick={resetFilters}
                  className="btn-secondary"
                >
                  Reset Filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
