import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kabilan P — Full Stack Developer",
  description: "Portfolio of Kabilan P — Full Stack Developer & AI Enthusiast specializing in the MERN stack and modern web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased text-white bg-bg-primary relative min-h-screen selection:bg-indigo-500/30`}>
        {children}
      </body>
    </html>
  );
}
