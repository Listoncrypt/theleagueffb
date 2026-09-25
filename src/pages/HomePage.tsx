import React from 'react';
import { motion } from 'motion/react';
import { NavigationRoute } from '../types';
import { BRAND_INFO, DISCORD_COMMUNITY_CHANNELS, PODCAST_CHANNELS, VIDEO_SHOWCASES } from '../data/content';
import { PromoCodeBanner } from '../components/PromoCodeBanner';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Play, 
  Headphones, 
  MessageSquare, 
  ShieldCheck, 
  Award, 
  Radio, 
  CheckCircle2, 
  Sparkles, 
  Flame,
  Clock,
  Layers,
  Target
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: NavigationRoute) => void;
  onReadArticle?: (article: any) => void;
  onWatchVideo?: (video: any) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0 text-[#FAF8F5]">
      {/* 1. HERO SECTION: Cinematic, Restrained, High-Impact */}
      <section className="relative pt-16 sm:pt-24 pb-20 sm:pb-32 px-6 sm:px-8 lg:px-12 border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Brand Kicker with staggered animation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#C68A4C] mb-6 font-mono font-medium"
          >
            <span>Independent Football Media & Analytics</span>
            <span aria-hidden="true" className="text-white/30">·</span>
            <span>Est. Dynasty Intelligence</span>
          </motion.div>

          {/* Main Title & Tagline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-baseline mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="lg:col-span-8"
            >
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight text-[#FAF8F5] leading-[1.02]">
                THE LEAGUE FFB
              </h1>
              <p className="mt-4 font-serif text-2xl sm:text-3xl lg:text-4xl text-[#C5C2BA] italic font-normal">
                All Things Dynasty Fantasy Football & NFL
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="lg:col-span-4 lg:pl-4 space-y-4"
            >
              <p className="text-sm text-[#A3A096] leading-relaxed">
                Strategic asset insulation, NFL coaching scheme film breakdowns, rookie draft capital analysis, and customized dynasty roster audits.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => onNavigate('dynasty')}
                  className="px-5 py-2.5 bg-[#FAF8F5] text-[#0A0A09] text-xs uppercase tracking-wider font-semibold hover:bg-[#EAE6DF] hover:-translate-y-0.5 transition-all shadow-lg focus:outline-none cursor-pointer"
                >
                  Explore Dynasty
                </button>
                <button
                  onClick={() => onNavigate('team-reviews')}
                  className="px-5 py-2.5 bg-[#171715] text-[#FAF8F5] hover:text-[#C68A4C] border border-white/10 hover:border-[#C68A4C]/50 text-xs uppercase tracking-wider font-semibold hover:-translate-y-0.5 transition-all focus:outline-none cursor-pointer"
                >
                  Request Team Review
                </button>
              </div>
            </motion.div>
          </div>

          {/* Quick Action Navigation Grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 border border-white/10 divide-x divide-y md:divide-y-0 divide-white/10 bg-[#0E0E0D]/80 backdrop-blur-md"
          >
            <button
              onClick={() => onNavigate('team-reviews')}
              className="p-5 text-left group hover:bg-[#1A1917] transition-colors focus:outline-none cursor-pointer"
            >
              <span className="text-[10px] uppercase tracking-widest text-[#C68A4C] block mb-1 font-mono font-semibold">
                Roster Audit
              </span>
              <span className="text-sm font-serif font-medium text-[#FAF8F5] group-hover:text-[#C68A4C] transition-colors flex items-center justify-between">
                <span>Team Reviews</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button
              onClick={() => onNavigate('rookie-draft-kit')}
              className="p-5 text-left group hover:bg-[#1A1917] transition-colors focus:outline-none cursor-pointer"
            >
              <span className="text-[10px] uppercase tracking-widest text-[#C68A4C] block mb-1 font-mono font-semibold">
                Prospect Scouting
              </span>
              <span className="text-sm font-serif font-medium text-[#FAF8F5] group-hover:text-[#C68A4C] transition-colors flex items-center justify-between">
                <span>Rookie Draft Kit</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <a
              href={BRAND_INFO.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 text-left group hover:bg-[#1A1917] transition-colors"
            >
              <span className="text-[10px] uppercase tracking-widest text-[#C68A4C] block mb-1 font-mono font-semibold">
                Film & Video
              </span>
              <span className="text-sm font-serif font-medium text-[#FAF8F5] group-hover:text-[#C68A4C] transition-colors flex items-center justify-between">
                <span>Watch YouTube</span>
                <Play className="w-3.5 h-3.5 opacity-60 group-hover:scale-110 transition-transform text-[#C68A4C]" />
              </span>
            </a>

            <a
              href={BRAND_INFO.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 text-left group hover:bg-[#1A1917] transition-colors"
            >
              <span className="text-[10px] uppercase tracking-widest text-[#C68A4C] block mb-1 font-mono font-semibold">
                Free Community
              </span>
              <span className="text-sm font-serif font-medium text-[#FAF8F5] group-hover:text-[#C68A4C] transition-colors flex items-center justify-between">
                <span>Join Discord</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>

            <a
              href={PODCAST_CHANNELS.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-2 md:col-span-4 lg:col-span-1 p-5 text-left group hover:bg-[#1A1917] transition-colors"
            >
              <span className="text-[10px] uppercase tracking-widest text-[#C68A4C] block mb-1 font-mono font-semibold">
                Audio Show
              </span>
              <span className="text-sm font-serif font-medium text-[#FAF8F5] group-hover:text-[#C68A4C] transition-colors flex items-center justify-between">
                <span>Podcast Stream</span>
                <Headphones className="w-3.5 h-3.5 opacity-60 text-[#C68A4C]" />
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. TEAM REVIEWS SPOTLIGHT: Primary Conversion Point */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Headline, Description & CTA */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C68A4C] font-mono font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Custom Roster Audits</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#FAF8F5] leading-tight">
                REQUEST A DYNASTY <br className="hidden sm:block" />TEAM REVIEW
              </h2>

              <p className="font-serif text-xl sm:text-2xl text-[#C5C2BA] italic">
                Get an in-depth analytical audit and customized 18-month competitive roadmap for your roster.
              </p>

              <p className="text-sm text-[#A3A096] leading-relaxed max-w-xl">
                Submit your starting lineup, scoring settings, future draft capital, and league platform. Every review is tailored with scoring-adjusted valuations, contending window diagnosis, and actionable trade targets.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 pb-2">
                <div className="p-4 bg-[#141412]/80 border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-[#FAF8F5] text-xs font-mono font-semibold">
                    <Clock className="w-3.5 h-3.5 text-[#C68A4C]" />
                    <span>48–72H Turnaround</span>
                  </div>
                  <p className="text-[11px] text-[#8E8B82]">Prompt personalized evaluation delivered to your email.</p>
                </div>
                <div className="p-4 bg-[#141412]/80 border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-[#FAF8F5] text-xs font-mono font-semibold">
                    <Target className="w-3.5 h-3.5 text-[#C68A4C]" />
                    <span>Custom Scoring</span>
                  </div>
                  <p className="text-[11px] text-[#8E8B82]">Adjusted for Superflex, TEP, and custom starters.</p>
                </div>
                <div className="p-4 bg-[#141412]/80 border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-[#FAF8F5] text-xs font-mono font-semibold">
                    <Layers className="w-3.5 h-3.5 text-[#C68A4C]" />
                    <span>Trade Roadmap</span>
                  </div>
                  <p className="text-[11px] text-[#8E8B82]">Actionable buy/sell packages & pick strategy.</p>
                </div>
              </div>

              <div>
                <button
                  onClick={() => onNavigate('team-reviews')}
                  className="px-8 py-4 bg-[#FAF8F5] text-[#0A0A09] text-xs uppercase tracking-widest font-bold hover:bg-[#C68A4C] hover:text-[#0A0A09] hover:-translate-y-0.5 transition-all shadow-xl flex items-center gap-2 focus:outline-none cursor-pointer"
                >
                  <span>REQUEST A TEAM REVIEW</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Premium Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative border border-white/10 bg-[#121210]/90 backdrop-blur-xl p-8 sm:p-10 space-y-6 shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#C68A4C] font-semibold">
                    Audit Framework
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-[#8E8B82] font-mono">
                    All League Formats
                  </span>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#1C1B18] border border-[#C68A4C]/50 text-[#C68A4C] font-mono text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                      1
                    </span>
                    <div>
                      <h4 className="text-[#FAF8F5] font-semibold">Roster Composition & Value Insulation</h4>
                      <p className="text-[#8E8B82] text-[11px] mt-0.5">Evaluating cornerstone assets vs declining veterans.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#1C1B18] border border-[#C68A4C]/50 text-[#C68A4C] font-mono text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                      2
                    </span>
                    <div>
                      <h4 className="text-[#FAF8F5] font-semibold">Competitive Window Diagnosis</h4>
                      <p className="text-[#8E8B82] text-[11px] mt-0.5">Title push vs productive struggle strategy alignment.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#1C1B18] border border-[#C68A4C]/50 text-[#C68A4C] font-mono text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                      3
                    </span>
                    <div>
                      <h4 className="text-[#FAF8F5] font-semibold">Draft Pick Capital Allocation</h4>
                      <p className="text-[#8E8B82] text-[11px] mt-0.5">Optimizing liquidity before rookie market inflation.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#8E8B82]">
                  <span>Sleeper · MFL · ESPN · Yahoo</span>
                  <span className="text-[#C68A4C] font-mono font-medium">10-16 Teams</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. ROOKIE DRAFT KIT SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-b border-white/10 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Box */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="p-8 sm:p-10 border border-white/10 bg-[#121210]/90 backdrop-blur-xl space-y-6">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C68A4C] font-mono font-semibold">
                  <Award className="w-4 h-4" />
                  <span>Draft Season Intelligence</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5] font-medium">
                  Tier Breaks & Capital Elasticity
                </h3>
                <p className="text-xs text-[#A3A096] leading-relaxed">
                  Avoid linear consensus rankings. Master the art of trading back within prospect tiers and acquiring compound draft capital year over year.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('rookie-draft-kit')}
                    className="w-full py-3.5 bg-[#FAF8F5] text-[#0A0A09] text-xs uppercase tracking-widest font-bold hover:bg-[#C68A4C] transition-all flex items-center justify-center gap-2 focus:outline-none cursor-pointer"
                  >
                    <span>GET THE ROOKIE DRAFT KIT</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Details */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C68A4C] font-mono font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>Rookie Draft Blueprint</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#FAF8F5]">
                ROOKIE DRAFT KIT
              </h2>

              <p className="font-serif text-xl sm:text-2xl text-[#C5C2BA] italic">
                Strategic prospect tiering, draft capital valuation models, and landing spot breakdowns.
              </p>

              <p className="text-sm text-[#A3A096] leading-relaxed max-w-xl">
                Built to help you navigate Superflex and 1QB rookie drafts with clarity. We focus on collegiate metrics that correlate directly to early-career NFL target share and backfield runway.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#141412]/80 border border-white/5 space-y-1">
                  <h4 className="text-xs font-serif font-medium text-[#FAF8F5]">Draft Capital Hierarchy</h4>
                  <p className="text-[11px] text-[#8E8B82]">Understanding organizational runway and guarantee thresholds.</p>
                </div>
                <div className="p-4 bg-[#141412]/80 border border-white/5 space-y-1">
                  <h4 className="text-xs font-serif font-medium text-[#FAF8F5]">Trade-Back Matrices</h4>
                  <p className="text-[11px] text-[#8E8B82]">Extracting maximum liquidity when tier drop-offs are minimal.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. DISCORD COMMUNITY SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="border border-white/10 bg-[#121210]/85 backdrop-blur-xl p-8 sm:p-14 relative overflow-hidden">
            <div className="max-w-3xl space-y-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C68A4C] font-mono font-semibold">
                <MessageSquare className="w-4 h-4" />
                <span>The League Community</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#FAF8F5]">
                JOIN THE FREE DISCORD
              </h2>

              <p className="font-serif text-xl sm:text-2xl text-[#C5C2BA] italic">
                Connect with other Dynasty Fantasy Football players and follow The League FFB community.
              </p>

              <p className="text-sm text-[#A3A096] leading-relaxed max-w-xl">
                Get real-time feedback on your trade proposals, discuss live NFL games, share rookie scouting notes, and participate in mock drafts with active dynasty managers.
              </p>

              <div className="pt-2">
                <a
                  href={BRAND_INFO.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#FAF8F5] text-[#0A0A09] text-xs uppercase tracking-widest font-bold hover:bg-[#C68A4C] hover:text-[#0A0A09] hover:-translate-y-0.5 transition-all shadow-xl focus:outline-none"
                >
                  <span>JOIN DISCORD</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Channels Grid */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {DISCORD_COMMUNITY_CHANNELS.slice(0, 3).map((ch) => (
                <div key={ch.name} className="p-4 bg-[#171715]/70 border border-white/5 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#C68A4C] font-medium">
                    <span>#</span>
                    <span>{ch.name}</span>
                  </div>
                  <p className="text-[11px] text-[#8E8B82] leading-relaxed">
                    {ch.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* 5. OFFICIAL PROMO CODE */}
      <PromoCodeBanner />

      {/* 6. WATCH / VIDEO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C68A4C] font-mono font-semibold mb-3">
                <Play className="w-3.5 h-3.5" />
                <span>YouTube Media Series</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#FAF8F5]">
                START WATCHING HERE
              </h2>
            </div>
            <a
              href={BRAND_INFO.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-[#C68A4C] hover:text-[#FAF8F5] transition-colors"
            >
              <span>Visit Official Channel</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="border border-white/10 bg-[#121210]/90 backdrop-blur-xl p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs uppercase tracking-widest font-mono text-[#C68A4C] font-semibold block">
                  Featured Series
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5] font-medium">
                  {VIDEO_SHOWCASES[0].title}
                </h3>
                <p className="text-sm text-[#A3A096] leading-relaxed">
                  {VIDEO_SHOWCASES[0].description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {VIDEO_SHOWCASES[0].tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 bg-[#1A1917] border border-white/5 text-[#8E8B82]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-start lg:justify-end">
                <a
                  href={BRAND_INFO.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#C68A4C] text-[#0A0A09] hover:bg-[#DF9F5B] text-xs uppercase tracking-widest font-bold hover:-translate-y-0.5 transition-all shadow-xl flex items-center gap-2 focus:outline-none"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>WATCH ON YOUTUBE</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 7. PODCAST SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="border border-white/10 bg-[#121210]/90 backdrop-blur-xl p-8 sm:p-14 space-y-8">
            <div className="max-w-2xl space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C68A4C] font-mono font-semibold">
                <Headphones className="w-4 h-4" />
                <span>Audio Broadcast</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#FAF8F5]">
                LISTEN TO THE LEAGUE FFB
              </h2>
              <p className="text-sm text-[#A3A096] leading-relaxed">
                {PODCAST_CHANNELS.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={PODCAST_CHANNELS.appleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#171715] hover:bg-[#22211E] text-[#FAF8F5] border border-white/10 hover:border-[#C68A4C]/50 text-xs uppercase tracking-wider font-semibold hover:-translate-y-0.5 transition-all focus:outline-none"
              >
                <Radio className="w-4 h-4 text-[#C68A4C]" />
                <span>LISTEN ON APPLE</span>
              </a>

              <a
                href={PODCAST_CHANNELS.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#171715] hover:bg-[#22211E] text-[#FAF8F5] border border-white/10 hover:border-[#C68A4C]/50 text-xs uppercase tracking-wider font-semibold hover:-translate-y-0.5 transition-all focus:outline-none"
              >
                <Headphones className="w-4 h-4 text-[#C68A4C]" />
                <span>LISTEN ON SPOTIFY</span>
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 8. LATEST CONTENT / EDITORIAL STATUS */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12"
      >
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-mono text-[#C68A4C] font-semibold block mb-2">
                Editorial Wire
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#FAF8F5]">
                LATEST FROM THE LEAGUE
              </h2>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="text-xs uppercase tracking-widest font-mono text-[#A3A096] hover:text-[#FAF8F5] transition-colors focus:outline-none cursor-pointer"
            >
              Get Notified
            </button>
          </div>

          <div className="p-8 sm:p-12 border border-white/10 bg-[#121210]/60 backdrop-blur-md text-center space-y-4">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#1A1917] border border-white/10 text-[#C68A4C]">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl text-[#FAF8F5] font-medium">
              New Content Dropping Continuously
            </h3>
            <p className="text-xs text-[#8E8B82] max-w-md mx-auto leading-relaxed">
              Official written breakdowns and scouting reports will be published here. Join our Discord community and subscribe on YouTube to catch live drops in real time.
            </p>
            <div className="pt-2">
              <a
                href={BRAND_INFO.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#FAF8F5] text-[#0A0A09] text-xs uppercase tracking-widest font-semibold hover:bg-[#C68A4C] transition-colors"
              >
                <span>Follow Real-Time Drops</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
