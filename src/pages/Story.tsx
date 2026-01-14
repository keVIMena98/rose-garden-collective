import React, { useRef } from 'react';
import clsx from 'clsx';
import { motion, useScroll, useTransform } from 'motion/react';
import imgHeroVideo from "../assets/IMG_5130.webp";
import imgVector from "figma:asset/defa65722715cfc029f694f88465b9b4807536a7.png";
import imgVector1 from "figma:asset/c20dbc58d2ed6114e8fe3b0aec55d205da37c7da.png";
import { GrainyOverlay } from '../components/layout/GrainyOverlay';
import { SEO, SEO_CONFIG } from '../components/SEO';

// Helper for scroll-triggered reveal animations
function RevealSection({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export default function Story() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax effects
  // Background moves with scroll to appear fixed (or slightly slower for deep parallax)
  const bgY = useTransform(scrollY, [0, 1000], [0, 1000]); 
  
  // Title moves slower than scroll to create depth
  const titleY = useTransform(scrollY, [0, 1000], [0, 400]);

  return (
    <div ref={containerRef} className="w-full bg-background text-foreground font-sans min-h-[100dvh] flex flex-col">
      <SEO {...SEO_CONFIG.story} />
      
      {/* 1. Hero Section - Parallax */}
      <div className="relative w-full h-[100dvh] z-0">
         {/* Background Image - Fixed effect via transform */}
         <motion.div 
           style={{ y: bgY }}
           className="absolute inset-0 w-full h-full -z-20"
         >
           <img 
             src={imgHeroVideo} 
             className="w-full h-full object-cover" 
             alt="Hero Background" 
           />
           <div className="absolute inset-0 bg-black/10" /> 
         </motion.div>
         
         {/* Hero Title - Parallax effect */}
         <div className="relative z-10 h-full flex flex-col items-center justify-center pt-20 pointer-events-none">
            <motion.h1 
              style={{ y: titleY }}
              className="font-serif text-[15vw] md:text-[192px] leading-none text-white text-center drop-shadow-lg select-none"
            >
              OUR STORY
            </motion.h1>
         </div>
      </div>

      {/* Content wrapper with higher z-index to slide over hero */}
      <div className="relative z-10 bg-background">
        <GrainyOverlay />
        <div className="relative z-10">
            {/* 2. About Us */}
            <RevealSection className="relative w-full py-24 px-6 md:px-12 overflow-hidden">
               <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
                  <div className="flex-1 flex flex-col gap-6">
                     <h2 className="font-serif text-5xl md:text-[64px] leading-[1.2] text-primary">
                       What Is Rose Garden Collective?
                     </h2>
                     <p className="text-[24px] font-sans font-semibold text-lg md:text-[16px] leading-[1.5] text-foreground/80">
                       Rose Garden is a spiritual space that centers healing regardless of the cost. We partner with many non-profit organizations in the community to offer yoga and Reiki to their communities, and deliver yoga classes in the greater community to build awareness. Building community is at the heart of what we do, and every person, whether a giver or receiver is integral to delivering the mission.
                     </p>
                  </div>
                  <div className="flex-1 relative w-full max-w-[636px]">
                     <img src={imgVector} alt="Rose Garden Scene" className="w-full h-auto block" />
                  </div>
               </div>
            </RevealSection>

            {/* 3. Mission and Values */}
            {/* <RevealSection className="relative w-full py-24 px-6 md:px-12 overflow-hidden">
               <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col items-center gap-12">
                  <h2 className="font-serif text-5xl md:text-[64px] text-center text-primary">
                    Mission and Values
                  </h2>
                  <div className="grid md:grid-cols-3 gap-8 w-full">
                     <div className="p-8 bg-card rounded-2xl shadow-sm border border-primary/10 flex flex-col gap-4">
                        <h3 className="font-serif text-3xl text-primary">Healing for All</h3>
                        <p className="text-[24px] font-sans text-card-foreground/80">
                          We believe healing practices should be accessible to everyone, regardless of their financial situation or background.
                        </p>
                     </div>
                     <div className="p-8 bg-card rounded-2xl shadow-sm border border-primary/10 flex flex-col gap-4">
                        <h3 className="font-serif text-3xl text-primary">Community First</h3>
                        <p className="text-[24px] font-sans text-card-foreground/80">
                          Connection is our medicine. We build supportive networks that empower individuals to grow and heal together.
                        </p>
                     </div>
                     <div className="p-8 bg-card rounded-2xl shadow-sm border border-primary/10 flex flex-col gap-4">
                        <h3 className="font-serif text-3xl text-primary">Trauma-Informed</h3>
                        <p className="text-[24px] font-sans text-card-foreground/80">
                          Our practices are grounded in safety, choice, and empowerment, honoring the lived experiences of every student.
                        </p>
                     </div>
                  </div>
               </div>
            </RevealSection> */}

            {/* 4. Our History */}
            {/* <RevealSection className="relative w-full py-24 px-6 md:px-12 overflow-hidden">
               <div className="relative z-10 max-w-[1000px] mx-auto flex flex-col items-center text-center gap-8">
                  <h2 className="font-serif text-5xl md:text-[64px] text-primary">
                    Our History
                  </h2>
                  <div className="prose prose-lg text-foreground/80 max-w-none">
                     <p className="text-[24px] text-xl md:text-2xl font-medium">
                       From humble beginnings to a growing movement.
                     </p>
                     <p className="text-[24px]">
                       Rose Garden Collective started as a seed of an idea—a desire to bridge the gap between wellness and accessibility. What began as small community classes in local parks has blossomed into a collective of teachers, healers, and students dedicated to mutual support. We have partnered with local non-profits, schools, and community centers to bring the benefits of yoga and Reiki to those who need it most.
                     </p>
                  </div>
               </div>
            </RevealSection> */}

            {/* 5. The Garden Founder */}
            <RevealSection className="relative w-full py-24 px-6 md:px-12 overflow-hidden">
               <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
                  <div className="flex-1 relative w-full max-w-[686px]">
                     <img src={imgVector1} alt="Chloe - Founder" className="w-full h-auto block" />
                  </div>
                  <div className="flex-1 flex flex-col gap-8">
                     <div className="flex flex-col gap-6">
                        <h2 className="font-serif text-5xl md:text-[64px] leading-[1.2] text-primary">
                          The Garden Founder
                        </h2>
                        <p className="text-[24px] font-sans font-semibold text-lg md:text-[16px] leading-[1.5] text-foreground/80">
                          Hi, my name is Chloe. I founded Rose Garden Collective as a former high school educator and yoga instructor who is deeply passionate about community well-being and social justice. My mission is to share healing practices such as yoga and Reiki with anyone who seeks them, regardless of the cost. I specialize in trauma-informed yoga therapy, which dives more deeply into the emotional, spiritual, and mental levels of yoga rather than just the physical. In my classes, we focus on body awareness, building mindfulness techniques, and coming "home" to our bodies through breathing techniques, soft movement, and meditations.
                        </p>
                     </div>
                     <a 
                       href="https://www.linkedin.com/in/chloe-williams-b56395166/" 
                       target="_blank"
                       rel="noopener noreferrer"
                       className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-colors w-fit"
                     >
                       Connect
                     </a>
                  </div>
               </div>
            </RevealSection>

            {/* 6. Our Core Team */}
            {/* <RevealSection className="relative w-full py-24 px-6 md:px-12 text-card-foreground overflow-hidden">
               <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col items-center gap-16">
                  <h2 className="font-serif text-5xl md:text-[64px] text-center text-primary">
                    Our Core Team
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
                     {[1, 2, 3, 4].map((item) => (
                       <div key={item} className="flex flex-col items-center gap-4">
                          <div className="w-full aspect-[3/4] bg-white/50 rounded-2xl overflow-hidden shadow-sm flex items-center justify-center">
                             <span className="text-muted-foreground/50 font-serif text-lg">Photo Coming Soon</span>
                          </div>
                          <div className="text-center">
                             <h3 className="font-serif text-2xl mb-1">Team Member</h3>
                             <p className="text-[24px] font-sans text-sm font-bold tracking-wider uppercase text-primary">Role Title</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </RevealSection> */}

            {/* 7. Meet Our Teachers */}
            {/* <RevealSection className="relative w-full py-24 px-6 md:px-12 overflow-hidden pb-32">
               <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col items-center gap-16">
                  <h2 className="font-serif text-5xl md:text-[64px] text-center text-primary">
                    Meet Our Teachers
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
                     {[1, 2, 3].map((item) => (
                       <div key={item} className="bg-white p-8 rounded-3xl shadow-sm flex flex-col items-center gap-6">
                          <div className="w-40 h-40 bg-[#d4e5f1] rounded-full overflow-hidden flex items-center justify-center">
                             <span className="text-primary/50 font-serif text-lg">Photo</span>
                          </div>
                          <div className="text-center space-y-3">
                             <h3 className="font-serif text-3xl text-primary">Teacher Name</h3>
                             <p className="text-[24px] font-sans font-medium text-foreground/70">
                               Specializing in Hatha, Vinyasa, and Trauma-Informed Yoga.
                             </p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </RevealSection> */}
        </div>
      </div>
    </div>
  );
}
