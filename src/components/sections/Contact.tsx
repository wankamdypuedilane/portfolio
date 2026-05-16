"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: { preventDefault(): void }) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" style={{ padding: "120px 20px 80px", position: "relative", overflow: "hidden" }}>
      {/* Background */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 100%, rgba(139,92,246,0.07) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />
      <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />

      <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64, textAlign: "center" }}
        >
          <p className="section-tag" style={{ marginBottom: 12 }}>// me_contacter</p>
          <h2 style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#f1f5f9", marginBottom: 16 }}>
            Construisons quelque chose{" "}
            <span className="gradient-text">ensemble</span>
          </h2>
          <p style={{ color: "#64748b", fontSize: "0.9rem", maxWidth: 460, margin: "0 auto" }}>
            Disponible pour un stage ou une alternance DevOps / Cloud — n&apos;hésitez pas à me contacter.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 32, alignItems: "start" }} className="max-md:grid-cols-1">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            {[
              { icon: Mail,        label: "Email",    value: "wankamdypuedilane@gmail.com", href: "mailto:wankamdypuedilane@gmail.com", color: "#8b5cf6" },
              { icon: GithubIcon,  label: "GitHub",   value: "github.com/wankamdypuedilane", href: "https://github.com/wankamdypuedilane", color: "#94a3b8" },
              { icon: LinkedinIcon,label: "LinkedIn", value: "linkedin.com/in/dypue-dilane-junior-wankam", href: "https://www.linkedin.com/in/dypue-dilane-junior-wankam-b70b58303/", color: "#0A66C2" },
              { icon: MapPin,  label: "Location", value: "Brest, France — mobile sur toute la France", href: null, color: "#22d3ee" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 6 }}
                  className="glass"
                  style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: `${item.color}15`, border: `1px solid ${item.color}30`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={18} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", color: "#475569", marginBottom: 2 }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ color: "#94a3b8", fontSize: "0.82rem", textDecoration: "none", transition: "color 0.2s" }}
                        onMouseEnter={(e) => { (e.target as HTMLElement).style.color = item.color; }}
                        onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#94a3b8"; }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span style={{ color: "#94a3b8", fontSize: "0.82rem" }}>{item.value}</span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right — form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={submit}
            className="glass"
            style={{ padding: "32px 32px", borderRadius: 20, border: "1px solid rgba(139,92,246,0.12)", display: "flex", flexDirection: "column", gap: 18 }}
          >
            {[
              { id: "name",    label: "Nom",    type: "text",  placeholder: "WANKAM Dypue" },
              { id: "email",   label: "Email",   type: "email", placeholder: "vous@exemple.com" },
            ].map((field) => (
              <div key={field.id}>
                <label style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.65rem", color: "#64748b", display: "block", marginBottom: 7, letterSpacing: "0.08em" }}>
                  {field.label.toUpperCase()}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.id as "name" | "email"]}
                  onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                  required
                  style={{
                    width: "100%", background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 10, padding: "11px 14px",
                    color: "#f1f5f9", fontSize: "0.85rem", outline: "none",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                    fontFamily: "var(--font-inter)",
                  }}
                  onFocus={(e) => { e.target.style.borderColor = "rgba(139,92,246,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(139,92,246,0.1)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.boxShadow = "none"; }}
                />
              </div>
            ))}

            <div>
              <label style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.65rem", color: "#64748b", display: "block", marginBottom: 7, letterSpacing: "0.08em" }}>
                MESSAGE / OPPORTUNITÉ
              </label>
              <textarea
                placeholder="Parlez-moi de votre projet, stage ou alternance..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={4}
                style={{
                  width: "100%", background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 10, padding: "11px 14px",
                  color: "#f1f5f9", fontSize: "0.85rem", outline: "none",
                  resize: "vertical", fontFamily: "var(--font-inter)",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                onFocus={(e) => { e.target.style.borderColor = "rgba(139,92,246,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(139,92,246,0.1)"; }}
                onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.boxShadow = "none"; }}
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center", padding: "14px" }}
            >
              {sent ? (
                <><Check size={16} /> Message envoyé !</>
              ) : (
                <><Send size={16} /> Envoyer</>

              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
