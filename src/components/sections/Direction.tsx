import { Globe, Target, Users, type LucideIcon } from "lucide-react";
import { directions } from "@/lib/content";
import { SectionHeader } from "@/components/ui/Editorial";

const icons: Record<(typeof directions)[number]["icon"], LucideIcon> = { Target, Users, Globe };

export default function Direction() {
  return (
    <section id="direction" data-tone="ember" aria-labelledby="direction-title" className="section-space relative">
      <div className="shell">
        <SectionHeader
          index="05"
          label="Direction"
          id="direction-title"
          title={["Where I'm heading", <span key="b" className="text-rose">next.</span>]}
          intro="Open to internships, global teams, hackathons and innovation programmes that move these forward."
        />

        <ol data-reveal="stagger" className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-24">
          {directions.map((d, i) => {
            const Icon = icons[d.icon];
            return (
              <li
                key={d.title}
                className="group relative overflow-hidden rounded-[1.5rem] border border-line bg-velvet/60 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-rose/40 sm:p-10"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-flare to-rose transition-transform duration-700 group-hover:scale-x-100"
                />
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-rose/25 bg-night/60 text-rose">
                    <Icon size={19} strokeWidth={1.6} aria-hidden />
                  </span>
                  <span className="text-sm font-semibold tabular-nums text-dim">0{i + 1}</span>
                </div>
                <h3 className="mt-8 text-xl font-medium text-paper">{d.title}</h3>
                <p className="mt-3 leading-relaxed text-mist">{d.body}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
