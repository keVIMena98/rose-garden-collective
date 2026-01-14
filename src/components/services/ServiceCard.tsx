import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { motion } from 'motion/react';
import { Clock, DollarSign, ArrowRight } from 'lucide-react';
import { Service } from '../../lib/services';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-card p-4 pb-8 shadow-xl rounded-[var(--radius-card)] transform rotate-1 hover:rotate-0 transition-transform duration-300 relative group"
    >
      {/* Polaroid Image Area */}
      <Link to={`/services/${service.slug}`} className="block">
        <div className="aspect-square bg-muted mb-6 overflow-hidden relative rounded-[calc(var(--radius-card)-4px)]">
           <img 
             src={service.image} 
             alt={service.title} 
             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
           />
           {/* Overlay on hover */}
           <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>

      {/* Content */}
      <div className="px-2 text-center">
        <Link to={`/services/${service.slug}`} className="block hover:opacity-80 transition-opacity">
          <h3 className="text-2xl font-serif font-bold text-primary mb-3">{service.title}</h3>
        </Link>
        <p className="text-[24px] text-muted-foreground text-sm mb-6 leading-relaxed min-h-[60px]">
          {service.description}
        </p>
        
        <div className="flex items-center justify-center gap-6 mb-6 text-sm font-semibold text-secondary">
          <div className="flex items-center gap-1">
            {/* <DollarSign size={16} /> */}
            <span>{service.price}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{service.duration}</span>
          </div>
        </div>

        {/* <Button className="w-full rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md group/btn gap-2" asChild>
          <Link to={`/services/${service.slug}`}>
            View Details
            <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </Button> */}
      </div>

      {/* Grid Breaker Graphic for specific items */
      index === 2 && (
         <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full border-4 border-[var(--chart-4)] opacity-50 pointer-events-none" />
      )}

    </motion.div>
  );
};
