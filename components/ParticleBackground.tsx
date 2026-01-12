
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
    
    // Configuration
    const pCount = 120; // Slightly increased for longer pages
    const baseSpeed = 0.5; 
    const trail = 0.3; 
    const mouseRadius = 150; 
    const mouseInfluence = 2.5; 

    const pointer = { x: -2000, y: -2000 };

    const resize = () => {
      // Set canvas to full document height and width to ensure it reaches the footer
      const width = window.innerWidth;
      const height = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      
      canvas.width = width;
      canvas.height = height;
      
      // Re-init particles if height significantly changed to redistribute
      if (particles.length > 0) {
        init();
      }
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
        
        const isAmber = Math.random() > 0.6;
        if (isAmber) {
          const r = 217;
          const g = 119;
          const b = 6;
          this.opacity = Math.random() * 0.2 + 0.1;
          this.color = `rgba(${r}, ${g}, ${b}, ${this.opacity})`;
          this.borderColor = `rgba(${r}, ${g}, ${b}, ${this.opacity + 0.1})`;
        } else {
          const r = 0;
          const g = 51;
          const b = 102;
          this.opacity = Math.random() * 0.15 + 0.05;
          this.color = `rgba(${r}, ${g}, ${b}, ${this.opacity})`;
          this.borderColor = `rgba(${r}, ${g}, ${b}, ${this.opacity + 0.05})`;
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Interaction with mouse (considering scroll offset)
        const dx = pointer.x - this.x;
        const dy = pointer.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRadius) {
          const force = (mouseRadius - distance) / mouseRadius;
          const moveX = (dx / distance) * force * mouseInfluence * 5;
          const moveY = (dy / distance) * force * mouseInfluence * 5;
          
          this.x -= moveX;
          this.y -= moveY;
        }

        // Wrap around screen dimensions
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
      const bgColor = isDark ? `rgba(15, 15, 15, ${trail})` : `rgba(253, 251, 247, ${trail})`;
      
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Must account for vertical scroll since canvas is absolute
      pointer.x = e.pageX;
      pointer.y = e.pageY;
    };

    const handleMouseLeave = () => {
      pointer.x = -2000;
      pointer.y = -2000;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Initial setup
    resize();
    init();
    animate();

    // Secondary resize check after images/content might have loaded
    const timer = setTimeout(resize, 2000);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-60 dark:opacity-40 transition-opacity duration-1000 bg-transparent"
      style={{ minHeight: '100%' }}
    />
  );
};

export default ParticleBackground;
