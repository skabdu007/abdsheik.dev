import React from "react";
import { educationData } from "@/data/education";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedContainer } from "@/components/AnimatedContainer";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";
import { TechBadge } from "@/components/TechBadge";

export const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedContainer direction="up">
          <SectionHeading
            badge="Academic Foundation"
            title="ACADEMIC"
            gradientText="EDUCATION"
            subtitle="Deep computational foundation covering web technologies, JavaScript paradigms, software engineering, and databases."
          />
        </AnimatedContainer>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <AnimatedContainer key={edu.id} direction="up" delay={index * 0.1}>
              <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/[0.08] hover:border-sky-500/40 glass-card-hover group">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4 pb-4 border-b border-white/[0.06]">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-glow-sm">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors uppercase">
                        {edu.degree}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-300 font-mono mt-1">
                        <span className="font-semibold text-sky-400">{edu.institution}</span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          {edu.location}
                        </span>
                        {edu.grade && (
                          <span className="text-emerald-300 font-semibold">• {edu.grade}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/[0.04] border border-white/[0.08] text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    <span>{edu.duration}</span>
                  </div>
                </div>

                {edu.honors && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-amber-300 bg-amber-500/10 border border-amber-500/30 mb-4">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>{edu.honors}</span>
                  </div>
                )}

                <p className="text-sm text-slate-300 mb-5 leading-relaxed">
                  {edu.description}
                </p>

                {/* Relevant Coursework */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold mb-2.5 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                    Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.courses.map((course) => (
                      <TechBadge key={course} name={course} size="sm" variant="subtle" />
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
