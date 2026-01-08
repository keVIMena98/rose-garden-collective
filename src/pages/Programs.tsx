import React from 'react';
import { Button } from '../components/ui/button';
import { MapPin, Clock, ArrowRight, Heart, Users, Shield, Anchor } from 'lucide-react';
import { motion } from 'motion/react';
import { PageHero } from '../components/layout/PageHero';
import { Link } from 'react-router-dom';
import { SEO, SEO_CONFIG } from '../components/SEO';

const PARTNERS = [
  { name: "Breast Cancer Foundation", icon: Heart },
  { name: "Alex Panton Foundation", icon: Users },
  { name: "Crisis Centre", icon: Shield },
  { name: "CAYS Foundation", icon: Anchor }
];

const UPCOMING_EVENTS = [
  { 
    id: 1,
    title: "Full Moon Healing Circle", 
    date: "18", 
    month: "DEC", 
    location: "Seven Mile Beach (Public Access 4)", 
    time: "7:00 PM - 9:00 PM",
    image: "https://images.unsplash.com/photo-1750425110887-f1e627b35550?q=80&w=400&auto=format&fit=crop"
  },
  { 
    id: 2,
    title: "Community Beach Clean Up", 
    date: "22", 
    month: "DEC", 
    location: "Barkers National Park", 
    time: "8:00 AM - 11:00 AM",
    image: "https://images.unsplash.com/photo-1569990823958-a33f4125197a?q=80&w=400&auto=format&fit=crop"
  },
  { 
    id: 3,
    title: "Intro to Reiki Workshop", 
    date: "05", 
    month: "JAN", 
    location: "Rose Garden Studio", 
    time: "2:00 PM - 5:00 PM",
    image: "https://images.unsplash.com/photo-1745096268642-8659b927d100?q=80&w=400&auto=format&fit=crop"
  }
];

const PAST_EVENTS = [
  {
    id: 101,
    title: "Somatic Movement Series",
    date: "15",
    month: "NOV",
    location: "Rose Garden Studio",
    time: "Completed",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 102,
    title: "Youth Mindfulness Camp",
    date: "10",
    month: "OCT",
    location: "Botanic Park",
    time: "Completed",
    image: "https://images.unsplash.com/photo-1602192509153-0b77e3822648?q=80&w=400&auto=format&fit=crop"
  }
];

// Reusable Event Card
function EventCard({ event, isPast = false }: { event: typeof UPCOMING_EVENTS[0], isPast?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`rounded-2xl p-6 shadow-sm border flex flex-col md:flex-row gap-6 items-center ${
        isPast ? 'bg-muted/50 border-border/5 opacity-80' : 'bg-card border-border/10 hover:shadow-md transition-shadow'
      }`}
    >
      {/* Date Badge */}
      <div className={`flex-shrink-0 flex flex-col items-center justify-center w-24 h-24 rounded-xl ${
        isPast ? 'bg-muted text-muted-foreground' : 'bg-[var(--chart-4)] text-primary'
      }`}>
        <span className="text-3xl font-bold font-serif leading-none">{event.date}</span>
        <span className="text-sm font-bold tracking-widest uppercase">{event.month}</span>
      </div>

      {/* Info */}
      <div className="flex-1 text-center md:text-left space-y-2">
        <h3 className={`text-2xl font-bold font-serif ${isPast ? 'text-muted-foreground' : 'text-primary'}`}>
          {event.title}
        </h3>
        <div className="flex flex-col md:flex-row gap-4 text-muted-foreground text-sm items-center md:items-start justify-center md:justify-start">
          <div className="flex items-center gap-1">
            <MapPin size={16} />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{event.time}</span>
          </div>
        </div>
      </div>

      {/* Action */}
      {!isPast && (
        <div className="flex-shrink-0">
          <Button className="rounded-full px-8 bg-secondary text-white hover:bg-secondary/90">
            RSVP Now
          </Button>
        </div>
      )}
    </motion.div>
  );
}

export default function Programs() {
  return (
    <div className="pb-0 min-h-screen">
      <SEO {...SEO_CONFIG.programs} />
      {/* 1. Hero */}
      <PageHero 
        title="Our Programs" 
        subtitle="Growing Together"
        imageSrc="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBjaXJjbGUlMjBzdXBwb3J0fGVufDF8fHx8MTc2NjI0OTg4NXww&ixlib=rb-4.1.0&q=80&w=1080"
      />

      {/* 2. Who We Serve */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Who We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are proud to partner with local organizations to bring healing and wellness to those who need it most.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PARTNERS.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-6 shadow-sm hover:scale-105 transition-transform duration-300"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <partner.icon size={32} />
                </div>
                <h3 className="font-serif text-xl text-primary font-bold">{partner.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Stories of Impact */}
      <section className="py-24 relative overflow-hidden">
         {/* Decoration */}
         <div className="absolute top-0 right-0 w-[50%] h-full bg-primary/5 rounded-l-full blur-3xl" />
         
         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
              <div className="space-y-6 max-w-2xl">
                 <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                   Read Our Stories of Impact
                 </h2>
                 <p className="text-xl text-foreground/80 leading-relaxed font-light">
                   Behind every session is a story of transformation. See how our programs are making a tangible difference in the lives of our community members.
                 </p>
              </div>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-8 text-xl font-bold" asChild>
                 <Link to="/impact">Read Stories</Link>
              </Button>
            </div>
         </div>
      </section>

      {/* 4. Community Events */}
      <section className="py-24 container mx-auto px-6 max-w-5xl">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Community Events</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join us for upcoming gatherings, workshops, and circles.
            </p>
          </motion.div>

          <div className="space-y-6">
            {UPCOMING_EVENTS.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
      </section>

      {/* 5. Past Events */}
      <section className="py-16 container mx-auto px-6 max-w-5xl border-t border-border/10">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-serif font-bold text-primary mb-2">Past Events</h2>
            <p className="text-muted-foreground">A look back at what we've shared together.</p>
          </motion.div>

          <div className="space-y-6">
            {PAST_EVENTS.map((event) => (
              <EventCard key={event.id} event={event} isPast={true} />
            ))}
          </div>
      </section>

      {/* 6. Call To Action */}
      <section className="py-24 relative overflow-hidden">
         <div className="container mx-auto px-6 relative z-10 text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary">
              Ready to grow with us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you want to participate, volunteer, or partner with us, there is a place for you in our garden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
               <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-8 text-xl font-bold shadow-lg" asChild>
                  <Link to="/contact">Get Involved</Link>
               </Button>
               <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 rounded-full px-10 py-8 text-xl font-bold bg-transparent" asChild>
                  <Link to="/donate">Donate</Link>
               </Button>
            </div>
         </div>
         {/* Decor */}
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-tr-full" />
         <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-full" />
      </section>
    </div>
  );
}
