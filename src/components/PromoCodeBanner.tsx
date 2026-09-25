import React, { useState } from 'react';
import { Copy, Check, Sparkles } from 'lucide-react';
import { PROMO_CODE } from '../data/content';

interface PromoCodeBannerProps {
  className?: string;
}

export const PromoCodeBanner: React.FC<PromoCodeBannerProps> = ({ className = '' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(PROMO_CODE);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = PROMO_CODE;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <section className={`border-y border-white/10 bg-[#0E0E0D]/80 backdrop-blur-md py-10 px-6 sm:px-8 relative overflow-hidden ${className}`}>
      {/* Subtle background glow */}
      <div className="absolute -right-20 -top-20 w-72 h-72 bg-[#C68A4C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="text-center md:text-left space-y-1.5">
          <div className="flex items-center justify-center md:justify-start gap-2 text-[11px] uppercase tracking-widest text-[#C68A4C] font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Partner Perk</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5] font-medium">
            Use Code: <span className="font-mono text-2xl tracking-wider text-[#C68A4C]">{PROMO_CODE}</span>
          </h3>
          <p className="text-xs text-[#A3A096] max-w-lg leading-relaxed">
            Unlock exclusive community bonuses, partner perks, and access across official League FFB platforms.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
          <div className="px-5 py-2.5 bg-[#171715] border border-white/10 font-mono text-base tracking-widest font-semibold text-[#FAF8F5] select-all shadow-inner">
            {PROMO_CODE}
          </div>
          <button
            onClick={handleCopy}
            className={`inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs uppercase tracking-wider font-semibold transition-all focus:outline-none cursor-pointer ${
              copied
                ? 'bg-[#1E3A24] text-[#86EFAC] border border-[#22C55E]/40 shadow-lg shadow-emerald-950/50 scale-105'
                : 'bg-[#C68A4C] text-[#090908] hover:bg-[#DF9F5B] border border-[#C68A4C] hover:-translate-y-0.5 shadow-lg shadow-black/40'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>COPIED</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>COPY CODE</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
