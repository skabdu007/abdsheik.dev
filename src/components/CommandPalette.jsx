import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Command,
  FileText,
  Presentation,
  Download,
  Eye,
  Mail,
  Phone,
  Github,
  Linkedin,
  Instagram,
  ArrowRight,
  Sparkles,
  Layers,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  Copy,
  Check,
  X
} from "lucide-react";
import { personalData } from "@/data/personal";
import { useDocumentModal } from "@/context/DocumentModalContext";
import { getAssetUrl } from "@/lib/utils";

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [toastMessage, setToastMessage] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const { openModal } = useDocumentModal();

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3500);
  };

  // Keyboard shortcut listener: Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSearchQuery("");
      setSelectedIndex(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Command items list
  const actions = [
    {
      id: "preview-resume",
      title: "Preview Candidate Resume (CV)",
      subtitle: "185 KB PDF · MCA Graduate & MERN Full Stack",
      category: "Deliverables",
      icon: Eye,
      iconColor: "text-cyan-400",
      perform: () => {
        setIsOpen(false);
        openModal({
          title: "SHEIK ABDULLA S - Curriculum Vitae",
          subtitle: "React.js & Frontend Developer · MCA Graduate",
          url: getAssetUrl(personalData.resumeUrl),
          fileType: "pdf",
          size: "185 KB",
          downloadName: "SHEIK_ABDULLA_CV.pdf",
          badge: "Candidate CV",
        });
      },
    },
    {
      id: "download-resume",
      title: "Download Resume (CV)",
      subtitle: "Direct download SHEIK_ABDULLA_CV.pdf",
      category: "Deliverables",
      icon: Download,
      iconColor: "text-indigo-400",
      perform: () => {
        setIsOpen(false);
        const link = document.createElement("a");
        link.href = getAssetUrl(personalData.resumeUrl);
        link.download = "SHEIK_ABDULLA_CV.pdf";
        link.click();
        showToast("Downloading Sheik Abdulla's CV (PDF)...");
      },
    },
    {
      id: "preview-doc",
      title: "Preview Technical Documentation (DOC)",
      subtitle: "7.0 MB PDF · Fashion E-Commerce System Architecture Report",
      category: "Deliverables",
      icon: FileText,
      iconColor: "text-indigo-300",
      perform: () => {
        setIsOpen(false);
        openModal({
          title: "Fashion E-Commerce - Full Technical Documentation",
          subtitle: "Software Engineering Specifications & System Architecture",
          url: getAssetUrl("/Doc/fashion_e_com_preview.pdf"),
          fileType: "pdf",
          size: "7.0 MB",
          downloadName: "Fashion_Ecommerce_Project_Report.pdf",
          badge: "Project Doc (PDF)",
        });
      },
    },
    {
      id: "download-ppt",
      title: "Download Defense Slide Deck (PPT)",
      subtitle: "6.6 MB PPTX · Academic Viva Presentation (Reg: 24SPCA043)",
      category: "Deliverables",
      icon: Presentation,
      iconColor: "text-amber-400",
      perform: () => {
        setIsOpen(false);
        const link = document.createElement("a");
        link.href = getAssetUrl("/PPT/24spca043_fashion_E-Com.pptx");
        link.download = "24spca043_fashion_E-Com.pptx";
        link.click();
        showToast("Downloading Defense Slide Deck (.pptx)...");
      },
    },
    {
      id: "copy-email",
      title: "Copy Email Address",
      subtitle: personalData.contact.email,
      category: "Contact",
      icon: Mail,
      iconColor: "text-blue-400",
      perform: () => {
        navigator.clipboard.writeText(personalData.contact.email);
        setIsOpen(false);
        showToast(`Copied ${personalData.contact.email} to clipboard!`);
      },
    },
    {
      id: "copy-phone",
      title: "Copy Phone Number",
      subtitle: personalData.contact.phone,
      category: "Contact",
      icon: Phone,
      iconColor: "text-emerald-400",
      perform: () => {
        navigator.clipboard.writeText(personalData.contact.phone);
        setIsOpen(false);
        showToast(`Copied ${personalData.contact.phone} to clipboard!`);
      },
    },
    {
      id: "nav-projects",
      title: "Go to Projects & Systems",
      subtitle: "Fashion E-Commerce, Biopure STP, Frametronix & School Portal",
      category: "Navigation",
      icon: Layers,
      iconColor: "text-purple-400",
      perform: () => {
        setIsOpen(false);
        navigate("/#projects");
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "nav-skills",
      title: "Go to Skills & Tooling",
      subtitle: "React.js, Node.js, Express, MongoDB, SQL, Python, C#",
      category: "Navigation",
      icon: Code,
      iconColor: "text-cyan-400",
      perform: () => {
        setIsOpen(false);
        navigate("/#skills");
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "nav-experience",
      title: "Go to Experience & Internships",
      subtitle: "Friendzion Technologies & DCE Technology",
      category: "Navigation",
      icon: Briefcase,
      iconColor: "text-blue-400",
      perform: () => {
        setIsOpen(false);
        navigate("/#experience");
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "nav-education",
      title: "Go to Education & Academic Credentials",
      subtitle: "Master of Computer Applications (MCA) & B.Sc Computer Science",
      category: "Navigation",
      icon: GraduationCap,
      iconColor: "text-amber-400",
      perform: () => {
        setIsOpen(false);
        navigate("/#education");
        document.getElementById("education")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "open-github",
      title: "Open GitHub Profile",
      subtitle: "github.com/skabd2004",
      category: "Social",
      icon: Github,
      iconColor: "text-slate-300",
      perform: () => {
        setIsOpen(false);
        window.open(personalData.contact.github, "_blank");
      },
    },
    {
      id: "open-linkedin",
      title: "Open LinkedIn Profile",
      subtitle: "linkedin.com/in/skabd2004",
      category: "Social",
      icon: Linkedin,
      iconColor: "text-blue-400",
      perform: () => {
        setIsOpen(false);
        window.open(personalData.contact.linkedin, "_blank");
      },
    },
    {
      id: "open-instagram",
      title: "Open Instagram Profile (@sir_abd_sheik)",
      subtitle: "instagram.com/sir_abd_sheik",
      category: "Social",
      icon: Instagram,
      iconColor: "text-pink-400",
      perform: () => {
        setIsOpen(false);
        window.open(personalData.contact.instagram, "_blank");
      },
    },
  ];

  // Filter actions based on search
  const filteredActions = actions.filter((act) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      act.title.toLowerCase().includes(q) ||
      act.subtitle.toLowerCase().includes(q) ||
      act.category.toLowerCase().includes(q)
    );
  });

  // Handle arrow key navigation in list
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredActions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % filteredActions.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredActions[selectedIndex]) {
        filteredActions[selectedIndex].perform();
      }
    }
  };

  return (
    <>
      {/* Floating Launcher Pill in bottom-left corner */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open Command Palette"
        className="fixed bottom-6 left-6 z-40 hidden sm:inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full glass-card border border-indigo-500/30 hover:border-indigo-500/60 shadow-glow-sm text-xs font-mono text-slate-300 hover:text-white transition-all group backdrop-blur-xl"
      >
        <div className="w-5 h-5 rounded-md bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
          <Command className="w-3.5 h-3.5" />
        </div>
        <span>Quick Actions</span>
        <kbd className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/[0.08] border border-white/[0.1] text-slate-400">
          Ctrl K
        </kbd>
      </button>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-xl glass-card border border-emerald-500/40 bg-[#060c1c]/95 shadow-glow-sm flex items-center gap-3 text-xs font-mono text-emerald-300"
          >
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Dialog */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 pb-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Palette Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-[#090e21] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[80vh]"
            >
              {/* Search Bar Input */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.08] bg-[#060a18]">
                <Search className="w-5 h-5 text-slate-400 shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSelectedIndex(0);
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a command or search (e.g. resume, doc, ppt, react, email)..."
                  className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none font-sans"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Results List */}
              <div className="flex-1 overflow-y-auto p-2 space-y-1">
                {filteredActions.length === 0 ? (
                  <div className="p-8 text-center text-slate-400 text-xs font-mono">
                    No matching commands found for &quot;{searchQuery}&quot;
                  </div>
                ) : (
                  filteredActions.map((action, idx) => {
                    const Icon = action.icon;
                    const isSelected = idx === selectedIndex;
                    return (
                      <button
                        key={action.id}
                        onClick={() => action.perform()}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all ${
                          isSelected
                            ? "bg-indigo-600/30 border border-indigo-500/50 shadow-glow-sm"
                            : "hover:bg-white/[0.04] border border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className={`w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 ${action.iconColor}`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="truncate">
                            <div className="text-sm font-semibold text-white tracking-wide truncate">
                              {action.title}
                            </div>
                            <div className="text-xs text-slate-400 truncate">
                              {action.subtitle}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 ml-3">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">
                            {action.category}
                          </span>
                          <ArrowRight
                            className={`w-4 h-4 text-indigo-400 transition-transform ${
                              isSelected ? "translate-x-0.5 opacity-100" : "opacity-0"
                            }`}
                          />
                        </div>
                      </button>
                    );
                  })
                )}
              </div>

              {/* Footer Helper */}
              <div className="px-4 py-2.5 bg-[#060814] border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-3">
                  <span>
                    <kbd className="px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/[0.1] text-[10px]">
                      &uarr; &darr;
                    </kbd>{" "}
                    Navigate
                  </span>
                  <span>
                    <kbd className="px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/[0.1] text-[10px]">
                      Enter
                    </kbd>{" "}
                    Execute
                  </span>
                </div>
                <span>
                  <kbd className="px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/[0.1] text-[10px]">
                    Esc
                  </kbd>{" "}
                  Close
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
