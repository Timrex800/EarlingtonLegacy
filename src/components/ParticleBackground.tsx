
import React, { useEffect, useRef } from 'react';

type PaletteColor = { r: number; g: number; b: number; weight: number };

const METALLIC_PALETTE: PaletteColor[] = [
  { r: 242, g: 222, b: 122, weight: 0.25 }, // Gold
  { r: 255, g: 255, b: 255, weight: 0.25 }, // Silver
  { r: 242, g: 186, b: 122, weight: 0.20 }, // Bronze
  { r: 253, g: 213, b: 207, weight: 0.15 }, // Rose Gold
  { r: 237, g: 255, b: 226, weight: 0.15 }, // Metallic Creme
];

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    const pCount = 110; // Slightly increased for footer coverage
    const baseSpeed = 0.45;
    const trail = 0.3;
    const mouseRadius = 240;
    const mouseInfluence = 2.0;

    const pointer = { x: -1000, y: -1000 };

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      ctx.scale(dpr, dpr);
      init();
    };

    class Particle {
      x: number;
      y: number;
      baseSize: number;
      currentWidth: number;
      currentHeight: number;
      rotation: number;
      rotationSpeed: number;
      vx: number;
      vy: number;
      r: number;
      g: number;
      b: number;
      baseOpacity: number;
      isHighlighted: boolean = false;

      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.baseSize = Math.random() * 10 + 5;
        this.currentWidth = this.baseSize * (Math.random() * 0.6 + 0.8);
        this.currentHeight = this.baseSize * (Math.random() * 0.6 + 0.8);
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.012;
        
        const angle = Math.random() * Math.PI * 2;
        const speedMultiplier = Math.random() * 0.7 + 0.4;
        this.vx = Math.cos(angle) * baseSpeed * speedMultiplier;
        this.vy = Math.sin(angle) * baseSpeed * speedMultiplier;
        
        // Pick color from predefined palette
        const random = Math.random();
        let cumulativeWeight = 0;
        let selectedColor = METALLIC_PALETTE[0];

        for (const color of METALLIC_PALETTE) {
          cumulativeWeight += color.weight;
          if (random <= cumulativeWeight) {
            selectedColor = color;
            break;
          }
        }

        this.r = selectedColor.r;
        this.g = selectedColor.g;
        this.b = selectedColor.b;
        this.baseOpacity = Math.random() * 0.4 + 0.3;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;

        const dx = pointer.x - this.x;
        const dy = pointer.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRadius) {
          this.isHighlighted = true;
          const force = (mouseRadius - distance) / mouseRadius;
          const angle = Math.atan2(dy, dx);
          
          // Repulsion + Rotation Speedup
          this.x -= Math.cos(angle) * force * mouseInfluence;
          this.y -= Math.sin(angle) * force * mouseInfluence;
          this.rotation += this.rotationSpeed * force * 6;
        } else {
          this.isHighlighted = false;
        }

        // Screen Wrapping
        if (this.x > window.innerWidth) this.x = 0;
        else if (this.x < 0) this.x = window.innerWidth;
        if (this.y > window.innerHeight) this.y = 0;
        else if (this.y < 0) this.y = window.innerHeight;
      }

      draw() {
        if (!ctx) return;
        
        const isDark = document.documentElement.classList.contains('dark');
        
        // Granular transparency control based on proximity and theme
        let opacityMultiplier = isDark ? 0.35 : 0.75;
        if (this.isHighlighted) opacityMultiplier += 0.2;
        
        const currentOpacity = this.baseOpacity * opacityMultiplier;
        const shadowOpacity = isDark ? 0.04 : 0.12;

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        const depth = 2.5;
        
        // 3D Shadow Layer
        ctx.fillStyle = `rgba(0, 0, 0, ${shadowOpacity})`;
        ctx.fillRect(-this.currentWidth / 2 + depth, -this.currentHeight / 2 + depth, this.currentWidth, this.currentHeight);
        
        // Main Metallic Face
        ctx.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${currentOpacity})`;
        ctx.fillRect(-this.currentWidth / 2, -this.currentHeight / 2, this.currentWidth, this.currentHeight);
        
        // Metallic Edge Polish
        ctx.strokeStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${Math.min(currentOpacity + 0.25, 1)})`;
        ctx.lineWidth = 1;
        ctx.strokeRect(-this.currentWidth / 2, -this.currentHeight / 2, this.currentWidth, this.currentHeight);
        
        // Reflective Highlight
        if (!isDark || this.isHighlighted) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${currentOpacity * 0.45})`;
          ctx.lineWidth = 0.5;
          ctx.strokeRect(-this.currentWidth / 2 + 0.5, -this.currentHeight / 2 + 0.5, this.currentWidth - 1, this.currentHeight - 1);
        }
        
        ctx.restore();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < pCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      const isDark = document.documentElement.classList.contains('dark');
      
      // Clear with specific trail colors per theme for better contrast behind footer
      ctx.fillStyle = isDark ? `rgba(15, 15, 15, ${trail})` : `rgba(253, 251, 247, ${trail})`;
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    };

    const handleMouseLeave = () => {
      pointer.x = -1000;
      pointer.y = -1000;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleBackground;
