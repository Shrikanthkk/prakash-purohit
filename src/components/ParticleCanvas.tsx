import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
  alpha: number;
  alphaSpeed: number;
  twinkle: boolean;
}

export const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Create golden and saffron floating particles
    const particleCount = Math.min(Math.floor(width / 24), 45);
    const particles: Particle[] = [];

    const goldHues = [
      'rgba(212, 175, 55, ',
      'rgba(249, 115, 22, ',
      'rgba(234, 179, 8, ',
      'rgba(255, 215, 0, ',
      'rgba(254, 240, 138, '
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 0.8,
        color: goldHues[Math.floor(Math.random() * goldHues.length)],
        vx: (Math.random() - 0.5) * 0.35,
        vy: -Math.random() * 0.45 - 0.15, // gently drift upwards like sacred incence embers
        alpha: Math.random() * 0.7 + 0.2,
        alphaSpeed: (Math.random() * 0.008 + 0.003) * (Math.random() > 0.5 ? 1 : -1),
        twinkle: Math.random() > 0.4,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Twinkle alpha
        if (p.twinkle) {
          p.alpha += p.alphaSpeed;
          if (p.alpha > 0.85 || p.alpha < 0.15) {
            p.alphaSpeed = -p.alphaSpeed;
          }
        }

        // Wrap around boundaries
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Draw particle with gentle aura glow
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2.8);
        gradient.addColorStop(0, `${p.color}${p.alpha})`);
        gradient.addColorStop(0.5, `${p.color}${p.alpha * 0.5})`);
        gradient.addColorStop(1, `${p.color}0)`);

        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Inner solid core
        ctx.beginPath();
        ctx.fillStyle = `${p.color}${Math.min(p.alpha + 0.2, 1)})`;
        ctx.arc(p.x, p.y, p.radius * 0.7, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 w-full h-full opacity-80"
      aria-hidden="true"
    />
  );
};
