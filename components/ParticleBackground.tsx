
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
    
    // Updated configuration based on request
    const pCount = 100; 
    const baseSpeed = 0.5; 
    const trail = 0.3; 
    const mouseRadius = 100; 
    const mouseInfluence = 2.5; 

    const pointer = { x: -2000, y: -2000 };

    // Log for verification
    console.log(`[System] Particle Background Reloaded: ${pCount} entities active (Squares).`);

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
      opacity: number;
      color: string;
      borderColor: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 6 + 2; 
        
        const angle = Math.random() * Math.PI * 2;
        const speedMultiplier = Math.random() * 1.2 + 0.8;
        this.vx = Math.cos(angle) * baseSpeed * speedMultiplier;
        this.vy = Math.sin(angle) * baseSpeed * speedMultiplier;
        
        // Updated Color Palette
        const isAmber = Math.random() > 0.6;
        if (isAmber) {
          const r = 255;
          const g = 234;
          const b = 167;
          this.opacity = Math.random() * 0.4 + 0.3;
          this.color = `rgba(${r}, ${g}, ${b}, ${this.opacity})`;
          this.borderColor = `rgba(${r}, ${g}, ${b}, ${this.opacity + 0.2})`;
        } else {
          const r = 201;
          const g = 147;
          const b = 135;
          this.opacity = Math.random() * 0.3 + 0.2;
          this.color = `rgba(${r}, ${g}, ${b}, ${this.opacity})`;
          this.borderColor = `rgba(${r}, ${g}, ${b}, ${this.opacity + 0.1})`;
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

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

        // Wrap around screen
        if (this.x > canvas!.width) this.x = 0;
        else if (this.x < 0) this.x = canvas!.width;
        if (this.y > canvas!.height) this.y = 0;
        else if (this.y < 0) this.y = canvas!.height;
      }

      draw() {
        if (!ctx) return;
        
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(Math.atan2(this.vy, this.vx));
        
        // Square shape
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size, -this.size, this.size * 2, this.size * 2);
        
        ctx.strokeStyle = this.borderColor;
        ctx.lineWidth = 1;
        ctx.strokeRect(-this.size, -this.size, this.size * 2, this.size * 2);
        
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
      if (!ctx || !canvas) return;
      
      const isDark = document.documentElement.classList.contains('dark');
      // Using colors consistent with existing theme but applying trail
      const bgColor = isDark ? `rgba(10, 10, 10, ${trail})` : `rgba(253, 251, 247, ${trail})`;
      ctx.fillStyle = bgColor;
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
