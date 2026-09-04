import React from "react";
import { servicesData } from "@/data/services";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedContainer } from "@/components/AnimatedContainer";
import { Atom, Code2, Layout, Network, CheckCircle2, ArrowRight } from "lucide-react";
import { TechBadge } from "@/components/TechBadge";

const ICON_MAP = {
  Atom,
  Code2,
  Layout,
  Network,
};

export const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedContainer direction="up">
          <SectionHeading
            badge="Engineering Solutions"
            title="PROFESSIONAL"
            gradientText="SERVICES"
            subtitle="Specialized frontend engineering engagements focused on React.js applications, modern JavaScript, and high-performance user interfaces."
          />
        </AnimatedContainer>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = ICON_MAP[service.iconName] || Atom;
            return (
              <AnimatedContainer
                key={service.number}
                direction="up"
                delay={index * 0.12}
                className="h-full"
              >
                <div className="relative p-8 sm:p-10 rounded-2xl glass-card border border-white/[0.08] hover:border-sky-500/50 glass-card-hover group flex flex-col justify-between h-full overflow-hidden">
                  {/* Large Numbered Watermark: 01, 02, 03, 04 */}
                  <span className="absolute top-4 right-6 font-mono font-black text-6xl sm:text-7xl text-white/[0.05] group-hover:text-sky-500/15 transition-colors select-none pointer-events-none">
                    {service.number}
                  </span>

                  <div>
                    {/* Header with Icon and Service Number Tag */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-indigo-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center group-hover:scale-110 group-hover:border-sky-500/50 transition-all shadow-glow-sm">
                        <IconComponent className="w-6 h-6" />
                      </div>

                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-sky-500/10 border border-sky-500/30 text-sky-300">
                        SERVICE // {service.number}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors mb-2 uppercase">
                      {service.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm font-semibold text-sky-300/90 uppercase tracking-wider font-mono mb-4">
                      {service.tagline}
                    </p>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                      {service.description}
                    </p>

                    {/* Deliverables List */}
                    <div className="mb-6 space-y-2.5">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold mb-2">
                        Deliverables &amp; Core Capabilities
                      </h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                            <span className="leading-normal">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech Stack Footer */}
                  <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {service.techStack.map((tech) => (
                        <TechBadge key={tech} name={tech} size="sm" variant="subtle" />
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-400 hover:text-sky-300 font-semibold uppercase tracking-wider transition-colors ml-auto group-hover:translate-x-1"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </AnimatedContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
};
