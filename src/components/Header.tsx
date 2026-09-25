import React, { useState, useEffect } from 'react';
import { NavigationRoute } from '../types';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentRoute: NavigationRoute;
  onNavigate: (route: NavigationRoute) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; route: NavigationRoute }[] = [
    { label: 'Home', route: 'home' },
    { label: 'Dynasty', route: 'dynasty' },
    { label: 'NFL', route: 'nfl' },
    { label: 'Team Reviews', route: 'team-reviews' },
    { label: 'Rookie Draft Kit', route: 'rookie-draft-kit' },
    { label: 'About', route: 'about' },
    { label: 'Contact', route: 'contact' },
  ];

  const handleNav = (route: NavigationRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ease-out ${
        isScrolled
          ? 'bg-[#0A0A09]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/60 py-3'
          : 'bg-[#0A0A09]/40 backdrop-blur-md border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo Only */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center text-left group cursor-pointer focus:outline-none"
          aria-label="The League FFB Home"
        >
          <img
            src="/logo.png"
            alt="The League FFB"
            className="h-9 sm:h-11 w-auto max-w-[180px] object-contain filter drop-shadow group-hover:scale-105 transition-transform"
            onError={(e) => {
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <button
                key={item.route}
                onClick={() => handleNav(item.route)}
                className={`text-[11px] uppercase tracking-widest transition-all font-medium relative py-1.5 focus:outline-none ${
                  isActive
                    ? 'text-[#FAF8F5] font-semibold'
                    : 'text-[#A3A096] hover:text-[#FAF8F5]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C68A4C] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Primary Action (Join Discord) */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="https://discord.gg/theleagueffb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-[11px] uppercase tracking-wider font-semibold text-[#FAF8F5] bg-[#1C1B18] hover:bg-[#2A2925] border border-white/10 hover:border-[#C68A4C]/50 hover:-translate-y-0.5 transition-all shadow-md focus:outline-none"
          >
            <span>Join Discord</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#C68A4C]" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="https://discord.gg/theleagueffb"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden text-[11px] uppercase tracking-wider px-3 py-1.5 font-semibold text-[#FAF8F5] bg-[#1C1B18] border border-white/10"
          >
            Discord
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#FAF8F5] hover:text-[#C68A4C] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#0E0E0D]/95 backdrop-blur-2xl px-6 py-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <button
                key={item.route}
                onClick={() => handleNav(item.route)}
                className={`text-left text-xs uppercase tracking-widest py-2.5 border-b border-white/5 ${
                  currentRoute === item.route
                    ? 'font-bold text-[#C68A4C]'
                    : 'text-[#A3A096]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <a
                href="https://discord.gg/theleagueffb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 text-xs uppercase tracking-widest font-semibold text-[#FAF8F5] bg-[#1C1B18] border border-white/10 hover:border-[#C68A4C]/50"
              >
                Join Free Discord
              </a>
              <a
                href="https://www.hopp.bio/theleagueffb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 text-xs uppercase tracking-widest font-medium text-[#A3A096] border border-white/5"
              >
                All Official Links (Hopp)
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
