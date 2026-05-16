"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Footer() {
  const links = [
    { icon: GithubIcon,   href: "https://github.com/wankamdypuedilane" },
    { icon: LinkedinIcon, href: "https://www.linkedin.com/in/dypue-dilane-junior-wankam-b70b58303/" },
    { icon: Mail,         href: "mailto:wankamdypuedilane@gmail.com", isLucide: true },
  ] as const;

  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "32px 20px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
        <div>
          <p style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, color: "#475569", fontSize: "0.85rem" }}>
            WANKAM Dypue Dilane Junior
          </p>
          <p style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.65rem", color: "#334155", marginTop: 4 }}>
            © 2026 · Étudiant Ingénieur DevOps / Cloud · Brest, France
          </p>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          {links.map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              style={{ width: 34, height: 34, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#334155", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", textDecoration: "none", transition: "color 0.2s, border-color 0.2s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#8b5cf6"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(139,92,246,0.3)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#334155"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; }}
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
