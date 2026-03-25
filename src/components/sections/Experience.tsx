"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/data";
import { FiBriefcase } from "react-icons/fi";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-bold tracking-widest uppercase mb-4">
            Career
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-slate-400 max-w-2xl">
            My professional journey and internships where I've applied my skills to real-world projects.
          </p>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#0a1120] text-orange-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(249,115,22,0.2)] z-10">
                <FiBriefcase />
              </div>
              
              {/* Card */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl hover:border-orange-500/30 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <span className="text-sm font-medium text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full whitespace-nowrap">{exp.period}</span>
                </div>
                <h4 className="text-lg text-slate-300 font-medium mb-4">{exp.company}</h4>
                <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
