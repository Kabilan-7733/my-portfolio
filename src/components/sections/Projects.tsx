"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/data";
import { FiGithub, FiExternalLink } from "react-icons/fi";

// CSS gradients as visually appealing placeholders
const gradients = [
  "from-blue-500 to-indigo-600",
  "from-emerald-400 to-cyan-500",
  "from-fuchsia-500 to-purple-600",
  "from-orange-400 to-rose-500"
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10 bg-[#0a1120]/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-4">
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl">
            A selection of my recent work focusing on scalable architecture, AI integration, and delightful user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-indigo-500/40 relative"
            >
              {/* Cover Image Placeholder */}
              <div className={`h-56 relative w-full overflow-hidden bg-gradient-to-tr ${gradients[idx % gradients.length]}`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-50 group-hover:scale-110 transition-transform duration-700 ease-out">
                  {project.icon}
                </div>
                {/* Overlay hover effect */}
                <div className="absolute inset-0 flex items-center justify-center translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 bg-black/60 backdrop-blur-sm -z-0">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform">
                    View Project <FiExternalLink />
                  </a>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8 relative z-10 bg-[#0a1120]/80 backdrop-blur-md">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 block mb-1">{project.type}</span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">{project.title}</h3>
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-xl p-2 bg-white/5 rounded-full hover:bg-white/10">
                    <FiGithub />
                  </a>
                </div>
                
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
