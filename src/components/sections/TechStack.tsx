"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SKILLS } from "@/data/index";

const CATEGORIES = ["Tout", "Cloud", "DevOps", "Backend", "Languages", "Frontend"] as const;
type Cat = typeof CATEGORIES[number];

export default function TechStack() {
  const [active, setActive] = useState<Cat>("Tout");
  const filtered = active === "Tout" ? SKILLS : SKILLS.filter((s) => s.category === active);

  return (
    <section id="skills" style={{ padding: "120px 20px", position: "relative" }}>
      {/* Background accent */}
      <div style={{
        position: "absolute", bottom: "10%", left: "-5%",
        width: 450, height: 450, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
        filter: "blur(80px)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56, textAlign: "center" }}
        >
          <p className="section-tag" style={{ marginBottom: 12 }}>// tech_stack</p>
          <h2 style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#f1f5f9", marginBottom: 16 }}>
            Mes outils{" "}
            <span className="gradient-text-2">du quotidien</span>
          </h2>
          <p style={{ color: "#64748b", fontSize: "0.9rem" }}>Technologies que j&apos;utilise pour construire et automatiser.</p>
        </motion.div>

        {/* Category filters */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: 48 }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: "7px 18px",
                borderRadius: 999,
                fontFamily: "var(--font-jetbrains)",
                fontSize: "0.72rem",
                fontWeight: 500,
                border: "1px solid",
                transition: "all 0.2s",
                cursor: "pointer",
                background: active === cat ? "rgba(139,92,246,0.15)" : "rgba(255,255,255,0.03)",
                borderColor: active === cat ? "rgba(139,92,246,0.5)" : "rgba(255,255,255,0.07)",
                color: active === cat ? "#a78bfa" : "#64748b",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div
          layout
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 14 }}
        >
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.3 }}
              whileHover={{ y: -6, scale: 1.04 }}
              className="glass tilt-card"
              style={{
                padding: "20px 16px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
                cursor: "default",
                transition: "border-color 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${skill.color}40`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${skill.color}20, 0 8px 25px rgba(0,0,0,0.4)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Color dot */}
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: `${skill.color}20`,
                border: `1px solid ${skill.color}40`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: skill.color, boxShadow: `0 0 10px ${skill.color}` }} />
              </div>

              {/* Name */}
              <span style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 600, fontSize: "0.82rem", color: "#e2e8f0", textAlign: "center" }}>
                {skill.name}
              </span>

              {/* Progress bar */}
              <div style={{ width: "100%", height: 3, borderRadius: 2, background: "rgba(255,255,255,0.05)", overflow: "hidden" }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.03 + 0.3, ease: "easeOut" }}
                  style={{ height: "100%", borderRadius: 2, background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)` }}
                />
              </div>

              <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", color: "#475569" }}>{skill.category}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
