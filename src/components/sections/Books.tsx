"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { BOOKS, type BookCategory } from "@/data/index";

const CATS: (BookCategory | "All")[] = ["All", "DevOps", "Cloud", "Backend", "Languages"];

const CAT_COLORS: Record<string, string> = {
  DevOps: "#8b5cf6",
  Cloud: "#22d3ee",
  Backend: "#10b981",
  Languages: "#f59e0b",
};

export default function Books() {
  const [active, setActive] = useState<BookCategory | "All">("All");
  const filtered = active === "All" ? BOOKS : BOOKS.filter((b) => b.category === active);

  return (
    <section id="books" style={{ padding: "120px 20px", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", top: "5%", left: "-5%",
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)",
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
          <p className="section-tag" style={{ marginBottom: 12 }}>// technical_books</p>
          <h2 style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#f1f5f9", marginBottom: 16 }}>
            23 livres,{" "}
            <span className="gradient-text">une mission</span>
          </h2>
          <p style={{ color: "#64748b", fontSize: "0.9rem", maxWidth: 480, margin: "0 auto" }}>
            Une bibliothèque complète DevOps & Cloud — disponible sur Amazon.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: 48 }}>
          {CATS.map((cat) => {
            const color = cat === "All" ? "#8b5cf6" : (CAT_COLORS[cat] ?? "#8b5cf6");
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: "7px 20px", borderRadius: 999,
                  fontFamily: "var(--font-jetbrains)", fontSize: "0.72rem", fontWeight: 500,
                  border: `1px solid ${isActive ? color + "50" : "rgba(255,255,255,0.07)"}`,
                  background: isActive ? `${color}18` : "rgba(255,255,255,0.03)",
                  color: isActive ? color : "#64748b",
                  cursor: "pointer", transition: "all 0.2s",
                }}
              >
                {cat}
                <span style={{ marginLeft: 6, fontSize: "0.6rem", opacity: 0.7 }}>
                  ({cat === "All" ? BOOKS.length : BOOKS.filter((b) => b.category === cat).length})
                </span>
              </button>
            );
          })}
        </div>

        {/* Books grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 16 }}>
          {filtered.map((book, i) => {
            const color = CAT_COLORS[book.category] ?? "#8b5cf6";
            return (
              <motion.a
                key={book.id}
                href={book.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                whileHover={{ y: -8, scale: 1.03 }}
                style={{
                  display: "flex", flexDirection: "column",
                  borderRadius: 14, overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.06)",
                  textDecoration: "none",
                  background: "#090818",
                  transition: "border-color 0.25s, box-shadow 0.25s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${color}40`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px ${color}15`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Book cover */}
                <div style={{ height: 180, overflow: "hidden", position: "relative", background: "#0a0820" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={book.cover}
                    alt={book.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                    onError={(e) => {
                      // Fallback to colored placeholder if image fails
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                      const parent = (e.currentTarget as HTMLImageElement).parentElement;
                      if (parent) parent.style.background = `${color}18`;
                    }}
                  />
                  {/* Hover overlay */}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to bottom, transparent 50%, rgba(9,8,24,0.9) 100%)",
                    display: "flex", alignItems: "flex-end", padding: "10px 10px",
                    opacity: 0, transition: "opacity 0.2s",
                  }}
                  className="book-overlay"
                  >
                    <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", color: "#10b981", display: "flex", alignItems: "center", gap: 4 }}>
                      <ShoppingCart size={10} /> Voir sur Amazon
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div style={{ padding: "12px 12px 10px" }}>
                  <h3 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: "0.82rem", color: "#f1f5f9", marginBottom: 3, lineHeight: 1.3 }}>
                    {book.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.58rem", color: "#475569", marginBottom: 6, lineHeight: 1.4 }}>
                    {book.subtitle}
                  </p>
                  <span style={{
                    fontFamily: "var(--font-jetbrains)", fontSize: "0.58rem",
                    padding: "2px 8px", borderRadius: 4,
                    background: `${color}15`, border: `1px solid ${color}25`, color,
                  }}>
                    {book.category}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Amazon CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginTop: 56, textAlign: "center" }}
        >
          <div className="glass" style={{ display: "inline-block", padding: "28px 48px", borderRadius: 20, border: "1px solid rgba(245,158,11,0.15)" }}>
            <p style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, color: "#f1f5f9", marginBottom: 8 }}>
              Les 23 livres disponibles sur Amazon
            </p>
            <p style={{ color: "#64748b", fontSize: "0.82rem", marginBottom: 20 }}>
              DevOps · Cloud · Backend · Langages de programmation
            </p>
            <a
              href="https://www.amazon.com/dp/B0GY1BKLC5?binding=kindle_edition&ref=dbs_dp_sirpi"
              target="_blank" rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: "inline-flex" }}
            >
              <ShoppingCart size={16} /> Voir tout sur Amazon
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        .book-overlay { opacity: 0 !important; }
        a:hover .book-overlay { opacity: 1 !important; }
      `}</style>
    </section>
  );
}
