import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

export const ServicesCTA = () => {
  return (
    <div className="py-24 md:py-32 px-6 text-center relative overflow-hidden">
       <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none text-primary">
            Your healing journey <br/> Starts here
          </h2>
          <p className="font-sans text-lg md:text-xl max-w-xl mx-auto text-foreground/80 font-medium">
             Transform your life through mindful practices that honor your unique path of recovery and growth.
          </p>
          <div className="pt-4">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all hover:scale-105">
               <Link to="/contact">Book now</Link>
            </Button>
          </div>
       </div>
    </div>
  );
};
