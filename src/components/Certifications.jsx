import React from "react";
import { certificationsData } from "@/data/certifications";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedContainer } from "@/components/AnimatedContainer";
import { ExternalLink, CheckCircle2, Award, Eye, Download, Briefcase } from "lucide-react";
import { TechBadge } from "@/components/TechBadge";
import { useDocumentModal } from "@/context/DocumentModalContext";
import { getAssetUrl } from "@/lib/utils";

export const Certifications = () => {
  const { openModal } = useDocumentModal();

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background glow */}
      <div className="absolute left-1/3 bottom-10 w-96 h-96 bg-sky-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedContainer direction="up">
          <SectionHeading
            badge="Verified Credentials"
            title="TECHNICAL"
            gradientText="CERTIFICATIONS"
            subtitle="Validated industry credentials across full-stack web development, MERN architecture, modern JavaScript (ES6+), and responsive UI engineering."
          />
        </AnimatedContainer>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert, index) => (
            <AnimatedContainer key={cert.id} direction="up" delay={index * 0.1} className="h-full">
              <div className={`p-6 sm:p-8 rounded-2xl glass-card border transition-all duration-300 group flex flex-col justify-between h-full ${
                cert.isInternship
                  ? "border-amber-500/40 hover:border-amber-500/70 shadow-glow-sm"
                  : "border-white/[0.08] hover:border-sky-500/40 glass-card-hover"
              }`}>
                <div>
                  {/* Top Badge & Issuer */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center group-hover:scale-110 transition-transform shrink-0 shadow-glow-sm ${
                      cert.isInternship
                        ? "bg-amber-500/15 border-amber-500/40 text-amber-300"
                        : "bg-gradient-to-br from-sky-500/20 to-purple-500/10 border-sky-500/30 text-sky-400"
                    }`}>
                      {cert.isInternship ? <Briefcase className="w-6 h-6" /> : <Award className="w-6 h-6" />}
                    </div>

                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/30">
                      <CheckCircle2 className="w-3 h-3" />
                      {cert.isInternship ? "Internship Verified" : "Verified"}
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

                {/* View Certificate Action Buttons */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      openModal({
                        title: cert.name,
                        subtitle: `Issued by ${cert.issuer} · ID: ${cert.credentialId}`,
                        url: getAssetUrl(cert.image || cert.url),
                        fileType: "svg",
                        size: "Official Credential",
                        downloadName: `${cert.credentialId}.svg`,
                        badge: cert.isInternship ? "Internship Certificate" : "Technical Certificate",
                      })
                    }
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-colors ${
                      cert.isInternship
                        ? "bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40"
                        : "bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 border border-sky-500/30"
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Preview Certificate</span>
                  </button>

                  <a
                    href={getAssetUrl(cert.image || cert.url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10 transition-colors"
                    title="Open in new tab"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
};
