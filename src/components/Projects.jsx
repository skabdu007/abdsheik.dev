import React from "react";
import { Link } from "react-router-dom";
import { projectsData } from "@/data/projects";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedContainer } from "@/components/AnimatedContainer";
import { ProjectCard } from "@/components/ProjectCard";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/Button";

export const Projects = () => {
  const featuredProject = projectsData.find((p) => p.featured) || projectsData[0];
  const otherProjects = projectsData.filter((p) => p.id !== featuredProject.id);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-sky-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedContainer direction="up">
          <SectionHeading
            badge="Portfolio Highlights"
            title="SELECTED"
            gradientText="PROJECTS"
            subtitle="PROJECTS I'VE BUILT"
          />
        </AnimatedContainer>

        {/* Large Featured Project Card */}
        {featuredProject && (
          <AnimatedContainer direction="up" delay={0.1} className="mb-12">
            <ProjectCard project={featuredProject} featured={true} />
          </AnimatedContainer>
        )}

        {/* Remaining 5 Project Cards in Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <AnimatedContainer
              key={project.id}
              direction="up"
              delay={0.15 + index * 0.08}
              className="h-full"
            >
              <ProjectCard project={project} featured={false} />
            </AnimatedContainer>
          ))}
        </div>

        {/* Bottom Callout & Link to Projects Archive */}
        <AnimatedContainer direction="up" delay={0.4}>
          <div className="mt-14 p-6 sm:p-8 rounded-2xl glass-card border border-white/[0.08] text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h4 className="text-base font-bold text-white uppercase tracking-wider">
                Explore Full Archive
              </h4>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                Inspect architecture diagrams, hooks, and services.
              </p>
            </div>
            <Button
              to="/projects"
              variant="outline"
              size="sm"
              icon={ArrowRight}
            >
              View All Projects
            </Button>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
};
