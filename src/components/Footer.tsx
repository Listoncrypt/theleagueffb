import React from 'react';
import { NavigationRoute } from '../types';
import { ArrowUpRight, Youtube, Headphones, MessageSquare, Shield, Radio } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface FooterProps {
  onNavigate: (route: NavigationRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (route: NavigationRoute) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#0A0A09]/95 backdrop-blur-xl text-[#A3A096] relative z-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="The League FFB"
                className="h-10 w-auto max-w-[180px] object-contain filter drop-shadow"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <p className="text-sm font-serif italic text-[#C5C2BA] leading-relaxed max-w-sm">
              All Things Dynasty Fantasy Football & NFL.
            </p>
            <p className="text-xs text-[#8E8B82] leading-relaxed max-w-sm">
              Strategic asset management, NFL tape breakdown, draft capital elasticity, and customized dynasty roster audits.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_INFO.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#171715] hover:bg-[#242320] text-[#FAF8F5] hover:text-[#C68A4C] border border-white/10 transition-colors"
                aria-label="Discord Community"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#171715] hover:bg-[#242320] text-[#FAF8F5] hover:text-[#C68A4C] border border-white/10 transition-colors"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.spotifyPodcastUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#171715] hover:bg-[#242320] text-[#FAF8F5] hover:text-[#C68A4C] border border-white/10 transition-colors"
                aria-label="Spotify Podcast"
              >
                <Headphones className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.applePodcastUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#171715] hover:bg-[#242320] text-[#FAF8F5] hover:text-[#C68A4C] border border-white/10 transition-colors"
                aria-label="Apple Podcasts"
              >
                <Radio className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[11px] uppercase tracking-widest font-mono text-[#FAF8F5] font-semibold block">
              Publication
            </span>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#FAF8F5] transition-colors uppercase tracking-wider"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('dynasty')}
                  className="hover:text-[#FAF8F5] transition-colors uppercase tracking-wider"
                >
                  Dynasty Hub
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('nfl')}
                  className="hover:text-[#FAF8F5] transition-colors uppercase tracking-wider"
                >
                  NFL Film & Schemes
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('team-reviews')}
                  className="hover:text-[#FAF8F5] transition-colors uppercase tracking-wider text-[#C68A4C] font-medium"
                >
                  Team Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('rookie-draft-kit')}
                  className="hover:text-[#FAF8F5] transition-colors uppercase tracking-wider"
                >
                  Rookie Draft Kit
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#FAF8F5] transition-colors uppercase tracking-wider"
                >
                  Manifesto & About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#FAF8F5] transition-colors uppercase tracking-wider"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Official Media & Community Channels */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[11px] uppercase tracking-widest font-mono text-[#FAF8F5] font-semibold block">
              Official Media Channels
            </span>
            <div className="space-y-3 text-xs">
              <a
                href={BRAND_INFO.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-[#141412] hover:bg-[#1C1B18] border border-white/5 hover:border-white/15 flex items-center justify-between group transition-all"
              >
                <div>
                  <span className="text-[#FAF8F5] font-medium block">The League Discord</span>
                  <span className="text-[#8E8B82] text-[11px]">Free community trade & draft discussions</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#C68A4C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={BRAND_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-[#141412] hover:bg-[#1C1B18] border border-white/5 hover:border-white/15 flex items-center justify-between group transition-all"
              >
                <div>
                  <span className="text-[#FAF8F5] font-medium block">YouTube Channel</span>
                  <span className="text-[#8E8B82] text-[11px]">Roster rebuilds, prospect film & podcasts</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#C68A4C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://www.hopp.bio/theleagueffb"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-[#141412] hover:bg-[#1C1B18] border border-white/5 hover:border-white/15 flex items-center justify-between group transition-all"
              >
                <div>
                  <span className="text-[#FAF8F5] font-medium block">Hopp Link Hub</span>
                  <span className="text-[#8E8B82] text-[11px]">Direct links to all official platforms</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#C68A4C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7A7770]">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-[#C68A4C]" />
            <span>© {new Date().getFullYear()} THE LEAGUE FFB. Independent Dynasty Fantasy Football & NFL Media.</span>
          </div>
          <div className="flex items-center gap-6">
            <span>All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
