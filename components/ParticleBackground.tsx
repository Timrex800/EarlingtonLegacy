
import React, { useEffect, useRef } from 'react';

type PaletteColor = { r: number; g: number; b: number; weight: number; name: string };

const METALLIC_PALETTE: PaletteColor[] = [
  { r: 242, g: 222, b: 122, weight: 0.25, name: 'Gold' },
  { r: 255, g: 255, b: 255, weight: 0.25, name: 'Silver' },
  { r: 242, g: 186, b: 122, weight: 0.20, name: 'Bronze' },
  { r: 253, g: 213, b: 207, weight: 0.15, name: 'RoseGold' },
  { r: 237, g: 255, b: 226, weight: 0.15, name: 'Creme' },
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
    const pCount = 150; // Increased density for better settling distribution
    const baseSpeed = 0.4;
    const trail = 0.25;
    const mouseRadius = 280;
    const mouseInfluence = 2.5;

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
      settleForce: number = 0.015; // Vertical drift speed in footer

      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.baseSize = Math.random() * 7 + 3;
        this.currentWidth = this.baseSize * (Math.random() * 0.8 + 0.8);
        this.currentHeight = this.baseSize * (Math.random() * 0.8 + 0.8);
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.008;
        
        const angle = Math.random() * Math.PI * 2;
        const speedMultiplier = Math.random() * 0.5 + 0.5;
        this.vx = Math.cos(angle) * baseSpeed * speedMultiplier;
        this.vy = Math.sin(angle) * baseSpeed * speedMultiplier;
        
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
        this.baseOpacity = Math.random() * 0.3 + 0.2;
      }

      update() {
        // Apply basic velocity
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;

        // --- Settling Physics Logic ---
        // We calculate if the particle is in the 'Footer Zone' (bottom 25% of viewport)
        const footerThreshold = window.innerHeight * 0.75;
        if (this.y > footerThreshold) {
          const depthFactor = (this.y - footerThreshold) / (window.innerHeight - footerThreshold);
          
          // 1. Friction: Horizontal movement slows down significantly as it "settles"
          this.vx *= (1 - (0.05 * depthFactor));
          
          // 2. Gravity: Slight downward drift 
          this.vy += this.settleForce * depthFactor;
          
          // 3. Terminal Velocity: Ensure they don't fall too fast
          if (this.vy > 0.8) this.vy = 0.8;
        }

        // Mouse Interaction (Magnetism)
        const dx = pointer.x - this.x;
        const dy = pointer.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRadius) {
          this.isHighlighted = true;
          const force = (mouseRadius - distance) / mouseRadius;
          const angle = Math.atan2(dy, dx);
          
          // Particles "wake up" when mouse is near
          this.x -= Math.cos(angle) * force * mouseInfluence;
          this.y -= Math.sin(angle) * force * mouseInfluence;
          this.rotation += this.rotationSpeed * force * 5;
        } else {
          this.isHighlighted = false;
        }

        // Screen Wrapping with padding
        const pad = 40;
        if (this.x > window.innerWidth + pad) this.x = -pad;
        else if (this.x < -pad) this.x = window.innerWidth + pad;
        
        // Vertical wrap handles the "infinite flow" even with gravity
        if (this.y > window.innerHeight + pad) {
           this.y = -pad;
           // Reset velocity on wrap so they don't start already fast
           this.vy = Math.random() * baseSpeed;
        } else if (this.y < -pad) {
           this.y = window.innerHeight + pad;
        }
      }

      draw() {
        if (!ctx) return;
        
        const isDark = document.documentElement.classList.contains('dark');
        let opacityMultiplier = isDark ? 0.25 : 0.6;
        if (this.isHighlighted) opacityMultiplier += 0.3;
        
        const currentOpacity = this.baseOpacity * opacityMultiplier;
        const shadowOpacity = isDark ? 0.02 : 0.08;

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        // Render Shadow
        ctx.fillStyle = `rgba(0, 0, 0, ${shadowOpacity})`;
        ctx.fillRect(-this.currentWidth / 2 + 2, -this.currentHeight / 2 + 2, this.currentWidth, this.currentHeight);
        
        // Render Main Metallic Body
        ctx.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${currentOpacity})`;
        ctx.fillRect(-this.currentWidth / 2, -this.currentHeight / 2, this.currentWidth, this.currentHeight);
        
        // High-Quality Edge Stroke
        ctx.strokeStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${Math.min(currentOpacity + 0.2, 1)})`;
        ctx.lineWidth = 0.5;
        ctx.strokeRect(-this.currentWidth / 2, -this.currentHeight / 2, this.currentWidth, this.currentHeight);
        
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
      
      // Dynamic trail based on theme
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
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;
