"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import MediaCarousel from "@/components/MediaCarousel";
import { PROJECTS } from "@/data/index";

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const others   = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" style={{ padding: "120px 20px", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", top: "20%", right: "-8%",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)",
        filter: "blur(80px)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64, textAlign: "center" }}
        >
          <p className="section-tag" style={{ marginBottom: 12 }}>// projets_phares</p>
          <h2 style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#f1f5f9", marginBottom: 16 }}>
            Ce que j&apos;ai{" "}
            <span className="gradient-text">construit</span>
          </h2>
        </motion.div>

        {/* Featured — large cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24, marginBottom: 24 }}>
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -6 }}
              style={{
                borderRadius: 20, overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.07)",
                background: "#0a0920",
                display: "flex", flexDirection: "column",
                transition: "box-shadow 0.3s, border-color 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${project.accent}40`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${project.accent}15`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Media */}
              <div style={{ height: 230, position: "relative", overflow: "hidden", background: "#060614", flexShrink: 0 }}>
                <MediaCarousel images={project.images} video={project.video} accent={project.accent} name={project.name} />
                {project.liveUrl && (
                  <div style={{
                    position: "absolute", top: 12, left: 12, zIndex: 20,
                    display: "flex", alignItems: "center", gap: 5,
                    background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)",
                    border: "1px solid rgba(16,185,129,0.3)", borderRadius: 999,
                    padding: "4px 10px",
                  }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", display: "inline-block" }} className="animate-pulse" />
                    <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", color: "#10b981" }}>en ligne</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div style={{ padding: "22px 22px 18px", flex: 1, display: "flex", flexDirection: "column" }}>
                <p style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", color: project.accent, marginBottom: 6, letterSpacing: "0.08em" }}>
                  {project.tagline.toUpperCase()}
                </p>
                <h3 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 800, fontSize: "1.2rem", color: "#f1f5f9", marginBottom: 8 }}>
                  {project.name}
                </h3>
                <p style={{ color: "#64748b", fontSize: "0.8rem", lineHeight: 1.7, flex: 1, marginBottom: 16 }}>
                  {project.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 16 }}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={{
                      fontFamily: "var(--font-jetbrains)", fontSize: "0.58rem",
                      padding: "2px 8px", borderRadius: 6,
                      background: `${project.accent}12`, border: `1px solid ${project.accent}25`, color: project.accent,
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                    style={{
                      flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                      padding: "8px 0", borderRadius: 10,
                      background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                      color: "#94a3b8", textDecoration: "none", fontSize: "0.75rem", fontWeight: 500, transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#f1f5f9"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#94a3b8"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; }}
                  >
                    <GithubIcon size={13} /> GitHub
                  </a>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      style={{
                        flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                        padding: "8px 0", borderRadius: 10,
                        background: `linear-gradient(135deg, ${project.accent}cc, ${project.accent}88)`,
                        color: "#fff", textDecoration: "none", fontSize: "0.75rem", fontWeight: 600,
                        transition: "all 0.2s", boxShadow: `0 0 20px ${project.accent}25`,
                      }}
                    >
                      <ExternalLink size={13} /> Voir le site
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
          {others.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              style={{
                borderRadius: 16, overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.06)",
                background: "#090818",
                display: "flex", flexDirection: "column",
                transition: "border-color 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${project.accent}35`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 10px 40px ${project.accent}12`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div style={{ height: 150, position: "relative", overflow: "hidden", background: "#060614", flexShrink: 0 }}>
                <MediaCarousel images={project.images} video={project.video} accent={project.accent} name={project.name} />
              </div>

              <div style={{ padding: "16px 18px 14px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <h3 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: "0.9rem", color: "#f1f5f9" }}>
                    {project.name}
                  </h3>
                  <div style={{ display: "flex", gap: 6 }}>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#475569", transition: "color 0.2s" }}
                      onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#94a3b8"; }}
                      onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#475569"; }}
                    ><GithubIcon size={14} /></a>
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#475569", transition: "color 0.2s" }}
                        onMouseEnter={(e) => { (e.target as HTMLElement).style.color = project.accent; }}
                        onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#475569"; }}
                      ><ArrowUpRight size={14} /></a>
                    )}
                  </div>
                </div>
                <p style={{ color: "#475569", fontSize: "0.75rem", lineHeight: 1.6, marginBottom: 10 }}>
                  {project.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} style={{
                      fontFamily: "var(--font-jetbrains)", fontSize: "0.55rem",
                      padding: "2px 7px", borderRadius: 5,
                      background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", color: "#64748b",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginTop: 56 }}
        >
          <a href="https://github.com/wankamdypuedilane" target="_blank" rel="noopener noreferrer"
            className="btn-secondary" style={{ display: "inline-flex" }}
          >
            <GithubIcon size={16} /> Voir tout sur GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
