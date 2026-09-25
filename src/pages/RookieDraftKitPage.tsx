import React, { useState } from 'react';
import { motion } from 'motion/react';
import { NavigationRoute } from '../types';
import { PromoCodeBanner } from '../components/PromoCodeBanner';
import { BRAND_INFO } from '../data/content';
import { Award, Layers, Target, Compass, ArrowRight, Check, Download, Sparkles, X } from 'lucide-react';

interface RookieDraftKitPageProps {
  onNavigate?: (route: NavigationRoute) => void;
}

export const RookieDraftKitPage: React.FC<RookieDraftKitPageProps> = () => {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [downloadEmail, setDownloadEmail] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (downloadEmail) {
      setDownloadSuccess(true);
      setTimeout(() => {
        // Success state active
      }, 400);
    }
  };

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
            <Award className="w-3.5 h-3.5" />
            <span>2026 Draft Edition</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-8"
            >
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#FAF8F5]">
                Rookie Draft Kit
              </h1>
              <p className="mt-4 font-serif text-xl sm:text-2xl text-[#C5C2BA] italic max-w-2xl">
                Comprehensive draft capital correlation, tier break methodologies, and historical hit-rate modeling.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-4"
            >
              <div className="p-6 border border-white/10 bg-[#121210]/90 backdrop-blur-xl space-y-4">
                <span className="text-xs uppercase tracking-widest font-mono text-[#C68A4C] font-semibold block">
                  Complete 2026 Resource
                </span>
                <p className="text-xs text-[#A3A096] leading-relaxed">
                  Prepare for your rookie drafts with clear tier structures, trade back matrices, and landing spot evaluations.
                </p>
                <button
                  onClick={() => setDownloadModalOpen(true)}
                  className="w-full py-3.5 bg-[#FAF8F5] text-[#0A0A09] text-xs uppercase tracking-widest font-bold hover:bg-[#C68A4C] transition-all flex items-center justify-center gap-2 focus:outline-none cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>GET THE ROOKIE DRAFT KIT</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Three Strategic Core Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-[#121210]/80 backdrop-blur-xl">
            <div className="p-6 sm:p-8 space-y-2">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C68A4C] font-mono font-semibold">
                <Target className="w-3.5 h-3.5" />
                <span>Principle 01</span>
              </div>
              <h3 className="font-serif text-lg text-[#FAF8F5] font-medium">Draft Capital Is King</h3>
              <p className="text-xs text-[#8E8B82] leading-relaxed">
                Collegiate production creates excitement; Top-50 NFL draft capital secures guaranteed snaps and multiple season runways.
              </p>
            </div>
            <div className="p-6 sm:p-8 space-y-2">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C68A4C] font-mono font-semibold">
                <Layers className="w-3.5 h-3.5" />
                <span>Principle 02</span>
              </div>
              <h3 className="font-serif text-lg text-[#FAF8F5] font-medium">Trade Back Within Tiers</h3>
              <p className="text-xs text-[#8E8B82] leading-relaxed">
                When prospects share identical valuation grades, moving from 1.05 to 1.07 while acquiring a future 2nd creates compound equity.
              </p>
            </div>
            <div className="p-6 sm:p-8 space-y-2">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C68A4C] font-mono font-semibold">
                <Compass className="w-3.5 h-3.5" />
                <span>Principle 03</span>
              </div>
              <h3 className="font-serif text-lg text-[#FAF8F5] font-medium">Landing Spot Traps</h3>
              <p className="text-xs text-[#8E8B82] leading-relaxed">
                Never elevate a day-three prospect into the top tier based on landing spot alone; talent dictates opportunity over 12 months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kit Features Showcase */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="border border-white/10 bg-[#121210]/90 backdrop-blur-xl p-8 sm:p-14 space-y-8">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs uppercase tracking-widest font-mono text-[#C68A4C] font-semibold block">
                What's Inside
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#FAF8F5]">
                The Strategic Edge for 2026 Rookie Drafts
              </h2>
              <p className="text-sm text-[#A3A096] leading-relaxed">
                Our draft kit avoids generic static spreadsheets. We provide actionable frameworks designed to give dynasty managers unmatched leverage during draft room negotiations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
              <div className="p-6 bg-[#171715]/70 border border-white/5 space-y-2">
                <span className="text-xs font-mono text-[#C68A4C] font-semibold">01</span>
                <h4 className="font-serif text-lg text-[#FAF8F5] font-medium">Superflex QB Valuation</h4>
                <p className="text-xs text-[#8E8B82] leading-relaxed">
                  Historical hit rates by draft slot and how to navigate late 1st round quarterback gambles.
                </p>
              </div>

              <div className="p-6 bg-[#171715]/70 border border-white/5 space-y-2">
                <span className="text-xs font-mono text-[#C68A4C] font-semibold">02</span>
                <h4 className="font-serif text-lg text-[#FAF8F5] font-medium">RB Weight & Touch Thresholds</h4>
                <p className="text-xs text-[#8E8B82] leading-relaxed">
                  BMI, collegiate target share, and pass protection readiness for year-one bellcow projections.
                </p>
              </div>

              <div className="p-6 bg-[#171715]/70 border border-white/5 space-y-2">
                <span className="text-xs font-mono text-[#C68A4C] font-semibold">03</span>
                <h4 className="font-serif text-lg text-[#FAF8F5] font-medium">WR Separation Metrics</h4>
                <p className="text-xs text-[#8E8B82] leading-relaxed">
                  Success rates vs press coverage, yards per route run (YPRR), and target per route run (TPRR).
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#8E8B82]">
                Instant digital access delivered directly to your inbox.
              </span>
              <button
                onClick={() => setDownloadModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 bg-[#C68A4C] text-[#0A0A09] hover:bg-[#DF9F5B] text-xs uppercase tracking-widest font-bold transition-all shadow-xl flex items-center justify-center gap-2 focus:outline-none cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD ROOKIE DRAFT KIT</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Download Modal */}
      {downloadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg border border-white/10 bg-[#121210] p-8 sm:p-10 shadow-2xl space-y-6">
            <button
              onClick={() => {
                setDownloadModalOpen(false);
                setDownloadSuccess(false);
              }}
              className="absolute top-6 right-6 text-[#8E8B82] hover:text-[#FAF8F5] focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            {downloadSuccess ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-[#FAF8F5] font-medium">
                  Rookie Draft Kit Dispatched!
                </h3>
                <p className="text-xs text-[#8E8B82] leading-relaxed">
                  We have sent the 2026 Rookie Draft Kit materials to <strong className="text-[#FAF8F5]">{downloadEmail}</strong>.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setDownloadModalOpen(false);
                      setDownloadSuccess(false);
                    }}
                    className="px-6 py-2.5 bg-[#FAF8F5] text-[#0A0A09] text-xs uppercase tracking-widest font-semibold hover:bg-[#C68A4C]"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleDownload} className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest font-mono text-[#C68A4C] font-semibold block">
                    Instant Access
                  </span>
                  <h3 className="font-serif text-2xl text-[#FAF8F5] font-medium">
                    Get The 2026 Rookie Draft Kit
                  </h3>
                  <p className="text-xs text-[#8E8B82]">
                    Enter your email below to receive the complete tier guide, rookie draft capital sheets, and trade-back calculator.
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-[#FAF8F5] font-medium block">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={downloadEmail}
                    onChange={(e) => setDownloadEmail(e.target.value)}
                    placeholder="manager@example.com"
                    className="w-full px-4 py-3 bg-[#171715] border border-white/10 text-[#FAF8F5] text-xs focus:border-[#C68A4C] focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#FAF8F5] text-[#0A0A09] text-xs uppercase tracking-widest font-bold hover:bg-[#C68A4C] transition-colors focus:outline-none flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>SEND ME THE KIT</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Promo banner */}
      <PromoCodeBanner />
    </div>
  );
};
