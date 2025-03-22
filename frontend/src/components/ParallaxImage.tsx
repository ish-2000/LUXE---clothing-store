import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ParallaxImage = ({ src, alt, className = '' }: ParallaxImageProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Create a subtle parallax effect by moving the image slightly as you scroll
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ y }}
      />
    </div>
  );
};

export default ParallaxImage;
