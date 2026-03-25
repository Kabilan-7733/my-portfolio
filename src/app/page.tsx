import Navbar from "@/components/layout/Navbar";
import Background3D from "@/components/canvas/Background3D";
import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen selection:bg-indigo-500/30">
      <Background3D />
      <Navbar />
      
      <Hero />
      <TechStack />
      <Projects />
      <Certifications />
      <Experience />
      <Education />

      <CTA />

      <Footer />
    </main>
  );
}
