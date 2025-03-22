const ProductSkeleton = () => {
  return (
    <div className="bg-brand-dark animate-pulse">
      {/* Image placeholder */}
      <div className="aspect-[3/4] bg-brand-black/50"></div>
      
      {/* Content placeholders */}
      <div className="p-4">
        <div className="h-5 bg-brand-black/50 w-3/4 mb-2 rounded"></div>
        <div className="h-4 bg-brand-black/50 w-full mb-3 rounded"></div>
        <div className="h-4 bg-brand-black/50 w-1/4 rounded"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
