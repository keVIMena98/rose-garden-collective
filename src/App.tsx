import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Toaster } from './components/ui/sonner';
import { Layout } from './components/layout/Layout';
import { Header } from './components/layout/Header';
import { Preloader } from './components/layout/Preloader';
import ScrollToTop from './components/layout/ScrollToTop';
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
const Donate = lazy(() => import('./pages/Donate'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));

// New Pages
const FounderStory = lazy(() => import('./pages/FounderStory'));
const CareTeam = lazy(() => import('./pages/CareTeam'));
const Teachers = lazy(() => import('./pages/Teachers'));
const TeacherProfile = lazy(() => import('./pages/TeacherProfile')); 
const Careers = lazy(() => import('./pages/Careers'));
const Vacancy = lazy(() => import('./pages/Vacancy'));
const Retreats = lazy(() => import('./pages/Retreats'));
const RetreatDetail = lazy(() => import('./pages/RetreatDetail'));
const ApplicationReceived = lazy(() => import('./pages/ApplicationReceived'));
const PaymentSuccess = lazy(() => import('./pages/PaymentSuccess'));
const PaymentDeclined = lazy(() => import('./pages/PaymentDeclined'));

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
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          className="relative w-full min-h-screen"
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
                <Route path="/contact" element={<Contact />} />
                <Route path="/donate" element={<Donate />} />

                {/* Who We Are */}
                <Route path="/founder-story" element={<FounderStory />} />
                <Route path="/care-team" element={<CareTeam />} />
                <Route path="/teachers" element={<Teachers />} />
                <Route path="/teachers/:slug" element={<TeacherProfile />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/careers/:slug" element={<Vacancy />} />

                {/* What We Offer */}
                <Route path="/retreats" element={<Retreats />} />
                <Route path="/retreats/:slug" element={<RetreatDetail />} />

                {/* System */}
                <Route path="/application-received" element={<ApplicationReceived />} />
                <Route path="/payment-success" element={<PaymentSuccess />} />
                <Route path="/payment-declined" element={<PaymentDeclined />} />
                
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
      <ScrollToTop />
      <Preloader onComplete={() => setIsLoaded(true)} />
      <AppContent isLoaded={isLoaded} />
      <Toaster richColors position="top-center" />
    </BrowserRouter>
  );
}