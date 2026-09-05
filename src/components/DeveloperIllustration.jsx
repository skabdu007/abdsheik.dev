import React, { useState } from "react";
import { motion } from "framer-motion";
import { personalData } from "@/data/personal";
import { getAssetUrl } from "@/lib/utils";

export const DeveloperIllustration = ({ className = "" }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className={`relative w-full max-w-[460px] aspect-square mx-auto flex items-center justify-center select-none ${className}`}
    >
      {/* ========================================================================= */}
      {/* 1. BACKGROUND MULTI-LAYERED SVG CYBER ORBITAL SYSTEM                      */}
      {/* ========================================================================= */}
      <svg
        className="absolute -inset-10 sm:-inset-14 w-[calc(100%+5rem)] sm:w-[calc(100%+7rem)] h-[calc(100%+5rem)] sm:h-[calc(100%+7rem)] pointer-events-none z-0"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Radial Ambient Core Glow */}
          <radialGradient id="cyberAmbientGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.28" />
            <stop offset="35%" stopColor="#6366f1" stopOpacity="0.18" />
            <stop offset="70%" stopColor="#a855f7" stopOpacity="0.06" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>

          {/* Primary Orbit Gradient */}
          <linearGradient id="orbitGradCyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.85" />
            <stop offset="40%" stopColor="#818cf8" stopOpacity="0.5" />
            <stop offset="80%" stopColor="#c084fc" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.8" />
          </linearGradient>

          {/* Secondary Orbit Gradient */}
          <linearGradient id="orbitGradPurple" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.8" />
          </linearGradient>

          {/* Neon Glow Filter */}
          <filter id="neonFilterGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Small Node Glow */}
          <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient Radial Core Light */}
        <circle cx="300" cy="300" r="265" fill="url(#cyberAmbientGlow)" />

        {/* Outer Orbit Ring 1: Clockwise Rotating Dashed Tech Ring */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "300px 300px" }}
        >
          <circle
            cx="300"
            cy="300"
            r="280"
            stroke="url(#orbitGradCyan)"
            strokeWidth="1.75"
            strokeDasharray="14 18 36 18"
            opacity="0.65"
          />
          <circle
            cx="300"
            cy="300"
            r="290"
            stroke="#38bdf8"
            strokeWidth="1"
            strokeDasharray="3 9"
            opacity="0.28"
          />

          {/* Cardinal Radar Degree Markers */}
          <text x="300" y="14" fill="#38bdf8" fontSize="8" fontFamily="monospace" textAnchor="middle" opacity="0.65">
            000° // MERN
          </text>
          <text x="590" y="303" fill="#818cf8" fontSize="8" fontFamily="monospace" textAnchor="start" opacity="0.65">
            090° // REST
          </text>
          <text x="300" y="594" fill="#38bdf8" fontSize="8" fontFamily="monospace" textAnchor="middle" opacity="0.65">
            180° // AUTH
          </text>
          <text x="10" y="303" fill="#818cf8" fontSize="8" fontFamily="monospace" textAnchor="end" opacity="0.65">
            270° // DATA
          </text>

          {/* Satellite Orbiting Nodes */}
          <circle cx="498" cy="102" r="4.5" fill="#38bdf8" filter="url(#nodeGlow)" />
          <circle cx="102" cy="498" r="4" fill="#a855f7" filter="url(#nodeGlow)" />
          <circle cx="102" cy="102" r="3" fill="#6366f1" opacity="0.8" />
          <circle cx="498" cy="498" r="3" fill="#38bdf8" opacity="0.8" />
        </motion.g>

        {/* Middle Orbit Ring 2: Counter-Clockwise Rotating Elliptical Path */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "300px 300px" }}
        >
          <circle
            cx="300"
            cy="300"
            r="250"
            stroke="url(#orbitGradPurple)"
            strokeWidth="1.5"
            strokeDasharray="20 15 6 15"
            opacity="0.55"
          />

          {/* Precision Crosshair Diamond Accents along orbit */}
          <path d="M 300 46 L 304 50 L 300 54 L 296 50 Z" fill="#38bdf8" />
          <path d="M 554 300 L 550 304 L 546 300 L 550 296 Z" fill="#c084fc" />
          <path d="M 300 554 L 304 550 L 300 546 L 296 550 Z" fill="#38bdf8" />
          <path d="M 46 300 L 50 304 L 54 300 L 50 296 Z" fill="#c084fc" />
        </motion.g>

        {/* Inner Concentric Tech Ring 3 with Precision Compass Ticks */}
        <circle
          cx="300"
          cy="300"
          r="225"
          stroke="#38bdf8"
          strokeWidth="1"
          strokeDasharray="4 8"
          opacity="0.3"
        />

        {/* Tech Corner Calibration Crosshairs */}
        <path d="M 60 75 L 60 60 L 75 60" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <path d="M 540 75 L 540 60 L 525 60" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <path d="M 60 525 L 60 540 L 75 540" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <path d="M 540 525 L 540 540 L 525 540" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      </svg>

      {/* ========================================================================= */}
      {/* 2. MAIN CYBER CARD CONTAINER WITH INTEGRATED SVG HUD & SCANNER            */}
      {/* ========================================================================= */}
      <motion.div
        whileHover={{ scale: 1.025 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative z-10 w-[90%] sm:w-[88%] aspect-square rounded-[2rem] overflow-hidden glass-card p-2 sm:p-2.5 border border-sky-500/40 hover:border-sky-400/80 shadow-glow-md hover:shadow-glow-lg transition-all duration-500 group"
      >
        <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-gradient-to-b from-[#0e162d] via-[#070b18] to-[#040612] flex items-center justify-center">
          
          {/* Subtle Background SVG Grid Matrix */}
          <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cardInnerGrid" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#38bdf8" strokeWidth="0.75" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cardInnerGrid)" />
          </svg>

          {/* Ambient Rim Glow behind portrait */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-radial from-sky-500/25 via-indigo-600/15 to-transparent blur-2xl pointer-events-none" />

          {/* DEVELOPER PORTRAIT IMAGE */}
          <img
            src={getAssetUrl(personalData.profileImage)}
            alt={`${personalData.name} - Full Stack Developer`}
            className={`w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 ease-out ${
              imageLoaded ? "opacity-100 filter-none" : "opacity-95 contrast-105"
            }`}
            loading="eager"
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = getAssetUrl("/developer-avatar.png");
            }}
          />

          {/* Bottom Gradient Fade Overlay (blends suit into cyber container) */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#040612] via-[#040612]/75 to-transparent pointer-events-none" />

          {/* ========================================================================= */}
          {/* 3. DYNAMIC SVG CYBER HUD OVERLAY (Framing, Brackets, Crosshairs, Scanner)  */}
          {/* ========================================================================= */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Laser Scanner Gradient */}
              <linearGradient id="laserBeamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
                <stop offset="20%" stopColor="#38bdf8" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="80%" stopColor="#818cf8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
              </linearGradient>

              {/* Laser Glow Area */}
              <linearGradient id="laserAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Top HUD Status Line & Code Stamp */}
            <g opacity="0.85">
              <rect x="24" y="16" width="6" height="2" fill="#38bdf8" />
              <rect x="34" y="16" width="3" height="2" fill="#38bdf8" />
              <text x="44" y="19" fill="#38bdf8" fontSize="7" fontFamily="monospace" letterSpacing="1.5">
                SYS: MERN.DEV // ID: 24SPCA043
              </text>
              <circle cx="366" cy="18" r="2.5" fill="#10b981" />
              <text x="360" y="20" fill="#10b981" fontSize="6.5" fontFamily="monospace" textAnchor="end">
                ONLINE
              </text>
            </g>

            {/* Cyber Corner HUD Brackets */}
            {/* Top-Left Bracket */}
            <path d="M 16 38 L 16 16 L 38 16" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="16" cy="16" r="1.5" fill="#38bdf8" />

            {/* Top-Right Bracket */}
            <path d="M 384 38 L 384 16 L 362 16" stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="384" cy="16" r="1.5" fill="#818cf8" />

            {/* Bottom-Left Bracket */}
            <path d="M 16 362 L 16 384 L 38 384" stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="16" cy="384" r="1.5" fill="#818cf8" />

            {/* Bottom-Right Bracket */}
            <path d="M 384 362 L 384 384 L 362 384" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="384" cy="384" r="1.5" fill="#38bdf8" />

            {/* Center Boundary Reticles */}
            <g stroke="#38bdf8" strokeWidth="1.2" opacity="0.6">
              {/* Left reticle */}
              <line x1="12" y1="200" x2="22" y2="200" />
              {/* Right reticle */}
              <line x1="378" y1="200" x2="388" y2="200" />
              {/* Top reticle */}
              <line x1="200" y1="12" x2="200" y2="22" />
            </g>

            {/* Target Crosshairs */}
            <g opacity="0.4" stroke="#38bdf8" strokeWidth="1">
              <line x1="30" y1="30" x2="36" y2="30" />
              <line x1="33" y1="27" x2="33" y2="33" />
              <line x1="370" y1="30" x2="364" y2="30" />
              <line x1="367" y1="27" x2="367" y2="33" />
            </g>

            {/* Dynamic Animated Vertical Laser Scanner Sweep */}
            <motion.g
              animate={{ y: [20, 320, 20] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Scanner Glow field */}
              <rect x="20" y="0" width="360" height="24" fill="url(#laserAreaGrad)" opacity="0.6" />
              {/* Sharp Laser Line */}
              <line x1="20" y1="24" x2="380" y2="24" stroke="url(#laserBeamGrad)" strokeWidth="2" />
              {/* Laser Core Point */}
              <circle cx="200" cy="24" r="2" fill="#ffffff" />
            </motion.g>
          </svg>

          {/* ========================================================================= */}
          {/* 4. DEVELOPER IDENTITY HUD BADGE (Inside Card Bottom)                      */}
          {/* ========================================================================= */}
          <div className="absolute bottom-3.5 inset-x-3 z-20 flex items-center justify-center">
            <div className="px-3.5 sm:px-4 py-1.5 rounded-full bg-[#050816]/95 border border-sky-500/50 backdrop-blur-md shadow-glow-sm flex items-center gap-2 max-w-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-[10.5px] sm:text-[11.5px] font-mono font-bold uppercase tracking-wider text-white whitespace-nowrap">
                {personalData.name}
              </span>
              <span className="text-[9.5px] sm:text-[10px] font-mono font-semibold text-sky-400 whitespace-nowrap">
                · FULL STACK
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* 5. FLOATING HIGH-TECH SVG BADGES                                          */}
      {/* ========================================================================= */}

      {/* FLOATING BADGE 1 (TOP-LEFT): MERN STACK & ES6+ */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-3.5 -left-2 sm:left-1 z-30 flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#091024]/95 border border-sky-500/60 backdrop-blur-md shadow-glow-sm hover:scale-105 transition-transform"
      >
        {/* Animated Custom SVG React Atom Icon */}
        <svg className="w-4 h-4 text-sky-400 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.3" className="origin-center animate-spin-slow" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.3" transform="rotate(60 12 12)" className="origin-center" opacity="0.8" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.3" transform="rotate(120 12 12)" className="origin-center" opacity="0.8" />
        </svg>
        <span className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-100 uppercase tracking-wider whitespace-nowrap">
          MERN STACK &amp; ES6+
        </span>
      </motion.div>

      {/* FLOATING BADGE 2 (MIDDLE-RIGHT): REST APIS · JWT RBAC */}
      <motion.div
        animate={{ x: [0, 7, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="hidden sm:flex absolute top-1/2 -right-6 md:-right-8 z-30 items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#091024]/95 border border-indigo-500/50 backdrop-blur-md shadow-glow-sm hover:scale-105 transition-transform"
      >
        {/* Custom SVG Stack/Layers Icon */}
        <svg className="w-3.5 h-3.5 text-indigo-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
        <span className="text-[10px] sm:text-[11px] font-mono font-bold text-sky-300 uppercase tracking-wider whitespace-nowrap">
          REST APIS · JWT RBAC
        </span>
      </motion.div>

      {/* FLOATING BADGE 3 (BOTTOM-RIGHT): NODE · EXPRESS · MONGO */}
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute -bottom-3.5 -right-2 sm:right-1 z-30 flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#091024]/95 border border-purple-500/60 backdrop-blur-md shadow-glow-sm hover:scale-105 transition-transform"
      >
        {/* Custom SVG Database Node Cluster Icon */}
        <svg className="w-3.5 h-3.5 text-purple-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
        <span className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-100 uppercase tracking-wider whitespace-nowrap">
          NODE · EXPRESS · MONGO
        </span>
      </motion.div>
    </div>
  );
};
