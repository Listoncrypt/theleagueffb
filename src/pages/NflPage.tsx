import React from 'react';
import { motion } from 'motion/react';
import { NavigationRoute } from '../types';
import { PromoCodeBanner } from '../components/PromoCodeBanner';
import { BRAND_INFO } from '../data/content';
import { Shield, Activity, Layers, Play, ArrowUpRight, ArrowRight } from 'lucide-react';

interface NflPageProps {
  onNavigate: (route: NavigationRoute) => void;
}

export const NflPage: React.FC<NflPageProps> = ({ onNavigate }) => {
  const tacticalPillars = [
    {
      title: 'Coverage Shell Geometry',
      icon: Shield,
      summary: 'Tracking the league-wide shift to two-high shells (Cover 4/Cover 6), prioritizing underneath route winners and intermediate YAC creators.'
    },
    {
      title: 'Pre-Snap Motion & Spacing',
      icon: Activity,
      summary: 'Evaluating playcallers who leverage motion at the snap to diagnose coverages and create instant separation for primary weapons.'
    },
    {
      title: 'Personnel Grouping Trends',
      icon: Layers,
      summary: 'How 12-personnel and condensed formations dictate box counts, opening explosive run lanes and high-efficiency tight end target share.'
    }
  ];

  return (
    <div className="space-y-0 text-[#FAF8F5]">
      {/* Editorial Header */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C68A4C] font-mono font-semibold mb-4"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Tactical Film Intelligence</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-8"
            >
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#FAF8F5]">
                NFL Analysis & Schemes
              </h1>
              <p className="mt-4 font-serif text-xl sm:text-2xl text-[#C5C2BA] italic max-w-2xl">
                Deconstructing playcalling, offensive environments, and defensive countermeasures to forecast fantasy production.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-4"
            >
              <p className="text-xs sm:text-sm text-[#A3A096] leading-relaxed">
                Players do not produce in a vacuum. A great talent in a dysfunctional offensive structure will consistently underperform a good talent in a high-efficiency scheme.
              </p>
            </motion.div>
          </div>

          {/* Tactical Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-[#121210]/80 backdrop-blur-xl">
            {tacticalPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="p-6 sm:p-8 space-y-3">
                  <Icon className="w-5 h-5 text-[#C68A4C]" />
                  <h3 className="font-serif text-xl text-[#FAF8F5] font-medium">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#8E8B82] leading-relaxed">
                    {pillar.summary}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Film Room & Video Feature */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="border border-white/10 bg-[#121210]/90 backdrop-blur-xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-widest font-mono text-[#C68A4C] font-semibold block">
                Film Breakdown Series
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5] font-medium leading-tight">
                All-22 Tape Study & Scheme Analysis on YouTube
              </h2>
              <p className="text-sm text-[#A3A096] leading-relaxed max-w-2xl">
                Watch full coaches tape breakdowns, route tree separation analysis, and offensive spacing breakdowns on the official League FFB channel.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href={BRAND_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#C68A4C] text-[#0A0A09] hover:bg-[#DF9F5B] text-xs uppercase tracking-widest font-bold hover:-translate-y-0.5 transition-all shadow-xl flex items-center gap-2 focus:outline-none"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>WATCH FILM BREAKDOWNS</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Promo banner */}
      <PromoCodeBanner />
    </div>
  );
};
