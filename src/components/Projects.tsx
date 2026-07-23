"use client";

import { useMemo, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { allProjectTech, projects } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.tech.includes(activeFilter));
  }, [activeFilter]);

  const projectGradients = [
    "from-indigo-500/20 to-purple-600/10",
    "from-violet-500/20 to-fuchsia-600/10",
    "from-blue-500/20 to-cyan-600/10",
    "from-emerald-500/20 to-teal-600/10",
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <SectionHeading
          label="Projects"
          title="Things I've built"
          description="Four real applications. Each one designed, built, and deployed by me."
        />

        {/* Filter tabs */}
        <div className="mb-10 flex flex-wrap gap-2">
          <FilterButton
            label="All"
            active={activeFilter === "All"}
            onClick={() => setActiveFilter("All")}
          />
          {allProjectTech.map((tech) => (
            <FilterButton
              key={tech}
              label={tech}
              active={activeFilter === tech}
              onClick={() => setActiveFilter(tech)}
            />
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
            >
              <div
                className={`relative h-40 bg-gradient-to-br ${projectGradients[index % projectGradients.length]} p-6`}
              >
                <div className="absolute inset-0 hero-grid opacity-50" />
                <p className="relative z-10 font-display text-sm font-medium italic text-white/90">
                  &ldquo;{project.hook}&rdquo;
                </p>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-background/80 px-2.5 py-1 text-xs font-medium text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4 border-t border-border/60 pt-4">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent-light transition-colors hover:text-white"
                    >
                      <Github size={16} />
                      View on GitHub
                      <ExternalLink size={12} />
                    </a>
                  ) : (
                    <span className="text-sm text-muted/60">
                      GitHub link coming soon
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-muted">
            No projects match this filter.
          </p>
        )}
      </div>
    </section>
  );
}

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
        active
          ? "bg-accent text-white"
          : "border border-border bg-surface text-muted hover:border-accent/40 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}
