import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Check, Clock, Calendar, MapPin } from 'lucide-react';
import { fetchServiceBySlug, Service } from '../lib/services';
import { Button } from '../components/ui/button';
import bgTexture from "figma:asset/5a1ec8ea6c4524e0727a8833d09e55b05b939353.png";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      if (!slug) return;
      const data = await fetchServiceBySlug(slug);
      if (data) {
        setService(data);
      }
      setLoading(false);
    }
    load();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen pt-32 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-serif mb-4 text-primary">Service Not Found</h2>
          <Button asChild variant="outline">
            <Link to="/services">Back to Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Helper to calculate package price
  const getPackagePrice = (priceStr: string) => {
    const numPrice = parseFloat(priceStr.replace(/[^0-9.]/g, '')) || 0;
    if (numPrice > 0) {
      return {
        original: Math.round(numPrice * 6),
        discounted: Math.floor(numPrice * 6 * 0.8)
      };
    }
    return null;
  };

  const packagePricing = getPackagePrice(service.price);

  return (
    <div className="min-h-screen pb-20 pt-24 px-4 md:px-6 font-sans bg-background text-foreground relative">
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none mix-blend-multiply" 
        style={{ 
          backgroundImage: `url(${bgTexture})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '300px'
        }} 
      />
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Navigation Back */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            className="group pl-0 hover:bg-transparent hover:text-primary transition-colors" 
            onClick={() => navigate('/services')}
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="text-lg font-medium">Back to Services</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 space-y-8"
          >
            {/* Hero Image */}
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-sm bg-muted">
               <img 
                 src={service.heroImage || service.image} 
                 alt={service.title} 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
               <div className="absolute bottom-0 left-0 p-6 md:p-10">
                  <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-2 leading-tight">
                    {service.title}
                  </h1>
                  <p className="text-white/90 text-lg md:text-xl font-sans max-w-2xl">
                    {service.description}
                  </p>
               </div>
            </div>

            {/* Description (Rich Text) */}
            <div className="bg-card rounded-3xl p-8 shadow-sm border border-border/50">
               <h2 className="text-2xl font-serif font-bold mb-6 text-foreground">About the Experience</h2>
               <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none font-sans leading-relaxed text-muted-foreground">
                  {service.fullDescription ? (
                    <div dangerouslySetInnerHTML={{ __html: service.fullDescription }} />
                  ) : (
                    <p>{service.description}</p>
                  )}
               </div>
            </div>


            
            {/* Session Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="bg-primary/5 border border-primary/10 p-6 rounded-3xl">
                  <div className="flex items-center gap-3 mb-3">
                     <div className="bg-primary/20 p-2 rounded-full text-primary">
                       <MapPin size={20} />
                     </div>
                     <h3 className="font-serif font-bold text-lg">In-Person Studio</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Join us at our sanctuary. All mats, props, and amenities are provided for your comfort.
                  </p>
               </div>
               
               <div className="bg-muted border border-border p-6 rounded-3xl">
                  <div className="flex items-center gap-3 mb-3">
                     <div className="bg-foreground/10 p-2 rounded-full text-foreground">
                       <Calendar size={20} />
                     </div>
                     <h3 className="font-serif font-bold text-lg">Virtual Option</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Connect from anywhere via Zoom. A link will be sent to your email upon booking.
                  </p>
               </div>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: Sidebar (Sticky) */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="lg:col-span-4 lg:sticky lg:top-32 space-y-6"
          >
             {/* Booking Card */}
             <div className="bg-card text-card-foreground p-6 md:p-8 rounded-3xl shadow-lg border border-border">
                <div className="mb-6">
                   <p className="text-sm text-muted-foreground font-mono uppercase tracking-wider mb-1">Session Rate</p>
                   <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-serif font-bold text-primary">{service.price}</span>
                      <span className="text-muted-foreground">/ session</span>
                   </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-foreground/80 mb-8 p-3 bg-muted rounded-xl">
                   <Clock size={18} className="text-primary" />
                   <span className="font-medium">{service.duration} Duration</span>
                </div>

                <Button 
                   size="lg" 
                   className="w-full h-14 text-lg font-bold rounded-full shadow-md transition-all hover:scale-[1.02]"
                   asChild
                >
                   <a href={service.bookingUrl || "https://setmore.com"} target="_blank" rel="noopener noreferrer">
                     Book Now
                   </a>
                </Button>

                {/* Package Option */}
                {packagePricing && (
                  <div className="mt-8 pt-6 border-t border-border">
                    <div className="flex justify-between items-center mb-2">
                       <h4 className="font-serif font-bold text-lg">6-Session Package</h4>
                       <span className="bg-secondary/20 text-secondary text-xs font-bold px-2 py-1 rounded-full">Save 20%</span>
                    </div>
                    <div className="flex items-baseline gap-3 mb-4">
                       <span className="text-muted-foreground line-through text-sm decoration-primary/50">${packagePricing.original}</span>
                       <span className="text-2xl font-bold text-foreground">${packagePricing.discounted}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-4">
                      Commit to your journey and save. Valid for 6 months from purchase date.
                    </p>
                    <Button variant="outline" className="w-full rounded-full border-primary/20 hover:bg-primary/5 hover:text-primary">
                       Purchase Package
                    </Button>
                  </div>
                )}
             </div>

             {/* Guarantee / Info */}
             <div className="flex items-start gap-4 p-4">
                <div className="bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 p-2 rounded-full mt-1">
                   <Check size={16} />
                </div>
                <div>
                   <h4 className="font-bold text-sm font-sans">Satisfaction Guarantee</h4>
                   <p className="text-xs text-muted-foreground mt-1">
                     We are committed to holding a safe and supportive space for you.
                   </p>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
