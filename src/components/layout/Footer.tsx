import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../ui/utils';
import bgTexture from "figma:asset/5a1ec8ea6c4524e0727a8833d09e55b05b939353.png";
import Facebook from '../../imports/Facebook';
import Instagram from '../../imports/Instagram';
import TikTok from '../../imports/TikTok';

export function Footer() {
  const footerLinks = [
    { name: "Our Story", path: "/story" },
    { name: "Our Programs", path: "/programs" },
    { name: "Our Services", path: "/services" },
    { name: "Karma Club", path: "/karma-club" },
  ];

  return (
    <footer className="relative w-full min-h-[100dvh] flex flex-col justify-center py-12 overflow-hidden bg-card text-card-foreground">
      {/* Background Texture */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none mix-blend-multiply"
        style={{ 
          backgroundImage: `url(${bgTexture})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '300px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Big Title */}
        <div className="text-center mb-4 w-full select-none">
          <h1 className="font-serif leading-[0.85] text-card-foreground uppercase drop-shadow-sm flex flex-col items-center">
            <span className="block py-24 md:py-40 text-[14vw] md:text-[9vw] leading-[0.9] tracking-tight max-w-[95vw] text-balance">
              Rose Garden Collective
            </span>
          </h1>
        </div>

        {/* Top Divider */}
        <div className="w-full h-[1px] bg-card-foreground/40 my-4"></div>

        {/* Navigation */}
        <nav className="w-full mb-4 md:mb-0">
            {/* Mobile: Vertical Stack */}
            <div className="flex flex-col items-center gap-5 md:hidden">
                {footerLinks.map((link) => (
                    <Link 
                    key={link.name} 
                    to={link.path} 
                    className="text-2xl font-bold font-sans text-card-foreground hover:text-primary transition-colors text-center"
                    >
                    {link.name}
                    </Link>
                ))}
            </div>

            {/* Desktop: Horizontal Row */}
            <div className="hidden md:flex justify-between items-center px-10 py-6">
                {footerLinks.map((link) => (
                    <Link 
                    key={link.name} 
                    to={link.path} 
                    className="text-3xl font-bold font-sans text-card-foreground hover:text-primary transition-colors"
                    >
                    {link.name}
                    </Link>
                ))}
            </div>
        </nav>

        {/* Bottom Divider */}
        <div className="w-full h-[1px] bg-card-foreground/40 my-4"></div>

        {/* Footer Bottom Content */}
        <div className="w-full">
            
            {/* Mobile Layout */}
            <div className="md:hidden flex flex-col items-center gap-6">
                {/* Social Icons */}
                <div className="flex gap-4 mb-2">
                    <a href="#" className="w-8 h-8 block hover:[&_path]:fill-primary [&_path]:transition-colors">
                        <Facebook />
                    </a>
                    <div className="w-8 h-8 hover:[&_path]:fill-primary [&_path]:transition-colors">
                        <Instagram />
                    </div>
                    <div className="w-8 h-8 hover:[&_path]:fill-primary [&_path]:transition-colors">
                        <TikTok />
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-sm font-bold font-sans text-card-foreground">
                    © {new Date().getFullYear()} All Rights Reserved
                </div>
                
                {/* Legal Links */}
                <div className="flex flex-wrap justify-center gap-6 text-sm font-bold font-sans text-card-foreground underline decoration-1 underline-offset-4">
                    <a href="https://www.sparkframelabs.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Credit</a>
                    <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex justify-between items-center px-4">
                {/* Copyright */}
                <div className="text-sm font-bold font-sans text-card-foreground">
                    © {new Date().getFullYear()} All Rights Reserved
                </div>

                {/* Legal Links */}
                <div className="flex gap-8 text-sm font-bold font-sans text-card-foreground underline decoration-1 underline-offset-4">
                    <a href="https://www.sparkframelabs.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Credit</a>
                    <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4">
                    <a href="#" className="w-8 h-8 block hover:[&_path]:fill-primary [&_path]:transition-colors">
                        <Facebook />
                    </a>
                    <div className="w-8 h-8 hover:[&_path]:fill-primary [&_path]:transition-colors">
                        <Instagram />
                    </div>
                    <div className="w-8 h-8 hover:[&_path]:fill-primary [&_path]:transition-colors">
                        <TikTok />
                    </div>
                </div>
            </div>

        </div>
      </div>
    </footer>
  );
}
