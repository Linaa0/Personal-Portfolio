import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-padding flex min-h-[60vh] items-center">
      <div className="container-max text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-accent-light">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-muted">
          The page you are looking for does not exist or was moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
