"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Cloud, BookOpen, Zap } from "lucide-react";
import { STATS } from "@/data/index";

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const CARDS = [
  {
    icon: Cloud,
    color: "#FF9900",
    title: "Ingénieur Cloud",
    text: "AWS EC2, Nginx, DNS, HTTPS/TLS — mise en production réelle d'applications avec infrastructure cloud.",
  },
  {
    icon: Zap,
    color: "#8b5cf6",
    title: "Praticien DevOps",
    text: "Pipelines CI/CD avec GitHub Actions — protection de branches, Pull Request obligatoire, gouvernance Git.",
  },
  {
    icon: Cpu,
    color: "#22d3ee",
    title: "Développeur Web",
    text: "React, TypeScript, Vite, API REST, Supabase & PostgreSQL — applications web modernes et performantes.",
  },
  {
    icon: BookOpen,
    color: "#ec4899",
    title: "Auteur Technique",
    text: "23 livres publiés sur Amazon couvrant l'écosystème DevOps & Cloud — partage de connaissances à grande échelle.",
  },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "120px 20px", position: "relative", overflow: "hidden" }}>
      {/* Background accent */}
      <div style={{
        position: "absolute", top: "10%", right: "-5%",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 72, textAlign: "center" }}
        >
          <p className="section-tag" style={{ marginBottom: 12 }}>// à_propos</p>
          <h2 style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#f1f5f9", marginBottom: 16 }}>
            Ingénieur par formation,{" "}
            <span className="gradient-text">DevOps par passion</span>
          </h2>
          <p style={{ color: "#64748b", maxWidth: 600, margin: "0 auto", lineHeight: 1.8, fontSize: "0.95rem" }}>
            Licence en Mécatronique à l&apos;École Polytechnique de Yaoundé, puis pivot vers le logiciel — sans jamais regarder en arrière.
            Aujourd&apos;hui je construis des infrastructures cloud, j&apos;automatise tout, et je partage ce que j&apos;apprends.
          </p>
        </motion.div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 20, marginBottom: 72 }}>
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass gradient-border"
              style={{ padding: "28px 20px", textAlign: "center", borderRadius: 16 }}
            >
              <div style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "2.5rem", fontWeight: 800, marginBottom: 6 }} className="gradient-text">
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <div style={{ fontSize: "0.75rem", color: "#64748b", letterSpacing: "0.05em" }}>{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Feature cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass"
                style={{
                  padding: "28px 24px",
                  borderRadius: 16,
                  border: "1px solid rgba(255,255,255,0.06)",
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${card.color}30`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${card.color}15`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 12, marginBottom: 16,
                  background: `${card.color}18`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  border: `1px solid ${card.color}30`,
                }}>
                  <Icon size={20} style={{ color: card.color }} />
                </div>
                <h3 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: "1rem", color: "#f1f5f9", marginBottom: 8 }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: "0.82rem", color: "#64748b", lineHeight: 1.7 }}>{card.text}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bio paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glass"
          style={{ marginTop: 48, padding: "36px 40px", borderRadius: 20, border: "1px solid rgba(139,92,246,0.12)" }}
        >
          <div style={{ display: "flex", gap: 16, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{
              width: 48, height: 48, borderRadius: 14, flexShrink: 0,
              background: "linear-gradient(135deg, rgba(139,92,246,0.3), rgba(34,211,238,0.3))",
              border: "1px solid rgba(139,92,246,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-space-grotesk)", fontWeight: 800, fontSize: "1rem", color: "#a78bfa",
            }}>
              WD
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <p style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, color: "#f1f5f9", marginBottom: 4 }}>
                WANKAM Dypue Dilane Junior
              </p>
              <p style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.72rem", color: "#8b5cf6", marginBottom: 16 }}>
                Étudiant Ingénieur (ENIB) · DevOps / Cloud · Auteur Technique
              </p>
              <p style={{ color: "#94a3b8", lineHeight: 1.85, fontSize: "0.88rem" }}>
                Étudiant ingénieur à l&apos;ENIB (École Nationale d&apos;Ingénieurs de Brest), j&apos;ai découvert ma vraie passion dans le DevOps et le cloud.
                J&apos;ai acquis une expertise solide en développement web avec <span style={{ color: "#22d3ee" }}>React & TypeScript</span>,
                en déploiement cloud sur <span style={{ color: "#FF9900" }}>AWS EC2</span>,
                et en automatisation avec <span style={{ color: "#a78bfa" }}>GitHub Actions & CI/CD</span>.
                <br /><br />
                Pour partager cette passion, j&apos;ai publié{" "}<span style={{ color: "#ec4899", fontWeight: 600 }}>23 livres techniques</span>{" "}sur Amazon en 2026,
                couvrant l&apos;écosystème DevOps, Cloud et Backend Engineering.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
