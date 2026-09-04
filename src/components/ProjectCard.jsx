import React from "react";
import { Link } from "react-router-dom";
import { Github, ExternalLink, ArrowRight, Sparkles } from "lucide-react";
import { TechBadge } from "@/components/TechBadge";
import { Button } from "@/components/Button";
import { getAssetUrl } from "@/lib/utils";

export const ProjectCard = ({ project, featured = false }) => {
  return (
    <div
      className={`group relative rounded-2xl overflow-hidden glass-card border border-white/[0.08] hover:border-sky-500/50 glass-card-hover transition-all duration-300 flex flex-col justify-between ${
        featured ? "lg:grid lg:grid-cols-12 gap-8 items-center p-6 sm:p-8" : "p-6"
      }`}
    >
      {/* Top Left Number / Tag */}
      {project.featured && !featured && (
        <span className="absolute top-4 right-4 z-10 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-sky-500/15 border border-sky-500/30 text-sky-300">
          <Sparkles className="w-3 h-3 text-sky-400" />
          Featured
        </span>
      )}

      {/* Visual Image Section */}
      <div
        className={`relative rounded-xl overflow-hidden bg-[#070b18] border border-white/[0.06] ${
          featured ? "lg:col-span-7 aspect-[16/10]" : "aspect-[16/10] mb-5"
        }`}
      >
        <img
          src={getAssetUrl(project.image)}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Hover Overlay with Quick Action */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/90 via-[#050816]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-300 hover:text-white transition-colors"
          >
            <span>Read Architecture Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <div className={`flex flex-col justify-between ${featured ? "lg:col-span-5 space-y-4" : "flex-1"}`}>
        <div>
          {featured && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-sky-500/10 border border-sky-500/30 text-sky-300 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>FEATURED PROJECT</span>
            </div>
          )}

          <h3
            className={`font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors ${
              featured ? "text-2xl sm:text-3xl" : "text-xl mb-2"
            }`}
          >
            <Link to={`/projects/${project.slug}`} className="hover:underline">
              {project.title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 mb-4">
            {project.description}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <TechBadge key={tech} name={tech} size="sm" />
            ))}
          </div>
        </div>

        {/* Action Buttons: Live Demo, GitHub, View Details */}
        <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
          {project.demo && (
            <Button
              href={project.demo}
              variant="primary"
              size="sm"
              icon={ExternalLink}
            >
              LIVE DEMO
            </Button>
          )}

          {project.github && (
            <Button
              href={project.github}
              variant="secondary"
              size="sm"
              icon={Github}
            >
              GITHUB
            </Button>
          )}

          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 px-3 py-2 text-xs font-mono text-slate-400 hover:text-sky-300 transition-colors ml-auto"
            aria-label={`View ${project.title} details`}
          >
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
