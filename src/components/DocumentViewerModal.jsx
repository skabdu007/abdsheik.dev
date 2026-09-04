import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Download,
  ExternalLink,
  FileText,
  Presentation,
  CheckCircle2,
  Sparkles,
  Layers,
  FileSpreadsheet
} from "lucide-react";
import { useDocumentModal } from "@/context/DocumentModalContext";

export const DocumentViewerModal = () => {
  const { modalState, closeModal } = useDocumentModal();
  const { isOpen, title, url, fileType, size, downloadName, badge, subtitle } = modalState;

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeModal]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-5xl h-[92vh] max-h-[920px] bg-[#090d1f] border border-white/[0.12] rounded-2xl shadow-2xl flex flex-col z-10 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.08] bg-[#070b18]/90">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center shrink-0">
                  {fileType === "pptx" ? (
                    <Presentation className="w-5 h-5 text-amber-400" />
                  ) : (
                    <FileText className="w-5 h-5 text-cyan-400" />
                  )}
                </div>
                <div className="truncate">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider truncate">
                      {title}
                    </h3>
                    {badge && (
                      <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                        {badge}
                      </span>
                    )}
                    {size && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono uppercase bg-white/[0.06] border border-white/[0.1] text-slate-300">
                        {size}
                      </span>
                    )}
                  </div>
                  {subtitle && (
                    <p className="text-xs text-slate-400 truncate mt-0.5">{subtitle}</p>
                  )}
                </div>
              </div>

              {/* Header Actions */}
              <div className="flex items-center gap-2">
                <a
                  href={url}
                  download={downloadName}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-glow-sm transition-all"
                  title="Download File"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </a>

                {fileType === "pdf" && (
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors"
                    title="Open in New Tab"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                <button
                  onClick={closeModal}
                  aria-label="Close Modal"
                  className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.1] hover:bg-rose-500/20 hover:border-rose-500/40 text-slate-300 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-hidden relative bg-[#04060e]">
              {fileType === "pdf" ? (
                <div className="w-full h-full relative">
                  <iframe
                    src={`${url}#toolbar=1&navpanes=0`}
                    className="w-full h-full border-0 bg-[#070b18]"
                    title={title}
                  />
                  {/* Fallback helper if browser blocks iframe PDF rendering */}
                  <div className="hidden absolute bottom-3 right-3 p-2 rounded-lg bg-black/70 backdrop-blur-md text-xs font-mono text-slate-300 border border-white/10">
                    PDF not loading?{" "}
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-400 underline ml-1"
                    >
                      Open in window
                    </a>
                  </div>
                </div>
              ) : (
                /* PowerPoint PPTX Presentation Presentation Card */
                <div className="w-full h-full flex items-center justify-center p-6 sm:p-12 overflow-y-auto">
                  <div className="max-w-2xl w-full p-8 sm:p-10 rounded-2xl glass-card border border-amber-500/30 text-center space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto shadow-glow-sm">
                      <Presentation className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest bg-amber-500/10 border border-amber-500/30 text-amber-300">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>University Defense Presentation Slide Deck</span>
                      </div>
                      <h4 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
                        {title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg mx-auto">
                        Official PowerPoint presentation deck prepared for university project viva defense (Candidate Register No: 24SPCA043).
                      </p>
                    </div>

                    {/* Deck Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left pt-2">
                      <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-300">
                          Problem Analysis &amp; E-Commerce Auction Architecture
                        </span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-300">
                          Real-Time Bidding Algorithm &amp; Concurrency Handlers
                        </span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-300">
                          Role-Based Access Control (Admin / Vendor / Bidder)
                        </span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-300">
                          Live Demonstration Screen Previews &amp; Benchmarks
                        </span>
                      </div>
                    </div>

                    {/* File specs badge */}
                    <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-400 pt-2">
                      <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08]">
                        Format: Microsoft PowerPoint (.pptx)
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08]">
                        File Size: {size || "6.6 MB"}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08]">
                        Status: Defense Approved
                      </span>
                    </div>

                    {/* Download CTA */}
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={url}
                        download={downloadName}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-slate-950 hover:from-amber-400 hover:to-orange-400 shadow-glow-sm transition-all hover:scale-105 active:scale-95"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download Presentation Deck (.PPTX)</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
