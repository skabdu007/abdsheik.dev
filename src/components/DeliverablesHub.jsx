import React from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  Presentation,
  BookOpen,
  Download,
  Eye,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  HardDriveDownload,
  ExternalLink
} from "lucide-react";
import { personalData } from "@/data/personal";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedContainer } from "@/components/AnimatedContainer";
import { useDocumentModal } from "@/context/DocumentModalContext";
import { getAssetUrl } from "@/lib/utils";

export const DeliverablesHub = () => {
  const { openModal } = useDocumentModal();
  const { deliverables } = personalData;

  const handlePreviewResume = () => {
    openModal({
      title: "SHEIK ABDULLA S - Curriculum Vitae",
      subtitle: "React.js & Frontend Developer · MCA Graduate",
      url: getAssetUrl(deliverables.resume.url),
      fileType: "pdf",
      size: deliverables.resume.size,
      downloadName: deliverables.resume.downloadName,
      badge: "Candidate CV",
    });
  };

  const handlePreviewDoc = () => {
    openModal({
      title: "Fashion E-Commerce & Auction Platform - Full Documentation",
      subtitle: "Software Engineering Specifications & System Architecture Report",
      url: getAssetUrl(deliverables.doc.url),
      fileType: "pdf",
      size: deliverables.doc.size,
      downloadName: deliverables.doc.downloadName,
      badge: "Project Report",
    });
  };

  const handlePreviewPpt = () => {
    openModal({
      title: "Fashion E-Commerce - Viva Defense Presentation Deck",
      subtitle: "Academic Defense Slides (Candidate Reg No: 24SPCA043)",
      url: getAssetUrl(deliverables.ppt.url),
      fileType: "pptx",
      size: deliverables.ppt.size,
      downloadName: deliverables.ppt.downloadName,
      badge: "PowerPoint Deck",
    });
  };

  return (
    <section id="deliverables" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedContainer direction="up">
          <SectionHeading
            badge="Verified Deliverables & Credentials"
            title="Artifacts & Technical Assets:"
            gradientText="PPT, DOC & Resume"
            subtitle="Immediate access to the formal candidate CV, 7.0 MB comprehensive engineering documentation report, and official defense presentation slides."
          />
        </AnimatedContainer>

        {/* 3-Column Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Resume / CV */}
          <AnimatedContainer direction="up" delay={0.1} className="h-full">
            <div className="h-full rounded-2xl glass-card border border-cyan-500/20 hover:border-cyan-500/50 glass-card-hover transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group">
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                    Candidate Profile
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/[0.05] border border-white/[0.1] text-slate-300">
                    {deliverables.resume.size} PDF
                  </span>
                </div>

                {/* Avatar / Photo & Details */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border border-cyan-500/40 bg-[#070b18] shadow-glow-sm group-hover:scale-105 transition-transform shrink-0">
                    <img
                      src={getAssetUrl(personalData.profileImage)}
                      alt="Sheik Abdulla S"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = getAssetUrl("/developer-avatar.png");
                      }}
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block font-bold">
                      VERIFIED DEVELOPER
                    </span>
                    <span className="text-xs font-mono text-slate-300">
                      Sheik Abdulla S
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  Curriculum Vitae (CV)
                </h3>
                <p className="text-xs font-mono text-cyan-400 mb-4">
                  {deliverables.resume.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Formal resume outlining MCA qualifications, industry internships, React.js and JavaScript competencies, and live production deployments.
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6 pt-4 border-t border-white/[0.08]">
                  {deliverables.resume.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={handlePreviewResume}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-200 transition-all active:scale-95"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview CV</span>
                </button>

                <a
                  href={getAssetUrl(deliverables.resume.url)}
                  download={deliverables.resume.downloadName}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-glow-sm transition-all active:scale-95"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
              </div>
            </div>
          </AnimatedContainer>

          {/* Card 2: Technical Documentation (DOC) */}
          <AnimatedContainer direction="up" delay={0.2} className="h-full">
            <div className="h-full rounded-2xl glass-card border border-indigo-500/30 hover:border-indigo-500/60 glass-card-hover transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group relative">
              {/* Featured Ribbon Badge */}
              <div className="absolute -top-3 right-6 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-glow-sm">
                Full Technical Spec
              </div>

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">
                    Comprehensive Report
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/[0.05] border border-white/[0.1] text-slate-300">
                    {deliverables.doc.size} PDF
                  </span>
                </div>

                {/* Icon & Title */}
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-5 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-1 group-hover:text-indigo-300 transition-colors">
                  Project Documentation (DOC)
                </h3>
                <p className="text-xs font-mono text-indigo-400 mb-4">
                  Fashion E-Commerce &amp; Auction Engine
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Comprehensive 7.0 MB engineering document covering Software Requirements Specifications (SRS), MongoDB schemas, JWT RBAC security, and atomic concurrency handling.
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6 pt-4 border-t border-white/[0.08]">
                  {deliverables.doc.highlights.slice(0, 4).map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/[0.08] space-y-2">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <button
                    onClick={handlePreviewDoc}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/40 text-indigo-200 transition-all active:scale-95"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Preview Doc</span>
                  </button>

                  <a
                    href={getAssetUrl(deliverables.doc.url)}
                    download={deliverables.doc.downloadName}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-glow-sm transition-all active:scale-95"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </a>
                </div>

                <Link
                  to="/projects/ecommerce-react"
                  className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-mono text-indigo-400 hover:text-cyan-300 pt-1 transition-colors"
                >
                  <span>Explore Interactive Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </AnimatedContainer>

          {/* Card 3: Presentation Slides (PPT) */}
          <AnimatedContainer direction="up" delay={0.3} className="h-full">
            <div className="h-full rounded-2xl glass-card border border-amber-500/20 hover:border-amber-500/50 glass-card-hover transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group">
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider bg-amber-500/10 border border-amber-500/30 text-amber-300">
                    Viva Defense Deck
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/[0.05] border border-white/[0.1] text-slate-300">
                    {deliverables.ppt.size} PPTX
                  </span>
                </div>

                {/* Icon & Title */}
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 transition-transform">
                  <Presentation className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-1 group-hover:text-amber-300 transition-colors">
                  Defense Presentation (PPT)
                </h3>
                <p className="text-xs font-mono text-amber-400 mb-4">
                  Register No: 24SPCA043 · Final Viva Deck
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Official 6.6 MB PowerPoint presentation slides covering business motivations, architecture workflows, real-time auction algorithms, and live demonstration screenshots.
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6 pt-4 border-t border-white/[0.08]">
                  {deliverables.ppt.highlights.slice(0, 4).map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/[0.08] space-y-2">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <button
                    onClick={handlePreviewPpt}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-200 transition-all active:scale-95"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Deck Info</span>
                  </button>

                  <a
                    href={getAssetUrl(deliverables.ppt.url)}
                    download={deliverables.ppt.downloadName}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold shadow-glow-sm transition-all active:scale-95"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PPTX</span>
                  </a>
                </div>

                <Link
                  to="/projects/fashion-ecommerce-auction-platform"
                  className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-mono text-amber-400 hover:text-cyan-300 pt-1 transition-colors"
                >
                  <span>Explore Interactive Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </AnimatedContainer>

        </div>
      </div>
    </section>
  );
};
