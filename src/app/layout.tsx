import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WANKAM Dypue Dilane Junior — Ingénieur DevOps & Cloud",
  description:
    "Portfolio de WANKAM Dypue Dilane Junior — Étudiant ingénieur à l'ENIB, spécialisé DevOps & Cloud, auteur de 23 livres techniques. Disponible en alternance (sept. 2026) et stage ingénieur (fév. 2027).",
  keywords: ["DevOps", "Cloud", "AWS", "GitHub Actions", "CI/CD", "Kubernetes", "Terraform", "Portfolio", "Alternance", "Stage ingénieur"],
  openGraph: {
    title: "WANKAM Dypue Dilane Junior — Ingénieur DevOps & Cloud",
    description: "Étudiant ingénieur DevOps/Cloud · Auteur de 23 livres techniques · Disponible sept. 2026",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="noise">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
