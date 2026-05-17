"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[];
  video: string | null;
  accent: string;
  name: string;
}

export default function MediaCarousel({ images, video, accent, name }: Props) {
  const [idx, setIdx] = useState(0);
  const total = images.length;

  if (video) {
    const isYoutube = video.startsWith("https://www.youtube.com") || video.startsWith("https://youtu.be");
    if (isYoutube) {
      const videoId = video.includes("v=")
        ? video.split("v=")[1].split("&")[0]
        : video.split("/").pop();
      return (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          style={{ width: "100%", height: "100%", border: "none" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }
    return (
      <video
        src={video}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        controls
        playsInline
        preload="metadata"
      />
    );
  }

  if (total > 0) {
    return (
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        {images.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt={`${name} ${i + 1}`}
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "top",
              opacity: i === idx ? 1 : 0,
              transition: "opacity 0.35s ease-in-out",
            }}
          />
        ))}

        {total > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); setIdx((n) => (n - 1 + total) % total); }}
              style={{
                position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)",
                zIndex: 10, width: 30, height: 30, borderRadius: "50%",
                background: "rgba(0,0,0,0.75)", border: `1px solid ${accent}40`,
                color: "#fff", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <ChevronLeft size={14} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); setIdx((n) => (n + 1) % total); }}
              style={{
                position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)",
                zIndex: 10, width: 30, height: 30, borderRadius: "50%",
                background: "rgba(0,0,0,0.75)", border: `1px solid ${accent}40`,
                color: "#fff", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <ChevronRight size={14} />
            </button>

            <div style={{
              position: "absolute", top: 8, right: 8, zIndex: 10,
              background: "rgba(0,0,0,0.7)", borderRadius: 999,
              padding: "2px 8px", fontFamily: "monospace", fontSize: 10, color: "#fff",
            }}>
              {idx + 1}/{total}
            </div>

            <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", zIndex: 10, display: "flex", gap: 5 }}>
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setIdx(i); }}
                  style={{
                    height: 6, width: i === idx ? 18 : 6, borderRadius: 999,
                    background: i === idx ? "#fff" : "rgba(255,255,255,0.4)",
                    border: "none", cursor: "pointer", padding: 0,
                    transition: "all 0.2s",
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 900, fontSize: "4rem", color: `${accent}20` }}>
        {name.slice(0, 2).toUpperCase()}
      </span>
    </div>
  );
}
