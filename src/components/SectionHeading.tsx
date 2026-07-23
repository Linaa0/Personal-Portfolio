import { navLinks, personalInfo } from "@/data/portfolio";

export default function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent-light">
        {label}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
      )}
    </div>
  );
}
