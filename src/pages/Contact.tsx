import React, { useRef } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Mail, Instagram, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { GrainyOverlay } from '../components/layout/GrainyOverlay';
import { toast } from 'sonner@2.0.3';
import { SEO, SEO_CONFIG } from '../components/SEO';

// Helper for scroll-triggered reveal animations
function RevealSection({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export default function Contact() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const bgY = useTransform(scrollY, [0, 1000], [0, 1000]); 
  const titleY = useTransform(scrollY, [0, 1000], [0, 400]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    toast.success("Message Sent", {
      description: "Thank you for reaching out! We'll get back to you soon.",
    });
    // In a real app, this would send to Supabase or an API
  };

  return (
    <div ref={containerRef} className="w-full bg-background text-foreground font-sans min-h-[100dvh] flex flex-col">
       <SEO {...SEO_CONFIG.contact} />
       {/* 1. Hero Section - Parallax */}
       <div className="relative w-full h-screen min-h-[100dvh] z-0">
         {/* Background Image */}
         <motion.div 
           style={{ y: bgY }}
           className="absolute inset-0 w-full h-full -z-20"
         >
           <img 
             src="https://images.unsplash.com/photo-1760720962321-f03e04a03b41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwbGV0dGVyJTIwZGVzayUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NjYyNDk4ODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
             className="w-full h-full object-cover" 
             alt="Contact Hero" 
           />
           <div className="absolute inset-0 bg-black/20" /> 
         </motion.div>
         
         {/* Hero Title */}
         <div className="relative z-10 h-full flex flex-col items-center justify-center pt-20 pointer-events-none px-4">
            <motion.h1 
              style={{ y: titleY }}
              className="font-serif text-[15vw] md:text-[160px] leading-none text-white text-center drop-shadow-lg select-none uppercase w-full"
            >
              CONTACT
            </motion.h1>
         </div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 bg-background">
        <GrainyOverlay />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col gap-24">
           
           {/* Top Heading */}
           <RevealSection className="text-center space-y-4">
              <h2 className="font-serif text-5xl md:text-7xl leading-[1.1] text-primary">
                Need assistance?
                <br />
                <span className="italic font-serif">We’re here to guide</span>
              </h2>
           </RevealSection>

           <div className="grid md:grid-cols-2 gap-16 lg:gap-32 items-start">
              
              {/* Left Col: Info */}
              <RevealSection>
                 <div className="space-y-12 md:sticky md:top-32">
                    <div className="space-y-6">
                       <h3 className="font-serif text-4xl leading-tight text-primary">
                          Contact Us
                       </h3>
                       <p className="text-lg opacity-80 max-w-sm font-light leading-relaxed">
                          Let's talk. Whatever you need, we're ready to help.
                       </p>
                    </div>

                    <div className="space-y-6 text-lg">
                       <div className="flex flex-col gap-1">
                          <span className="opacity-60 text-base">Email:</span>
                          <a href="mailto:hello@rosegardencollective.com" className="font-bold hover:text-primary transition-colors">
                             HELLO@ROSEGARDENCOLLECTIVE.COM
                          </a>
                       </div>

                       <div className="flex flex-col gap-1">
                          <span className="opacity-60 text-base">Socials:</span>
                          <div className="flex gap-6 pt-1">
                             <a href="#" className="font-bold hover:text-primary transition-colors flex items-center gap-2">
                                INSTAGRAM
                             </a>
                             <a href="#" className="font-bold hover:text-primary transition-colors flex items-center gap-2">
                                FACEBOOK
                             </a>
                          </div>
                       </div>
                    </div>
                 </div>
              </RevealSection>

              {/* Right Col: Form */}
              <RevealSection className="md:mt-4">
                 <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="grid gap-10">
                       
                       {/* Name Row */}
                       <div className="grid grid-cols-2 gap-8">
                         <div className="space-y-3">
                            <Label htmlFor="firstName" className="text-sm uppercase tracking-wider opacity-60">First Name</Label>
                            <Input 
                              id="firstName" 
                              className="bg-transparent border-primary/30 focus:border-primary h-10 text-lg rounded-none border-t-0 border-x-0 border-b px-0 shadow-none focus-visible:ring-0 placeholder:text-muted-foreground/30" 
                            />
                         </div>
                         <div className="space-y-3">
                            <Label htmlFor="lastName" className="text-sm uppercase tracking-wider opacity-60">Last Name</Label>
                            <Input 
                              id="lastName" 
                              className="bg-transparent border-primary/30 focus:border-primary h-10 text-lg rounded-none border-t-0 border-x-0 border-b px-0 shadow-none focus-visible:ring-0 placeholder:text-muted-foreground/30" 
                            />
                         </div>
                       </div>

                       <div className="space-y-3">
                          <Label htmlFor="email" className="text-sm uppercase tracking-wider opacity-60">Your Email</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            className="bg-transparent border-primary/30 focus:border-primary h-10 text-lg rounded-none border-t-0 border-x-0 border-b px-0 shadow-none focus-visible:ring-0 placeholder:text-muted-foreground/30" 
                          />
                       </div>

                       <div className="space-y-3">
                          <Label htmlFor="phone" className="text-sm uppercase tracking-wider opacity-60">Your Phone No</Label>
                          <Input 
                            id="phone" 
                            type="tel" 
                            className="bg-transparent border-primary/30 focus:border-primary h-10 text-lg rounded-none border-t-0 border-x-0 border-b px-0 shadow-none focus-visible:ring-0 placeholder:text-muted-foreground/30" 
                          />
                       </div>

                       <div className="space-y-3">
                          <Label htmlFor="message" className="text-sm uppercase tracking-wider opacity-60">Your Message</Label>
                          <Textarea 
                            id="message" 
                            className="bg-transparent border-primary/30 focus:border-primary min-h-[100px] resize-none text-lg rounded-none border-t-0 border-x-0 border-b px-0 shadow-none focus-visible:ring-0 placeholder:text-muted-foreground/30" 
                          />
                       </div>
                    </div>

                    <div className="pt-4">
                      <Button type="submit" className="w-full md:w-auto px-12 py-8 rounded-full text-xl shadow-lg hover:shadow-xl hover:-translate-y-1">
                         Send Message
                      </Button>
                    </div>
                 </form>
              </RevealSection>

           </div>
        </div>
      </div>
    </div>
  );
}