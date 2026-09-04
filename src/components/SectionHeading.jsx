import React from "react";
import { Sparkles } from "lucide-react";

export const SectionHeading = ({
  badge,
  title,
  gradientText,
  subtitle,
  align = "center",
  className = "",
}) => {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === "center" ? "text-center mx-auto max-w-3xl" : "text-left max-w-2xl"
      } ${className}`}
    >
      {/* Pill Badge */}
      <div
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-sky-500/30 bg-sky-500/10 text-sky-300 shadow-glow-sm mb-4 ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
        <span>{badge}</span>
      </div>

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase text-white mb-4">
        {title}{" "}
        {gradientText && (
          <span className="text-gradient-accent inline-block">{gradientText}</span>
        )}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-muted text-sm sm:text-base md:text-lg leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
