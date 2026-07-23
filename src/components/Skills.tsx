import {
  Box,
  Code2,
  Cpu,
  Database,
  Layers,
  Palette,
} from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const categoryIcons: Record<string, React.ReactNode> = {
  Languages: <Code2 size={20} />,
  "Frameworks & Runtime": <Layers size={20} />,
  Databases: <Database size={20} />,
  "Other Technologies": <Cpu size={20} />,
  "Design & 3D": <Palette size={20} />,
  "Areas of Focus": <Box size={20} />,
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-surface/50">
      <div className="container-max">
        <SectionHeading
          label="Skills"
          title="Tools I build with"
          description="From backend logic to UI design — a full-stack toolkit shaped by real projects."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="group rounded-xl border border-border bg-surface p-6 transition-all hover:border-accent/30 hover:bg-surface-elevated"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent-light transition-colors group-hover:bg-accent/20">
                  {categoryIcons[group.category]}
                </div>
                <h3 className="font-display text-base font-semibold text-white">
                  {group.category}
                </h3>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
