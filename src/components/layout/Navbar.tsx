"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/data";
import { FiMenu, FiX } from "react-icons/fi";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Track active section. Assumes sections have matching ids (e.g. #about)
  const sectionIds = NAV_LINKS.map(link => link.href.replace('#', ''));
  const activeSection = useScrollSpy(sectionIds, 150);

  // Smooth scroll handler with offset for sticky navbar
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    if (elem) {
      const top = elem.getBoundingClientRect().top + window.scrollY - 80; // 80px offset
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        aria-label="Main Navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-panel py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "#about")}
            aria-label="Scroll to home" 
            className="flex items-center gap-1.5 text-2xl font-extrabold tracking-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-1"
          >
            <motion.span
              animate={{ scale: [1, 1.05, 1], boxShadow: ["0px 0px 0px rgba(99,102,241,0)", "0px 0px 15px rgba(99,102,241,0.5)", "0px 0px 0px rgba(99,102,241,0)"] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 text-white text-lg"
            >
              K
            </motion.span>
            ABILAN
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    aria-current={isActive ? "page" : undefined}
                    className={`text-sm font-medium transition-colors relative group py-2 
                      ${isActive ? "text-indigo-400" : "text-slate-300 hover:text-white"}`}
                  >
                    {link.name}
                    <span 
                      className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 
                        ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} 
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              aria-label="Contact Section"
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-2xl text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded p-1"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen(true)}
          >
            <FiMenu />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[60] glass-panel flex justify-end"
          >
            {/* Backdrop click to close */}
            <div className="absolute inset-0" onClick={() => setMobileMenuOpen(false)} />
            
            <div className="relative w-64 h-full bg-[#050a14]/95 border-l border-white/10 p-6 flex flex-col pt-16">
              <button
                className="absolute top-6 right-6 text-2xl text-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded p-1"
                aria-label="Close menu"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FiX />
              </button>
              
              <ul className="flex flex-col gap-6 mt-8">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`text-lg font-medium transition-colors block
                          ${isActive ? "text-indigo-400 font-bold" : "text-slate-300 hover:text-white hover:text-indigo-400"}`}
                      >
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
