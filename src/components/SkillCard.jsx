import React from "react";
import {
  Atom,
  Code2,
  Layout,
  Palette,
  Workflow,
  Network,
  Boxes,
  Layers,
  Zap,
  Sparkles,
  Laptop,
  Globe,
  Send,
  FileCode2,
  Activity,
  GitBranch,
  GitFork,
  Terminal,
  Gauge,
  Cpu,
  CheckCircle2,
} from "lucide-react";

const ICON_MAP = {
  Atom,
  Code2,
  Layout,
  Palette,
  Workflow,
  Network,
  Boxes,
  Layers,
  Zap,
  Sparkles,
  Laptop,
  Globe,
  Send,
  FileCode2,
  Activity,
  GitBranch,
  GitFork,
  Terminal,
  Gauge,
  Cpu,
};

export const SkillCard = ({ skill }) => {
  const IconComponent = ICON_MAP[skill.iconName] || Code2;

  return (
    <div className="relative p-5 rounded-2xl glass-card border border-white/[0.08] hover:border-sky-500/40 glass-card-hover group flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-[#0e172e] border border-sky-500/20 text-sky-400 flex items-center justify-center group-hover:scale-110 group-hover:border-sky-400 transition-all shadow-glow-sm">
            <IconComponent className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-slate-400">
            {skill.category}
          </span>
        </div>

        <h4 className="text-base font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors mb-1.5">
          {skill.name}
        </h4>

        <p className="text-xs text-slate-400 leading-relaxed font-normal">
          {skill.description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-500">
        <span className="flex items-center gap-1 text-sky-400/80">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Verified Skill</span>
        </span>
        <span className="text-slate-400">React Stack</span>
      </div>
    </div>
  );
};
