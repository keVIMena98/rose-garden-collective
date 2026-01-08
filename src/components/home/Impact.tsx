import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

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
        
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center mb-24 md:mb-32">
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
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
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
                  <p className="text-muted-foreground">Joined our diverse family of seekers, healers, and growers.</p>
                </div>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                We're more than a studio; we're a living network of support. From free beach sessions to sliding-scale workshops, we ensure wellness reaches every corner of our island.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
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
                  <p className="text-muted-foreground">Worth of healing therapies provided to underserved communities last year.</p>
                </div>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
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
            </div>
            {/* Decoration */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
