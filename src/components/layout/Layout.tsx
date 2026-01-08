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

  const isLegalPage = ['/privacy', '/terms'].includes(pathname);

  return (
    <div className="relative min-h-screen flex flex-col font-sans">
      {enableScroll && <SmoothScroll />}
      
      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
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
