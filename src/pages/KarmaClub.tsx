import React, { useRef } from 'react';
import { Button } from '../components/ui/button';
import { Check, Heart, Sprout, Gift, ArrowRight, Calendar, UserPlus } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { GrainyOverlay } from '../components/layout/GrainyOverlay';
import { SEO, SEO_CONFIG } from '../components/SEO';

const PERKS = [
  { icon: Heart, title: "Community Support", desc: "Your membership subsidizes classes for those in need." },
  { icon: Sprout, title: "Exclusive Growth", desc: "Access to member-only workshops and early bird booking." },
  { icon: Gift, title: "Local Love", desc: "Discounts at partner wellness businesses across the island." }
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

export default function KarmaClub() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const bgY = useTransform(scrollY, [0, 1000], [0, 1000]); 
  const titleY = useTransform(scrollY, [0, 1000], [0, 400]);

  return (
    <div ref={containerRef} className="w-full bg-background text-foreground font-sans min-h-[100dvh] flex flex-col">
      <SEO {...SEO_CONFIG.karmaClub} />
      
      {/* 1. Hero Section - Parallax */}
      <div className="relative w-full h-screen min-h-[100dvh] z-0">
         <motion.div 
           style={{ y: bgY }}
           className="absolute inset-0 w-full h-full -z-20"
         >
           <img 
             src="https://images.unsplash.com/photo-1758272134196-1ab895629bce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXRoZXJpbmclMjBkaXZlcnNlJTIwcGVvcGxlJTIwaGFwcHl8ZW58MXx8fHwxNzY2MjQ5ODg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
             className="w-full h-full object-cover" 
             alt="Karma Club Hero" 
           />
           <div className="absolute inset-0 bg-black/20" /> 
         </motion.div>
         
         <div className="relative z-10 h-full flex flex-col items-center justify-center pt-20 pointer-events-none px-4">
            <motion.h1 
              style={{ y: titleY }}
              className="font-serif text-[12vw] md:text-[140px] leading-none text-white text-center drop-shadow-lg select-none uppercase"
            >
              JOIN THE KARMA CLUB
            </motion.h1>

         </div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 bg-background">
        <GrainyOverlay />
        
        {/* Intro */}
        <RevealSection className="py-24 px-6 md:px-12 text-center">
            <p className="text-[24px] text-2xl md:text-3xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-serif">
              Join the Karma Club to deepen your practice and help us cultivate a community where everyone can bloom.
            </p>
        </RevealSection>

        {/* Donate to Our Cause */}
        <RevealSection className="py-24 px-6 md:px-12 overflow-hidden bg-white/30">
           <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 order-2 md:order-1">
                 <h2 className="font-serif text-4xl md:text-6xl text-primary">Donate to Our Cause</h2>
                 <p className="text-[24px] text-lg text-muted-foreground leading-relaxed">
                   Not ready for a membership but still want to make an impact? Your donation directly supports our sliding-scale programs and community outreach initiatives, bringing wellness to those who need it most.
                 </p>
                 <div className="p-6 bg-[var(--card)] rounded-2xl border border-[var(--border)]">
                    <h3 className="font-bold text-xl mb-2">Impact Fund</h3>
                    <p className="text-[24px] text-sm text-muted-foreground mb-4">One-time contribution to our scholarship fund.</p>
                    <Button className="w-full md:w-auto rounded-full px-8 py-6 text-lg" asChild>
                      <Link to="/donate">Make a Donation</Link>
                    </Button>
                 </div>
              </div>
              <div className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden order-1 md:order-2">
                 <img 
                   src="https://images.unsplash.com/photo-1661100545029-cc3fd140dbfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBoYW5kcyUyMGhlbHAlMjBwbGFudGluZ3xlbnwxfHx8fDE3NjYyOTA1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                   alt="Community Planting" 
                   className="w-full h-full object-cover"
                 />
              </div>
           </div>
        </RevealSection>

        {/* Book A Service */}
        <RevealSection className="py-24 px-6 md:px-12 overflow-hidden">
           <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden">
                 <img 
                   src="https://images.unsplash.com/photo-1602827114685-efbb2717da9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwY2xhc3MlMjBncm91cCUyMHN1bm55JTIwc3R1ZGlvfGVufDF8fHx8MTc2NjI5MDU1M3ww&ixlib=rb-4.1.0&q=80&w=1080" 
                   alt="Yoga Class" 
                   className="w-full h-full object-cover"
                 />
              </div>
              <div className="space-y-8">
                 <h2 className="font-serif text-4xl md:text-6xl text-primary">Book A Service</h2>
                 <p className="text-[24px] text-lg text-muted-foreground leading-relaxed">
                   Ready to step onto the mat? Explore our diverse range of classes, from vigorous Vinyasa to restorative Yin. We also offer private sessions and healing workshops.
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Link to="/services" className="flex items-center gap-4 p-4 rounded-xl bg-card hover:bg-primary/5 transition-colors group">
                       <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                          <Calendar size={20} />
                       </div>
                       <span className="font-semibold text-lg">Class Schedule</span>
                    </Link>
                    <Link to="/services" className="flex items-center gap-4 p-4 rounded-xl bg-card hover:bg-primary/5 transition-colors group">
                       <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                          <UserPlus size={20} />
                       </div>
                       <span className="font-semibold text-lg">Private Sessions</span>
                    </Link>
                 </div>
                 <Button variant="outline" className="rounded-full px-8 py-6 text-lg border-primary text-primary hover:bg-primary hover:text-white" asChild>
                    <Link to="/services">View All Services</Link>
                 </Button>
              </div>
           </div>
        </RevealSection>

        {/* Practitioner Callout */}
        <RevealSection className="py-24 px-6 md:px-12 bg-primary text-white overflow-hidden relative">
           <div className="absolute inset-0 opacity-20 pointer-events-none">
              <img 
                src="https://images.unsplash.com/photo-1766069339604-d4177198af7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwdGVhY2hlciUyMGFkanVzdGluZyUyMHN0dWRlbnQlMjBnZW50bGV8ZW58MXx8fHwxNzY2MjkwNTU3fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Practitioner" 
                className="w-full h-full object-cover grayscale mix-blend-multiply"
              />
           </div>
           <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
              <h2 className="font-serif text-4xl md:text-6xl leading-tight">
                Are you a wellness practitioner and want to give back to the community?
              </h2>
              <p className="text-[24px] text-xl text-white/90 max-w-2xl mx-auto">
                We are always looking for passionate teachers, healers, and facilitators to join our collective. Share your gifts and help us grow the garden.
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-10 py-8 text-xl font-bold" asChild>
                 <Link to="/contact?subject=Practitioner%20Inquiry">Join the Collective</Link>
              </Button>
           </div>
        </RevealSection>

        {/* Become a Member (Pricing & Perks) */}
        <RevealSection className="py-24 px-6 md:px-12 overflow-hidden bg-background">
           <div className="max-w-[1280px] mx-auto">
              <div className="text-center mb-16 space-y-6">
                 <h2 className="font-serif text-4xl md:text-6xl text-primary">Become a Member</h2>
                 <p className="text-[24px] text-xl text-muted-foreground max-w-2xl mx-auto">
                   Choose a plan that fits your journey. Your membership fuels our mission and keeps our doors open to all.
                 </p>
              </div>

              {/* Perks Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {PERKS.map((perk, i) => (
                  <div key={i} className="flex flex-col items-center text-center p-6 bg-card/50 rounded-2xl border border-border/50">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                      <perk.icon size={28} />
                    </div>
                    <h3 className="text-lg font-bold font-serif mb-2">{perk.title}</h3>
                    <p className="text-[24px] text-muted-foreground text-sm">{perk.desc}</p>
                  </div>
                ))}
              </div>

              {/* Pricing Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
                {/* Seed Plan */}
                <div className="bg-card rounded-[2rem] p-10 shadow-sm border border-border/50 relative overflow-hidden flex flex-col h-full">
                   <h3 className="text-3xl font-serif font-bold text-foreground mb-2">Seed</h3>
                   <div className="flex items-baseline gap-1 mb-6">
                     <span className="text-4xl font-bold text-primary">$25</span>
                     <span className="text-muted-foreground">/ month</span>
                   </div>
                   <p className="text-[24px] text-muted-foreground mb-8">Perfect for steady growth and consistent support.</p>
                   
                   <ul className="space-y-4 mb-8 flex-grow">
                     {["Unlimited Community Classes", "10% Off Workshops", "Monthly Newsletter", "Welcome Gift"].map((item, i) => (
                       <li key={i} className="flex items-center gap-3 text-sm font-medium">
                         <div className="bg-secondary/20 p-1 rounded-full text-secondary"><Check size={12} /></div>
                         {item}
                       </li>
                     ))}
                   </ul>

                   <Button variant="outline" className="w-full rounded-full border-primary text-primary hover:bg-primary hover:text-white py-6 text-lg" asChild>
                      <Link to="/contact?plan=seed">Select Seed</Link>
                   </Button>
                </div>

                {/* Bloom Plan */}
                <div className="bg-primary text-white rounded-[2rem] p-10 shadow-xl relative overflow-hidden transform md:scale-105 z-10 flex flex-col h-full border-4 border-white/10">
                   <div className="absolute top-0 right-0 bg-[#eab308] text-black text-xs font-bold px-4 py-2 rounded-bl-xl uppercase tracking-wider">
                     Best Value
                   </div>
                   
                   <h3 className="text-3xl font-serif font-bold mb-2">Bloom</h3>
                   <div className="flex items-baseline gap-1 mb-6">
                     <span className="text-4xl font-bold">$250</span>
                     <span className="text-white/80">/ year</span>
                   </div>
                   <p className="text-[24px] text-white/80 mb-8">Commit to a full season of growth and get 2 months free.</p>
                   
                   <ul className="space-y-4 mb-8 flex-grow">
                     {["All Seed Benefits", "20% Off Workshops", "1 Free Private Session", "Exclusive Retreat Access", "Karma Club Tote Bag"].map((item, i) => (
                       <li key={i} className="flex items-center gap-3 text-sm font-medium">
                         <div className="bg-white/20 p-1 rounded-full text-white"><Check size={12} /></div>
                         {item}
                       </li>
                     ))}
                   </ul>

                   <Button className="w-full rounded-full bg-white text-primary hover:bg-white/90 py-6 text-lg font-bold" asChild>
                      <Link to="/contact?plan=bloom">Select Bloom</Link>
                   </Button>
                </div>
              </div>

           </div>
        </RevealSection>

      </div>
    </div>
  );
}
