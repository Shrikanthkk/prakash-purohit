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
        poster="/reference-hero.png"
      >
        <source src="/om-intro.mp4" type="video/mp4" />
        <source src="/OM-WRITTTING-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Subtle Cinematic Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
    </div>
  );
};
