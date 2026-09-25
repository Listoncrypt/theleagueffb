/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { NavigationRoute } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { DynastyPage } from './pages/DynastyPage';
import { NflPage } from './pages/NflPage';
import { TeamReviewsPage } from './pages/TeamReviewsPage';
import { RookieDraftKitPage } from './pages/RookieDraftKitPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<NavigationRoute>('home');

  // Sync hash routing for browser back/forward and direct bookmarking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavigationRoute;
      const validRoutes: NavigationRoute[] = [
        'home',
        'dynasty',
        'nfl',
        'team-reviews',
        'rookie-draft-kit',
        'about',
        'contact',
      ];
      if (validRoutes.includes(hash)) {
        setCurrentRoute(hash);
      } else {
        setCurrentRoute('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (route: NavigationRoute) => {
    setCurrentRoute(route);
    window.location.hash = route === 'home' ? '' : `#${route}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#090908] text-[#FAF8F5] font-sans antialiased selection:bg-[#C68A4C] selection:text-[#090908] relative">
      {/* 
        GLOBAL FOOTBALL BACKGROUND SYSTEM
        Layer 1: The League FFB banner image with subtle parallax feel & fade-in
        Layer 2: Dark cinematic radial gradient
        Layer 3: Top/bottom darkening vignettes for readability
      */}
      <div className="league-bg-container" aria-hidden="true">
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.36, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src="/the_league_ffb_banner.jpg"
          alt="The League FFB Global Background"
          className="league-bg-image"
          onError={(e) => {
            // Fallback if direct root path differs
            (e.currentTarget as HTMLImageElement).src = '/src/assets/images/the_league_ffb_banner.jpg';
          }}
        />
        <div className="league-bg-overlay" />
      </div>

      {/* Floating Sticky Editorial Header */}
      <Header currentRoute={currentRoute} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-grow relative z-10">
        {currentRoute === 'home' && (
          <HomePage onNavigate={handleNavigate} />
        )}
        {currentRoute === 'dynasty' && (
          <DynastyPage onNavigate={handleNavigate} />
        )}
        {currentRoute === 'nfl' && (
          <NflPage onNavigate={handleNavigate} />
        )}
        {currentRoute === 'team-reviews' && (
          <TeamReviewsPage onNavigate={handleNavigate} />
        )}
        {currentRoute === 'rookie-draft-kit' && (
          <RookieDraftKitPage onNavigate={handleNavigate} />
        )}
        {currentRoute === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}
        {currentRoute === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Dark Cohesive Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
