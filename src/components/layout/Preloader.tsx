import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'motion/react';
import { cn } from '../ui/utils';
import svgPaths from "../figma/imports/svg-6p93f0biaq";
import imgPreloaderDesktop from "figma:asset/5a1ec8ea6c4524e0727a8833d09e55b05b939353.png";
import LogoShort from '../figma/LogoShort';

export function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [isRevealing, setIsRevealing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  
  // Mouse tracking for cursor cue
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursorX = useSpring(mouseX, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(mouseY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });

      const handleMouseMove = (e: MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      };

      window.addEventListener('mousemove', handleMouseMove);
      
      // Lock scrolling
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        // Unlock will happen in handleComplete or unmount
      };
    }
  }, [mouseX, mouseY]);

  const handleComplete = () => {
    // Cleanup overflow
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    if (onComplete) onComplete();
  };

  const handleClick = () => {
    if (isRevealing) return;
    setIsRevealing(true);
    
    // Wait for animation to finish before unmounting/unlocking
    // Animation duration is 2.5s
    setTimeout(() => {
      handleComplete();
    }, 2500);
  };

  // Animation Variants
  const transition = {
    rotate: { duration: 2.5, ease: [0.55, 0.055, 0.675, 0.19] }, // Accelerate spin
    scale: { duration: 1.0, delay: 1.5, ease: [0.95, 0.05, 0.795, 0.035] }, // Wait then swoop
    opacity: { duration: 1.0, delay: 1.5, ease: "linear" } // Fade out with swoop
  };

  return (
    <motion.div 
      className="fixed inset-0 z-[200] overflow-hidden cursor-default"
      initial={{ opacity: 1 }}
      animate={{ opacity: isRevealing ? 0 : 1 }}
      transition={{ delay: 2.4, duration: 0.1 }} // Fade out container at very end
      style={{ pointerEvents: isRevealing ? "none" : "auto" }}
    >
      {/* 
        Background Layer with Custom SVG Mask 
        Matches foreground spiral animation
      */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <mask id="spiral-mask">
            {/* White = Opaque (Keep Background) */}
            <rect width="100%" height="100%" fill="white" />
            
            {/* 1. Center the Mask Group */}
            <g style={{ transform: "translate(50vw, 50vh)" }}>
              
              {/* 2. Auto Spin (Continuous) */}
              <motion.g
                 animate={{ rotate: 360 }}
                 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                 {/* 3. Click Zoom & Spin */}
                 <motion.g
                    animate={{ 
                      scale: isRevealing ? 150 : 1,
                      rotate: isRevealing ? 1800 : 0
                    }}
                    transition={transition}
                 >
                    {/* 4. Offset Path to Center */}
                    <g transform="translate(-104, -124.5)">
                       <path d={svgPaths.p214edc80} fill="black" />
                    </g>
                 </motion.g>
              </motion.g>
            </g>
          </mask>
        </defs>

        {/* The Blue Background & Texture, masked by the spiral */}
        <g mask="url(#spiral-mask)">
          <rect width="100%" height="100%" fill="#d4e5f1" />
          <image 
            href={imgPreloaderDesktop} 
            width="100%" 
            height="100%" 
            opacity="0.2" 
            preserveAspectRatio="xMidYMid slice" 
          />
        </g>
      </svg>

      {/* Floating Cursor Cue - Follows Mouse */}
      <AnimatePresence>
        {isHovered && !isRevealing && (
          <motion.div
            className="fixed pointer-events-none z-50 flex flex-col items-center gap-1 mix-blend-difference text-white text-center"
            style={{ 
              x: cursorX, 
              y: cursorY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
             <span className="font-serif text-sm font-semibold tracking-widest uppercase whitespace-nowrap">
               Click to Enter<br/>The Garden
             </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Container */}
      <div className="relative size-full px-[5%] py-[65px] flex flex-col z-10 pointer-events-none">
          
          {/* Top: Logo */}
          {/* Top: Logo - Centered on Mobile & Desktop per user request for Preloader */}
          <motion.div 
              className={cn(
                "absolute z-[20]",
                "top-[32px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105px] h-[36px]", // Mobile: Centered
                "md:top-[45px] md:w-[140px] md:h-[53px]" // Desktop: Centered (inherited)
              )}
              animate={{ opacity: isRevealing ? 0 : 1 }}
              transition={{ duration: 0.5 }}
          >
            <LogoShort />
          </motion.div>

          {/* Center: FOREGROUND Spiral (The Green One) - Interactive */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ pointerEvents: isRevealing ? "none" : "auto" }}
          >
              {/* Wrapper for hover/click area */}
              <div 
                className={cn(
                  "transition-colors",
                  isRevealing ? "cursor-default" : "cursor-pointer"
                )}
                onClick={handleClick}
                onMouseEnter={() => !isRevealing && setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Outer Wrapper: Continuous Spin */}
                <motion.div
                    className="w-[208px] h-[249px] flex items-center justify-center origin-center"
                    animate={{ rotate: 360 }}
                    transition={{ 
                        duration: 10, 
                        repeat: Infinity, 
                        ease: "linear" 
                    }}
                >
                    {/* Inner Wrapper: Zoom & Fade */}
                    <motion.div
                        className="size-full flex items-center justify-center"
                        animate={{ 
                          scale: isRevealing ? 150 : 1,
                          opacity: isRevealing ? 0 : 1, // Fade out green spiral as it expands
                          rotate: isRevealing ? 1800 : 0
                        }}
                        transition={transition}
                    >
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 208 249.085">
                            <motion.path 
                                d={svgPaths.p214edc80} 
                                fill="var(--primary)" 
                            />
                        </svg>
                    </motion.div>
                </motion.div>
              </div>
          </div>

          {/* Mobile Only: Tap to Enter Cue (Since they can't hover) */}
          <motion.div
            className="md:hidden absolute top-[calc(50%-150px)] left-1/2 -translate-x-1/2 z-[25] pointer-events-none"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: isRevealing ? 0 : 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
              <p className="font-serif text-sm font-semibold tracking-widest uppercase text-[#7c3aed] whitespace-nowrap">
                Tap to enter
              </p>
          </motion.div>

          {/* Bottom: Text and Copyright */}
          <motion.div 
              className="mt-auto w-full flex flex-col md:flex-row justify-between items-center md:items-end gap-8 relative"
              animate={{ opacity: isRevealing ? 0 : 1 }}
              transition={{ duration: 0.5 }}
          >
              <p className="text-[24px] font-serif font-semibold text-secondary text-[24px] leading-[1.2] max-w-[501px] text-center md:text-left">
                  WELCOME TO ROSE GARDEN COLLECTIVE - A SPIRITUAL SPACE FOR COLLECTIVE WELLBEING.
              </p>
              <p className="text-[24px] font-serif font-semibold text-secondary text-[24px] leading-[1.2] whitespace-nowrap text-center md:text-right">
                  © 2025
              </p>
          </motion.div>
      </div>
    </motion.div>
  );
}
