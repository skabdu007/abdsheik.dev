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
import { getAssetUrl } from "@/lib/utils";

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
            subtitle="Full Stack MERN Developer focused on scalable backend APIs, database architecture, and modern React."
          />
        </AnimatedContainer>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative & Large Statement */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatedContainer direction="left" delay={0.1}>
              <div className="p-6 sm:p-8 rounded-2xl glass-card border border-sky-500/20 shadow-glass space-y-5">
                {/* Large Statement */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                  {personalData.about.statement || "BUILDING SCALABLE FULL STACK & MERN APPLICATIONS."}
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
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase text-white font-mono">Backend &amp; Database Architecture</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">RESTful APIs with Node.js, Express.js, and MongoDB schemas.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#080e22] border border-white/[0.05]">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                      <Atom className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase text-white font-mono">Modern Frontend &amp; State</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">Responsive React.js, Tailwind CSS, Vite, and real-time state.</p>
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
                    href={getAssetUrl(personalData.resumeUrl)}
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

          {/* Right Column: Profile Card + Statistics Cards */}
          <div className="lg:col-span-5 space-y-4">
            <AnimatedContainer direction="right" delay={0.15}>
              <div className="p-5 rounded-2xl glass-card border border-sky-500/25 flex items-center gap-4 shadow-glass">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-sky-500/40 bg-[#070b18] shrink-0 shadow-glow-sm">
                  <img
                    src={getAssetUrl(personalData.profileImage)}
                    alt={personalData.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = getAssetUrl("/developer-avatar.png");
                    }}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                      VERIFIED PROFILE
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-black text-white uppercase font-mono tracking-tight">
                    {personalData.name}
                  </h4>
                  <p className="text-xs text-sky-400 font-mono font-semibold">
                    Full Stack Developer · MCA Graduate
                  </p>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                    Virudhunagar, Tamil Nadu, India
                  </p>
                </div>
              </div>
            </AnimatedContainer>

            <AnimatedContainer direction="right" delay={0.25}>
              <div className="grid grid-cols-2 gap-4">
                {personalData.about.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-5 rounded-2xl glass-card border border-white/[0.08] hover:border-sky-500/40 glass-card-hover group flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-mono font-black text-white group-hover:text-gradient-accent transition-colors">
                        {stat.value}
                      </span>
                      <h4 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-sky-400 mt-2">
                        {stat.label}
                      </h4>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug mt-2.5 font-mono">
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
