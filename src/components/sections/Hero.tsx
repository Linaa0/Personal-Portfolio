import { ArrowDown } from "lucide-react";
import { site } from "@/lib/site-config";
import { PortraitFrame } from "@/components/ui/Editorial";
import Magnetic from "@/components/ui/Magnetic";

export default function Hero() {
  return (
    <section
      id="top"
      data-hero-root
      data-tone="ember"
      aria-label="Introduction"
      className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden pb-16 pt-[calc(var(--nav-h)+4rem)]"
    >
      <div
        data-hero="glow"
        aria-hidden
        className="pointer-events-none absolute right-[-15vw] top-[0vh] -z-10 h-[100vh] w-[70vw] bg-[radial-gradient(closest-side,rgb(134_25_45/.42),rgb(42_4_10/.2)_60%,transparent)]"
      />
      <div
        data-hero="glow"
        aria-hidden
        className="pointer-events-none absolute bottom-[-35vh] left-[-20vw] -z-10 h-[70vh] w-[60vw] bg-[radial-gradient(closest-side,rgb(107_11_25/.35),transparent)]"
      />

      <div className="shell grid grid-cols-1 items-center gap-20 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <p data-hero="fade" className="eyebrow flex items-center gap-4">
            <span aria-hidden className="h-px w-10 bg-rose/50" />
            {site.roles[0]} · {site.roles[1]}
          </p>

          <h1 className="mt-10 text-[clamp(2.6rem,5vw,4.6rem)] font-normal leading-[1.08] tracking-[-0.025em] text-paper">
            <span data-hero="line" className="mask">
              <span>Ishimwe Lina</span>
            </span>
            <span data-hero="line" className="mask">
              <span className="text-rose">Assoumani</span>
            </span>
          </h1>

          <p data-hero="fade" className="mt-8 max-w-md text-[1.1rem] leading-relaxed text-mist">
            I lead products from first idea to working release, and build the interfaces people actually use.
          </p>

          <div data-hero="fade" className="mt-14 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a
                href="#work"
                className="inline-flex items-center gap-3 rounded-full bg-paper px-8 py-4 text-sm font-semibold text-night transition-colors duration-500 hover:bg-rose"
              >
                View my work
              </a>
            </Magnetic>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-rose/30 px-8 py-4 text-sm font-semibold text-paper transition-colors duration-500 hover:border-rose hover:bg-crimson/30"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div data-parallax="0.15" className="relative mx-auto w-full max-w-[22rem] lg:max-w-none">
            <div data-hero="frame" className="aspect-[4/5]">
              <PortraitFrame arch priority className="h-full" texture="/textures/silk-drape.webp" sizes="(min-width: 1024px) 34vw, 80vw" />
            </div>
            <div data-hero="fade" className="mt-6 flex items-center justify-between text-sm">
              <span className="text-mist">{site.leadership.title}</span>
              <span className="text-paper">{site.leadership.company}</span>
            </div>
          </div>
        </div>
      </div>

      <div data-hero="fade" className="shell mt-20 lg:mt-24">
        <a href="#about" className="group inline-flex items-center gap-4 text-sm text-mist hover:text-paper">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-rose/30 transition-colors duration-500 group-hover:border-rose">
            <ArrowDown size={15} className="animate-[nudge_2.4s_ease-in-out_infinite]" aria-hidden />
          </span>
          Scroll to explore
        </a>
      </div>
      <style>{`@keyframes nudge{0%,100%{transform:translateY(-2px)}50%{transform:translateY(3px)}}`}</style>
    </section>
  );
}
