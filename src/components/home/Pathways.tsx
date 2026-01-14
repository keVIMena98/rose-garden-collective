import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

import programsImg from '@/assets/IMG_3620.webp';
import servicesImg from '@/assets/IMG_6929.webp';
import karmaImg from '@/assets/IMG_5130.webp';

const PATHWAYS = [
  {
    title: "Our Programs",
    description: "Discover the roots of our collective vision.",
    image: programsImg,
    link: "/programs",
    color: "bg-secondary"
  },
  {
    title: "Our Services",
    description: "Explore our healing modalities, from Reiki to restorative yoga.",
    image: servicesImg,
    link: "/services",
    color: "bg-primary"
  },
  {
    title: "Wellness Retreats",
    description: "Join our wellness retreats and plant seeds for community growth.",
    image: karmaImg,
    link: "/wellness-retreats",
    color: "bg-[var(--accent)]"
  }
];

export function Pathways() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const yMiddle = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Find Your Path</h2>
          <p className="text-[24px] text-muted-foreground text-lg max-w-xl mx-auto">Explore the different ways you can connect, heal, and grow with us.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PATHWAYS.map((path, index) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              style={index === 1 ? { y: yMiddle } : {}}
            >
              <Link to={path.link} className="group block h-full">
                <div className="relative h-full flex flex-col overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Image */}
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <div className={`absolute inset-0 ${path.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10`} />
                    <img 
                      src={path.image} 
                      alt={path.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Content Overlay - or bottom content? 
                      Design says "Vertical interactive cards (Image + Title + Link)".
                      I'll put content below image or overlay at bottom. 
                      "Polaroid" style usually means content below. 
                      But Pathways might be full cards. I'll put content below.
                  */}
                  <div className="p-8 flex flex-col flex-1 bg-white relative z-20">
                    <h3 className="text-2xl font-serif font-bold text-primary mb-3 transition-colors">
                      {path.title}
                    </h3>
                    <p className="text-[24px] text-muted-foreground mb-6 flex-1">
                      {path.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                      <span>Explore</span>
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
