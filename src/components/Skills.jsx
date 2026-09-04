import React, { useState, useMemo } from "react";
import { skillsData, skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedContainer } from "@/components/AnimatedContainer";
import { SkillCard } from "@/components/SkillCard";
import { Search, X, Layers } from "lucide-react";

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSkills = useMemo(() => {
    return skillsData.filter((skill) => {
      const matchesCategory =
        activeCategory === "All" || skill.category === activeCategory;
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Glow */}
      <div className="absolute left-1/4 top-1/3 w-96 h-96 bg-sky-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedContainer direction="up">
          <SectionHeading
            badge="Proficiencies & Tooling"
            title="TECHNICAL"
            gradientText="SKILLS"
            subtitle="Categorized across core languages, the React ecosystem, modern styling, REST APIs, developer tooling, and core computer science concepts."
          />
        </AnimatedContainer>

        {/* Filter Bar & Search Input */}
        <AnimatedContainer direction="up" delay={0.1}>
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {skillCategories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
                      isActive
                        ? "bg-sky-500/20 text-sky-300 border-sky-400 font-bold shadow-glow-sm"
                        : "bg-[#091024]/80 text-slate-400 border-white/[0.08] hover:border-white/20 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Live Search Input */}
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skills..."
                className="w-full pl-9 pr-8 py-2 text-xs font-mono bg-[#091024]/80 border border-white/[0.08] rounded-full text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </AnimatedContainer>

        {/* Skills Cards Grid */}
        {filteredSkills.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredSkills.map((skill, index) => (
              <AnimatedContainer
                key={skill.name}
                direction="up"
                delay={Math.min(index * 0.05, 0.4)}
                className="h-full"
              >
                <SkillCard skill={skill} />
              </AnimatedContainer>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 p-8 rounded-2xl glass-card border border-white/[0.08] max-w-md mx-auto">
            <Layers className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <p className="text-sm font-mono text-slate-300">No matching technical skills found.</p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-1.5 text-xs font-mono text-sky-400 border border-sky-500/30 rounded-full hover:bg-sky-500/10"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
