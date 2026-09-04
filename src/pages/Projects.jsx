import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { projectsData } from "@/data/projects";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedContainer } from "@/components/AnimatedContainer";
import { ProjectCard } from "@/components/ProjectCard";
import { ArrowLeft, Search, Layers, X } from "lucide-react";
import { Button } from "@/components/Button";

export const Projects = () => {
  const [selectedTech, setSelectedTech] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const allTechs = useMemo(() => {
    const set = new Set(["All"]);
    projectsData.forEach((p) => p.technologies.forEach((t) => set.add(t)));
    return Array.from(set);
  }, []);

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesTech =
        selectedTech === "All" || project.technologies.includes(selectedTech);
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesTech && matchesSearch;
    });
  }, [selectedTech, searchQuery]);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-grid-pattern relative">
      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-sky-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Back */}
        <div className="mb-6">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-sky-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        <AnimatedContainer direction="up">
          <SectionHeading
            badge="Case Studies & Applications"
            title="SELECTED"
            gradientText="PROJECTS ARCHIVE"
            subtitle="Explore comprehensive React.js and modern JavaScript web applications engineered for performance, maintainability, and responsiveness."
          />
        </AnimatedContainer>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap items-center gap-2">
            {allTechs.slice(0, 8).map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all border ${
                  selectedTech === tech
                    ? "bg-sky-500/20 text-sky-300 border-sky-400 font-bold"
                    : "bg-[#091024]/80 text-slate-400 border-white/[0.08] hover:border-white/20 hover:text-white"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>

          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects by name, tech..."
              className="w-full pl-9 pr-8 py-2 text-xs font-mono bg-[#091024]/80 border border-white/[0.08] rounded-full text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <AnimatedContainer
                key={project.id}
                direction="up"
                delay={idx * 0.08}
                className="h-full"
              >
                <ProjectCard project={project} featured={false} />
              </AnimatedContainer>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 p-8 rounded-2xl glass-card border border-white/[0.08] max-w-md mx-auto">
            <Layers className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <p className="text-sm font-mono text-slate-300">No projects match the selected criteria.</p>
            <Button
              onClick={() => {
                setSelectedTech("All");
                setSearchQuery("");
              }}
              variant="outline"
              size="sm"
              className="mt-4"
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
