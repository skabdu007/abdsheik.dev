import React from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { personalData } from "@/data/personal";

export const SocialLinks = ({ className = "", iconSize = "w-5 h-5", showLabels = false }) => {
  const links = [
    {
      name: "GitHub",
      url: personalData.contact.github,
      icon: Github,
      label: `@${personalData.contact.githubUsername || "skabd2004"}`,
      color: "hover:text-sky-400 hover:border-sky-500/40",
    },
    {
      name: "LinkedIn",
      url: personalData.contact.linkedin,
      icon: Linkedin,
      label: `@${personalData.contact.linkedinUsername || "skabd2004"}`,
      color: "hover:text-blue-400 hover:border-blue-500/40",
    },
    {
      name: "Email",
      url: `mailto:${personalData.contact.email}`,
      icon: Mail,
      label: personalData.contact.email,
      color: "hover:text-purple-400 hover:border-purple-500/40",
    },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((item) => {
        const IconComponent = item.icon;
        return (
          <a
            key={item.name}
            href={item.url}
            target={item.name !== "Email" ? "_blank" : undefined}
            rel={item.name !== "Email" ? "noopener noreferrer" : undefined}
            aria-label={`Connect via ${item.name}`}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl glass-card border border-white/[0.08] text-slate-300 transition-all duration-300 hover:scale-105 active:scale-95 group ${item.color}`}
          >
            <IconComponent className={`${iconSize} transition-transform group-hover:scale-110`} />
            {showLabels && (
              <span className="text-xs font-mono font-medium text-slate-200">
                {item.name}
              </span>
            )}
          </a>
        );
      })}
    </div>
  );
};
