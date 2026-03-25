"use client";

import { motion } from "framer-motion";
import { CERTIFICATIONS } from "@/data";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-xs font-bold tracking-widest uppercase mb-4">
            Qualifications
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Licenses & Certifications</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Continuous learning is part of my development philosophy. Here are 10+ professional credentials I've earned.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="glass-card flex items-start gap-4 p-5 rounded-xl hover:border-teal-500/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(20,184,166,0.1)] transition-all duration-300 group"
            >
              <div className="p-3 bg-white/5 rounded-lg border border-white/5 group-hover:bg-teal-500/10 group-hover:border-teal-500/20 transition-colors text-2xl flex-shrink-0">
                {cert.icon}
              </div>
              <div>
                <h4 className="font-semibold text-slate-200 leading-tight mb-1 group-hover:text-white transition-colors">{cert.name}</h4>
                <p className="text-sm text-slate-400">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
