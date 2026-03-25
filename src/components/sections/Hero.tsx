"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { FiArrowRight, FiDownload } from "react-icons/fi";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full gap-12 grid grid-cols-1 lg:grid-cols-2 items-center">
        
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col z-10"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card w-fit mb-6 border-indigo-500/30">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium text-indigo-300">Available for work</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            Hi, I'm <span className="text-gradient">Kabilan</span>
          </motion.h1>

          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl text-slate-300 font-medium mb-6">
            Full Stack Developer | <span className="text-cyan-400">AI Enthusiast</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-slate-400 text-lg leading-relaxed max-w-lg mb-10">
            I craft modern, responsive web experiences with the MERN stack — turning complex ideas into intuitive, high-performance digital products that users love.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 shadow-[0_4px_20px_rgba(99,102,241,0.4)] hover:shadow-[0_8px_30px_rgba(99,102,241,0.6)] hover:-translate-y-1 transition-all duration-300"
            >
              View Projects <FiArrowRight />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-8 py-3.5 rounded-full text-slate-200 font-semibold glass-card hover:border-indigo-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div variants={itemVariants} className="flex gap-8 mt-16 pt-8 border-t border-white/10">
            <div>
              <p className="text-3xl font-bold text-white">4+</p>
              <p className="text-sm text-slate-400 uppercase tracking-wider mt-1">Projects Built</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">8.72</p>
              <p className="text-sm text-slate-400 uppercase tracking-wider mt-1">CGPA</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">10+</p>
              <p className="text-sm text-slate-400 uppercase tracking-wider mt-1">Certifications</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center items-center lg:justify-end z-10 mt-12 lg:mt-0"
        >          
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-indigo-500 to-cyan-400 shadow-[0_0_40px_rgba(99,102,241,0.3)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#0a1120] relative">
              <Image
                src="/photo.jpg"
                alt="Kabilan P"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
                sizes="(max-width: 768px) 288px, 384px"
              />
            </div>
          </div>

          {/* Floating Badges */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -right-4 glass-card px-4 py-2 rounded-lg text-sm font-semibold text-green-400 shadow-xl"
          >
            ✅ MERN Stack
          </motion.div>
          
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 -left-6 glass-card px-4 py-2 rounded-lg text-sm font-semibold text-indigo-300 shadow-xl"
          >
            🎨 UI/UX Design
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
