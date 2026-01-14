import React, { useEffect, useState, useMemo } from 'react';
import { Button } from '../components/ui/button';
import { MapPin, Clock, Calendar, Info } from 'lucide-react';
import { motion } from 'motion/react';
import { PageHero } from '../components/layout/PageHero';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { getEvents, StoryblokEvent } from '../lib/storyblok';
import { GrainyOverlay } from '../components/layout/GrainyOverlay';

import caysLogo from '../assets/cays-logo.png';
import bcfLogo from '../assets/Breast-Cancer-Foundation-Logo-Darker-Gray.svg';
import apfLogo from '../assets/alex-panton-foundation-logo.png';
import programsHeroImg from '../assets/IMG_3626.webp';

// --- Data ---

const PARTNERS = [
  { name: "Breast Cancer Foundation", logo: bcfLogo },
  { name: "Alex Panton Foundation", logo: apfLogo },
  { name: "CAYS Foundation", logo: caysLogo }
];

// --- Components ---

function SetmoreButton({ link }: { link: string }) {
  if (!link) return null;
  return (
    <a style={{ float: 'none', display: 'inline-block' }} id="Setmore_button_iframe" href={link}>
      <img border="0" src="https://assets.setmore.com/integration/images/newdesign/others/book-now-button.svg" alt="Book an appointment with Rose Garden Collective using Setmore" />
    </a>
  );
}

