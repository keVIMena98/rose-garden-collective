/// <reference path="../../declarations.d.ts" />
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import svgPaths from '../imports/svg-y5bhm58wor';
import { GrainyOverlay } from '../layout/GrainyOverlay';
import img1 from "../../assets/IMG_0225.webp";
import img2 from "../../assets/IMG_0231.webp";
import img3 from "../../assets/IMG_3620.webp";
import img4 from "../../assets/IMG_0566.webp";
import img5 from "../../assets/IMG_3626.webp";
import img6 from "../../assets/IMG_5130.webp";
import clsx from 'clsx';

// Local Assets
const IMAGES = [
  img1, 
  img2, 
  img3,
  img4,
  img5, // Main
  img6
];

function BushlineRight() {
  return (
    <div className="absolute hidden lg:flex h-[701px] items-center justify-center right-[-100px] top-[91px] w-[323px] pointer-events-none z-0">
      <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full h-full">
        <div className="h-full relative w-full">
          <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 323 701">
            <g opacity="0.2">
              <path d={svgPaths.p390caa80} fill="var(--primary)" />
              <path d={svgPaths.p165ca40} fill="var(--primary)" />
              <path d={svgPaths.p27095100} fill="var(--primary)" />
              <path d={svgPaths.p38944700} fill="var(--primary)" />
              <path d={svgPaths.pf873d00} fill="var(--primary)" />
              <path d={svgPaths.p25ecd800} fill="var(--primary)" />
              <path d={svgPaths.p252a2d80} fill="var(--primary)" />
              <path d={svgPaths.p3c56eb00} fill="var(--primary)" />
              <path d={svgPaths.p24f70700} fill="var(--primary)" />
              <path d={svgPaths.p15ec0a00} fill="var(--primary)" />
              <path d={svgPaths.p8dbb240} fill="var(--primary)" />
              <path d={svgPaths.p150e0700} fill="var(--primary)" />
              <path d={svgPaths.p385c1048} fill="var(--primary)" />
              <path d={svgPaths.p259d3f80} fill="var(--primary)" />
              <path d={svgPaths.p2d6bb400} fill="var(--primary)" />
              <path d={svgPaths.pcdd9900} fill="var(--primary)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function BushlineLeft() {
  return (
    <div className="absolute h-[589px] left-0 top-[286px] w-[271px] pointer-events-none z-0 hidden md:block">
      <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 271 589">
        <g opacity="0.2">
          <path d={svgPaths.p2c671080} fill="var(--primary)" />
          <path d={svgPaths.p35f83000} fill="var(--primary)" />
          <path d={svgPaths.p30b4b480} fill="var(--primary)" />
          <path d={svgPaths.p16e25f00} fill="var(--primary)" />
          <path d={svgPaths.pfc84498} fill="var(--primary)" />
          <path d={svgPaths.p24857f00} fill="var(--primary)" />
          <path d={svgPaths.p1d4a9100} fill="var(--primary)" />
          <path d={svgPaths.p11074600} fill="var(--primary)" />
          <path d={svgPaths.p137ecc00} fill="var(--primary)" />
          <path d={svgPaths.p3b5eb00} fill="var(--primary)" />
          <path d={svgPaths.p12a7b5c0} fill="var(--primary)" />
          <path d={svgPaths.p343b0600} fill="var(--primary)" />
          <path d={svgPaths.p13534bc0} fill="var(--primary)" />
          <path d={svgPaths.p1277580} fill="var(--primary)" />
          <path d={svgPaths.p5118900} fill="var(--primary)" />
          <path d={svgPaths.pffea200} fill="var(--primary)" />
        </g>
      </svg>
    </div>
  );
}

export function Mission() {
  // --- DESKTOP REFS & LOGIC ---
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // --- MOBILE REFS & LOGIC ---
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mobileScrollYProgress } = useScroll({
    target: mobileContainerRef,
    offset: ["start start", "end end"]
  });

  // Animation Sequence
  const ANIM_START = 0.1;
  const ANIM_END = 0.9;

  // --- DESKTOP TRANSFORMS ---
  const containerMaxWidth = useTransform(scrollYProgress, [ANIM_START, ANIM_END], ["1440px", "100%"]);
  const gap = useTransform(scrollYProgress, [ANIM_START, ANIM_END], ["16px", "0px"]);
  const mainWidth = useTransform(scrollYProgress, [ANIM_START, ANIM_END], ["26%", "100%"]);
  const mainHeight = useTransform(scrollYProgress, [ANIM_START, ANIM_END], ["70vh", "calc(100vh - 32px)"]);
  const sideWidth = useTransform(scrollYProgress, [ANIM_START, ANIM_END], ["19%", "0%"]);
  const colWidth = useTransform(scrollYProgress, [ANIM_START, ANIM_END], ["13%", "0%"]);
  const sideOpacity = useTransform(scrollYProgress, [ANIM_START, 0.5], [1, 0]);

  // --- MOBILE TRANSFORMS (Matching Figma Layout) ---
  const mobileMainWidth = useTransform(mobileScrollYProgress, [ANIM_START, ANIM_END], ["188px", "calc(100vw - 32px)"]);
  const mobileMainHeight = useTransform(mobileScrollYProgress, [ANIM_START, ANIM_END], ["70vh", "calc(100vh - 32px)"]); // Adjusted start height for Image 5 aspect ratio
  const mobileGap = useTransform(mobileScrollYProgress, [ANIM_START, ANIM_END], ["16px", "0px"]);
  
  const mobileSideOpacity = useTransform(mobileScrollYProgress, [ANIM_START, 0.5], [1, 0]);
  const mobileLeftWidth = useTransform(mobileScrollYProgress, [ANIM_START, ANIM_END], ["112px", "0px"]);
  const mobileRightWidth = useTransform(mobileScrollYProgress, [ANIM_START, ANIM_END], ["112px", "0px"]);

  return (
    <section className="relative w-full bg-background">
      <GrainyOverlay />

      {/* MOBILE LAYOUT */}
      <div className="md:hidden flex flex-col gap-[48px] py-[64px] relative z-10 bg-background">
         {/* Text Content */}
         <div className="flex flex-col gap-[20px] px-[30px] items-center text-center">
             <h2 className="font-serif text-[36px] leading-[1.2] text-primary">
                Welcome to Rose Garden Collective
             </h2>
             <p className="text-[24px] font-sans font-semibold text-[14px] leading-[1.5] text-muted-foreground text-justify">
                Rose Garden Collective is a grassroots organization bringing wellness modalities to all people of the Cayman Islands, regardless of the cost. We are an aspiring non-profit that currently specializes in trauma-informed yoga and Reiki, with much more on the horizon. Join our movement through a donations-based class, or sharing with a friend,We're excited to see you on the journey to collective well-being!
             </p>
         </div>
         
         {/* Sticky Wrapper */}
         <div ref={mobileContainerRef} className="relative h-[800vh] w-full">
            <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex items-center justify-center">
                <motion.div style={{ gap: mobileGap }} className="flex items-center justify-center">
                    
                    {/* Left Col - Image 4 */}
                    <motion.div style={{ width: mobileLeftWidth, opacity: mobileSideOpacity }} className="h-[150px] relative rounded-xl overflow-hidden shrink-0">
                        <img src={IMAGES[3]} className="size-full object-cover" alt="" />
                    </motion.div>

                    {/* Center - Image 5 (Main) */}
                    <motion.div style={{ width: mobileMainWidth, height: mobileMainHeight }} className="relative rounded-xl overflow-hidden shrink-0 shadow-lg origin-center">
                        <img src={IMAGES[4]} className="size-full object-cover" alt="" />
                    </motion.div>

                    {/* Right - Image 6 */}
                    <motion.div style={{ width: mobileRightWidth, opacity: mobileSideOpacity }} className="h-[150px] relative rounded-xl overflow-hidden shrink-0">
                        <img src={IMAGES[5]} className="size-full object-cover" alt="" />
                    </motion.div>

                </motion.div>
            </div>
         </div>
      </div>
      
      {/* DESKTOP LAYOUT - Parallax */}
      <div className="hidden md:block w-full">
        {/* Text Content - Normal Flow (Above Images) */}
        <div className="w-full flex flex-col items-center pt-[112px] px-4 pb-[80px] z-10 relative">
            <div className="flex flex-col items-center max-w-[1280px] w-full">
              <div className="flex flex-col items-start max-w-full w-full">
                <div className="flex flex-col gap-[24px] items-center text-center w-full">
                  <h2 className="font-serif text-[64px] leading-[1.1] text-primary tracking-tight">
                    Welcome to Rose Garden Collective
                  </h2>
                  <p className="text-[24px] font-sans font-semibold text-[24px] leading-[1.5] text-muted-foreground max-w-[800px]">
                    Rose Garden Collective is a grassroots organization bringing wellness modalities to all people of the Cayman Islands, regardless of the cost. We are an aspiring non-profit that currently specializes in trauma-informed yoga and Reiki, with much more on the horizon. Join our movement through a donations-based class, or sharing with a friend,We're excited to see you on the journey to collective well-being!
                  </p>
                </div>
              </div>
            </div>
        </div>

        {/* Sticky Container for Images */}
        <div ref={containerRef} className="relative h-[300vh] w-full">
          <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex flex-col items-center justify-center bg-background">
            
            {/* Background Elements */}
            {/* <div className="absolute inset-0 pointer-events-none z-0">
                 <BushlineRight />
                 <BushlineLeft />
            </div> */}

            {/* Grainy Overlay */}
            <GrainyOverlay />

            {/* Images Container */}
            <div className="w-full h-full flex items-center justify-center relative z-20">
               <motion.div 
                 className="flex items-center justify-center w-full px-4"
                 style={{ maxWidth: containerMaxWidth, gap }}
               >
                  {/* Image 1 */}
                  <motion.div 
                    style={{ width: sideWidth, opacity: sideOpacity }} 
                    className="aspect-[316/475] relative rounded-2xl overflow-hidden shrink-0 will-change-[width,opacity] transform-gpu"
                  >
                      <img 
                        src={IMAGES[0]} 
                        className="w-full h-full object-cover" 
                        alt="" 
                        decoding="async"
                        loading="eager"
                      />
                  </motion.div>

                  {/* Col */}
                  <motion.div 
                    style={{ width: colWidth, opacity: sideOpacity }} 
                    className="flex flex-col gap-4 items-center shrink-0 will-change-[width,opacity] transform-gpu"
                  >
                      <div className="aspect-square w-full rounded-2xl overflow-hidden relative">
                          <img 
                            src={IMAGES[1]} 
                            className="w-full h-full object-cover" 
                            alt="" 
                            decoding="async"
                            loading="eager"
                          />
                      </div>
                      <div className="aspect-[216/288] w-full rounded-2xl overflow-hidden relative">
                          <img 
                            src={IMAGES[2]} 
                            className="w-full h-full object-cover" 
                            alt="" 
                            decoding="async"
                            loading="eager"
                          />
                      </div>
                  </motion.div>

                  {/* Image 4 */}
                  <motion.div 
                    style={{ width: sideWidth, opacity: sideOpacity }} 
                    className="aspect-square relative rounded-2xl overflow-hidden shrink-0 will-change-[width,opacity] transform-gpu"
                  >
                      <img 
                        src={IMAGES[3]} 
                        className="w-full h-full object-cover" 
                        alt="" 
                        decoding="async"
                        loading="eager"
                      />
                  </motion.div>

                  {/* MAIN IMAGE (5) - Rounded corners maintained */}
                  <motion.div 
                     style={{ width: mainWidth, height: mainHeight }} 
                     className="relative overflow-hidden shrink-0 shadow-2xl origin-center rounded-2xl will-change-[width,height] transform-gpu"
                  >
                      <img 
                        src={IMAGES[4]} 
                        className="w-full h-full object-cover" 
                        alt="" 
                        decoding="async"
                        loading="eager"
                      />
                  </motion.div>

                  {/* Image 6 */}
                  <motion.div 
                    style={{ width: sideWidth, opacity: sideOpacity }} 
                    className="aspect-[316/422] relative rounded-2xl overflow-hidden shrink-0 will-change-[width,opacity] transform-gpu"
                  >
                      <img 
                        src={IMAGES[5]} 
                        className="w-full h-full object-cover" 
                        alt="" 
                        decoding="async"
                        loading="eager"
                      />
                  </motion.div>

               </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
