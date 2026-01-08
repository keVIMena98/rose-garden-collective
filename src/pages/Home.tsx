import React from 'react';
import { Hero } from '../components/home/Hero';
import { Mission } from '../components/home/Mission';
import { Impact } from '../components/home/Impact';
import { Pathways } from '../components/home/Pathways';
import { GrainyOverlay } from '../components/layout/GrainyOverlay';
import { SEO, SEO_CONFIG } from '../components/SEO';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <SEO {...SEO_CONFIG.home} />
      <Hero />
      {/* Content wrapper with z-index to slide over fixed hero */}
      <div className="relative z-10 bg-background">
        <GrainyOverlay />
        <div className="relative z-10">
          <Mission />
          <Impact />
          <Pathways />
        </div>
      </div>
    </div>
  );
}
