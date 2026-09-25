import React, { useEffect } from 'react';
import { VideoContent } from '../types';
import { X, Play, ArrowUpRight, Youtube } from 'lucide-react';

interface VideoModalProps {
  video: VideoContent | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (video) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-2xl bg-[#121210] text-[#FAF8F5] border border-white/10 shadow-2xl z-10 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C68A4C] font-mono">
            <Youtube className="w-4 h-4 text-red-500" />
            <span>The League FFB Video Episode</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#8E8B82] hover:text-[#FAF8F5] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Simulation */}
        <div className="relative aspect-video bg-[#090908] flex flex-col items-center justify-center p-8 text-center border-b border-white/10">
          <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-4 cursor-pointer hover:scale-105 transition-transform group">
            <Play className="w-7 h-7 text-[#FAF8F5] fill-current ml-1 group-hover:text-[#C68A4C] transition-colors" />
          </div>
          <p className="text-xs uppercase tracking-widest text-[#8E8B82] font-mono mb-1">
            {video.duration} · {video.date}
          </p>
          <h3 className="font-serif text-xl sm:text-2xl text-[#FAF8F5] max-w-lg mb-4">
            {video.title}
          </h3>
          <a
            href={video.youtubeId}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C68A4C] text-[#090908] text-xs uppercase tracking-widest font-bold hover:bg-[#DF9F5B] transition-colors shadow-lg"
          >
            <span>Watch Full Breakdown on YouTube</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Notes */}
        <div className="p-6 space-y-4">
          <p className="text-sm text-[#A3A096] leading-relaxed">
            {video.description}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {video.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase font-mono tracking-wider px-2 py-1 bg-[#171715] border border-white/5 text-[#8E8B82]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
