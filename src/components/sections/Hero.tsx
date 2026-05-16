"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, ChevronDown, ArrowRight, BookOpen } from "lucide-react";

import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { ROLES } from "@/data/index";

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  /* Typewriter */
  useEffect(() => {
    const target = ROLES[roleIdx];
    let t: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < target.length) {
        t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 75);
      } else {
        t = setTimeout(() => setTyping(false), 2200);
      }
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIdx((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(t);
  }, [displayed, typing, roleIdx]);

  return (
    <section
      ref={ref}
      id="hero"
      style={{ position: "relative", minHeight: "100dvh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}
    >
      {/* ── Animated background ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        {/* Grid */}
        <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.6 }} />

        {/* Glow orbs */}
        <div className="orb orb-1" style={{
          width: 700, height: 700, top: "-15%", left: "-10%",
          background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)",
        }} />
        <div className="orb orb-2" style={{
          width: 500, height: 500, bottom: "-5%", right: "-8%",
          background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)",
        }} />
        <div className="orb orb-3" style={{
          width: 350, height: 350, top: "40%", left: "55%",
          background: "radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)",
        }} />

        {/* Bottom gradient fade */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "30%",
          background: "linear-gradient(to bottom, transparent, #020014)",
        }} />
      </div>

      {/* ── Main content ── */}
      <motion.div
        style={{ y, position: "relative", zIndex: 1, textAlign: "center", padding: "0 20px", maxWidth: 900, margin: "0 auto" }}
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 32 }}
        >
          <div className="glass" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 18px", borderRadius: 999 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#10b981", display: "inline-block", boxShadow: "0 0 10px #10b981" }} className="animate-pulse" />
            <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.72rem", color: "#94a3b8", letterSpacing: "0.05em" }}>
              Stage & Alternance · DevOps / Cloud · Disponible Sept. 2026
            </span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 800, lineHeight: 1.05, marginBottom: 16 }}>
            <span style={{ fontSize: "clamp(2.5rem, 8vw, 5.5rem)", display: "block", color: "#f1f5f9" }}>
              WANKAM Dypue
            </span>
            <span className="gradient-text text-glow-purple" style={{ fontSize: "clamp(2.5rem, 8vw, 5.5rem)", display: "block" }}>
              Dilane Junior
            </span>
          </h1>
        </motion.div>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ height: 48, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}
        >
          <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "clamp(1rem, 3vw, 1.4rem)", color: "#22d3ee" }}>
            {displayed}
            <span className="cursor-blink" style={{ color: "#8b5cf6", marginLeft: 2 }}>|</span>
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{ color: "#64748b", fontSize: "clamp(0.9rem, 2vw, 1.05rem)", lineHeight: 1.8, maxWidth: 600, margin: "0 auto 48px" }}
        >
          Étudiant ingénieur à l&apos;ENIB · Passionné par le DevOps & le Cloud ·
          Auteur de{" "}
          <span style={{ color: "#a78bfa", fontWeight: 600 }}>23 livres techniques</span> sur Amazon.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}
        >
          <a href="#projects" className="btn-primary">
            Voir mes projets <ArrowRight size={16} />
          </a>
          <a href="#books" className="btn-secondary">
            <BookOpen size={16} /> Mes livres
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          style={{ display: "flex", gap: 14, justifyContent: "center" }}
        >
          {[
            { icon: GithubIcon,   href: "https://github.com/wankamdypuedilane",    label: "GitHub" },
            { icon: LinkedinIcon, href: "https://www.linkedin.com/in/dypue-dilane-junior-wankam-b70b58303/", label: "LinkedIn" },
            { icon: Mail,         href: "mailto:wankamdypuedilane@gmail.com",       label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              className="glass"
              style={{
                width: 44, height: 44, borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#64748b", textDecoration: "none",
                transition: "color 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#22d3ee";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(34,211,238,0.3)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,211,238,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#64748b";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
              }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating tech pills */}
      {["AWS", "Docker", "Terraform", "Kubernetes", "CI/CD", "Linux"].map((tech, i) => (
        <motion.div
          key={tech}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{ delay: 1.5 + i * 0.1, duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
          className="glass"
          style={{
            position: "absolute",
            fontFamily: "var(--font-jetbrains)",
            fontSize: "0.65rem",
            padding: "5px 12px",
            borderRadius: 999,
            color: "#64748b",
            zIndex: 2,
            display: ["none", "block"][i % 2 === 0 ? 0 : 1],
            ...[
              { top: "18%", left: "8%"   },
              { top: "25%", right: "7%"  },
              { top: "60%", left: "5%"   },
              { top: "65%", right: "6%"  },
              { top: "80%", left: "12%"  },
              { top: "75%", right: "10%" },
            ][i],
          } as React.CSSProperties}
        >
          {tech}
        </motion.div>
      ))}

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, zIndex: 2 }}
      >
        <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "#334155" }}>DÉFILER</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={18} style={{ color: "#334155" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
