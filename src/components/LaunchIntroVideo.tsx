import React, { useState, useEffect, useRef } from 'react';

export const LaunchIntroVideo: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
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

  if (!isVisible) return null;

  return (
    <div
      onClick={handleDismiss}
      className={`fixed inset-0 z-[99999] w-screen h-screen overflow-hidden bg-black transition-opacity duration-700 cursor-pointer ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      }`}
    >
      {/* Edge-to-Edge Clean Fullscreen OM Video */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        onEnded={handleDismiss}
        className="w-full h-full object-cover object-center scale-100"
      >
        <source src="/om-intro.mp4" type="video/mp4" />
        <source src="/OM-WRITTTING-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Subtle Cinematic Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/15 pointer-events-none" />

      {/* Seamless Natural Parchment Blend Patch (Bottom-Right) */}
      <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 z-20 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#E8DCB9]/95 shadow-[0_0_25px_12px_#E8DCB9] pointer-events-none filter blur-[1px]" />

      {/* Seamless Natural Parchment Blend Patch (Top-Right) */}
      <div className="absolute top-1 right-1 sm:top-2 sm:right-2 z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#E8DCB9]/95 shadow-[0_0_20px_10px_#E8DCB9] pointer-events-none filter blur-[1px]" />

      {/* Elegant Brand Signature in Bottom-Right Corner */}
      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-5 z-30 pointer-events-none opacity-90 transition-opacity">
        <img
          src="/logo.svg"
          alt="Suryaprakash Purohit"
          className="h-6 sm:h-7 w-auto object-contain drop-shadow-xs"
        />
      </div>
    </div>
  );
};
