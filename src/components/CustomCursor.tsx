"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const hover = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "50px";
        ringRef.current.style.height = "50px";
        ringRef.current.style.borderColor = "rgba(34,211,238,0.8)";
        ringRef.current.style.background = "rgba(34,211,238,0.05)";
      }
    };
    const unhover = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "32px";
        ringRef.current.style.height = "32px";
        ringRef.current.style.borderColor = "rgba(139,92,246,0.6)";
        ringRef.current.style.background = "transparent";
      }
    };

    let raf: number;
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top = `${ring.current.y}px`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, [role='button']").forEach((el) => {
      el.addEventListener("mouseenter", hover);
      el.addEventListener("mouseleave", unhover);
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      {/* Ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "1.5px solid rgba(139,92,246,0.6)",
          pointerEvents: "none",
          zIndex: 99999,
          transform: "translate(-50%, -50%)",
          transition: "width 0.2s, height 0.2s, border-color 0.2s, background 0.2s",
          left: -100,
          top: -100,
        }}
      />
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: "#8b5cf6",
          pointerEvents: "none",
          zIndex: 99999,
          transform: "translate(-50%, -50%)",
          left: -100,
          top: -100,
          boxShadow: "0 0 8px rgba(139,92,246,0.8)",
        }}
      />
    </>
  );
}
