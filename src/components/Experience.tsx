import { experiences } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding border-t border-border/40 bg-surface/50"
    >
      <div className="container-max">
        <SectionHeading
          label="Experience"
          title="Beyond the code"
          description="Competitive, curious, and used to showing up when it counts."
        />

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-[7px] top-2 hidden h-[calc(100%-16px)] w-px bg-border md:block"
            aria-hidden
          />

          <ul className="space-y-8">
            {experiences.map((exp, index) => (
              <li key={index} className="relative md:pl-10">
                <div
                  className="absolute left-0 top-1.5 hidden h-3.5 w-3.5 rounded-full border-2 border-accent bg-background md:block"
                  aria-hidden
                />
                <div className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/30">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-display text-base font-semibold text-white">
                      {exp.title}
                    </h3>
                    <span className="text-sm font-medium text-accent-light">
                      {exp.organization}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {exp.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
