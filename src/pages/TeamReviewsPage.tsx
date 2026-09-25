import React, { useState } from 'react';
import { motion } from 'motion/react';
import { NavigationRoute, TeamReviewSubmission } from '../types';
import { PromoCodeBanner } from '../components/PromoCodeBanner';
import { CheckCircle2, Clock, ShieldCheck, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';

interface TeamReviewsPageProps {
  onNavigate?: (route: NavigationRoute) => void;
}

export const TeamReviewsPage: React.FC<TeamReviewsPageProps> = () => {
  const [formData, setFormData] = useState({
    managerName: '',
    email: '',
    leaguePlatform: 'Sleeper',
    teamCount: '12-Team',
    scoringFormat: 'PPR',
    qbFormat: 'Superflex' as 'Superflex' | '1QB',
    tePremium: '1.5 TEP',
    startingLineup: '1QB / 2RB / 3WR / 1TE / 2FLEX / 1SF',
    roster: '',
    competitiveWindow: 'Contender' as TeamReviewSubmission['competitiveWindow'],
    specificConcerns: '',
    futureDraftCapital: '2026 1.04, 2026 2.04, 2027 1st, 2027 2nd',
  });

  const [submittedReview, setSubmittedReview] = useState<TeamReviewSubmission | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const review: TeamReviewSubmission = {
        id: `REV-${Math.floor(100000 + Math.random() * 900000)}`,
        ...formData,
        submittedAt: new Date().toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        }),
      };
      setSubmittedReview(review);
      setIsSubmitting(false);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }, 450);
  };

  const handleReset = () => {
    setSubmittedReview(null);
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
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Independent Audit Service</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-8"
            >
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#FAF8F5]">
                Request a Dynasty Team Review
              </h1>
              <p className="mt-4 font-serif text-xl sm:text-2xl text-[#C5C2BA] italic max-w-2xl">
                Submit your complete dynasty roster for an in-depth analytical audit and customized 18-month competitive roadmap.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-4"
            >
              <div className="p-5 border border-white/10 bg-[#121210]/90 backdrop-blur-xl space-y-2 text-xs text-[#A3A096]">
                <div className="flex items-center gap-2 text-[#FAF8F5] font-semibold uppercase tracking-wider font-mono">
                  <Clock className="w-3.5 h-3.5 text-[#C68A4C]" />
                  <span>Turnaround Window: 48–72h</span>
                </div>
                <p>
                  Every review is conducted personally with league-specific scoring variables, market insulation analysis, and direct trade recommendations.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Three Audit Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-[#121210]/80 backdrop-blur-xl">
            <div className="p-6 sm:p-8 space-y-2">
              <span className="font-mono text-xs text-[#C68A4C] font-semibold">STEP 01</span>
              <h3 className="font-serif text-lg text-[#FAF8F5] font-medium">Roster & Scoring Profile</h3>
              <p className="text-xs text-[#8E8B82] leading-relaxed">
                We dissect your starters, depth, taxi squad, and future draft capital against your specific league rules.
              </p>
            </div>
            <div className="p-6 sm:p-8 space-y-2">
              <span className="font-mono text-xs text-[#C68A4C] font-semibold">STEP 02</span>
              <h3 className="font-serif text-lg text-[#FAF8F5] font-medium">Trajectory & Risk Assessment</h3>
              <p className="text-xs text-[#8E8B82] leading-relaxed">
                Identify aging cliff players, overvalued assets, and determine whether your true odds favor a title push or a reset.
              </p>
            </div>
            <div className="p-6 sm:p-8 space-y-2">
              <span className="font-mono text-xs text-[#C68A4C] font-semibold">STEP 03</span>
              <h3 className="font-serif text-lg text-[#FAF8F5] font-medium">Actionable Trade Roadmap</h3>
              <p className="text-xs text-[#8E8B82] leading-relaxed">
                Receive specific buy-low targets, sell-high packaging concepts, and draft pick allocation guidelines for the next 18 months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form or Submission Confirmation */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 lg:px-12 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          {submittedReview ? (
            /* Successful Submission View */
            <div className="border border-[#22C55E]/30 bg-[#121210]/95 backdrop-blur-xl p-8 sm:p-12 space-y-8 animate-in fade-in duration-300 shadow-2xl">
              <div className="flex items-center gap-3 text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
                <div>
                  <span className="text-xs uppercase tracking-widest font-mono text-emerald-500 block">
                    Review Request Confirmed
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5] font-medium">
                    Submission Received: {submittedReview.id}
                  </h2>
                </div>
              </div>

              <div className="border-y border-white/10 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs font-mono">
                <div>
                  <span className="text-[#8E8B82] block mb-1">MANAGER</span>
                  <span className="text-[#FAF8F5] font-semibold">{submittedReview.managerName}</span>
                </div>
                <div>
                  <span className="text-[#8E8B82] block mb-1">LEAGUE</span>
                  <span className="text-[#FAF8F5] font-semibold">{submittedReview.teamCount} {submittedReview.qbFormat}</span>
                </div>
                <div>
                  <span className="text-[#8E8B82] block mb-1">SCORING</span>
                  <span className="text-[#FAF8F5] font-semibold">{submittedReview.scoringFormat} ({submittedReview.tePremium})</span>
                </div>
                <div>
                  <span className="text-[#8E8B82] block mb-1">WINDOW</span>
                  <span className="text-[#C68A4C] font-semibold">{submittedReview.competitiveWindow}</span>
                </div>
              </div>

              <div className="space-y-3 text-xs text-[#A3A096] leading-relaxed">
                <p>
                  Thank you for submitting your roster audit request. Our evaluation team is analyzing your team's scoring efficiency, roster inflection points, and trade market opportunities.
                </p>
                <p>
                  Your customized audit breakdown will be sent to <strong className="text-[#FAF8F5]">{submittedReview.email}</strong> within 48 to 72 hours.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C1B18] text-[#FAF8F5] border border-white/10 text-xs uppercase tracking-wider font-semibold hover:border-white/30 transition-colors focus:outline-none cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Submit Another Roster</span>
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Audit Form */
            <form onSubmit={handleSubmit} className="border border-white/10 bg-[#121210]/90 backdrop-blur-xl p-8 sm:p-12 space-y-10 shadow-2xl">
              <div className="space-y-2 border-b border-white/10 pb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-[#C68A4C] font-semibold block">
                  Confidential Submission
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5] font-medium">
                  Dynasty Team Details
                </h2>
                <p className="text-xs text-[#8E8B82]">
                  Please provide as much context as possible regarding your league structure and current roster.
                </p>
              </div>

              {/* Section 1: Manager & Contact */}
              <div className="space-y-6">
                <h3 className="text-xs uppercase tracking-widest font-mono text-[#FAF8F5] font-semibold">
                  01. Manager Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs text-[#FAF8F5] font-medium block">
                      Manager / Team Name <span className="text-[#C68A4C]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.managerName}
                      onChange={(e) => setFormData({ ...formData, managerName: e.target.value })}
                      placeholder="e.g. Gotham Juggernauts"
                      className="w-full px-4 py-3 bg-[#171715] border border-white/10 text-[#FAF8F5] text-xs focus:border-[#C68A4C] focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-[#FAF8F5] font-medium block">
                      Email Address <span className="text-[#C68A4C]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. manager@example.com"
                      className="w-full px-4 py-3 bg-[#171715] border border-white/10 text-[#FAF8F5] text-xs focus:border-[#C68A4C] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: League Format Settings */}
              <div className="space-y-6 pt-4 border-t border-white/10">
                <h3 className="text-xs uppercase tracking-widest font-mono text-[#FAF8F5] font-semibold">
                  02. League Rules & Parameters
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs text-[#FAF8F5] font-medium block">Platform</label>
                    <select
                      value={formData.leaguePlatform}
                      onChange={(e) => setFormData({ ...formData, leaguePlatform: e.target.value })}
                      className="w-full px-4 py-3 bg-[#171715] border border-white/10 text-[#FAF8F5] text-xs focus:border-[#C68A4C] focus:outline-none transition-colors"
                    >
                      <option value="Sleeper">Sleeper</option>
                      <option value="MFL (MyFantasyLeague)">MFL</option>
                      <option value="ESPN">ESPN</option>
                      <option value="Yahoo">Yahoo</option>
                      <option value="Fantrax">Fantrax</option>
                      <option value="FFPC">FFPC</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-[#FAF8F5] font-medium block">Team Count</label>
                    <select
                      value={formData.teamCount}
                      onChange={(e) => setFormData({ ...formData, teamCount: e.target.value })}
                      className="w-full px-4 py-3 bg-[#171715] border border-white/10 text-[#FAF8F5] text-xs focus:border-[#C68A4C] focus:outline-none transition-colors"
                    >
                      <option value="10-Team">10-Team</option>
                      <option value="12-Team">12-Team (Standard)</option>
                      <option value="14-Team">14-Team</option>
                      <option value="16-Team">16-Team</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-[#FAF8F5] font-medium block">Quarterback Format</label>
                    <select
                      value={formData.qbFormat}
                      onChange={(e) => setFormData({ ...formData, qbFormat: e.target.value as any })}
                      className="w-full px-4 py-3 bg-[#171715] border border-white/10 text-[#FAF8F5] text-xs focus:border-[#C68A4C] focus:outline-none transition-colors"
                    >
                      <option value="Superflex">Superflex (2QB)</option>
                      <option value="1QB">1QB Standard</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-[#FAF8F5] font-medium block">TE Premium</label>
                    <select
                      value={formData.tePremium}
                      onChange={(e) => setFormData({ ...formData, tePremium: e.target.value })}
                      className="w-full px-4 py-3 bg-[#171715] border border-white/10 text-[#FAF8F5] text-xs focus:border-[#C68A4C] focus:outline-none transition-colors"
                    >
                      <option value="No TEP">No TEP (Standard PPR)</option>
                      <option value="0.5 TEP">0.5 TEP (1.5 PPR)</option>
                      <option value="1.0 TEP">1.0 TEP (2.0 PPR)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-[#FAF8F5] font-medium block">
                    Starting Lineup Requirements
                  </label>
                  <input
                    type="text"
                    value={formData.startingLineup}
                    onChange={(e) => setFormData({ ...formData, startingLineup: e.target.value })}
                    placeholder="e.g. 1QB / 2RB / 3WR / 1TE / 2FLEX / 1SF"
                    className="w-full px-4 py-3 bg-[#171715] border border-white/10 text-[#FAF8F5] text-xs focus:border-[#C68A4C] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Section 3: Complete Roster & Draft Capital */}
              <div className="space-y-6 pt-4 border-t border-white/10">
                <h3 className="text-xs uppercase tracking-widest font-mono text-[#FAF8F5] font-semibold">
                  03. Roster & Future Draft Capital
                </h3>
                
                <div className="space-y-2">
                  <label className="text-xs text-[#FAF8F5] font-medium block">
                    Complete Roster (Starters, Bench & Taxi) <span className="text-[#C68A4C]">*</span>
                  </label>
                  <textarea
                    rows={6}
                    required
                    value={formData.roster}
                    onChange={(e) => setFormData({ ...formData, roster: e.target.value })}
                    placeholder="Paste your players or roster export here:&#10;QBs: ...&#10;RBs: ...&#10;WRs: ...&#10;TEs: ..."
                    className="w-full px-4 py-3 bg-[#171715] border border-white/10 text-[#FAF8F5] text-xs font-mono focus:border-[#C68A4C] focus:outline-none transition-colors leading-relaxed"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-[#FAF8F5] font-medium block">
                    Future Draft Capital (Next 2-3 Years) <span className="text-[#C68A4C]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.futureDraftCapital}
                    onChange={(e) => setFormData({ ...formData, futureDraftCapital: e.target.value })}
                    placeholder="e.g. 2026 1.04, 2026 2.04, all own 2027 picks"
                    className="w-full px-4 py-3 bg-[#171715] border border-white/10 text-[#FAF8F5] text-xs focus:border-[#C68A4C] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Section 4: Self-Assessment */}
              <div className="space-y-6 pt-4 border-t border-white/10">
                <h3 className="text-xs uppercase tracking-widest font-mono text-[#FAF8F5] font-semibold">
                  04. Competitive Assessment & Specific Concerns
                </h3>

                <div className="space-y-2">
                  <label className="text-xs text-[#FAF8F5] font-medium block">
                    Perceived Competitive Window
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {(['Contender', 'Productive Rebuild', 'Middle of the Pack', 'Uncertain'] as const).map((win) => (
                      <button
                        type="button"
                        key={win}
                        onClick={() => setFormData({ ...formData, competitiveWindow: win })}
                        className={`p-3 text-xs uppercase font-mono tracking-wider text-center border transition-all focus:outline-none cursor-pointer ${
                          formData.competitiveWindow === win
                            ? 'bg-[#C68A4C] text-[#090908] border-[#C68A4C] font-bold'
                            : 'bg-[#171715] text-[#A3A096] border-white/10 hover:border-white/30'
                        }`}
                      >
                        {win}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-[#FAF8F5] font-medium block">
                    Specific Questions or Dilemmas (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.specificConcerns}
                    onChange={(e) => setFormData({ ...formData, specificConcerns: e.target.value })}
                    placeholder="e.g. Should I trade away my veteran WRs now or hold until in-season? How should I handle the 1.04 pick?"
                    className="w-full px-4 py-3 bg-[#171715] border border-white/10 text-[#FAF8F5] text-xs focus:border-[#C68A4C] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[11px] text-[#8E8B82]">
                  Turnaround window: 48–72 hours via email.
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-4 bg-[#FAF8F5] text-[#0A0A09] text-xs uppercase tracking-widest font-bold hover:bg-[#C68A4C] transition-all shadow-xl flex items-center justify-center gap-2 focus:outline-none cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Roster Profile...</span>
                  ) : (
                    <>
                      <span>SUBMIT TEAM REVIEW REQUEST</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Promo banner */}
      <PromoCodeBanner />
    </div>
  );
};
