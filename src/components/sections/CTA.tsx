"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiSend, FiCheckCircle } from "react-icons/fi";

export default function CTA() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    
    // Simulate API request for the form
    setTimeout(() => {
      setFormState("success");
      // Reset after 3 seconds
      setTimeout(() => setFormState("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Background Gradients for the Container */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 rounded-3xl blur-3xl -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center bg-[#050a14]/60 backdrop-blur-xl border border-white/10 p-8 md:p-16 rounded-3xl relative overflow-hidden shadow-2xl">
          
          {/* Inner ambient light */}
          <div className="absolute top-0 left-0 w-full lg:w-1/2 h-full bg-indigo-500/10 blur-[120px] pointer-events-none" />

          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-left relative z-10"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white leading-tight">
              Let's Build Something <br className="hidden md:block" />
              <span className="text-gradient">Amazing Together</span>
            </h2>
            
            <p className="text-slate-400 text-lg max-w-lg mb-8 leading-relaxed">
              Whether you have a unique project in mind, need a full-stack architecture built from scratch, or just want to connect — my inbox is always open.
            </p>

            <div className="flex flex-col gap-6">
              <a href="mailto:kabilanatwork@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group w-fit">
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-xl text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all">
                  <FiMail />
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-wider text-slate-500 uppercase">Email Me At</p>
                  <p className="text-lg font-medium">kabilanatwork@gmail.com</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="w-full relative z-10"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-400 px-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-400 px-1">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    placeholder="john@example.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2 mt-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-400 px-1">Your Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  required
                  placeholder="Tell me about your project..." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={formState !== "idle"}
                className="mt-4 w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 shadow-[0_4px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_30px_rgba(99,102,241,0.5)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {formState === "idle" && (
                  <>
                    Send Message <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
                {formState === "submitting" && "Sending..."}
                {formState === "success" && (
                  <>
                    Message Sent! <FiCheckCircle className="text-green-400" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
