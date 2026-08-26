import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Volume2, VolumeX } from 'lucide-react';

export const LaunchIntroVideo: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check if user has already experienced intro in this browser session
    const hasSeen = sessionStorage.getItem('prakash_purohit_intro_played');
    if (hasSeen === 'true') {
      setIsVisible(false);
      return;
    }

    // Auto attempt video play
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback for browser autoplay policies
      });
    }

    // Automatically transition into the website after exactly 4 seconds
    const autoDismissTimer = setTimeout(() => {
      handleDismiss();
    }, 4000);

    return () => clearTimeout(autoDismissTimer);
  }, []);

  const handleDismiss = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('prakash_purohit_intro_played', 'true');
    }, 700);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  if (!isVisible) return null;

  return (
    <div
      onClick={handleDismiss}
      className={`fixed inset-0 z-[99999] w-screen h-screen overflow-hidden bg-black transition-opacity duration-700 cursor-pointer ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      }`}
    >
      {/* Edge-to-Edge Fullscreen OM Video */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted={isMuted}
        onEnded={handleDismiss}
        className="w-full h-full object-cover object-center scale-100"
        poster="/reference-hero.png"
      >
        <source src="/om-intro.mp4" type="video/mp4" />
        <source src="/OM-WRITTTING-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Subtle Cinematic Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

      {/* Top Right Sound Toggle */}
      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20 flex items-center gap-3">
        <button
          onClick={toggleMute}
          className="p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-amber-200 border border-gold/40 backdrop-blur-md transition-all active:scale-95 text-xs flex items-center gap-1.5 shadow-md"
          aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-300" />}
        </button>
      </div>

      {/* Bottom Floating Skip / Enter Website Button */}
      <div className="absolute bottom-6 sm:bottom-8 right-4 sm:right-8 z-20">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleDismiss();
          }}
          className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white hover:text-amber-200 text-xs sm:text-sm font-serif font-semibold tracking-wider border border-gold/50 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <span>Skip Intro</span>
          <ArrowRight className="w-3.5 h-3.5 text-gold" />
        </button>
      </div>
    </div>
  );
};
