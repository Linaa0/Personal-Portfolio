import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[100svh] flex-col justify-center py-32">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-6 max-w-[14ch] font-display text-[clamp(3rem,9vw,8rem)] font-light leading-[0.9] text-paper">
        This page <em className="text-rose">does not exist.</em>
      </h1>
      <p className="mt-8 max-w-md text-mist">The link may be old, or the page may have moved.</p>
      <Link
        href="/"
        className="mt-12 inline-flex w-fit items-center gap-3 rounded-full border border-rose/40 px-7 py-4 text-[0.74rem] uppercase tracking-[0.24em] text-paper transition-colors duration-500 hover:border-rose hover:bg-crimson/40"
      >
        Back to the beginning
      </Link>
    </section>
  );
}
