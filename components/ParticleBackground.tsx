
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
    const pCount = 300; // Significantly reduced for better visibility of individual interaction
    const baseSpeed = 2.8; // Increased speed for more dynamic movement
    const trail = 0.25; // Higher value = less trail, cleaner for fast particles
    const mouseRadius = 250; // Larger area of influence
    const mouseInfluence = 1.5; // Stronger push/pull force

    const pointer = { x: -1000, y: -1000 };

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
      baseX: number;
      baseY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 5 + 2; // Slightly larger for better visibility with fewer particles
        
        const angle = Math.random() * Math.PI * 2;
        const speedMultiplier = Math.random() * 0.8 + 0.5;
        this.vx = Math.cos(angle) * baseSpeed * speedMultiplier;
        this.vy = Math.sin(angle) * baseSpeed * speedMultiplier;
        
        // Soft tones: Amber (primary) and Slate (secondary)
        const isAmber = Math.random() > 0.6;
        if (isAmber) {
          const r = 217;
          const g = Math.floor(Math.random() * 50 + 119);
          const b = 6;
          this.opacity = Math.random() * 0.4 + 0.2;
          this.color = `rgba(${r}, ${g}, ${b}, ${this.opacity})`;
          this.borderColor = `rgba(${r}, ${g}, ${b}, ${this.opacity + 0.2})`;
        } else {
          const r = Math.floor(Math.random() * 50 + 40);
          const g = Math.floor(Math.random() * 50 + 50);
          const b = Math.floor(Math.random() * 50 + 70);
          this.opacity = Math.random() * 0.3 + 0.2;
          this.color = `rgba(${r}, ${g}, ${b}, ${this.opacity})`;
          this.borderColor = `rgba(${r}, ${g}, ${b}, ${this.opacity + 0.1})`;
        }
      }

      update() {
        // Natural movement
        this.x += this.vx;
        this.y += this.vy;

        // Interactive mouse repulsion logic
        const dx = pointer.x - this.x;
        const dy = pointer.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRadius) {
          const force = (mouseRadius - distance) / mouseRadius;
          // Calculate movement away from mouse
          const moveX = (dx / distance) * force * mouseInfluence * 5;
          const moveY = (dy / distance) * force * mouseInfluence * 5;
          
          this.x -= moveX;
          this.y -= moveY;
        }

        // Boundary wrap
        if (this.x > canvas!.width) this.x = 0;
        else if (this.x < 0) this.x = canvas!.width;
        if (this.y > canvas!.height) this.y = 0;
        else if (this.y < 0) this.y = canvas!.height;
      }

      draw() {
        if (!ctx) return;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        ctx.fillStyle = this.color;
        ctx.fill();
        
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
      pointer.x = -1000;
      pointer.y = -1000;
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
      className="fixed inset-0 pointer-events-none z-0 opacity-70 transition-opacity duration-1000"
    />
  );
};

export default ParticleBackground;
