"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#about",    label: "À propos" },
  { href: "#skills",   label: "Compétences" },
  { href: "#projects", label: "Projets" },
  { href: "#books",    label: "Livres" },
  { href: "#journey",  label: "Parcours" },
  { href: "#contact",  label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? "12px 24px" : "20px 24px",
        transition: "padding 0.3s ease, background 0.3s ease, box-shadow 0.3s ease",
        background: scrolled ? "rgba(2,0,20,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(139,92,246,0.1)" : "none",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: "linear-gradient(135deg, #7c3aed, #2563eb)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 14, fontWeight: 800, color: "#fff",
              boxShadow: "0 0 20px rgba(124,58,237,0.4)",
            }}>
              WD
            </div>
            <span style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: "0.95rem", color: "#f1f5f9" }}>
              Dilane<span style={{ color: "#8b5cf6" }}>.</span>dev
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div style={{ gap: 4, alignItems: "center" }} className="hidden md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setActive(l.href)}
              style={{
                padding: "6px 14px",
                borderRadius: 8,
                fontSize: "0.85rem",
                fontWeight: 500,
                color: active === l.href ? "#a78bfa" : "#94a3b8",
                textDecoration: "none",
                transition: "color 0.2s, background 0.2s",
                background: active === l.href ? "rgba(139,92,246,0.1)" : "transparent",
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#a78bfa"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = active === l.href ? "#a78bfa" : "#94a3b8"; }}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary" style={{ padding: "8px 20px", marginLeft: 8 }}>
            Me contacter
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", color: "#94a3b8", padding: 4, display: "flex" }}
          className="flex md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              overflow: "hidden",
              background: "rgba(2,0,20,0.95)",
              backdropFilter: "blur(20px)",
              borderTop: "1px solid rgba(139,92,246,0.1)",
              marginTop: 12,
            }}
          >
            <div style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: 4 }}>
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => { setActive(l.href); setOpen(false); }}
                  style={{ padding: "10px 14px", borderRadius: 8, color: "#94a3b8", textDecoration: "none", fontSize: "0.9rem" }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
