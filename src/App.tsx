import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Layout } from './components/layout/Layout';
import { Preloader } from './components/layout/Preloader';
import TransitionDesktop from './imports/TransitionDesktop';
import './lib/storyblok';

// Lazy Load Pages to optimize initial bundle size
const Home = lazy(() => import('./pages/Home'));
const Story = lazy(() => import('./pages/Story'));
const Programs = lazy(() => import('./pages/Programs'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const KarmaClub = lazy(() => import('./pages/KarmaClub'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));

const curtainVariants = {
  initial: { 
    // Start with hole radius = 0% (Fully covered by Pink)
    WebkitMaskImage: 'radial-gradient(circle at center, transparent 0%, transparent 0%, black 0%, black 100%)',
    maskImage: 'radial-gradient(circle at center, transparent 0%, transparent 0%, black 0%, black 100%)'
  },
  animate: { 
    // Hole radius grows to 150% (Revealing the page)
    WebkitMaskImage: 'radial-gradient(circle at center, transparent 0%, transparent 150%, black 150%, black 100%)',
    maskImage: 'radial-gradient(circle at center, transparent 0%, transparent 150%, black 150%, black 100%)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  },
  exit: { 
    // Hole radius shrinks to 0% (Covering the page with Pink)
    WebkitMaskImage: 'radial-gradient(circle at center, transparent 0%, transparent 0%, black 0%, black 100%)',
    maskImage: 'radial-gradient(circle at center, transparent 0%, transparent 0%, black 0%, black 100%)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

function AppContent({ isLoaded }: { isLoaded: boolean }) {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          className="relative z-10 w-full min-h-screen"
        >
          {/* 
            The Transition Curtain (Pink Layer)
            - Fixed to viewport to ensure the circle is always centered relative to screen
            - Uses CSS Masks to create the "Iris" effect (Hole opening/closing)
          */}
          <motion.div 
            className="fixed inset-0 z-40 pointer-events-none"
            variants={curtainVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <TransitionDesktop />
          </motion.div>

          <Layout enableScroll={isLoaded}>
            {/* Suspense fallback handles loading state for lazy-loaded pages */}
            <Suspense fallback={<div className="min-h-screen bg-background" />}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                
                {/* Active Pages */}
                <Route path="/story" element={<Story />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetail />} />
                <Route path="/karma-club" element={<KarmaClub />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Legal */}
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                
                {/* 404 Catch-all */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </Layout>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <BrowserRouter>
      <Preloader onComplete={() => setIsLoaded(true)} />
      <AppContent isLoaded={isLoaded} />
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  );
}