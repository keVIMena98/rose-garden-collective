import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

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

export function Impact() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">

         {/* 3. Mission and Values */}
            <RevealSection className="relative w-full py-24 px-6 md:px-12 overflow-hidden">
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
            </RevealSection>

            {/* 4. Our History */}
            <RevealSection className="relative w-full py-24 px-6 md:px-12 overflow-hidden">
               <div className="relative z-10 max-w-[1000px] mx-auto flex flex-col items-center text-center gap-8">
                  <h2 className="font-serif text-[64px] leading-[1.1] text-primary tracking-tight">
                    Our Story
                  </h2>
                  <div className="prose prose-lg text-foreground/80 max-w-none">
                     {/* <p className="text-[24px] text-xl md:text-2xl font-medium">
                       From humble beginnings to a growing movement.
                     </p> */}
                     <p className="text-[24px] font-sans font-semibold text-[24px] leading-[1.5] text-muted-foreground max-w-[800px]">
                       Rose Garden Collective started as a seed of an idea—a desire to bridge the gap between wellness and accessibility. What began as small community classes in local parks has blossomed into a collective of teachers, healers, and students dedicated to mutual support. We have partnered with local non-profits, schools, and community centers to bring the benefits of yoga and Reiki to those who need it most.
                     </p>
                  </div>
                  <Link 
                    to="/story" 
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-card hover:text-card-foreground transition-colors"
                  >
                    Read Our Story
                  </Link>
               </div>
            </RevealSection>
        
        {/* Row 1 */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center mb-24 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ y: y1 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1750425110887-f1e627b35550?q=80&w=1000&auto=format&fit=crop" 
                alt="Community Yoga" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div> */}
            {/* Decoration */}
            {/* <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Rooted in Community
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-6xl font-serif text-primary/20 font-bold leading-none">500+</span>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Community Members</h4>
                  <p className="text-[24px] text-muted-foreground">Joined our diverse family of seekers, healers, and growers.</p>
                </div>
              </div>
              <p className="text-[24px] text-lg text-foreground/80 leading-relaxed">
                We're more than a studio; we're a living network of support. From free beach sessions to sliding-scale workshops, we ensure wellness reaches every corner of our island.
              </p>
            </div>
          </motion.div>
        </div> */}

        {/* Row 2 */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Growing Impact
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-6xl font-serif text-primary/20 font-bold leading-none">$10k</span>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Donated Services</h4>
                  <p className="text-[24px] text-muted-foreground">Worth of healing therapies provided to underserved communities last year.</p>
                </div>
              </div>
              <p className="text-[24px] text-lg text-foreground/80 leading-relaxed">
                Through our "Karma Club" memberships, every paid class helps subsidize a session for someone in need. It's a circle of giving that keeps on blooming.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ y: y2 }}
            className="relative order-1 md:order-2"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1601408648796-349272138e57?q=80&w=1000&auto=format&fit=crop" 
                alt="Hands Planting" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div> */}
            {/* Decoration */}
            {/* <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
          </motion.div>
        </div> */}

      </div>
    </section>
  );
}
