import React from 'react';
import { motion } from 'motion/react';
import { PromoCodeBanner } from '../components/PromoCodeBanner';
import { BRAND_INFO } from '../data/content';
import { ArrowUpRight, BookOpen, ShieldCheck, MessageSquare, Youtube, Headphones } from 'lucide-react';

export const AboutPage: React.FC = () => {
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
            <span>Editorial Manifesto</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-8"
            >
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#FAF8F5]">
                About The League FFB
              </h1>
              <p className="mt-4 font-serif text-xl sm:text-2xl text-[#C5C2BA] italic max-w-2xl">
                All Things Dynasty Fantasy Football & NFL. Built on analytical discipline, game tape context, and honest community dialogue.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-4"
            >
              <p className="text-xs sm:text-sm text-[#A3A096] leading-relaxed">
                Founded to bridge the disconnect between single-season redraft narratives and long-term dynasty asset management.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Manifesto Grid */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
          {/* Main Story Column */}
          <div className="lg:col-span-7 space-y-8 text-base sm:text-lg text-[#D4D0C5] leading-[1.8]">
            <p className="editorial-dropcap text-[#FAF8F5]">
              The League FFB was established with a singular governing philosophy: Dynasty Fantasy Football is not merely an extended season of weekly lineups; it is a dynamic commodities ecosystem where asset timing, age-curve realities, and draft capital liquidity dictate decade-long supremacy.
            </p>

            <p>
              In conventional fantasy media, coverage frequently devolves into reactionary weekly takes. A wide receiver finishes with two catches in a rainstorm, and the consensus market drops his dynasty valuation by three tiers. Conversely, a backup running back touches the ball fifteen times due to an in-game injury, and managers trade away future first-round picks to chase ephemeral points.
            </p>

            <div className="py-6 border-y border-white/10 my-8">
              <blockquote className="font-serif text-2xl italic text-[#FAF8F5] pl-4 border-l-2 border-[#C68A4C]">
                "Championships are not won on Sunday afternoons in September; they are constructed through patient, counter-cyclical trades in March and April."
              </blockquote>
            </div>

            <p>
              Our publication analyzes both sides of the ball: the schematic shifts of NFL coaching staffs—such as the league-wide adoption of split-safety shells and heavy personnel groupings—and the internal economics of dynasty leagues. We evaluate player target share geometry, collegiate breakout ages, and combine athletic testing to isolate true talent from temporary offensive circumstance.
            </p>

            <h3 className="font-serif text-3xl text-[#FAF8F5] font-medium pt-6">
              Our Core Commitments
            </h3>

            <div className="space-y-6 pt-2 text-sm text-[#A3A096]">
              <div className="space-y-1">
                <h4 className="font-serif text-xl text-[#FAF8F5] font-medium">01. Zero Inflated Hype</h4>
                <p className="leading-relaxed">
                  We refuse to publish sensationalized rankings designed to bait algorithms. Every valuation is grounded in verified historical hit rates and realistic opportunity runways.
                </p>
              </div>

              <div className="space-y-1">
                <h4 className="font-serif text-xl text-[#FAF8F5] font-medium">02. Community First</h4>
                <p className="leading-relaxed">
                  Through our free Discord, interactive streams, and personalized team review audits, we engage with managers as fellow league-mates rather than passive consumers.
                </p>
              </div>

              <div className="space-y-1">
                <h4 className="font-serif text-xl text-[#FAF8F5] font-medium">03. Custom League Specificity</h4>
                <p className="leading-relaxed">
                  Whether your league runs 14-team Superflex, 2.0 Tight End Premium, or custom starting requirements, one-size-fits-all trade advice is worse than no advice.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border border-white/10 bg-[#121210]/90 backdrop-blur-xl p-8 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#C68A4C] font-mono font-semibold block">
                Multi-Platform Media
              </span>
              <h4 className="font-serif text-2xl text-[#FAF8F5] font-medium">
                Connect Across All Channels
              </h4>
              <p className="text-xs text-[#A3A096] leading-relaxed">
                Explore film breakdowns on YouTube, listen to our podcast streams on Apple & Spotify, and join live strategy conversations on Discord.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={BRAND_INFO.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-[#171715] hover:bg-[#22211E] border border-white/10 hover:border-[#C68A4C]/50 flex items-center justify-between text-xs transition-all"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-[#C68A4C]" />
                    <span className="text-[#FAF8F5] font-medium">Free Discord Community</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8E8B82]" />
                </a>

                <a
                  href={BRAND_INFO.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-[#171715] hover:bg-[#22211E] border border-white/10 hover:border-[#C68A4C]/50 flex items-center justify-between text-xs transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Youtube className="w-4 h-4 text-[#C68A4C]" />
                    <span className="text-[#FAF8F5] font-medium">YouTube Channel</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8E8B82]" />
                </a>

                <a
                  href={BRAND_INFO.spotifyPodcastUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-[#171715] hover:bg-[#22211E] border border-white/10 hover:border-[#C68A4C]/50 flex items-center justify-between text-xs transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Headphones className="w-4 h-4 text-[#C68A4C]" />
                    <span className="text-[#FAF8F5] font-medium">Spotify Podcast</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8E8B82]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promo banner */}
      <PromoCodeBanner />
    </div>
  );
};
