import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Sparkles,
  Atom,
  Code2,
  Zap,
  Layout,
  Palette,
  Network
} from "lucide-react";
import { personalData } from "@/data/personal";
import { CodeWindow } from "@/components/CodeWindow";
import { DeveloperIllustration } from "@/components/DeveloperIllustration";
import { SocialLinks } from "@/components/SocialLinks";
import { TechBadge } from "@/components/TechBadge";
import { Button } from "@/components/Button";
import { getAssetUrl } from "@/lib/utils";

export const Hero = () => {
  const techBadges = [
    { name: "React.js", icon: Atom },
    { name: "Node.js", icon: Zap },
    { name: "Express.js", icon: Network },
    { name: "MongoDB", icon: Layout },
    { name: "JavaScript", icon: Code2 },
    { name: "Tailwind CSS", icon: Palette },
    { name: "Vite", icon: Sparkles },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Background Radial Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-hero-glow pointer-events-none" />
      <div className="absolute -top-40 right-0 w-96 h-96 bg-purple-600/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-6 xl:col-span-6 space-y-6 text-center lg:text-left"
          >
            {/* Small Pill: FULL STACK DEVELOPER */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300 text-xs font-semibold tracking-widest uppercase shadow-glow-sm">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>{personalData.badge || "FULL STACK DEVELOPER"}</span>
            </div>

            {/* Large Heading: YOUR NAME */}
            <h2 className="text-sm sm:text-base font-mono font-semibold uppercase tracking-[0.25em] text-slate-400">
              {personalData.name}
            </h2>

            {/* Main Title: FULL STACK & MERN STACK DEVELOPER */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black uppercase tracking-tight text-white leading-[1.08]">
              FULL STACK &amp; <br />
              <span className="text-gradient-accent">
                MERN STACK
              </span> <br />
              DEVELOPER
            </h1>

            {/* Short Professional Description */}
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Motivated MERN Stack Developer &amp; fresh MCA Graduate specializing in scalable backend architecture, RESTful APIs, Node.js, Express.js, MongoDB, and modern React.js.
            </p>

            {/* Action Buttons: CONTACT ME & DOWNLOAD CV */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <Button
                href="#contact"
                variant="primary"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
              >
                CONTACT ME
              </Button>

              <Button
                href={getAssetUrl(personalData.resumeUrl)}
                download="SHEIK_ABDULLA_CV.pdf"
                variant="secondary"
                size="md"
                icon={Download}
                iconPosition="right"
              >
                DOWNLOAD CV
              </Button>
            </div>

            {/* Technology Badges */}
            <div className="pt-2">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 text-center lg:text-left">
                Core Stack
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {techBadges.map((badge) => (
                  <TechBadge
                    key={badge.name}
                    name={badge.name}
                    icon={badge.icon}
                    size="sm"
                  />
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-center lg:justify-start">
              <SocialLinks showLabels={false} />
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Developer Illustration & Code Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-6 xl:col-span-6 space-y-8 flex flex-col items-center justify-center"
          >
            {/* Developer Illustration */}
            <DeveloperIllustration />

            {/* Interactive Code Window */}
            <CodeWindow className="w-full" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
