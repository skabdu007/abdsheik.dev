import React from "react";
import { experienceData } from "@/data/experience";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedContainer } from "@/components/AnimatedContainer";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Trophy,
  Award,
  Eye,
  Download,
  ExternalLink
} from "lucide-react";
import { TechBadge } from "@/components/TechBadge";
import { useDocumentModal } from "@/context/DocumentModalContext";
import { getAssetUrl } from "@/lib/utils";

export const Experience = () => {
  const { openModal } = useDocumentModal();

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
            subtitle="Hands-on full-stack engineering, production web portals, and validated internship credentials."
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

                {/* Verified Internship Certificate Banner */}
                {exp.certificate && (
                  <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-[#0a142c] to-sky-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-glow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-300 shrink-0">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                            {exp.certificate.title}
                          </span>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono text-emerald-300 bg-emerald-500/15 border border-emerald-500/30">
                            <CheckCircle2 className="w-2.5 h-2.5" />
                            {exp.certificate.status}
                          </span>
                        </div>
                        <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                          Issued by {exp.certificate.issuer} · Credential ID:{" "}
                          <span className="text-sky-300 font-semibold">{exp.certificate.credentialId}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                      <button
                        type="button"
                        onClick={() =>
                          openModal({
                            title: exp.certificate.title,
                            subtitle: `Issued by ${exp.certificate.issuer} · Credential ID: ${exp.certificate.credentialId}`,
                            url: getAssetUrl(exp.certificate.url),
                            fileType: "svg",
                            size: "Official Credential",
                            downloadName: exp.certificate.downloadName,
                            badge: "Internship Certificate",
                          })
                        }
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 transition-colors shadow-glow-sm"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Preview Certificate</span>
                      </button>

                      <a
                        href={getAssetUrl(exp.certificate.url)}
                        download={exp.certificate.downloadName}
                        className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10 transition-colors shrink-0"
                        title="Download Certificate SVG"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    </div>
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
