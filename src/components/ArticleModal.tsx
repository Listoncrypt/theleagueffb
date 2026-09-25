import React, { useEffect, useState } from 'react';
import { Article } from '../types';
import { X, Share2, Check } from 'lucide-react';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#121210] text-[#FAF8F5] border border-white/10 shadow-2xl overflow-y-auto z-10">
        {/* Top bar */}
        <div className="sticky top-0 bg-[#121210]/95 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C68A4C] font-mono">
            <span>{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.date}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-1.5 text-[#8E8B82] hover:text-[#FAF8F5] transition-colors focus:outline-none"
              title="Copy link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#8E8B82] hover:text-[#FAF8F5] transition-colors focus:outline-none cursor-pointer"
              aria-label="Close article modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Body */}
        <article className="p-6 sm:p-10 lg:p-14 max-w-2xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FAF8F5] leading-[1.15] font-medium tracking-tight">
              {article.title}
            </h1>
            <p className="text-base sm:text-lg text-[#C5C2BA] font-serif italic leading-relaxed">
              {article.description}
            </p>
          </div>

          <div className="w-full h-px bg-white/10" />

          {article.pullQuote && (
            <div className="py-4 border-y border-white/10 my-8">
              <blockquote className="font-serif text-xl sm:text-2xl italic text-[#FAF8F5] leading-snug pl-4 border-l-2 border-[#C68A4C]">
                "{article.pullQuote}"
              </blockquote>
            </div>
          )}

          <div className="space-y-6 text-[#D4D0C5] text-base sm:text-[17px] leading-[1.8] font-normal">
            {article.content.map((paragraph, idx) => (
              <p 
                key={idx} 
                className={idx === 0 ? 'editorial-dropcap text-[#FAF8F5]' : ''}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="mt-10 p-6 bg-[#171715] border border-white/10 space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-[#FAF8F5] font-semibold font-mono">
                Strategic Takeaways
              </h4>
              <ul className="space-y-2">
                {article.keyTakeaways.map((takeaway, i) => (
                  <li key={i} className="text-sm text-[#A3A096] flex items-start gap-2.5">
                    <span className="text-[#C68A4C] font-mono text-xs mt-1">0{i + 1}.</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E8B82]">
            <span>Published by {article.author}</span>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#FAF8F5] text-[#0A0A09] uppercase tracking-wider text-xs font-bold hover:bg-[#C68A4C] transition-colors"
            >
              Close Article
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};
