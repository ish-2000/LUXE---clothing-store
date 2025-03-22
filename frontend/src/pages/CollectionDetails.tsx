import { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import { getCollectionBySlug, Product } from '../data/collections';
import Breadcrumb from '../components/Breadcrumb';
import ProductCard from '../components/ProductCard';
import ProductSkeleton from '../components/ProductSkeleton';
import CollectionFilters from '../components/CollectionFilters';

const CollectionDetails = () => {
  const { collectionSlug } = useParams<{ collectionSlug: string }>();
  const [loading, setLoading] = useState(true);
  const [collection, setCollection] = useState<any>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState({
    sizes: [] as string[],
    colors: [] as string[],
    priceRange: [0, 1000] as [number, number]
  });

  // Get unique available sizes from all products
  const availableSizes = useMemo(() => {
    if (!collection) return [];
    
    const sizeSet = new Set<string>();
    collection.products.forEach((product: Product) => {
      product.sizes?.forEach(size => sizeSet.add(size));
    });
    
    return Array.from(sizeSet);
  }, [collection]);
  
  // Get unique available colors from all products
  const availableColors = useMemo(() => {
    if (!collection) return [];
    
    const colorSet = new Set<string>();
    collection.products.forEach((product: Product) => {
      product.colors?.forEach(color => colorSet.add(color));
    });
    
    return Array.from(colorSet);
  }, [collection]);
  
  // Get min and max price range
  const priceRange = useMemo(() => {
    if (!collection) return [0, 1000] as [number, number];
    
    const prices = collection.products.map((p: Product) => p.price);
    return [
      Math.floor(Math.min(...prices)),
      Math.ceil(Math.max(...prices))
    ] as [number, number];
  }, [collection]);

  // Simulate fetching data
  useEffect(() => {
    const fetchCollection = async () => {
      setLoading(true);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const foundCollection = getCollectionBySlug(collectionSlug || '');
      setCollection(foundCollection);
      setFilteredProducts(foundCollection?.products || []);
      
      if (foundCollection) {
        // Set initial price range
        const prices = foundCollection.products.map((p: Product) => p.price);
        setFilters({
          ...filters,
          priceRange: [
            Math.floor(Math.min(...prices)),
            Math.ceil(Math.max(...prices))
          ] as [number, number]
        });
      }
      
      setLoading(false);
    };
    
    fetchCollection();
  }, [collectionSlug]);

  // Handle filter changes
  const handleFilterChange = (newFilters: { sizes: string[], colors: string[], priceRange: [number, number] }) => {
    setFilters(newFilters);
    
    // Apply filters to products
    if (!collection) return;
    
    const filtered = collection.products.filter((product: Product) => {
      // Filter by sizes
      const sizeMatch = newFilters.sizes.length === 0 || 
        (product.sizes && product.sizes.some(size => newFilters.sizes.includes(size)));
      
      // Filter by colors
      const colorMatch = newFilters.colors.length === 0 || 
        (product.colors && product.colors.some(color => newFilters.colors.includes(color)));
      
      // Filter by price range
      const priceMatch = product.price >= newFilters.priceRange[0] && 
        product.price <= newFilters.priceRange[1];
      
      return sizeMatch && colorMatch && priceMatch;
    });
    
    setFilteredProducts(filtered);
  };

  // Breadcrumb items
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Collections', path: '/collections' },
    { label: collection?.name || '', path: `/collections/${collectionSlug}` }
  ];

  // Page variants for animations
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <motion.div 
      className="pt-24 pb-16 bg-brand-black min-h-screen"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />
        
        {/* Back to Collections */}
        <div className="mb-8">
          <Link 
            to="/collections" 
            className="inline-flex items-center text-brand-silver hover:text-brand-gold transition-colors"
          >
            <FiArrowLeft className="mr-2" />
            Back to Collections
          </Link>
        </div>
        
        {loading ? (
          <>
            {/* Loading Skeleton Header */}
            <div className="animate-pulse mb-12">
              <div className="h-12 bg-brand-dark/50 w-3/4 mb-4 rounded"></div>
              <div className="h-5 bg-brand-dark/50 w-1/2 rounded"></div>
            </div>
          </>
        ) : collection ? (
          <>
            {/* Collection Header */}
            <div className="mb-12">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-white mb-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {collection.name}
              </motion.h1>
              <motion.p 
                className="text-brand-silver text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {collection.tagline}
              </motion.p>
            </div>
            
            {/* Filters Section */}
            <CollectionFilters 
              onFilterChange={handleFilterChange}
              availableSizes={availableSizes}
              availableColors={availableColors}
              priceRange={priceRange}
            />
            
            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="text-brand-silver text-lg mb-4">No products match your selected filters.</p>
                <button 
                  onClick={() => handleFilterChange({ sizes: [], colors: [], priceRange })}
                  className="text-brand-gold underline hover:text-brand-gold/80"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="py-20 text-center">
            <h2 className="text-3xl font-serif text-brand-white mb-4">Collection Not Found</h2>
            <p className="text-brand-silver mb-8">The collection you're looking for doesn't exist or has been removed.</p>
            <Link to="/collections" className="btn-primary">
              Browse All Collections
            </Link>
          </div>
        )}
        
        {/* Loading Skeleton Grid */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <ProductSkeleton key={index} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CollectionDetails;
