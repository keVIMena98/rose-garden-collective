import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { GrainyOverlay } from '../components/layout/GrainyOverlay';
import { motion } from 'motion/react';
import Facebook from '../imports/Facebook';
import Instagram from '../imports/Instagram';
import TikTok from '../imports/TikTok';

export default function Donate() {
  const [copied, setCopied] = useState(false);
  const websiteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://rosegarden.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(websiteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 text-center font-sans pt-20 bg-background">
      <GrainyOverlay />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-2xl w-full flex flex-col items-center gap-8"
      >
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-serif font-medium text-primary">
            Support Our Cause
          </h1>
          <p className="text-[24px] text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
            We are not quite ready to receive financial donations yet, but your support means the world to us.
          </p>
        </div>

        <div className="w-full max-w-md bg-card/40 backdrop-blur-md border border-primary/20 rounded-2xl p-6 md:p-8 space-y-8 shadow-sm">
          <div className="space-y-3">
            <h3 className="text-xl font-medium font-serif text-primary">Share with a friend</h3>
            <div className="flex gap-2">
              <div className="flex-1 bg-background/80 border border-primary/20 rounded-md px-3 py-2 text-sm text-muted-foreground truncate flex items-center select-all">
                {websiteUrl}
              </div>
              <Button 
                size="icon" 
                variant="outline" 
                onClick={handleCopy}
                className="shrink-0 transition-all border-primary/20 hover:bg-card hover:text-secondary text-primary"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span className="sr-only">Copy Link</span>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
             <h3 className="text-xl font-medium font-serif text-primary">Follow our journey</h3>
             <div className="flex justify-center gap-4">
                <a href="#" className="w-12 h-12 flex items-center justify-center rounded-md bg-background border border-primary/20 transition-all hover:bg-card hover:border-secondary group shadow-sm">
                    <div className="w-6 h-6 [&_path]:fill-primary group-hover:[&_path]:fill-secondary transition-colors">
                        <Facebook />
                    </div>
                </a>
                <div className="w-12 h-12 flex items-center justify-center rounded-md bg-background border border-primary/20 transition-all hover:bg-card hover:border-secondary group shadow-sm cursor-pointer">
                    <div className="w-6 h-6 [&_path]:fill-primary group-hover:[&_path]:fill-secondary transition-colors">
                        <Instagram />
                    </div>
                </div>
                <div className="w-12 h-12 flex items-center justify-center rounded-md bg-background border border-primary/20 transition-all hover:bg-card hover:border-secondary group shadow-sm cursor-pointer">
                    <div className="w-6 h-6 [&_path]:fill-primary group-hover:[&_path]:fill-secondary transition-colors">
                        <TikTok />
                    </div>
                </div>
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}