import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import svgPaths from "../figma/imports/svg-6p93f0biaq";
import imgPreloaderDesktop from "figma:asset/5a1ec8ea6c4524e0727a8833d09e55b05b939353.png";
import LogoShort from '../figma/LogoShort';

export function Preloader({ onComplete }: { onComplete?: () => void }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Lock scrolling permanently for maintenance mode
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 z-[200] overflow-hidden cursor-default"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
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
                 {/* 3. Static spiral for maintenance */}
                 <g transform="translate(-104, -124.5)">
                    <path d={svgPaths.p214edc80} fill="black" />
                 </g>
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

      {/* Content Container */}
      <div className="relative size-full px-[5%] py-[65px] flex flex-col z-10 pointer-events-none">
          
          {/* Top: Logo */}
          <motion.div 
              className="absolute z-[20] top-[32px] right-[30px] -translate-y-1/2 w-[105px] h-[36px] md:top-[45px] md:left-1/2 md:-translate-x-1/2 md:right-auto md:w-[140px] md:h-[53px]"
              animate={{ opacity: 1 }}
          >
            <LogoShort />
          </motion.div>

          {/* Center: FOREGROUND Spiral (Non-Interactive for Maintenance) */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
              {/* Spiral Container */}
              <div className="cursor-default">
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
                    {/* Inner Wrapper */}
                    <motion.div
                        className="size-full flex items-center justify-center"
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

      </div>
      
      {/* Maintenance Message - Fixed at bottom of viewport */}
      <p 
        className="fixed left-1/2 -translate-x-1/2 z-[201] font-serif font-semibold text-secondary text-[24px] md:text-[32px] leading-[1.2] text-center tracking-wide whitespace-nowrap pointer-events-none"
        style={{ bottom: '65px' }}
      >
          Site is Under Maintenance
      </p>
    </motion.div>
  );
}
