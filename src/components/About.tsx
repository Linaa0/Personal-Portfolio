import Image from "next/image";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import { about, interests, personalInfo } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="section-padding border-t border-border/40">
      <div className="container-max">
        <SectionHeading
          label="About"
          title="Developer with purpose"
          description="Built to ship. Ready to join your team."
        />

        <div className="grid items-start gap-12 lg:grid-cols-[280px_1fr]">
          <div className="mx-auto w-full max-w-[280px] lg:mx-0">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-surface-elevated">
              <Image
                src="/profile.png"
                alt="ISHIMWE Lina Assoumani, software engineer at Rwanda Coding Academy"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 280px, 280px"
                priority
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"
                aria-hidden
              />
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted lg:justify-start">
              <MapPin size={14} className="text-accent-light" />
              {personalInfo.location}
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              {about.summary}
            </p>

            {about.education.map((edu) => (
              <div
                key={edu.institution}
                className="rounded-xl border border-border bg-surface p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <GraduationCap size={20} className="text-accent-light" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {edu.institution}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent-light">
                      {edu.role}
                    </p>
                    <p className="mt-1 text-sm text-muted">{edu.period}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {edu.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="rounded-xl border border-border/60 bg-accent-glow p-6">
              <div className="flex items-start gap-3">
                <Sparkles
                  size={20}
                  className="mt-0.5 shrink-0 text-accent-light"
                />
                <div>
                  <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent-light">
                    What drives me
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {interests}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
