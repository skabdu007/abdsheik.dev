import React from "react";
import { motion } from "framer-motion";
import { Atom, Code2, Sparkles, Layers, Zap } from "lucide-react";
import { personalData } from "@/data/personal";

export const DeveloperIllustration = ({ className = "" }) => {
  return (
    <div className={`relative w-full max-w-[440px] aspect-square mx-auto flex items-center justify-center ${className}`}>
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-sky-500/20 via-indigo-600/15 to-transparent blur-3xl rounded-full pointer-events-none" />

      {/* Pulsing Accent Orbit Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-2 rounded-full border border-dashed border-sky-500/30 pointer-events-none"
      />

      {/* Main Illustration Container */}
      <div className="relative z-10 w-[92%] h-[92%] rounded-3xl overflow-hidden glass-card p-2 border border-sky-500/30 shadow-glow-md group">
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#0e162d] to-[#050816] flex items-center justify-center">
          <img
            src={personalData.profileImage || "/assets/profile.png"}
            alt={`${personalData.name} - React.js & JavaScript Developer`}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="eager"
          />

          {/* Bottom Gradient Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050816] via-[#050816]/60 to-transparent pointer-events-none" />

          {/* Developer Tag Badge */}
          <div className="absolute bottom-3 inset-x-3 z-10 flex items-center justify-center">
            <div className="px-4 py-1.5 rounded-full bg-[#050816]/90 border border-sky-500/40 backdrop-blur-md shadow-lg flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-white">
                {personalData.name}
              </span>
              <span className="text-[10px] font-mono text-sky-400 hidden sm:inline">
                · REACT.JS
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Pill Tag 1: React.js Developer */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-3 -left-2 sm:left-2 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#091024]/95 border border-sky-500/50 backdrop-blur-md shadow-glow-sm"
      >
        <Atom className="w-3.5 h-3.5 text-sky-400 animate-spin-slow" />
        <span className="text-[11px] font-mono font-semibold text-slate-200 uppercase tracking-wider">
          REACT.JS &amp; ES6+
        </span>
      </motion.div>

      {/* Floating Pill Tag 2: Modern Frontend */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-3 -right-2 sm:right-2 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#091024]/95 border border-purple-500/50 backdrop-blur-md shadow-glow-sm"
      >
        <Sparkles className="w-3.5 h-3.5 text-purple-400" />
        <span className="text-[11px] font-mono font-semibold text-slate-200 uppercase tracking-wider">
          MODERN FRONTEND
        </span>
      </motion.div>

      {/* Floating Pill Tag 3: State & UI */}
      <motion.div
        animate={{ x: [0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="hidden sm:flex absolute top-1/2 -right-6 z-20 items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#091024]/95 border border-indigo-500/40 text-[10px] font-mono text-sky-300 backdrop-blur-md shadow-lg"
      >
        <Layers className="w-3.5 h-3.5 text-indigo-400" />
        <span>REDUCERS · HOOKS</span>
      </motion.div>
    </div>
  );
};
