import React from "react";
import { Link } from "react-router-dom";
import { personalData } from "@/data/personal";
import { SocialLinks } from "@/components/SocialLinks";
import { Code2, ArrowUp } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#03050e] border-t border-white/[0.08] text-slate-400 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="flex items-center gap-2.5 group mb-2">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="font-mono font-black text-lg tracking-wider text-white uppercase">
                {personalData.name}
              </span>
            </Link>
            <p className="text-xs font-mono text-sky-400 uppercase tracking-widest font-semibold">
              REACT.JS DEVELOPER
            </p>
            <p className="text-xs text-slate-500 mt-1 max-w-sm">
              Modern frontend engineering with React.js, JavaScript ES6+, and scalable architectures.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono uppercase tracking-wider">
            <a href="#home" className="hover:text-sky-300 transition-colors">Home</a>
            <a href="#about" className="hover:text-sky-300 transition-colors">About</a>
            <a href="#skills" className="hover:text-sky-300 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-sky-300 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-sky-300 transition-colors">Contact</a>
          </nav>

          {/* Social Links & Back to top */}
          <div className="flex items-center gap-4">
            <SocialLinks showLabels={false} />
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2.5 rounded-xl glass-card border border-white/[0.08] text-slate-400 hover:text-white hover:border-sky-500/40 hover:scale-105 transition-all"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 gap-4">
          <p>© {currentYear} {personalData.name}. All rights reserved.</p>
          <p className="text-slate-400">
            Engineered with React.js, Tailwind CSS &amp; Vite
          </p>
        </div>
      </div>
    </footer>
  );
};
