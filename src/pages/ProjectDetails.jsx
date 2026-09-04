import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projectsData } from "@/data/projects";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Sparkles,
  Layers,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  Cpu,
  Trophy,
  Boxes,
  Activity,
  Workflow
} from "lucide-react";
import { TechBadge } from "@/components/TechBadge";
import { Button } from "@/components/Button";
import { getAssetUrl } from "@/lib/utils";

export const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projectsData.find(
    (p) => p.slug === slug || (p.aliases && p.aliases.includes(slug))
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Graceful handling of invalid project slugs
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050816] px-4 text-center">
        <div className="max-w-md p-8 rounded-3xl glass-card border border-white/[0.08] space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center mx-auto shadow-glow-sm">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-tight text-white mt-2">
              Project Not Found
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 font-mono">
              The project &quot;{slug}&quot; could not be found or has been relocated.
            </p>
          </div>
          <Button
            to="/#projects"
            variant="primary"
            size="md"
            icon={ArrowLeft}
            iconPosition="left"
          >
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <article className="pt-32 pb-24 min-h-screen bg-grid-pattern relative">
      {/* Background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Navigation & Breadcrumb */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-white bg-[#0a1020] border border-white/[0.08] hover:border-sky-500/40 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>

          <span className="text-xs font-mono uppercase text-sky-400 bg-sky-500/10 border border-sky-500/30 px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>

        {/* Hero Title & Tagline */}
        <header className="mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-sky-500/10 border border-sky-500/30 text-sky-300">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>REACT.JS CASE STUDY</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-medium">
            {project.tagline || project.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.demo && (
              <Button
                href={project.demo}
                variant="primary"
                size="md"
                icon={ExternalLink}
              >
                LIVE DEMO
              </Button>
            )}

            {project.github && (
              <Button
                href={project.github}
                variant="secondary"
                size="md"
                icon={Github}
              >
                VIEW SOURCE ON GITHUB
              </Button>
            )}
          </div>
        </header>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden glass-card border border-white/[0.08] p-2 mb-12 shadow-glass">
          <div className="rounded-xl overflow-hidden bg-[#070b18] aspect-[16/9]">
            <img
              src={getAssetUrl(project.image)}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="space-y-12">
          {/* Overview, Problem & Solution */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/[0.08]">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-rose-400 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                The Problem
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl glass-card border border-sky-500/30">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400 mb-3 flex items-center gap-2">
                <Lightbulb className="w-4 h-4" />
                The Solution
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </section>

          {/* Detailed Overview */}
          <section className="p-6 sm:p-8 rounded-2xl glass-card border border-white/[0.08] space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">
              Project Overview
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {project.overview}
            </p>
          </section>

          {/* Key Features */}
          {project.features && (
            <section className="p-6 sm:p-8 rounded-2xl glass-card border border-white/[0.08] space-y-6">
              <h2 className="text-lg font-bold uppercase tracking-tight text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-sky-400" />
                Key Features &amp; Capabilities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#080d1e] border border-white/[0.05]">
                    <h3 className="text-sm font-bold text-white font-mono flex items-center gap-2 mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                      {feature.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed pl-6">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Technology Stack Badges */}
          <section className="p-6 sm:p-8 rounded-2xl glass-card border border-white/[0.08] space-y-4">
            <h2 className="text-lg font-bold uppercase tracking-tight text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-purple-400" />
              Technology Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <TechBadge key={tech} name={tech} size="md" variant="default" />
              ))}
            </div>
          </section>

          {/* React Architecture & Layered Diagram */}
          <section className="p-6 sm:p-8 rounded-2xl glass-card border border-sky-500/25 space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h2 className="text-lg font-bold uppercase tracking-tight text-white flex items-center gap-2">
                <Workflow className="w-5 h-5 text-sky-400" />
                React Architecture
              </h2>
              <span className="text-xs font-mono text-sky-300 bg-sky-500/10 px-2.5 py-1 rounded-full border border-sky-500/20">
                Data Flow Pipeline
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.architecture?.description ||
                "Declarative React frontend architecture following unidirectional state flow from client views to services, API adapters, and centralized stores."}
            </p>

            {/* Architecture Flow Visualizer */}
            <div className="p-4 sm:p-6 rounded-xl bg-[#060a18] border border-white/[0.06] font-mono text-xs text-slate-300 space-y-3">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 overflow-x-auto py-2">
                <div className="px-4 py-2.5 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-300 font-bold text-center w-full sm:w-auto">
                  Page
                </div>
                <span className="text-sky-400 font-bold">↓</span>
                <div className="px-4 py-2.5 rounded-lg bg-[#0e172e] border border-white/10 text-slate-200 font-bold text-center w-full sm:w-auto">
                  Components
                </div>
                <span className="text-sky-400 font-bold">↓</span>
                <div className="px-4 py-2.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 font-bold text-center w-full sm:w-auto">
                  Hooks
                </div>
                <span className="text-sky-400 font-bold">↓</span>
                <div className="px-4 py-2.5 rounded-lg bg-[#0e172e] border border-white/10 text-slate-200 font-bold text-center w-full sm:w-auto">
                  Services
                </div>
                <span className="text-sky-400 font-bold">↓</span>
                <div className="px-4 py-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-bold text-center w-full sm:w-auto">
                  API (REST)
                </div>
                <span className="text-sky-400 font-bold">↓</span>
                <div className="px-4 py-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-bold text-center w-full sm:w-auto">
                  State Store
                </div>
              </div>
            </div>

            {/* Component Structure Breakdown */}
            {project.componentStructure && (
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold">
                  Component Structure
                </h3>
                <div className="space-y-2">
                  {project.componentStructure.map((comp, cIdx) => (
                    <div key={cIdx} className="p-2.5 rounded-lg bg-[#080d1e] border border-white/[0.04] text-xs font-mono text-slate-300 flex items-center gap-2">
                      <span className="text-sky-400">▸</span>
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* API Integration & State Management */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/[0.08] space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-sky-400 font-mono flex items-center gap-2">
                <Activity className="w-4 h-4" />
                API Integration
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.apiIntegration}
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/[0.08] space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-purple-400 font-mono flex items-center gap-2">
                <Boxes className="w-4 h-4" />
                State Management
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.stateManagement}
              </p>
            </div>
          </section>

          {/* Challenges & Solutions */}
          {project.challenges && (
            <section className="p-6 sm:p-8 rounded-2xl glass-card border border-white/[0.08] space-y-4">
              <h2 className="text-lg font-bold uppercase tracking-tight text-white flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                Engineering Challenges &amp; Overcomes
              </h2>
              <div className="space-y-3">
                {project.challenges.map((ch, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#080d1e] border border-white/[0.05] space-y-1.5">
                    <p className="text-xs sm:text-sm font-bold text-rose-300 font-mono">
                      Problem: <span className="text-slate-200 font-normal">{ch.problem}</span>
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-emerald-400 font-mono">
                      Resolution: <span className="text-slate-300 font-normal">{ch.resolution}</span>
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Key Results & Metrics */}
          {project.results && (
            <section className="p-6 sm:p-8 rounded-2xl glass-card border border-white/[0.08] space-y-4">
              <h2 className="text-lg font-bold uppercase tracking-tight text-white flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-400" />
                Results &amp; Measurable Metrics
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {project.results.map((res, rIdx) => (
                  <div key={rIdx} className="p-4 rounded-xl bg-[#080d1e] border border-white/[0.05] text-center">
                    <span className="text-2xl sm:text-3xl font-mono font-black text-sky-400 block">
                      {res.metric}
                    </span>
                    <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider mt-1 block">
                      {res.label}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Footer Navigation */}
          <div className="pt-8 border-t border-white/[0.08] flex items-center justify-between">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase text-slate-400 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Selected Projects</span>
            </Link>

            <Button
              href={project.demo || "#"}
              variant="primary"
              size="sm"
              icon={ExternalLink}
            >
              Launch Live Demo
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};
