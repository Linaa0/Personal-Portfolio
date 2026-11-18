import { ArrowUp } from "lucide-react";
import { navLinks, site } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();
  const connect = [
    { label: "GitHub", href: site.github.href, external: true },
    { label: "LinkedIn", href: site.linkedin.href, external: true },
    { label: "Email", href: `mailto:${site.email}` },
    { label: "Download CV", href: site.cv.href, download: site.cv.fileName },
  ];

  return (
    <footer className="relative z-10 border-t border-line bg-night/60">
      <div className="shell pb-10 pt-24 lg:pt-32">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-6 lg:col-span-5">
            <p className="text-2xl font-light tracking-tight text-paper">{site.name}</p>
            <p className="mt-4 max-w-xs text-mist">
              Frontend developer and project manager, building from {site.location}.
            </p>
            <p className="mt-8 inline-flex items-center gap-3 text-sm text-paper/90">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-flare/70" />
                <span className="relative h-2 w-2 rounded-full bg-flare" />
              </span>
              Open to new opportunities
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3 lg:col-span-2 lg:col-start-8">
            <p className="eyebrow">Navigate</p>
            <ul className="mt-6 space-y-3">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="link-line text-mist hover:text-paper">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3 lg:col-span-2">
            <p className="eyebrow">Connect</p>
            <ul className="mt-6 space-y-3">
              {connect.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    {...(c.download ? { download: c.download } : {})}
                    className="link-line text-mist hover:text-paper"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-6 border-t border-line pt-8 text-sm text-dim sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-3 text-mist transition-colors hover:text-paper"
          >
            Back to top
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-rose/30 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-rose">
              <ArrowUp size={14} aria-hidden />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
