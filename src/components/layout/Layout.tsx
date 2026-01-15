import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

import { SmoothScroll } from './SmoothScroll';
import { cn } from '../ui/utils';

export function Layout({ children, enableScroll = true }: { children: React.ReactNode; enableScroll?: boolean }) {
  const { pathname } = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Dynamic Theme Color (Dark for Hero, Pink for Footer)
  useEffect(() => {
    const updateThemeColor = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const threshold = 100; // Trigger when within 100px of bottom

      // Check if we are near the bottom
      const isNearBottom = (scrollY + windowHeight) >= (docHeight - threshold);
      
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        // Dark for top/hero, Pink (#ffe8e3) for bottom/footer
        const newColor = isNearBottom ? '#ffe8e3' : '#0c0c0c';
        if (metaThemeColor.getAttribute('content') !== newColor) {
          metaThemeColor.setAttribute('content', newColor);
        }
      }
    };

    window.addEventListener('scroll', updateThemeColor);
    // Initial check
    updateThemeColor();

    return () => window.removeEventListener('scroll', updateThemeColor);
  }, [pathname]);

  const isLegalPage = ['/privacy', '/terms'].includes(pathname);

  return (
    <div className="relative min-h-[100dvh] flex flex-col font-sans">
      {enableScroll && <SmoothScroll />}
      
      <Header />
      
      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col min-h-[100dvh]">
        <main className={cn(
          "flex-1 w-full",
          isLegalPage ? "pt-[64px] md:pt-[90px]" : "pt-0"
        )}>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
