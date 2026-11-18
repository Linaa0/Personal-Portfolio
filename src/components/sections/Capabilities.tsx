import { ClipboardList, Code, Cpu, Database, GitBranch, Monitor, PenTool, Server, type LucideIcon } from "lucide-react";
import { capabilities } from "@/lib/content";
import { SectionHeader } from "@/components/ui/Editorial";
import Spotlight from "@/components/ui/Spotlight";

const icons: Record<(typeof capabilities)[number]["icon"], LucideIcon> = {
  Monitor,
  ClipboardList,
  Server,
  Database,
  Code,
  PenTool,
  Cpu,
  GitBranch,
};

export default function Capabilities() {
  return (
    <section id="skills" data-tone="dusk" aria-labelledby="skills-title" className="section-space relative">
      <div className="shell">
        <SectionHeader
          index="03"
          label="Skills"
          id="skills-title"
          title={["From the roadmap", <span key="b" className="text-rose">to the interface.</span>]}
          intro="Frontend and project management lead the way, backed by a full-stack and hardware foundation."
        />

        <Spotlight className="mt-20 lg:mt-24">
          <ul data-reveal="stagger" className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((group, i) => {
              const Icon = icons[group.icon];
              const primary = i < 2;
              return (
                <li
                  key={group.name}
                  className={`group flex flex-col rounded-[1.5rem] border p-7 transition-all duration-500 hover:-translate-y-1 hover:border-rose/45 ${
                    primary ? "border-rose/30 bg-crimson/15" : "border-line bg-velvet/60"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-rose/25 bg-night/60 text-rose transition-colors duration-500 group-hover:bg-crimson/40">
                      <Icon size={19} strokeWidth={1.6} aria-hidden />
                    </span>
                    {primary && (
                      <span className="rounded-full border border-rose/30 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-rose">
                        Core
                      </span>
                    )}
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-paper">{group.name}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="rounded-full bg-paper/[0.06] px-3 py-1 text-[0.8rem] text-mist">
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </Spotlight>
      </div>
    </section>
  );
}
