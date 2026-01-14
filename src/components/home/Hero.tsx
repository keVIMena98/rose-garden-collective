import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import heroBgImage from '../../assets/IMG_4781.webp';

export function Hero() {
  const { scrollY } = useScroll();
  
  // Background parallax: moves down with scroll to appear fixed
  const bgY = useTransform(scrollY, [0, 1000], [0, 1000]);
  
  // Parallax text effect: moves text to the left as you scroll down
  const x = useTransform(scrollY, [0, 1000], ["0%", "-100%"]);
  
  // Darken effect: increases opacity of a black overlay as you scroll down
  const overlayOpacity = useTransform(scrollY, [0, 600], [0, 0.8]);

  return (
    <section className="relative h-screen min-h-[100dvh] w-full flex flex-col justify-end z-0">
      {/* Background Video */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 -z-10"
      >
         <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 2 }}
           className="w-full h-full"
         >
           <img
             src={heroBgImage}
             alt="Rose Garden Collective Hero"
             className="w-full h-full object-cover"
           />
         </motion.div>

         {/* Scroll Darkening Overlay */}
         <motion.div 
            className="absolute inset-0 bg-black pointer-events-none"
            style={{ opacity: overlayOpacity }}
         />

         {/* Bottom Gradient for Text Readability */}
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 pointer-events-none" />
      </motion.div>

      {/* Content at bottom */}
      <div className="relative z-10 w-full px-4 pb-4 md:pb-6 flex flex-col overflow-hidden">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ 
            x, // Apply the horizontal scroll transform
            fontSize: 'clamp(5rem, 15vw, 15rem)', // increased min from 3rem to 5rem for larger mobile impact
            textShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }} 
          className="w-full text-left font-serif font-normal text-primary-foreground leading-none whitespace-nowrap"
        >
          ROSE GARDEN COLLECTIVE
        </motion.h1>
      </div>
    </section>
  )
}
