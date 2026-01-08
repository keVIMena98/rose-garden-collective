import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import svgPaths from '../imports/svg-y5bhm58wor';
import bgTexture from "figma:asset/5a1ec8ea6c4524e0727a8833d09e55b05b939353.png";
import clsx from 'clsx';

// Unsplash placeholders
const IMAGES = [
  "https://images.unsplash.com/photo-1658752641749-0ece0d559014?q=80&w=400&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1749105862005-6e0409c8c55a?q=80&w=300&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1765477157692-b02b643f0552?q=80&w=300&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1566739594624-b9ff5d8ee671?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1763531564190-93f3af57a4ef?q=80&w=800&auto=format&fit=crop", // Main
  "https://images.unsplash.com/photo-1758899076209-c1d2c590bc94?q=80&w=400&auto=format&fit=crop"
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
  const mobileMainWidth = useTransform(mobileScrollYProgress, [ANIM_START, ANIM_END], ["188px", "100vw"]);
  const mobileMainHeight = useTransform(mobileScrollYProgress, [ANIM_START, ANIM_END], ["542px", "100vh"]);
  const mobileGap = useTransform(mobileScrollYProgress, [ANIM_START, ANIM_END], ["16px", "0px"]);
  
  const mobileSideOpacity = useTransform(mobileScrollYProgress, [ANIM_START, 0.5], [1, 0]);
  const mobileLeftWidth = useTransform(mobileScrollYProgress, [ANIM_START, ANIM_END], ["112px", "0px"]);
  const mobileRightWidth = useTransform(mobileScrollYProgress, [ANIM_START, ANIM_END], ["150px", "0px"]);

  return (
    <section className="relative w-full bg-background">

      {/* MOBILE LAYOUT */}
      <div className="md:hidden flex flex-col gap-[48px] py-[64px] relative z-10 bg-background">
         {/* Text Content */}
         <div className="flex flex-col gap-[20px] px-[30px] items-start">
             <h2 className="font-serif text-[36px] leading-[1.2] text-foreground">
                Welcome to Rose Garden Collective
             </h2>
             <p className="font-sans font-semibold text-[14px] leading-[1.5] text-foreground">
                We are a grassroots organization bringing mindfulness and care back to its essence of healing, community, and accessibility through classes and workshops.Together, we inspire resilience and change, creating a legacy of empowerment for future generations.
             </p>
         </div>
         
         {/* Sticky Wrapper */}
         <div ref={mobileContainerRef} className="relative h-[300vh] w-full">
            <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex items-center justify-center">
                <motion.div style={{ gap: mobileGap }} className="flex items-center justify-center">
                    
                    {/* Left Col */}
                    <motion.div style={{ width: mobileLeftWidth, opacity: mobileSideOpacity }} className="flex flex-col gap-[16px] shrink-0 overflow-hidden">
                       <div className="size-[112px] relative rounded-xl overflow-hidden shrink-0">
                          <img src={IMAGES[0]} className="size-full object-cover" alt="" />
                       </div>
                       <div className="w-[112px] h-[150px] relative rounded-xl overflow-hidden shrink-0">
                          <img src={IMAGES[1]} className="size-full object-cover" alt="" />
                       </div>
                    </motion.div>

                    {/* Center */}
                    <motion.div style={{ width: mobileMainWidth, height: mobileMainHeight }} className="relative rounded-xl overflow-hidden shrink-0 shadow-lg origin-center">
                        <img src={IMAGES[4]} className="size-full object-cover" alt="" />
                    </motion.div>

                    {/* Right */}
                    <motion.div style={{ width: mobileRightWidth, opacity: mobileSideOpacity }} className="w-[150px] h-[200px] relative rounded-xl overflow-hidden shrink-0">
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
            <div 
              className="absolute inset-0 z-[-1] opacity-40 pointer-events-none mix-blend-multiply" 
              style={{ 
                backgroundImage: `url(${bgTexture})`,
                backgroundRepeat: 'repeat',
                backgroundSize: '300px'
              }} 
            />
            <div className="flex flex-col items-center max-w-[1280px] w-full">
              <div className="flex flex-col items-start max-w-[768px] w-full">
                <div className="flex flex-col gap-[24px] items-start w-full">
                  <h2 className="font-serif text-[64px] leading-[1.2] text-primary">
                    Welcome to Rose Garden Collective
                  </h2>
                  <p className="font-sans font-semibold text-[16px] leading-[1.5] text-muted-foreground">
                    We are a grassroots organization bringing mindfulness and care back to its essence of healing, community, and accessibility through classes and workshops. Together, we inspire resilience and change, creating a legacy of empowerment for future generations.
                  </p>
                </div>
              </div>
            </div>
        </div>

        {/* Sticky Container for Images */}
        <div ref={containerRef} className="relative h-[300vh] w-full">
          <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex flex-col items-center justify-center bg-background">
            
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none z-0">
                 <BushlineRight />
                 <BushlineLeft />
            </div>

            {/* Images Container */}
            <div className="w-full h-full flex items-center justify-center relative z-20">
               <div 
                 className="absolute inset-0 z-[-1] opacity-40 pointer-events-none mix-blend-multiply" 
                 style={{ 
                   backgroundImage: `url(${bgTexture})`,
                   backgroundRepeat: 'repeat',
                   backgroundSize: '300px'
                 }} 
               />
               <motion.div 
                 className="flex items-center justify-center w-full px-4"
                 style={{ maxWidth: containerMaxWidth, gap }}
               >
                  {/* Image 1 */}
                  <motion.div style={{ width: sideWidth, opacity: sideOpacity }} className="aspect-[316/475] relative rounded-2xl overflow-hidden shrink-0">
                      <img src={IMAGES[0]} className="w-full h-full object-cover" alt="" />
                  </motion.div>

                  {/* Col */}
                  <motion.div style={{ width: colWidth, opacity: sideOpacity }} className="flex flex-col gap-4 items-center shrink-0">
                      <div className="aspect-square w-full rounded-2xl overflow-hidden relative">
                          <img src={IMAGES[1]} className="w-full h-full object-cover" alt="" />
                      </div>
                      <div className="aspect-[216/288] w-full rounded-2xl overflow-hidden relative">
                          <img src={IMAGES[2]} className="w-full h-full object-cover" alt="" />
                      </div>
                  </motion.div>

                  {/* Image 4 */}
                  <motion.div style={{ width: sideWidth, opacity: sideOpacity }} className="aspect-square relative rounded-2xl overflow-hidden shrink-0">
                      <img src={IMAGES[3]} className="w-full h-full object-cover" alt="" />
                  </motion.div>

                  {/* MAIN IMAGE (5) - Rounded corners maintained */}
                  <motion.div 
                     style={{ width: mainWidth, height: mainHeight }} 
                     className="relative overflow-hidden shrink-0 shadow-2xl origin-center rounded-2xl"
                  >
                      <img src={IMAGES[4]} className="w-full h-full object-cover" alt="" />
                  </motion.div>

                  {/* Image 6 */}
                  <motion.div style={{ width: sideWidth, opacity: sideOpacity }} className="aspect-[316/422] relative rounded-2xl overflow-hidden shrink-0">
                      <img src={IMAGES[5]} className="w-full h-full object-cover" alt="" />
                  </motion.div>

               </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
