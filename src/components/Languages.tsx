import { languages } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Languages() {
  return (
    <section id="languages" className="section-padding">
      <div className="container-max">
        <SectionHeading
          label="Languages"
          title="How I communicate"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="rounded-xl border border-border bg-surface p-5 text-center transition-colors hover:border-accent/30"
            >
              <p className="font-display text-lg font-semibold text-white">
                {lang.name}
              </p>
              <p className="mt-1 text-sm text-accent-light">{lang.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
