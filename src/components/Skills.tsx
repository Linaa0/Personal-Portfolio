import type { LucideIcon } from "lucide-react";
import {
  Box,
  Brain,
  Code2,
  Cpu,
  Database,
  Layers,
  Palette,
} from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const categoryIcons: Record<string, LucideIcon> = {
  Languages: Code2,
  "Frameworks & Runtime": Layers,
  Databases: Database,
  "Other Technologies": Cpu,
  "Design & 3D": Palette,
  "Areas of Focus": Box,
  "Currently Learning": Brain,
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-surface/50">
      <div className="container-max">
        <SectionHeading
          label="Skills"
          title="Tools I build with"
          description="The stack behind my shipped projects, plus what I'm growing into next."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = categoryIcons[group.category] ?? Box;

            return (
              <div
                key={group.category}
                className={`group rounded-xl border bg-surface p-6 transition-all hover:bg-surface-elevated ${
                  group.learning
                    ? "border-dashed border-accent/25 hover:border-accent/40"
                    : "border-border hover:border-accent/30"
                }`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent-light transition-colors group-hover:bg-accent/20">
                    <Icon size={20} />
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-base font-semibold text-white">
                      {group.category}
                    </h3>
                    {group.learning && (
                      <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent-light">
                        In progress
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const isHighlighted = group.highlight?.includes(skill);
                    return (
                      <span
                        key={skill}
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          isHighlighted
                            ? "border border-accent/40 bg-accent/15 text-accent-light"
                            : "border border-border bg-background/50 text-muted"
                        }`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
                {group.note && (
                  <p className="mt-4 text-xs leading-relaxed text-muted">
                    {group.note}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
