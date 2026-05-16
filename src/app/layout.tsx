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
  title: "WANKAM Dypue Dilane Junior — DevOps & Cloud Engineer",
  description:
    "Portfolio of WANKAM Dypue Dilane Junior — DevOps Engineer, Cloud Architect, Backend Developer, and Author of 23 technical books.",
  keywords: ["DevOps", "Cloud", "AWS", "Docker", "Kubernetes", "Terraform", "Portfolio"],
  openGraph: {
    title: "WANKAM Dypue Dilane Junior",
    description: "DevOps & Cloud Engineer · Technical Author · Backend Developer",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="noise">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
