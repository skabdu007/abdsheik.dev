import React from "react";
import { personalData } from "@/data/personal";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedContainer } from "@/components/AnimatedContainer";
import {
  Atom,
  Code2,
  Cpu,
  CheckCircle2,
  Download,
  ArrowRight,
  Layers,
  Sparkles,
  Zap
} from "lucide-react";
import { Button } from "@/components/Button";

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Glow Accent */}
      <div className="absolute right-0 top-1/2 w-80 h-80 bg-sky-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContainer direction="up">
          <SectionHeading
            badge="Engineering Mindset"
            title="ABOUT"
            gradientText="ME"
            subtitle="Frontend developer focused on reusable component architecture, high performance, and modern React."
          />
        </AnimatedContainer>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative & Large Statement */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatedContainer direction="left" delay={0.1}>
              <div className="p-6 sm:p-8 rounded-2xl glass-card border border-sky-500/20 shadow-glass space-y-5">
                {/* Large Statement */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                  {personalData.about.statement || "BUILDING MODERN WEB EXPERIENCES WITH REACT & JAVASCRIPT."}
                </h3>

                {/* Narrative Paragraphs */}
                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  {personalData.about.paragraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* Core Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/[0.08]">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#080e22] border border-white/[0.05]">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0">
                      <Atom className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase text-white font-mono">Component Architecture</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">Reusable, pure functional components and custom hooks.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#080e22] border border-white/[0.05]">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase text-white font-mono">Performance &amp; State</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">Sub-second paint, memoization, and predictable store flows.</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button
                    href="#projects"
                    variant="primary"
                    size="sm"
                    icon={ArrowRight}
                  >
                    View Selected Projects
                  </Button>
                  <Button
                    href={personalData.resumeUrl}
                    download="SHEIK_ABDULLA_CV.pdf"
                    variant="secondary"
                    size="sm"
                    icon={Download}
                  >
                    Download CV
                  </Button>
                </div>
              </div>
            </AnimatedContainer>
          </div>

          {/* Right Column: Statistics Cards */}
          <div className="lg:col-span-5">
            <AnimatedContainer direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {personalData.about.stats.map((stat, idx) => (
                  <div
                    key={stat.label}
                    className="p-6 rounded-2xl glass-card border border-white/[0.08] hover:border-sky-500/40 glass-card-hover group flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-mono font-black text-white group-hover:text-gradient-accent transition-colors">
                        {stat.value}
                      </span>
                      <h4 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-sky-400 mt-2">
                        {stat.label}
                      </h4>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug mt-3 font-mono">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedContainer>
          </div>

        </div>
      </div>
    </section>
  );
};
