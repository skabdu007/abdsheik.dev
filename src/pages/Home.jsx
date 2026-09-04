import React from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";

export const Home = () => {
  return (
    <main className="relative flex flex-col">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Services />
      <Contact />
    </main>
  );
};
