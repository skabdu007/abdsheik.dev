import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Download, ArrowRight } from "lucide-react";
import { personalData } from "@/data/personal";
import { Button } from "@/components/Button";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Scroll detection for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section intersection detection on homepage
      if (isHomePage) {
        const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""));
        const scrollPosition = window.scrollY + 120;

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

    if (isHomePage) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050816]/90 backdrop-blur-md border-b border-white/[0.08] shadow-lg py-3.5"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LEFT: LOGO / YOUR NAME */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg"
          aria-label="Home"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/20 to-indigo-600/20 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-105 group-hover:border-sky-400 transition-all shadow-glow-sm">
            <Code2 className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono font-black text-sm sm:text-base tracking-wider text-white group-hover:text-sky-300 transition-colors uppercase">
              {personalData.name}
            </span>
            <span className="text-[10px] font-mono tracking-widest text-sky-400/90 uppercase -mt-0.5">
              REACT.JS DEVELOPER
            </span>
          </div>
        </Link>

        {/* RIGHT: DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-1 bg-[#091024]/80 p-1.5 rounded-full border border-white/[0.06] backdrop-blur-md">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = isHomePage && activeSection === sectionId;
            const targetUrl = isHomePage ? item.href : `/${item.href}`;

            return (
              <a
                key={item.label}
                href={targetUrl}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-full transition-all duration-200 ${
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
        </nav>

        {/* Right CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            href={personalData.resumeUrl}
            download="SHEIK_ABDULLA_CV.pdf"
            variant="outline"
            size="sm"
            icon={Download}
          >
            CV
          </Button>
        </div>

        {/* MOBILE MENU TOGGLE ICON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="md:hidden p-2 rounded-xl glass-card border border-white/10 text-slate-300 hover:text-white hover:border-sky-500/40 transition-colors"
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
            className="md:hidden bg-[#050816]/98 border-b border-white/[0.1] backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 overflow-hidden"
          >
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = isHomePage && activeSection === sectionId;
              const targetUrl = isHomePage ? item.href : `/${item.href}`;

              return (
                <a
                  key={item.label}
                  href={targetUrl}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block px-4 py-3 rounded-xl text-sm font-mono uppercase tracking-wider transition-colors ${
                    isActive
                      ? "bg-sky-500/15 text-sky-300 border border-sky-500/30 font-bold"
                      : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            <div className="pt-3 border-t border-white/[0.08] flex items-center gap-2">
              <Button
                href={personalData.resumeUrl}
                download="SHEIK_ABDULLA_CV.pdf"
                variant="primary"
                size="sm"
                icon={Download}
                className="w-full"
              >
                DOWNLOAD CV
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
