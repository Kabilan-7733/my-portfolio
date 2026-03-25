"use client";

import React from "react";
import { motion } from "framer-motion";
import { SKILLS } from "@/data";
// Using devicons/react-icons for accurate full-color logos where possible
import { SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFigma, SiNodedotjs, SiExpress, SiGraphql, SiMongodb, SiMysql, SiGit, SiGithub, SiPostman, SiVercel } from "react-icons/si";
import { FaAws } from "react-icons/fa";

const iconMap: Record<string, React.JSX.Element> = {
  "HTML5": <SiHtml5 className="text-[#E34F26]" />,
  "CSS3": <SiCss className="text-[#1572B6]" />,
  "JavaScript": <SiJavascript className="text-[#F7DF1E]" />,
  "TypeScript": <SiTypescript className="text-[#3178C6]" />,
  "React.js": <SiReact className="text-[#61DAFB]" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,
  "Figma": <SiFigma className="text-[#F24E1E]" />,
  "Node.js": <SiNodedotjs className="text-[#339933]" />,
  "Express.js": <SiExpress className="text-white" />,
  "REST APIs": <span className="font-bold text-slate-300 mx-1">{`{}`}</span>,
  "GraphQL": <SiGraphql className="text-[#E10098]" />,
  "MongoDB": <SiMongodb className="text-[#47A248]" />,
  "MySQL": <SiMysql className="text-[#4479A1]" />,
  "AWS Core Services": <FaAws className="text-[#FF9900]" />,
  "Git": <SiGit className="text-[#F05032]" />,
  "GitHub": <SiGithub className="text-white" />,
  "Postman": <SiPostman className="text-[#FF6C37]" />,
  "VS Code": <span className="text-blue-500 font-bold ml-1">&lt;/&gt;</span>,
  "Vercel": <SiVercel className="text-white" />
};

export default function TechStack() {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-4">
            Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack & Tools</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Technologies I use to bring ideas to life, ensuring scalability, performance, and exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-card p-8 rounded-2xl hover:border-indigo-500/40 transition-colors group"
            >
              <h3 className="text-xl font-semibold mb-6 text-white group-hover:text-indigo-300 transition-colors">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {skillGroup.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-indigo-500/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] hover:-translate-y-1 transition-all duration-300 cursor-default"
                  >
                    <span className="text-xl">{iconMap[item] || <span className="w-2 h-2 rounded-full bg-indigo-500" />}</span>
                    <span className="text-sm font-medium text-slate-300 hover:text-white">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
