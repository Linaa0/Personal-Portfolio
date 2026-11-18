import Image from "next/image";
import { site } from "@/lib/site-config";

/** Masked line-by-line reveal. Works as a server component. */
export function RevealLines({
  lines,
  as: Tag = "h2",
  className = "",
  id,
}: {
  lines: React.ReactNode[];
  as?: "h1" | "h2" | "h3" | "p" | "div";
  className?: string;
  id?: string;
}) {
  return (
    <Tag id={id} data-reveal="lines" className={className}>
      {lines.map((line, i) => (
        <span key={i} className="mask">
          <span>{line}</span>
        </span>
      ))}
    </Tag>
  );
}

/** Consistent section opening: index, label, title and an optional short intro. */
export function SectionHeader({
  index,
  label,
  title,
  intro,
  id,
}: {
  index: string;
  label: string;
  title: React.ReactNode[];
  intro?: string;
  id: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-7">
        <p data-reveal="fade" className="eyebrow flex items-center gap-4">
          <span className="text-rose">{index}</span>
          <span aria-hidden className="h-px w-10 bg-rose/40" />
          {label}
        </p>
        <RevealLines
          id={id}
          className="mt-7 text-[clamp(1.9rem,3.2vw,2.85rem)] font-normal leading-[1.15] tracking-[-0.02em] text-paper"
          lines={title}
        />
      </div>
      {intro && (
        <p data-reveal="up" className="max-w-sm text-[1.05rem] text-mist lg:col-span-4 lg:col-start-9 lg:pb-2">
          {intro}
        </p>
      )}
    </div>
  );
}

/**
 * Text whose words light up one by one as it scrolls through the viewport.
 * Segments marked `hl` are coloured as emphasis.
 */
export function WordFill({
  segments,
  className = "",
  as: Tag = "p",
}: {
  segments: { t: string; hl?: boolean }[];
  className?: string;
  as?: "p" | "h2";
}) {
  return (
    <Tag data-reveal="words" className={className}>
      {segments.map((s, i) =>
        s.t.split(" ").filter(Boolean).map((w, j) => (
          <span key={`${i}-${j}`} className={`w inline-block ${s.hl ? "text-rose" : ""}`}>
            {w}&nbsp;
          </span>
        )),
      )}
    </Tag>
  );
}

/**
 * Portrait frame. Shows the photograph from site-config when one is set,
 * otherwise an art-directed placeholder.
 */
export function PortraitFrame({
  className = "",
  sizes = "(min-width: 1024px) 32vw, 80vw",
  priority = false,
  arch = false,
  texture = "/textures/silk-flow.webp",
}: {
  className?: string;
  sizes?: string;
  priority?: boolean;
  arch?: boolean;
  texture?: string;
}) {
  const shape = arch ? "rounded-t-[999px] rounded-b-[1.75rem]" : "rounded-[1.75rem]";
  return (
    <figure className={`relative ${className}`}>
      <div className={`relative h-full w-full overflow-hidden bg-velvet ${shape}`}>
        {site.portrait.src ? (
          <Image
            src={site.portrait.src}
            alt={site.portrait.alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover"
            data-hero-inner
          />
        ) : (
          <div data-hero-inner className="absolute inset-0" role="img" aria-label="Portrait placeholder">
            <Image src={texture} alt="" fill sizes={sizes} priority={priority} className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
              <span className="eyebrow !text-[0.62rem] !text-rose/80">Portrait</span>
              <span className="text-xs font-semibold tracking-[0.2em] text-mist">I · L · A</span>
            </div>
          </div>
        )}
        <div aria-hidden className={`pointer-events-none absolute inset-0 ring-1 ring-inset ring-rose/15 ${shape}`} />
      </div>
    </figure>
  );
}
