import React from "react";
import { Link } from "react-router-dom";

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  href,
  to,
  onClick,
  icon: Icon,
  iconPosition = "right",
  className = "",
  type = "button",
  disabled = false,
  target,
  rel,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-bold tracking-wider uppercase transition-all duration-300 rounded-full select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "text-[11px] px-4 py-2 gap-1.5",
    md: "text-xs sm:text-sm px-6 py-3 gap-2",
    lg: "text-sm sm:text-base px-8 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white shadow-glow-sm hover:shadow-glow-md hover:scale-[1.02] active:scale-[0.98]",
    secondary:
      "bg-[#0d1428] text-slate-200 border border-white/10 hover:border-sky-500/40 hover:bg-[#131d3b] hover:text-white active:scale-[0.98]",
    outline:
      "bg-transparent text-sky-400 border border-sky-500/40 hover:bg-sky-500/10 hover:border-sky-400 active:scale-[0.98]",
    ghost:
      "bg-transparent text-slate-300 hover:text-white hover:bg-white/[0.05] active:scale-[0.98]",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${className}`;

  const renderContent = () => (
    <>
      {Icon && iconPosition === "left" && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedStyles} {...props}>
        {renderContent()}
      </Link>
    );
  }

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    return (
      <a
        href={href}
        className={combinedStyles}
        target={target || (isExternal ? "_blank" : undefined)}
        rel={rel || (isExternal ? "noopener noreferrer" : undefined)}
        {...props}
      >
        {renderContent()}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
      {...props}
    >
      {renderContent()}
    </button>
  );
};
