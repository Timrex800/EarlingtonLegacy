
import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    const pCount = 300; // Fixed at 300
    const baseSpeed = 4.5; // Increased speed for "haster" movement
    const trail = 0.3; // Clean movement at high speeds
    const mouseRadius = 300; // Large interaction area
    const mouseInfluence = 2.5; // Stronger physical-feeling repulsion

    const pointer = { x: -2000, y: -2000 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      color: string;
      borderColor: string;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 6 + 2; // Noticeable bubble size
        
        const angle = Math.random() * Math.PI * 2;
        const speedMultiplier = Math.random() * 1.2 + 0.8;
        this.vx = Math.cos(angle) * baseSpeed * speedMultiplier;
        this.vy = Math.sin(angle) * baseSpeed * speedMultiplier;
        
        // Brand palette: Amber (Legacy) and Slate (Modernity)
        const isAmber = Math.random() > 0.6;
        if (isAmber) {
          const r = 217;
          const g = Math.floor(Math.random() * 50 + 119); // Variants of primary amber
          const b = 6;
          this.opacity = Math.random() * 0.4 + 0.3;
          this.color = `rgba(${r}, ${g}, ${b}, ${this.opacity})`;
          this.borderColor = `rgba(${r}, ${g}, ${b}, ${this.opacity + 0.2})`;
        } else {
          const r = Math.floor(Math.random() * 40 + 30);
          const g = Math.floor(Math.random() * 40 + 40);
          const b = Math.floor(Math.random() * 60 + 80);
          this.opacity = Math.random() * 0.3 + 0.2;
          this.color = `rgba(${r}, ${g}, ${b}, ${this.opacity})`;
          this.borderColor = `rgba(${r}, ${g}, ${b}, ${this.opacity + 0.1})`;
        }
      }

      update() {
        // Base kinetic movement
        this.x += this.vx;
        this.y += this.vy;

        // Dynamic Mouse Repulsion
        const dx = pointer.x - this.x;
        const dy = pointer.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRadius) {
          const force = (mouseRadius - distance) / mouseRadius;
          const moveX = (dx / distance) * force * mouseInfluence * 8;
          const moveY = (dy / distance) * force * mouseInfluence * 8;
          
          this.x -= moveX;
          this.y -= moveY;
        }

        // Seamless Boundary Wrap
        if (this.x > canvas!.width) this.x = 0;
        else if (this.x < 0) this.x = canvas!.width;
        if (this.y > canvas!.height) this.y = 0;
        else if (this.y < 0) this.y = canvas!.height;
      }

      draw() {
        if (!ctx) return;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        // Translucent fill for bubble effect
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Soft border for definition
        ctx.strokeStyle = this.borderColor;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < pCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      const isDark = document.documentElement.classList.contains('dark');
      // Clearing the canvas with a trail for motion blur
      ctx.fillStyle = isDark ? `rgba(15, 15, 15, ${trail})` : `rgba(253, 251, 247, ${trail})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

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
      pointer.x = -2000;
      pointer.y = -2000;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    resize();
    init();
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
      className="fixed inset-0 pointer-events-none z-0 opacity-80 transition-opacity duration-1000 bg-transparent"
    />
  );
};

export default ParticleBackground;
