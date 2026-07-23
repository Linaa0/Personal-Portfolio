import { ArrowDown, Mail } from "lucide-react";
import { highlights, personalInfo } from "@/data/portfolio";
import GitHubIcon from "./GitHubIcon";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden hero-grid">
      <div
        className="gradient-orb pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
        aria-hidden
      />
      <div
        className="gradient-orb pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl"
        style={{ animationDelay: "2s" }}
        aria-hidden
      />

      <div className="container-max section-padding relative z-10 w-full pt-24">
        <div className="max-w-3xl">
          <p
            className="mb-4 animate-fade-in text-sm font-medium uppercase tracking-widest text-accent-light"
            style={{ animationDelay: "0.1s" }}
          >
            {personalInfo.location}
          </p>

          <h1
            className="animate-slide-up font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-gradient">{personalInfo.name}</span>
          </h1>

          <p
            className="animate-slide-up mt-4 text-lg font-medium text-accent-light sm:text-xl"
            style={{ animationDelay: "0.3s" }}
          >
            {personalInfo.title}
          </p>

          <p
            className="animate-slide-up mt-6 max-w-xl text-lg leading-relaxed text-muted"
            style={{ animationDelay: "0.4s" }}
          >
            {personalInfo.tagline}
          </p>

          <div
            className="animate-slide-up mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
            style={{ animationDelay: "0.45s" }}
          >
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border bg-surface/80 px-4 py-3 backdrop-blur-sm"
              >
                <p className="font-display text-lg font-bold text-white">
                  {item.value}
                </p>
                <p className="mt-0.5 text-xs text-muted">{item.label}</p>
              </div>
            ))}
          </div>

          <div
            className="animate-slide-up mt-10 flex flex-wrap gap-4"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25"
            >
              View Projects
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-white transition-all hover:border-accent/50 hover:bg-surface-elevated"
            >
              <Mail size={16} />
              Hire Me
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-white transition-all hover:border-accent/50 hover:bg-surface-elevated"
            >
              <GitHubIcon size={16} />
              GitHub
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce md:block">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted transition-colors hover:text-accent-light"
            aria-label="Scroll to about section"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
