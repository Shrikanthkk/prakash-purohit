import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import type { GalleryItem } from '../data/galleryData';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onNavigate,
}) => {
  const currentIndex = item ? items.findIndex((i) => i.id === item.id) : -1;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && currentIndex > 0) onNavigate(currentIndex - 1);
      if (e.key === 'ArrowRight' && currentIndex < items.length - 1) onNavigate(currentIndex + 1);
    };

    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, currentIndex, items.length, onClose, onNavigate]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Lightbox Container */}
      <div
        className="relative max-w-4xl w-full flex flex-col items-center max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="w-full flex items-center justify-between py-2 text-white/90 mb-2">
          <span className="text-xs font-serif uppercase tracking-widest text-amber-300">
            {item.category} • {currentIndex + 1} of {items.length}
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Image Frame */}
        <div className="relative w-full rounded-2xl overflow-hidden bg-black/50 border border-gold/40 shadow-2xl flex items-center justify-center max-h-[70vh]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full max-h-[68vh] object-contain"
          />

          {/* Prev Button */}
          {currentIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(currentIndex - 1);
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all hover:scale-110"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next Button */}
          {currentIndex < items.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(currentIndex + 1);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all hover:scale-110"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Caption Card */}
        <div className="w-full mt-3 p-4 rounded-2xl bg-spiritual-dark/85 border border-gold/30 text-white space-y-1 backdrop-blur-sm">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h3 className="font-serif text-lg font-bold text-amber-200">
              {item.title}
            </h3>
            {item.location && (
              <span className="flex items-center gap-1 text-xs text-stone-300">
                <MapPin className="w-3.5 h-3.5 text-saffron" />
                <span>{item.location}</span>
              </span>
            )}
          </div>
          <p className="text-xs sm:text-sm text-stone-300">
            {item.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
