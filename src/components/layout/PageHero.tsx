import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../ui/utils';

interface PageHeroProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function PageHero({ imageSrc, title, subtitle, className }: PageHeroProps) {
  return (
    <section className={cn("relative w-full h-[100dvh] min-h-[600px] overflow-hidden flex flex-col items-center justify-center", className)}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
         <motion.div 
           initial={{ scale: 1.1 }}
           animate={{ scale: 1 }}
           transition={{ duration: 2, ease: "easeOut" }}
           className="w-full h-full"
         >
           <img 
             src={imageSrc} 
             alt={title} 
             className="w-full h-full object-cover object-center"
           />
         </motion.div>
         {/* Dark Overlay for Text Readability */}
         <div className="absolute inset-0 bg-black/40" />
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full container mx-auto px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif font-medium text-white text-5xl md:text-7xl lg:text-8xl leading-tight"
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
}
