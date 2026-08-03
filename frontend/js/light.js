/**
 * NeuroLumen — light.js
 * Build 0.7-A — partículas + rede luminosa (mobile-first, leve)
 */
(function () {
  "use strict";

  var frame = document.querySelector(".experience-frame");
  if (!frame) return;

  var canvas = document.createElement("canvas");
  canvas.className = "experience-canvas";
  canvas.setAttribute("aria-hidden", "true");
  frame.insertBefore(canvas, frame.firstChild);

  var ctx = canvas.getContext("2d");
  if (!ctx) return;

  var particles = [];
  var reduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var running = true;
  var raf = 0;
  var pointer = { x: null, y: null, active: false };

  function countForWidth(w) {
    if (w < 400) return 28;
    if (w < 700) return 40;
    return 56;
  }

  function resize() {
    var rect = frame.getBoundingClientRect();
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(rect.width * dpr);
    canvas.height = Math.floor(rect.height * dpr);
    canvas.style.width = rect.width + "px";
    canvas.style.height = rect.height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seed(rect.width, rect.height);
  }

  function seed(w, h) {
    var n = reduced ? Math.min(12, countForWidth(w)) : countForWidth(w);
    particles = [];
    for (var i = 0; i < n; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: 1.2 + Math.random() * 1.8,
      });
    }
  }

  function step() {
    if (!running) return;
    var w = canvas.clientWidth;
    var h = canvas.clientHeight;
    ctx.clearRect(0, 0, w, h);

    var i, j, p, q, dx, dy, dist, maxDist;

    for (i = 0; i < particles.length; i++) {
      p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      p.x = Math.max(0, Math.min(w, p.x));
      p.y = Math.max(0, Math.min(h, p.y));

      if (pointer.active && pointer.x != null) {
        dx = pointer.x - p.x;
        dy = pointer.y - p.y;
        dist = Math.sqrt(dx * dx + dy * dy) || 1;
        if (dist < 120) {
          p.vx += (dx / dist) * 0.02;
          p.vy += (dy / dist) * 0.02;
        }
      }

      var speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (speed > 0.9) {
        p.vx *= 0.96;
        p.vy *= 0.96;
      }
    }

    maxDist = w < 500 ? 90 : 110;
    for (i = 0; i < particles.length; i++) {
      for (j = i + 1; j < particles.length; j++) {
        p = particles[i];
        q = particles[j];
        dx = p.x - q.x;
        dy = p.y - q.y;
        dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          var alpha = (1 - dist / maxDist) * 0.35;
          ctx.beginPath();
          ctx.strokeStyle = "rgba(34, 211, 238," + alpha + ")";
          ctx.lineWidth = 1;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }
    }

    for (i = 0; i < particles.length; i++) {
      p = particles[i];
      ctx.beginPath();
      ctx.fillStyle = "rgba(34, 211, 238, 0.85)";
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }

    raf = requestAnimationFrame(step);
  }

  function onPointer(e) {
    var rect = canvas.getBoundingClientRect();
    var touch = e.touches && e.touches[0];
    var clientX = touch ? touch.clientX : e.clientX;
    var clientY = touch ? touch.clientY : e.clientY;
    pointer.x = clientX - rect.left;
    pointer.y = clientY - rect.top;
    pointer.active = true;
  }

  function endPointer() {
    pointer.active = false;
  }

  canvas.addEventListener("mousemove", onPointer, { passive: true });
  canvas.addEventListener("mouseleave", endPointer);
  canvas.addEventListener("touchstart", onPointer, { passive: true });
  canvas.addEventListener("touchmove", onPointer, { passive: true });
  canvas.addEventListener("touchend", endPointer);

  var observer =
    "IntersectionObserver" in window
      ? new IntersectionObserver(
          function (entries) {
            var visible = entries[0] && entries[0].isIntersecting;
            running = visible && !document.hidden;
            if (running && !raf) {
              raf = requestAnimationFrame(step);
            }
            if (!running && raf) {
              cancelAnimationFrame(raf);
              raf = 0;
            }
          },
          { threshold: 0.15 }
        )
      : null;

  if (observer) observer.observe(frame);

  document.addEventListener("visibilitychange", function () {
    running = !document.hidden;
    if (running && !raf) raf = requestAnimationFrame(step);
  });

  window.addEventListener(
    "resize",
    function () {
      resize();
    },
    { passive: true }
  );

  resize();
  if (!reduced) {
    raf = requestAnimationFrame(step);
  } else {
    // desenho estático leve
    var w = canvas.clientWidth;
    var h = canvas.clientHeight;
    ctx.clearRect(0, 0, w, h);
    particles.forEach(function (p) {
      ctx.beginPath();
      ctx.fillStyle = "rgba(34, 211, 238, 0.7)";
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  window.NeuroLumen = window.NeuroLumen || {};
  window.NeuroLumen.light = { resize: resize, version: "0.7.0-A" };
})();
