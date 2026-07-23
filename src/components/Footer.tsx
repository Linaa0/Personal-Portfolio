import { Github, Heart, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background py-10">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-display text-sm font-semibold text-white">
              {personalInfo.name}
            </p>
            <p className="mt-1 text-xs text-muted">
              Software Engineer · {personalInfo.location}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-muted transition-colors hover:bg-surface hover:text-white"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="rounded-lg p-2 text-muted transition-colors hover:bg-surface hover:text-white"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 border-t border-border/40 pt-8 text-center">
          <p className="flex items-center gap-1.5 text-xs text-muted">
            Built with Next.js & TypeScript
            <Heart size={12} className="text-accent-light" />
          </p>
          <p className="text-xs text-muted/60">
            © {year} {personalInfo.shortName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
