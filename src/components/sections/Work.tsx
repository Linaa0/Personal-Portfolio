import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/projects";
import { SectionHeader } from "@/components/ui/Editorial";
import ProjectVisual from "@/components/projects/ProjectVisual";

const stageDot: Record<Project["stage"], string> = {
  Built: "bg-rose",
  "In development": "bg-flare",
  Designed: "bg-wine",
  Concept: "bg-mist/60",
  Proposal: "bg-mist/60",
};

/**
 * Stacking cards. On large screens each card pins below the header and the
 * next one slides over it while the previous card recedes (see ScrollScenes,
 * `data-stack`). On smaller screens they read as a simple sequence.
 */
export default function Work() {
  return (
    <section id="work" data-tone="deep" aria-labelledby="work-title" className="section-space relative">
      <div className="shell">
        <SectionHeader
          index="02"
          label="Selected work"
          id="work-title"
          title={["Six projects,", <span key="b" className="text-rose">each at its own stage.</span>]}
          intro="Built, in development, or still on paper. Each one says plainly where it stands."
        />

        <div data-stack className="mt-24 space-y-10 lg:mt-32 lg:space-y-0">
          {projects.map((p, i) => (
            <article
              key={p.slug}
              data-stack-card
              aria-labelledby={`p-${p.slug}`}
              className="lg:sticky lg:mb-[18vh] lg:last:mb-0"
              style={{ top: `calc(var(--nav-h) + 1.5rem + ${i * 12}px)` }}
            >
              <div
                data-stack-inner
                className="relative origin-top overflow-hidden rounded-[2rem] border border-line bg-velvet will-change-transform"
              >
                <div className="grid grid-cols-1 lg:h-[min(74svh,42rem)] lg:grid-cols-2">
                  {/* Text */}
                  <div className="order-2 flex flex-col justify-between gap-12 p-8 sm:p-12 lg:order-1 lg:p-14">
                    <div className="flex items-center justify-between gap-6 text-sm">
                      <span className="font-semibold tabular-nums text-rose">
                        {p.number} <span className="text-dim">/ 0{projects.length}</span>
                      </span>
                      <span className="rounded-full border border-line px-4 py-1.5 text-xs font-semibold tracking-wide text-mist">
                        {p.category}
                      </span>
                    </div>

                    <div>
                      <h3
                        id={`p-${p.slug}`}
                        className="text-[clamp(1.8rem,2.6vw,2.4rem)] font-normal leading-tight tracking-[-0.02em] text-paper"
                      >
                        {p.name}
                      </h3>
                      <p className="mt-3 text-[1.05rem] text-rose">{p.line}</p>
                      <p className="mt-6 max-w-md leading-relaxed text-mist">{p.summary}</p>
                    </div>

                    <div className="space-y-6">
                      <dl className="grid grid-cols-2 gap-6 border-t border-line pt-6 text-sm">
                        <div>
                          <dt className="eyebrow !text-[0.62rem]">Status</dt>
                          <dd className="mt-2 flex items-center gap-2 text-paper">
                            <span aria-hidden className={`h-1.5 w-1.5 shrink-0 rounded-full ${stageDot[p.stage]}`} />
                            {p.status}
                          </dd>
                        </div>
                        <div>
                          <dt className="eyebrow !text-[0.62rem]">Role</dt>
                          <dd className="mt-2 text-paper">{p.role}</dd>
                        </div>
                      </dl>
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <p className="text-sm text-dim">{p.stack.length ? p.stack.join(" · ") : "Research and design"}</p>
                        {p.link && (
                          <a
                            href={p.link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 text-sm font-semibold text-paper"
                          >
                            <span className="link-line">{p.link.label}</span>
                            <ArrowUpRight
                              size={15}
                              aria-hidden
                              className="text-rose transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                            <span className="sr-only">(opens in a new tab)</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className="relative order-1 m-3 aspect-[4/3] overflow-hidden rounded-[1.5rem] lg:order-2 lg:aspect-auto">
                    <div data-zoom className="absolute inset-0">
                      <ProjectVisual slug={p.slug} />
                    </div>
                  </div>
                </div>
                <div data-stack-shade aria-hidden className="pointer-events-none absolute inset-0 bg-night opacity-0" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
