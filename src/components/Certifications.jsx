import React from "react";
import { certificationsData } from "@/data/certifications";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedContainer } from "@/components/AnimatedContainer";
import { ExternalLink, ShieldCheck, CheckCircle2, Award } from "lucide-react";
import { TechBadge } from "@/components/TechBadge";
import { Button } from "@/components/Button";

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background glow */}
      <div className="absolute left-1/3 bottom-10 w-96 h-96 bg-sky-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedContainer direction="up">
          <SectionHeading
            badge="Verified Badges"
            title="TECHNICAL"
            gradientText="CERTIFICATIONS"
            subtitle="Validated proficiencies in React.js component architectures, modern JavaScript (ES6+), and responsive web development."
          />
        </AnimatedContainer>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert, index) => (
            <AnimatedContainer key={cert.id} direction="up" delay={index * 0.1} className="h-full">
              <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/[0.08] hover:border-sky-500/40 glass-card-hover group flex flex-col justify-between h-full">
                <div>
                  {/* Top Badge & Issuer */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-purple-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform shrink-0 shadow-glow-sm">
                      <Award className="w-6 h-6" />
                    </div>

                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/30">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors mb-1 uppercase">
                    {cert.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 font-mono">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-slate-400 font-mono mb-4">
                    {cert.date}
                  </p>

                  {/* Credential ID */}
                  <div className="p-3 rounded-lg bg-black/40 border border-white/[0.05] font-mono text-xs text-slate-300 flex items-center justify-between mb-5">
                    <span className="text-slate-500">CREDENTIAL ID:</span>
                    <span className="text-sky-300 font-semibold">{cert.credentialId}</span>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map((skill) => (
                      <TechBadge key={skill} name={skill} size="sm" variant="subtle" />
                    ))}
                  </div>
                </div>

                {/* View Certificate Action Button */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">
                    Official Verification
                  </span>
                  <Button
                    href={cert.url}
                    variant="outline"
                    size="sm"
                    icon={ExternalLink}
                  >
                    VIEW CERTIFICATE
                  </Button>
                </div>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
};
