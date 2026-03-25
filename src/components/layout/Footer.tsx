"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050a14]/80 backdrop-blur-lg py-12 relative z-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-extrabold tracking-tight">
            <span className="w-6 h-6 inline-flex items-center justify-center rounded bg-gradient-to-tr from-indigo-500 to-purple-500 text-white text-sm mr-1">K</span>
            ABILAN
          </span>
          <p className="text-sm text-slate-500">© 2026 All Rights Reserved to Kabilan</p>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/Kabilan-7733" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 hover:text-indigo-400 transition-all text-slate-400">
            <FiGithub className="text-lg" />
          </a>
          <a href="https://www.linkedin.com/in/kabilan-palanivel/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 hover:text-indigo-400 transition-all text-slate-400">
            <FiLinkedin className="text-lg" />
          </a>
          <a href="mailto:kabilanatwork@gmail.com" className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 hover:text-indigo-400 transition-all text-slate-400">
            <FiMail className="text-lg" />
          </a>
        </div>
        
      </div>
    </footer>
  );
}
