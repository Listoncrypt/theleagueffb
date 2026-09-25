import React from 'react';
import { motion } from 'motion/react';
import { NavigationRoute } from '../types';
import { PromoCodeBanner } from '../components/PromoCodeBanner';
import { BRAND_INFO } from '../data/content';
import { BookOpen, ShieldCheck, ArrowRight, ArrowUpRight, Award, Zap, Layers, Target } from 'lucide-react';

interface DynastyPageProps {
  onNavigate: (route: NavigationRoute) => void;
}

export const DynastyPage: React.FC<DynastyPageProps> = ({ onNavigate }) => {
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
            <BookOpen className="w-3.5 h-3.5" />
            <span>Dynasty Asset Intelligence</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-8"
            >
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#FAF8F5]">
                Dynasty Fantasy Football
              </h1>
              <p className="mt-4 font-serif text-xl sm:text-2xl text-[#C5C2BA] italic max-w-2xl">
                Asset liquidity, value insulation, multi-year championship windows, and counter-consensus roster construction.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-4"
            >
              <p className="text-xs sm:text-sm text-[#A3A096] leading-relaxed">
                Dynasty is not single-season fantasy with a longer bench; it is an active commodities market. We analyze draft pick elasticity, career arcs, and market psychology.
              </p>
            </motion.div>
          </div>

          {/* Strategy Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-[#121210]/80 backdrop-blur-xl">
            <div className="p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C68A4C] font-mono font-semibold">
                <Target className="w-4 h-4" />
                <span>Pillar 01</span>
              </div>
              <h3 className="font-serif text-xl text-[#FAF8F5] font-medium">Value Insulation</h3>
              <p className="text-xs text-[#8E8B82] leading-relaxed">
                Prioritize assets with multi-year organizational runway (Superflex QBs, ascending WRs) that insulate your roster against market volatility.
              </p>
            </div>

            <div className="p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C68A4C] font-mono font-semibold">
                <Layers className="w-4 h-4" />
                <span>Pillar 02</span>
              </div>
              <h3 className="font-serif text-xl text-[#FAF8F5] font-medium">Contending Inflection Points</h3>
              <p className="text-xs text-[#8E8B82] leading-relaxed">
                Avoid middle-tier purgatory. Diagnose whether your roster has true title equity or if an aggressive counter-cyclical reset generates more value.
              </p>
            </div>

            <div className="p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C68A4C] font-mono font-semibold">
                <Zap className="w-4 h-4" />
                <span>Pillar 03</span>
              </div>
              <h3 className="font-serif text-xl text-[#FAF8F5] font-medium">Draft Capital Arbitrage</h3>
              <p className="text-xs text-[#8E8B82] leading-relaxed">
                Draft picks never pull hamstrings or lose snap share. Monetize pick liquidity at peak market hysteria between February and April.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Hub Section */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest font-mono text-[#C68A4C] font-semibold block">
              Direct Audit Service
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#FAF8F5]">
              Get Your Dynasty Roster Audited
            </h2>
            <p className="text-sm text-[#A3A096] leading-relaxed">
              Submit your team structure, starters, scoring format, and draft capital. Receive an actionable 18-month roadmap with clear buy/sell priorities and trade recommendations.
            </p>
            <div>
              <button
                onClick={() => onNavigate('team-reviews')}
                className="px-6 py-3.5 bg-[#FAF8F5] text-[#0A0A09] text-xs uppercase tracking-widest font-bold hover:bg-[#C68A4C] transition-all flex items-center gap-2 focus:outline-none cursor-pointer"
              >
                <span>SUBMIT ROSTER FOR REVIEW</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 border border-white/10 bg-[#121210]/90 backdrop-blur-xl p-8 space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-[#C68A4C] font-semibold">
              <Award className="w-4 h-4" />
              <span>Community Trade Wire</span>
            </div>
            <h3 className="font-serif text-2xl text-[#FAF8F5] font-medium">
              Live Trade Evaluations & Community Chat
            </h3>
            <p className="text-xs text-[#8E8B82] leading-relaxed">
              Discuss proposed trade packages in real time with active dynasty managers in the official League FFB Discord server.
            </p>
            <a
              href={BRAND_INFO.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C1B18] text-[#FAF8F5] hover:text-[#C68A4C] border border-white/10 hover:border-[#C68A4C]/50 text-xs uppercase tracking-wider font-semibold transition-all"
            >
              <span>Join Free Discord</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C68A4C]" />
            </a>
          </div>
        </div>
      </section>

      {/* Promotional Code Banner */}
      <PromoCodeBanner />
    </div>
  );
};
