import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Download,
  ChevronDown,
  FileText,
  Briefcase,
  GraduationCap,
  Award,
  Wrench,
  Mail,
  User,
  Layers,
  Code2,
  FolderGit2
} from "lucide-react";
import { personalData } from "@/data/personal";
import { getAssetUrl } from "@/lib/utils";

// All 10 items for section tracking & mobile menu
const ALL_NAV_ITEMS = [
  { label: "Home", href: "#home", icon: Code2 },
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Layers },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: FolderGit2 },
  { label: "Deliverables", href: "#deliverables", icon: FileText },
  { label: "Education", href: "#education", icon: GraduationCap },
  { label: "Certifications", href: "#certifications", icon: Award },
  { label: "Services", href: "#services", icon: Wrench },
  { label: "Contact", href: "#contact", icon: Mail },
];

// Primary items visible directly on the desktop navbar pill
const DESKTOP_PRIMARY_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Deliverables", href: "#deliverables" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const moreRef = useRef(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll detection for navbar background & active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (isHomePage) {
        const sections = ALL_NAV_ITEMS.map((item) => item.href.replace("#", ""));
        const scrollPosition = window.scrollY + 140;

        for (let i = sections.length - 1; i >= 0; i--) {
          const sectionElement = document.getElementById(sections[i]);
          if (sectionElement && sectionElement.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const handleNavClick = (e, href) => {
    setMobileMenuOpen(false);
    setMoreOpen(false);

    if (isHomePage) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      if (targetId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isMoreActive = ["certifications", "services"].includes(activeSection);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050816]/95 backdrop-blur-md border-b border-white/[0.08] shadow-lg py-3"
          : "bg-[#050816]/70 backdrop-blur-sm py-4 border-b border-white/[0.04]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 xl:gap-6">
        
        {/* LEFT: DEVELOPER LOGO & TITLE */}
        <Link
          to="/"
          onClick={(e) => {
            if (isHomePage) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-xl shrink-0"
          aria-label="Sheik Abdulla S - Home"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden bg-[#091024] border border-sky-500/30 flex items-center justify-center group-hover:scale-105 group-hover:border-sky-400 transition-all shadow-glow-sm shrink-0">
            <img
              src={getAssetUrl(personalData.profileImage)}
              alt={personalData.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = getAssetUrl("/developer-avatar.png");
              }}
            />
            {/* Live status indicator */}
            <span className="absolute bottom-0.5 right-0.5 w-2 h-2 rounded-full bg-emerald-400 border border-[#050816] shadow-sm" />
          </div>
          <div className="flex flex-col shrink-0 whitespace-nowrap">
            <span className="font-mono font-black text-xs sm:text-sm tracking-wider text-white group-hover:text-sky-300 transition-colors uppercase whitespace-nowrap">
              {personalData.name}
            </span>
            <div className="flex items-center gap-1.5 -mt-0.5 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-sky-400/90 uppercase whitespace-nowrap">
                FULL STACK DEVELOPER
              </span>
            </div>
          </div>
        </Link>

        {/* CENTER: DESKTOP NAVIGATION PILL */}
        <div className="hidden lg:flex items-center justify-center flex-1 min-w-0 px-2">
          <nav className="flex items-center gap-0.5 xl:gap-1 bg-[#091024]/90 p-1 rounded-full border border-white/[0.08] backdrop-blur-md shadow-inner shrink-0">
            {/* Primary desktop links */}
            {DESKTOP_PRIMARY_ITEMS.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = isHomePage && activeSection === sectionId;
              const targetUrl = isHomePage ? item.href : `/${item.href}`;

              return (
                <a
                  key={item.label}
                  href={targetUrl}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-2.5 xl:px-3.5 py-1.5 text-[11px] xl:text-xs font-mono uppercase tracking-wider rounded-full transition-all duration-200 whitespace-nowrap shrink-0 ${
                    isActive
                      ? "text-white font-bold"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500/20 to-indigo-500/20 border border-sky-500/40 shadow-glow-sm"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}

            {/* Education: visible on xl, accessible via More on lg */}
            {(() => {
              const isActive = isHomePage && activeSection === "education";
              const targetUrl = isHomePage ? "#education" : "/#education";
              return (
                <a
                  href={targetUrl}
                  onClick={(e) => handleNavClick(e, "#education")}
                  className={`hidden xl:inline-flex relative px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full transition-all duration-200 whitespace-nowrap shrink-0 ${
                    isActive
                      ? "text-white font-bold"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500/20 to-indigo-500/20 border border-sky-500/40 shadow-glow-sm"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">Education</span>
                </a>
              );
            })()}

            {/* Secondary Sections Dropdown: More ▾ */}
            <div className="relative" ref={moreRef}>
              <button
                type="button"
                onClick={() => setMoreOpen(!moreOpen)}
                className={`relative inline-flex items-center gap-1 px-2.5 xl:px-3 py-1.5 text-[11px] xl:text-xs font-mono uppercase tracking-wider rounded-full transition-all duration-200 whitespace-nowrap shrink-0 ${
                  isMoreActive || (moreOpen && !isHomePage)
                    ? "text-white font-bold bg-white/[0.06]"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {isMoreActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mr-0.5 animate-pulse" />
                )}
                <span>More</span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${
                    moreOpen ? "rotate-180 text-sky-400" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 p-1.5 rounded-2xl bg-[#091024]/98 border border-sky-500/30 backdrop-blur-xl shadow-2xl z-50 space-y-1"
                  >
                    {/* Education (for lg screens where it's hidden from main bar) */}
                    <a
                      href={isHomePage ? "#education" : "/#education"}
                      onClick={(e) => handleNavClick(e, "#education")}
                      className={`xl:hidden flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-colors ${
                        activeSection === "education"
                          ? "bg-sky-500/20 text-sky-300 font-bold"
                          : "text-slate-300 hover:text-white hover:bg-white/[0.06]"
                      }`}
                    >
                      <GraduationCap className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>Education</span>
                    </a>

                    <a
                      href={isHomePage ? "#certifications" : "/#certifications"}
                      onClick={(e) => handleNavClick(e, "#certifications")}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-colors ${
                        activeSection === "certifications"
                          ? "bg-sky-500/20 text-sky-300 font-bold"
                          : "text-slate-300 hover:text-white hover:bg-white/[0.06]"
                      }`}
                    >
                      <Award className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>Certifications</span>
                    </a>

                    <a
                      href={isHomePage ? "#services" : "/#services"}
                      onClick={(e) => handleNavClick(e, "#services")}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-colors ${
                        activeSection === "services"
                          ? "bg-sky-500/20 text-sky-300 font-bold"
                          : "text-slate-300 hover:text-white hover:bg-white/[0.06]"
                      }`}
                    >
                      <Wrench className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>Services</span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact anchor */}
            {(() => {
              const isActive = isHomePage && activeSection === "contact";
              const targetUrl = isHomePage ? "#contact" : "/#contact";
              return (
                <a
                  href={targetUrl}
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className={`relative px-2.5 xl:px-3.5 py-1.5 text-[11px] xl:text-xs font-mono uppercase tracking-wider rounded-full transition-all duration-200 whitespace-nowrap shrink-0 ${
                    isActive
                      ? "text-white font-bold"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500/20 to-indigo-500/20 border border-sky-500/40 shadow-glow-sm"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">Contact</span>
                </a>
              );
            })()}
          </nav>
        </div>

        {/* RIGHT: DEDICATED PROMINENT CV BUTTON */}
        <div className="hidden lg:flex items-center shrink-0 pl-2">
          <a
            href={getAssetUrl(personalData.resumeUrl)}
            download="SHEIK_ABDULLA_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-3.5 xl:px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:via-blue-500 hover:to-indigo-500 shadow-glow-sm hover:shadow-glow transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 border border-sky-400/30 shrink-0 select-none"
            title="Download Sheik Abdulla's Official Resume / CV (PDF)"
          >
            <Download className="w-3.5 h-3.5 text-sky-200 group-hover:translate-y-0.5 transition-transform shrink-0" />
            <span className="hidden xl:inline">Download</span>
            <span>CV</span>
          </a>
        </div>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="lg:hidden p-2 rounded-xl glass-card border border-white/10 text-slate-300 hover:text-white hover:border-sky-500/40 transition-colors shrink-0"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE NAVIGATION DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-[#050816]/98 border-b border-white/[0.1] backdrop-blur-xl px-4 pt-3 pb-6 space-y-1.5 overflow-hidden"
          >
            {ALL_NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = isHomePage && activeSection === sectionId;
              const targetUrl = isHomePage ? item.href : `/${item.href}`;
              const IconComponent = item.icon;

              return (
                <a
                  key={item.label}
                  href={targetUrl}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-colors ${
                    isActive
                      ? "bg-sky-500/15 text-sky-300 border border-sky-500/30 font-bold"
                      : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  <IconComponent className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{item.label}</span>
                </a>
              );
            })}

            <div className="pt-3 border-t border-white/[0.08]">
              <a
                href={getAssetUrl(personalData.resumeUrl)}
                download="SHEIK_ABDULLA_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 shadow-glow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download CV (PDF)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
