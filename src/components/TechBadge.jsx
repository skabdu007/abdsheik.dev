import React from "react";

export const TechBadge = ({
  name,
  icon: Icon,
  variant = "default",
  size = "md",
  className = "",
}) => {
  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-[10px]",
    md: "px-3.5 py-1.5 text-xs",
    lg: "px-4 py-2 text-sm",
  };

  const variantStyles = {
    default:
      "bg-[#0d152c]/90 text-sky-300 border-sky-500/25 hover:border-sky-400 hover:text-white hover:bg-[#121c3b]",
    subtle:
      "bg-white/[0.04] text-slate-300 border-white/[0.08] hover:border-white/20 hover:text-white",
    purple:
      "bg-purple-950/40 text-purple-300 border-purple-500/30 hover:border-purple-400 hover:text-white",
    emerald:
      "bg-emerald-950/40 text-emerald-300 border-emerald-500/30 hover:border-emerald-400 hover:text-white",
    amber:
      "bg-amber-950/40 text-amber-300 border-amber-500/30 hover:border-amber-400 hover:text-white",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-mono font-medium tracking-wide transition-all duration-200 select-none ${
        sizeStyles[size] || sizeStyles.md
      } ${variantStyles[variant] || variantStyles.default} ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0 opacity-80" />}
      <span>{name}</span>
    </span>
  );
};
