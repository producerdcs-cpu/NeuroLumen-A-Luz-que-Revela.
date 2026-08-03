import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

export function LightCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const frame = frameRef.current;
    if (!canvas || !frame) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let raf = 0;
    let running = true;
    const pointer = { x: null as number | null, y: null as number | null, active: false };
    const reduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

    const countForWidth = (w: number) => {
      if (w < 400) return 28;
      if (w < 700) return 40;
      return 56;
    };

    const seed = (w: number, h: number) => {
      const n = reduced ? Math.min(12, countForWidth(w)) : countForWidth(w);
      particles = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: 1.2 + Math.random() * 1.8,
      }));
    };

    const resize = () => {
      const rect = frame.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed(rect.width, rect.height);
    };

    const step = () => {
      if (!running) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        p.x = Math.max(0, Math.min(w, p.x));
        p.y = Math.max(0, Math.min(h, p.y));

        if (pointer.active && pointer.x != null && pointer.y != null) {
          const dx = pointer.x - p.x;
          const dy = pointer.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          if (dist < 120) {
            p.vx += (dx / dist) * 0.02;
            p.vy += (dy / dist) * 0.02;
          }
        }

        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 0.9) {
          p.vx *= 0.96;
          p.vy *= 0.96;
        }
      }

      const maxDist = w < 500 ? 90 : 110;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p = particles[i];
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.35;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(34, 211, 238,${alpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(34, 211, 238, 0.85)";
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(step);
    };

    const onPointer = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const touch = "touches" in e ? e.touches[0] : null;
      const clientX = touch ? touch.clientX : (e as MouseEvent).clientX;
      const clientY = touch ? touch.clientY : (e as MouseEvent).clientY;
      pointer.x = clientX - rect.left;
      pointer.y = clientY - rect.top;
      pointer.active = true;
    };

    const endPointer = () => {
      pointer.active = false;
    };

    canvas.addEventListener("mousemove", onPointer, { passive: true });
    canvas.addEventListener("mouseleave", endPointer);
    canvas.addEventListener("touchstart", onPointer, { passive: true });
    canvas.addEventListener("touchmove", onPointer, { passive: true });
    canvas.addEventListener("touchend", endPointer);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries[0]?.isIntersecting ?? false;
        running = visible && !document.hidden;
        if (running && !raf) raf = requestAnimationFrame(step);
        if (!running && raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(frame);

    const onVis = () => {
      running = !document.hidden;
      if (running && !raf) raf = requestAnimationFrame(step);
    };
    document.addEventListener("visibilitychange", onVis);

    const onResize = () => resize();
    window.addEventListener("resize", onResize, { passive: true });

    resize();
    if (!reduced) {
      raf = requestAnimationFrame(step);
    } else {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.fillStyle = "rgba(34, 211, 238, 0.7)";
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
      canvas.removeEventListener("mousemove", onPointer);
      canvas.removeEventListener("mouseleave", endPointer);
      canvas.removeEventListener("touchstart", onPointer);
      canvas.removeEventListener("touchmove", onPointer);
      canvas.removeEventListener("touchend", endPointer);
    };
  }, []);

  return (
    <div className="experience-frame" ref={frameRef} role="img" aria-label="Rede neural luminosa interativa">
      <canvas ref={canvasRef} className="experience-canvas" aria-hidden />
      <div className="experience-overlay">
        <p className="experience-placeholder">Visualização da Luz</p>
        <p className="experience-note">Build 0.7-B · React · toque para interagir</p>
      </div>
    </div>
  );
}
