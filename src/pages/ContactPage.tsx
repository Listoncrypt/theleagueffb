import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PromoCodeBanner } from '../components/PromoCodeBanner';
import { BRAND_INFO } from '../data/content';
import { Mail, CheckCircle2, ArrowRight, ArrowUpRight, MessageSquare, ShieldCheck } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Team Review Inquiry',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
    }, 400);
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
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-8"
            >
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#FAF8F5]">
                Contact & Inquiries
              </h1>
              <p className="mt-4 font-serif text-xl sm:text-2xl text-[#C5C2BA] italic max-w-2xl">
                Get in touch regarding team reviews, media collaborations, sponsorship opportunities, or general questions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-4"
            >
              <p className="text-xs sm:text-sm text-[#A3A096] leading-relaxed">
                For rapid trade advice and live league discussion, we recommend joining our free Discord server where our community answers in real time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form & Channels Grid */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
          {/* Form Column */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="border border-emerald-500/30 bg-[#121210]/95 backdrop-blur-xl p-8 sm:p-12 space-y-6 shadow-2xl">
                <div className="flex items-center gap-3 text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                  <div>
                    <span className="text-xs uppercase tracking-widest font-mono text-emerald-500 block">
                      Message Dispatched
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5] font-medium">
                      Thank You, {formData.name}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-[#A3A096] leading-relaxed">
                  Your inquiry regarding <strong className="text-[#FAF8F5]">{formData.inquiryType}</strong> has been received by The League FFB desk. We typically respond to all correspondence within 24–48 hours.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        inquiryType: 'Team Review Inquiry',
                        subject: '',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 bg-[#FAF8F5] text-[#0A0A09] text-xs uppercase tracking-widest font-semibold hover:bg-[#C68A4C] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border border-white/10 bg-[#121210]/90 backdrop-blur-xl p-8 sm:p-10 space-y-8 shadow-2xl">
                <div className="border-b border-white/10 pb-4">
                  <h3 className="font-serif text-2xl text-[#FAF8F5] font-medium">
                    Send a Direct Message
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs text-[#FAF8F5] font-medium block">
                      Your Name <span className="text-[#C68A4C]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
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
                      placeholder="manager@example.com"
                      className="w-full px-4 py-3 bg-[#171715] border border-white/10 text-[#FAF8F5] text-xs focus:border-[#C68A4C] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-[#FAF8F5] font-medium block">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-4 py-3 bg-[#171715] border border-white/10 text-[#FAF8F5] text-xs focus:border-[#C68A4C] focus:outline-none transition-colors"
                  >
                    <option value="Team Review Inquiry">Team Review / Roster Audit</option>
                    <option value="Rookie Draft Kit">Rookie Draft Kit Support</option>
                    <option value="Media & Podcast Collaboration">Media & Podcast Collaboration</option>
                    <option value="Sponsorship & Partnership">Sponsorship & Partnership</option>
                    <option value="General Feedback">General Feedback</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-[#FAF8F5] font-medium block">
                    Subject <span className="text-[#C68A4C]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Brief summary of your inquiry"
                    className="w-full px-4 py-3 bg-[#171715] border border-white/10 text-[#FAF8F5] text-xs focus:border-[#C68A4C] focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-[#FAF8F5] font-medium block">
                    Message <span className="text-[#C68A4C]">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we assist your dynasty journey?"
                    className="w-full px-4 py-3 bg-[#171715] border border-white/10 text-[#FAF8F5] text-xs focus:border-[#C68A4C] focus:outline-none transition-colors leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-4 bg-[#FAF8F5] text-[#0A0A09] text-xs uppercase tracking-widest font-bold hover:bg-[#C68A4C] transition-all shadow-xl flex items-center justify-center gap-2 focus:outline-none cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Dispatching Message...</span>
                  ) : (
                    <>
                      <span>TRANSMIT MESSAGE</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Direct Channels Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border border-white/10 bg-[#121210]/90 backdrop-blur-xl p-8 space-y-6 shadow-2xl">
              <span className="text-xs uppercase tracking-widest font-mono text-[#C68A4C] font-semibold block">
                Instant Access
              </span>
              <h4 className="font-serif text-2xl text-[#FAF8F5] font-medium">
                Real-Time Trade Advice
              </h4>
              <p className="text-xs text-[#A3A096] leading-relaxed">
                Need rapid advice on an active trade timer or in-draft decision? Head over to our Discord community for live feedback from active managers.
              </p>

              <div className="pt-2">
                <a
                  href={BRAND_INFO.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1C1B18] hover:bg-[#22211E] text-[#FAF8F5] border border-white/10 hover:border-[#C68A4C]/50 text-xs uppercase tracking-wider font-semibold transition-all w-full justify-between"
                >
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#C68A4C]" />
                    <span>Join Free Discord</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#C68A4C]" />
                </a>
              </div>
            </div>

            <div className="p-6 border border-white/10 bg-[#121210]/70 backdrop-blur-xl space-y-2 text-xs text-[#A3A096]">
              <div className="flex items-center gap-2 text-[#FAF8F5] font-semibold font-mono uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C68A4C]" />
                <span>Response Guarantee</span>
              </div>
              <p>
                All editorial, collaboration, and roster inquiries are monitored daily. Standard response time is within 24–48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promo banner */}
      <PromoCodeBanner />
    </div>
  );
};