function EventCard({ event, type }: { event: StoryblokEvent, type: 'recurring' | 'upcoming' | 'past' }) {
  const isPast = type === 'past';
  const isRecurring = type === 'recurring';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group flex flex-col md:flex-row gap-0 md:gap-8 bg-card rounded-2xl overflow-hidden shadow-sm border border-border/50 hover:shadow-md transition-all duration-300 min-h-[300px] ${isPast ? 'opacity-80 grayscale-[0.5]' : ''}`}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/3 h-48 md:h-auto relative overflow-hidden shrink-0">
        <img 
          src={event.image} 
          alt={event.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
        
        {/* Badge */}
        <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-border/10">
          {isRecurring ? event.frequency : (isPast ? 'Past' : 'Upcoming')}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-6 flex flex-col justify-center gap-4">
        <div>
          <h3 className="text-2xl font-serif font-bold text-primary mb-2">{event.title}</h3>
          <div className="flex flex-col gap-2 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-accent" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-2">
              {isRecurring ? (
                <>
                  <Calendar size={16} className="text-accent" />
                  <span>{event.schedule}</span>
                </>
              ) : (
                <>
                  <Clock size={16} className="text-accent" />
                  <span>{isPast ? `Held on ${event.month} ${event.date}` : `${event.month} ${event.date} • ${event.time}`}</span>
                </>
              )}
            </div>
            {isRecurring && event.price && (
               <div className="flex items-center gap-2">
                 <Info size={16} className="text-accent" />
                 <span className="font-semibold text-primary">{event.price}</span>
               </div>
            )}
          </div>
        </div>

        {/* Action */}
        {!isPast && event.link && (
          <div className="pt-2">
            <SetmoreButton link={event.link} />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Programs() {
  const [events, setEvents] = useState<StoryblokEvent[]>([]);

  // Derived state
  const recurringEvents = useMemo(() => events.filter(e => e.category === 'recurring'), [events]);
  const communityEvents = useMemo(() => events.filter(e => e.category === 'community'), [events]);
  const pastEvents = useMemo(() => events.filter(e => e.category === 'past'), [events]);

  // Load Scripts & Data
  useEffect(() => {
    // 1. Load Data
    getEvents().then(setEvents);

    // 2. Load Setmore
    const script = document.createElement('script');
    script.src = "https://assets.setmore.com/integration/static/setmoreIframeLive.js";
    script.id = "setmore_script";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    // 3. Load Slick CSS
    const link1 = document.createElement('link');
    link1.rel = 'stylesheet';
    link1.href = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css";
    document.head.appendChild(link1);

    const link2 = document.createElement('link');
    link2.rel = 'stylesheet';
    link2.href = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css";
    document.head.appendChild(link2);

    return () => {
      // Cleanup
      const existingScript = document.getElementById('setmore_script');
      if (existingScript) document.body.removeChild(existingScript);
      document.head.removeChild(link1);
      document.head.removeChild(link2);
    };
  }, []);

  // Carousel Settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="pb-0 min-h-screen bg-background">
      {/* 1. Hero */}
      <PageHero 
        title="Our Programs" 
        subtitle="Growing Together"
        imageSrc={programsHeroImg}
      />

      <div className="relative">
        <GrainyOverlay />
        
        <div className="relative z-10">
          {/* 2. Who We Serve (Carousel) */}
          <section className="py-24 overflow-hidden">
            <div className="container mx-auto px-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Who We Serve</h2>
                <p className="text-[24px] text-lg text-muted-foreground max-w-2xl mx-auto">
                  We are proud to partner with local organizations to bring healing and wellness to those who want it.
                </p>
              </motion.div>

              <div className="max-w-6xl mx-auto overflow-hidden">
                <Slider {...sliderSettings} className="partner-carousel pb-12">
                  {PARTNERS.map((partner, index) => (
                    <div key={index} className="px-4 h-full">
                      <div className="bg-card rounded-2xl p-4 flex flex-col items-center justify-center text-center h-64 w-full border border-border/20 transition-all hover:bg-muted/30 overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center">
                          <img 
                            src={partner.logo} 
                            alt={partner.name} 
                            className="w-auto max-w-full object-contain opacity-90 hover:opacity-100 transition-opacity"
                            style={{ height: '140px', maxHeight: '140px' }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </section>

          {/* 3. Stories of Impact */}
          {/* <section className="py-24 relative overflow-hidden">
             <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
                  <div className="space-y-6 max-w-2xl">
                     <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                       Read Our Stories of Impact
                     </h2>
                     <p className="text-[24px] text-xl text-foreground/80 leading-relaxed font-light">
                       Behind every session is a story of transformation. See how our programs are making a tangible difference in the lives of our community members.
                     </p>
                  </div>
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-card hover:text-secondary rounded-full px-10 py-8 text-xl font-bold font-sans" asChild>
                     <Link to="/impact">Read Stories</Link>
                  </Button>
                </div>
             </div>
          </section> */}

          {/* 4. Recurring Events */}
          {recurringEvents.length > 0 && (
            <section className="py-24 container mx-auto px-6 max-w-5xl">
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Recurring Events</h2>
                  <p className="text-[24px] text-muted-foreground text-lg max-w-2xl mx-auto">
                    Join our regular weekly and monthly sessions open to the community.
                  </p>
                </motion.div>

                <div className="space-y-8">
                  {recurringEvents.map((event) => (
                    <EventCard key={event.id} event={event} type="recurring" />
                  ))}
                </div>
            </section>
          )}

          {/* 5. Community Events (Upcoming) */}
          {communityEvents.length > 0 && (
            <section className="py-12 container mx-auto px-6 max-w-5xl border-t border-border/10">
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Community Events</h2>
                  <p className="text-[24px] text-muted-foreground text-lg max-w-2xl mx-auto">
                    Join us for upcoming special gatherings, workshops, and circles.
                  </p>
                </motion.div>

                <div className="space-y-8">
                  {communityEvents.map((event) => (
                    <EventCard key={event.id} event={event} type="upcoming" />
                  ))}
                </div>
            </section>
          )}

          {/* 6. Past Events */}
          {pastEvents.length > 0 && (
            <section className="py-16 container mx-auto px-6 max-w-5xl border-t border-border/10">
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-serif font-bold text-primary mb-2">Past Events</h2>
                  <p className="text-[24px] text-muted-foreground">A look back at what we've shared together.</p>
                </motion.div>

                <div className="space-y-8">
                  {pastEvents.map((event) => (
                    <EventCard key={event.id} event={event} type="past" />
                  ))}
                </div>
            </section>
          )}

          {/* 7. Call To Action */}
          <section className="py-24 relative overflow-hidden">
             <div className="container mx-auto px-6 relative z-10 text-center space-y-8">
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary">
                  Ready to grow with us?
                </h2>
                <p className="text-[24px] text-xl text-muted-foreground max-w-2xl mx-auto">
                  Whether you want to participate, volunteer, or partner with us, there is a place for you in our garden.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                   <Button size="lg" className="bg-primary text-primary-foreground hover:bg-card hover:text-secondary rounded-full px-10 py-8 text-xl font-bold font-sans" asChild>
                      <Link to="/contact">Get Involved</Link>
                   </Button>
                   <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-card hover:text-secondary rounded-full px-10 py-8 text-xl font-bold font-sans bg-transparent" asChild>
                      <Link to="/donate">Donate</Link>
                   </Button>
                </div>
             </div>
          </section>
        </div>
      </div>
    </div>
  );
}