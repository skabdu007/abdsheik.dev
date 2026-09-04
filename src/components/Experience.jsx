import React from "react";
import { experienceData } from "@/data/experience";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedContainer } from "@/components/AnimatedContainer";
import { Briefcase, Calendar, MapPin, CheckCircle2, Trophy } from "lucide-react";
import { TechBadge } from "@/components/TechBadge";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Glow */}
      <div className="absolute right-10 top-1/4 w-80 h-80 bg-purple-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedContainer direction="up">
          <SectionHeading
            badge="Career Milestones"
            title="PROFESSIONAL"
            gradientText="EXPERIENCE"
            subtitle="Hands-on frontend engineering, reusable React component development, and RESTful API integrations."
          />
        </AnimatedContainer>

        {/* Modern Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-sky-500/30 space-y-12 ml-2 sm:ml-4">
          {experienceData.map((exp, index) => (
            <AnimatedContainer
              key={exp.id}
              direction="left"
              delay={index * 0.15}
              className="relative group"
            >
              {/* Timeline Connector Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-[#050816] border-2 border-sky-400 flex items-center justify-center group-hover:scale-125 transition-transform shadow-glow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-300 animate-pulse" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/[0.08] hover:border-sky-500/40 glass-card-hover">
                {/* Header: Role & Status */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4 pb-4 border-b border-white/[0.06]">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors uppercase">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 uppercase">
                          Active Role
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-300 font-mono">
                      <span className="font-semibold text-sky-400">{exp.company}</span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/[0.04] border border-white/[0.08] text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Narrative Summary */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-3">
                    Core Responsibilities
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span className="leading-normal">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="mb-6 p-4 rounded-xl bg-[#091124] border border-white/[0.05]">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold mb-2 flex items-center gap-1.5">
                      <Trophy className="w-3.5 h-3.5 text-purple-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {exp.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2">
                          <span className="text-sky-400 font-mono">▸</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Badges */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <TechBadge key={tech} name={tech} size="sm" variant="subtle" />
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
};
