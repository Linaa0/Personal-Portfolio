import { Award } from "lucide-react";
import { site } from "@/lib/site-config";
import { recognition } from "@/lib/content";
import { PortraitFrame, SectionHeader } from "@/components/ui/Editorial";

export default function About() {
  const roles = [
    {
      title: "Frontend Developer",
      body: "I build fast, accessible interfaces in React and Next.js, from design system to production-ready screens.",
    },
    {
      title: "Project Manager",
      body: "I plan the work, set priorities and keep teams aligned, as CEO of QLine and across team projects.",
    },
  ];
  const facts = [
    { label: "Studying", value: site.education.school },
    { label: "Leading", value: site.leadership.company },
    { label: "Languages", value: site.languages.join(", ") },
  ];

  return (
    <section id="about" data-tone="dusk" aria-labelledby="about-title" className="section-space relative overflow-x-clip">
      <div className="shell">
        <SectionHeader
          index="01"
          label="About"
          id="about-title"
          title={["I plan the product", <span key="b" className="text-rose">and build the interface.</span>]}
        />

        <div className="mt-24 grid grid-cols-1 items-center gap-16 lg:mt-28 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div data-parallax="0.12" className="mx-auto max-w-sm lg:mx-0">
              <div data-reveal="up">
                <PortraitFrame className="aspect-[4/5]" arch />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p data-reveal="up" className="text-[1.08rem] leading-[1.85] text-mist">
              I&apos;m a frontend developer and project manager from Rwanda, studying {site.education.program} at{" "}
              <span className="text-paper">{site.education.school}</span>. I take products from the first conversation to
              a working release, and I care as much about the plan as the pixels.
            </p>

            <div data-reveal="stagger" className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {roles.map((r) => (
                <div key={r.title} className="rounded-[1.25rem] border border-line bg-velvet/60 p-7">
                  <p className="text-lg font-medium text-paper">{r.title}</p>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-mist">{r.body}</p>
                </div>
              ))}
            </div>

            <dl data-reveal="stagger" className="mt-12 grid grid-cols-1 gap-8 border-t border-line pt-10 sm:grid-cols-3">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="eyebrow">{f.label}</dt>
                  <dd className="mt-3 text-paper">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Recognition */}
        <div className="mt-24 lg:mt-32">
          <p data-reveal="fade" className="eyebrow flex items-center gap-3">
            <Award size={14} aria-hidden className="text-rose" />
            Recognition
          </p>
          <ul data-reveal="stagger" className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {recognition.map((r) => (
              <li key={r.title} className="rounded-[1.25rem] border border-line bg-velvet/50 p-6">
                <p className="text-paper">{r.title}</p>
                <p className="mt-2 text-sm text-dim">{r.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
