"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Check, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

// 👉 Remplace ces valeurs par tes identifiants EmailJS
const EMAILJS_SERVICE_ID  = "service_butkr7d";
const EMAILJS_TEMPLATE_ID = "template_bjl3ihd";
const EMAILJS_PUBLIC_KEY  = "TLgQbai7_RCNseW_3";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="section-pad" style={{ padding: "120px 20px 80px", position: "relative", overflow: "hidden" }}>
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
            Alternance (12 mois) dès sept. 2026 · Stage ingénieur (6 mois) dès fév. 2027 · Ouvert à toute la France.
          </p>
        </motion.div>

        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 32, alignItems: "start" }}>
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            {[
              { icon: Mail,        label: "Email",      value: "wankamdypuedilane@gmail.com",              href: "mailto:wankamdypuedilane@gmail.com",                                         color: "#8b5cf6" },
              { icon: GithubIcon,  label: "GitHub",     value: "github.com/wankamdypuedilane",              href: "https://github.com/wankamdypuedilane",                                      color: "#94a3b8" },
              { icon: LinkedinIcon,label: "LinkedIn",   value: "linkedin.com/in/dypue-dilane-junior-wankam", href: "https://www.linkedin.com/in/dypue-dilane-junior-wankam-b70b58303/",         color: "#0A66C2" },
              { icon: MapPin,      label: "Localisation", value: "Brest, France — mobile sur toute la France", href: null,                                                                     color: "#22d3ee" },
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
                  <div style={{ minWidth: 0 }}>
                    <p style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", color: "#475569", marginBottom: 2 }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                        style={{ color: "#94a3b8", fontSize: "0.82rem", textDecoration: "none", transition: "color 0.2s", display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
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
            ref={formRef}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={submit}
            className="glass"
            style={{ padding: "32px", borderRadius: 20, border: "1px solid rgba(139,92,246,0.12)", display: "flex", flexDirection: "column", gap: 18 }}
          >
            {[
              { id: "from_name",  label: "Nom",   type: "text",  placeholder: "Jean Dupont" },
              { id: "from_email", label: "Email", type: "email", placeholder: "jean@example.com" },
            ].map((field) => (
              <div key={field.id}>
                <label style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.65rem", color: "#64748b", display: "block", marginBottom: 7, letterSpacing: "0.08em" }}>
                  {field.label.toUpperCase()}
                </label>
                <input
                  name={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
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
                name="message"
                placeholder="Parlez-moi de votre projet, stage ou alternance..."
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
              disabled={status === "sending"}
              whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center", padding: "14px", opacity: status === "sending" ? 0.7 : 1 }}
            >
              {status === "sending" && <><span style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,0.3)", borderTop: "2px solid #fff", borderRadius: "50%", display: "inline-block", animation: "spin 0.7s linear infinite" }} /> Envoi en cours...</>}
              {status === "sent"    && <><Check size={16} /> Message envoyé !</>}
              {status === "error"   && <><AlertCircle size={16} /> Erreur — réessaie</>}
              {status === "idle"    && <><Send size={16} /> Envoyer</>}
            </motion.button>
          </motion.form>
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
