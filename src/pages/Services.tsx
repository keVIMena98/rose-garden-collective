import React, { useEffect, useState } from 'react';
import { useStoryblokState, StoryblokComponent } from "@storyblok/react";
import { isStoryblokConfigured, fetchStory } from '../lib/storyblok';
import { StoryblokServiceGrid } from "../components/storyblok/StoryblokServiceGrid";
import { ServicesCTA } from "../components/services/ServicesCTA";
import { ServicesHeader } from "../components/services/ServicesHeader";
import { PageHero } from "../components/layout/PageHero";
import bgTexture from "figma:asset/5a1ec8ea6c4524e0727a8833d09e55b05b939353.png";
import { SEO, SEO_CONFIG } from '../components/SEO';

export default function Services() {
  const [story, setStory] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      if (!isStoryblokConfigured()) {
         setLoading(false); 
         return;
      }

      const s = await fetchStory("services");
      if (s) {
        setStory(s);
      }
      setLoading(false);
    }
    load();
  }, []);

  const activeStory = useStoryblokState(story || {});

  // Common Layout Wrapper (Background & Texture matching Footer)
  const PageLayout = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-[100dvh] bg-[#d4e5f1] text-foreground relative font-sans overflow-hidden">
       <SEO {...SEO_CONFIG.services} />
       {/* Texture Overlay (Matches Footer style) */}
       <div 
         className="absolute inset-0 z-0 opacity-40 pointer-events-none mix-blend-multiply" 
         style={{ 
           backgroundImage: `url(${bgTexture})`,
           backgroundRepeat: 'repeat',
           backgroundSize: '300px'
         }} 
       />
       
       {/* Content */}
       <div className="relative z-10">
         {children}
       </div>
    </div>
  );

  if (loading) {
     return (
       <div className="min-h-screen pt-32 flex flex-col items-center justify-center gap-4 bg-[#d4e5f1]">
         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
         <p className="text-muted-foreground font-mono">Loading...</p>
       </div>
     );
  }

  // CMS Mode
  if (story) {
    return (
      <PageLayout>
         <StoryblokComponent blok={activeStory.content || story.content} />
      </PageLayout>
    );
  }

  // Fallback Mode
  return (
    <PageLayout>
       {/* 1. Standard Hero (Full Viewport) */}
       <PageHero 
          title="Our Services" 
          imageSrc="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2000&auto=format&fit=crop"
       />
       
       {/* 2. Intro Section */}
       <div className="pt-20 pb-8">
          <ServicesHeader />
       </div>

       {/* 3. Main Services Grid (Has its own container) */}
       <div className="pb-20">
          <StoryblokServiceGrid blok={{}} />
       </div>

       {/* 4. Bottom CTA */}
       <ServicesCTA />
    </PageLayout>
  );
}
