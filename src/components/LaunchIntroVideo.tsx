import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, ArrowRight, Volume2, VolumeX } from 'lucide-react';
import logoSvg from '../assets/logo.svg';

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
        // Fallback for browsers with strict autoplay policies
      });
    }

    // Fallback safety timer in case video fails or is long
    const autoDismissTimer = setTimeout(() => {
      handleDismiss();
    }, 7500);

    return () => clearTimeout(autoDismissTimer);
  }, []);

  const handleDismiss = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('prakash_purohit_intro_played', 'true');
    }, 700);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-between p-4 sm:p-6 bg-gradient-to-b from-[#180B04] via-[#241208] to-[#120702] transition-opacity duration-700 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      }`}
      style={{ backdropFilter: 'blur(20px)' }}
    >
      {/* Top Sacred Header */}
      <div className="w-full max-w-4xl flex items-center justify-between pt-2 sm:pt-4 z-10">
        <div className="flex items-center gap-2">
          <img
            src={logoSvg}
            alt="Suryaprakash Purohit"
            className="h-9 sm:h-11 w-auto object-contain filter drop-shadow-md"
          />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-gold/30 text-amber-200 text-[11px] sm:text-xs font-serif">
          <Sparkles className="w-3 h-3 text-gold" />
          <span>Vedic Invocations</span>
        </div>
      </div>

      {/* Center OM Writing Video Frame */}
      <div className="relative my-auto flex flex-col items-center justify-center max-w-2xl w-full z-10">
        {/* Glow ambient background aura */}
        <div className="absolute w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] rounded-full bg-gradient-to-tr from-amber-600/25 via-gold/30 to-orange-500/20 blur-[80px] pointer-events-none animate-pulse" />

        {/* Video Wrapper with Sacred Gold Border */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-gold/60 shadow-[0_0_50px_rgba(212,175,55,0.35)] bg-black/60 aspect-[16/9] sm:aspect-[4/3] max-h-[55vh] w-full group">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted={isMuted}
            onEnded={handleDismiss}
            className="w-full h-full object-contain object-center"
            poster="/reference-hero.png"
          >
            <source src="/om-intro.mp4" type="video/mp4" />
            <source src="/OM-WRITTTING-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Sound Toggle Button */}
          <button
            onClick={toggleMute}
            className="absolute bottom-3 right-3 z-20 p-2 rounded-full bg-black/60 hover:bg-black/80 text-amber-200 border border-gold/40 backdrop-blur-md transition-all active:scale-95 text-xs flex items-center gap-1"
            aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-300" />}
          </button>
        </div>

        {/* Caption */}
        <div className="mt-4 text-center space-y-1">
          <p className="font-serif text-sm sm:text-base font-medium tracking-wide text-amber-100">
            ✦ Sacred OM Consecration ✦
          </p>
          <p className="text-[11px] sm:text-xs text-amber-300/70 font-serif">
            Acharya Surya Prakash Purohit • Bangalore
          </p>
        </div>
      </div>

      {/* Bottom Action / Skip Button */}
      <div className="w-full max-w-4xl flex items-center justify-center pb-2 sm:pb-4 z-10">
        <button
          onClick={handleDismiss}
          className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#E86014] via-[#F48C06] to-[#D4AF37] hover:from-[#FF7A29] hover:to-[#EA580C] text-white text-xs sm:text-sm font-serif font-bold tracking-wider shadow-[0_4px_20px_rgba(232,96,20,0.45)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 border border-amber-200/50 cursor-pointer"
        >
          <span>Enter Website</span>
          <ArrowRight className="w-4 h-4 text-amber-100" />
        </button>
      </div>
    </div>
  );
};
