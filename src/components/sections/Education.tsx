"use client";

import { motion } from "framer-motion";
import { EDUCATION } from "@/data";
import { FiBookOpen } from "react-icons/fi";

export default function Education() {
  return (
    <section id="education" className="py-24 relative z-10 bg-[#0a1120]/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4">
            Academic Background
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My formal education providing a strong foundation in computer science and software engineering principles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-card p-8 rounded-2xl hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Ambient Glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-start gap-4">
                <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-blue-400 text-2xl group-hover:scale-110 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-300">
                  <FiBookOpen />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <h4 className="text-slate-300 font-medium mb-3">{edu.school}</h4>
                  
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-sm font-semibold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  
                  <ul className="flex flex-wrap gap-2">
                    {edu.meta.map((tag, i) => (
                      <li key={i} className="text-xs font-medium text-slate-400 bg-white/5 border border-white/5 px-2 py-1 rounded">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
