import React, { useRef } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { GrainyOverlay } from '../components/layout/GrainyOverlay';
import { ArrowRight, MessageCircle, HelpCircle } from 'lucide-react';
import { SEO, SEO_CONFIG } from '../components/SEO';

const FAQS = [
  { question: "Do I need to be a member to attend classes?", answer: "Not at all! While our Karma Club members enjoy special perks and unlimited classes, all our community gatherings and workshops are open to drop-ins. We want healing to be accessible to everyone." },
  { question: "What should I bring to my first session?", answer: "Just yourself and an open heart. We provide mats, props, and water. If you prefer to use your own mat, feel free to bring it along. Wear comfortable clothing that allows you to move freely." },
  { question: "How does the sliding scale pricing work?", answer: "For our community events, we offer a sliding scale to ensure financial barriers don't prevent access. You pay what you can within the suggested range. No questions asked." },
  { question: "Where are you located?", answer: "Our main studio is located near Seven Mile Beach, but we often host sessions outdoors in nature—at the park, on the beach, or in community gardens. Check the event details for specific locations." },
  { question: "Can I book a private session for a group?", answer: "Absolutely! We love hosting private group sessions for birthdays, bridal showers, or corporate retreats. Contact us to discuss your needs and we'll curate a special experience for you." },
];

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

export default function FAQ() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const bgY = useTransform(scrollY, [0, 1000], [0, 1000]); 
  const titleY = useTransform(scrollY, [0, 1000], [0, 400]);

  return (
    <div ref={containerRef} className="w-full bg-background text-foreground font-sans min-h-[100dvh] flex flex-col">
      <SEO {...SEO_CONFIG.faq} />
      
      {/* 1. Hero Section - Parallax */}
      <div className="relative w-full h-screen min-h-[100dvh] z-0">
         {/* Background Image - Fixed effect via transform */}
         <motion.div 
           style={{ y: bgY }}
           className="absolute inset-0 w-full h-full -z-20"
         >
           <img 
             src="https://images.unsplash.com/photo-1735151055127-73c610ae901f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6ZW4lMjBwZWFjZWZ1bCUyMGdhcmRlbiUyMHN0b25lc3xlbnwxfHx8fDE3NjYyNDk4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
             className="w-full h-full object-cover" 
             alt="Hero Background" 
           />
           <div className="absolute inset-0 bg-black/20" /> 
         </motion.div>
         
         {/* Hero Title - Parallax effect */}
         <div className="relative z-10 h-full flex flex-col items-center justify-center pt-20 pointer-events-none px-4">
            <motion.h1 
              style={{ y: titleY }}
              className="font-serif text-[15vw] md:text-[160px] leading-none text-white text-center drop-shadow-lg select-none uppercase break-words w-full"
            >
              FAQ
            </motion.h1>
         </div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 bg-background">
        <GrainyOverlay />
        
        <div className="relative z-10 max-w-[1000px] mx-auto px-6 py-24 flex flex-col gap-16">
           
           {/* FAQ Block (Green/Primary) */}
           <RevealSection>
             <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 shadow-lg border border-primary/20">
                <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                   <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <HelpCircle size={32} />
                   </div>
                   <div className="space-y-4">
                      <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                        Frequently Asked Questions
                      </h2>
                      <p className="text-primary-foreground/80 text-lg max-w-2xl">
                        Everything you need to know about joining our collective and starting your healing journey.
                      </p>
                   </div>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                  {FAQS.map((faq, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className="border-b border-primary-foreground/20 px-0 last:border-0">
                      <AccordionTrigger className="text-xl font-serif font-medium text-left py-6 hover:no-underline hover:text-accent transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-primary-foreground/80 leading-relaxed pb-6 text-base font-sans">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
             </div>
           </RevealSection>

           {/* CTA Block (Orange/Accent) */}
           <RevealSection>
             <div className="bg-card text-card-foreground rounded-3xl p-8 md:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                <div className="space-y-4 max-w-xl">
                   <h3 className="font-serif text-3xl md:text-4xl text-primary">
                     More Questions? Contact Us!
                   </h3>
                   <p className="text-lg opacity-90">
                     Can't find what you're looking for? We're here to help guide you.
                   </p>
                </div>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition-all shadow-md shrink-0"
                >
                  Get in Touch <ArrowRight size={20} />
                </Link>
             </div>
           </RevealSection>

        </div>
      </div>
    </div>
  );
}
