"use client";

import { motion } from "framer-motion";
import { GraduationCap, Lightbulb, Trophy, Rocket } from "lucide-react";
import { TIMELINE } from "@/data/index";

const ICONS = {
  education:   GraduationCap,
  milestone:   Lightbulb,
  achievement: Trophy,
  current:     Rocket,
} as const;

const COLORS = {
  education:   "#22d3ee",
  milestone:   "#8b5cf6",
  achievement: "#f59e0b",
  current:     "#10b981",
} as const;

type TimelineType = keyof typeof ICONS;

export default function Timeline() {
  return (
    <section id="journey" className="section-pad" style={{ padding: "120px 20px", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", top: "50%", right: "-5%",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)",
        filter: "blur(80px)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 72, textAlign: "center" }}
        >
          <p className="section-tag" style={{ marginBottom: 12 }}>// mon_parcours</p>
          <h2 style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#f1f5f9", marginBottom: 16 }}>
            De la Mécatronique{" "}
            <span className="gradient-text-2">au Cloud</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative", paddingLeft: 40 }}>
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: 14,
              top: 0,
              bottom: 0,
              width: 1,
              background: "linear-gradient(to bottom, #8b5cf6, #22d3ee, #10b981)",
              transformOrigin: "top",
            }}
          />

          {TIMELINE.map((item, i) => {
            const Icon = ICONS[item.type as TimelineType];
            const color = COLORS[item.type as TimelineType];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{ display: "flex", gap: 24, marginBottom: 44, position: "relative" }}
              >
                {/* Icon node */}
                <div style={{
                  position: "absolute",
                  left: -40,
                  top: 4,
                  width: 28, height: 28, borderRadius: "50%",
                  background: `${color}20`,
                  border: `1.5px solid ${color}60`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: `0 0 15px ${color}25`,
                }}>
                  <Icon size={13} style={{ color }} />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="glass"
                  style={{
                    flex: 1,
                    padding: "20px 24px",
                    borderRadius: 14,
                    border: `1px solid ${color}15`,
                    borderLeft: `2px solid ${color}`,
                    transition: "box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 30px ${color}12`; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6, flexWrap: "wrap", gap: 8 }}>
                    <h3 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: "0.95rem", color: "#f1f5f9" }}>
                      {item.title}
                    </h3>
                    <span style={{
                      fontFamily: "var(--font-jetbrains)", fontSize: "0.65rem",
                      padding: "3px 10px", borderRadius: 999,
                      background: `${color}15`, border: `1px solid ${color}30`,
                      color,
                    }}>
                      {item.year}
                    </span>
                  </div>
                  <p style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.7rem", color, marginBottom: 8 }}>
                    {item.subtitle}
                  </p>
                  <p style={{ color: "#64748b", fontSize: "0.8rem", lineHeight: 1.7 }}>
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
