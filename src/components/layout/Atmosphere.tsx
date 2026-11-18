/**
 * The fixed environment behind every scene: velvet darkness, drifting crimson
 * light fields, a diagonal light leak and film grain. All movement is CSS
 * transform/opacity. `html[data-tone]` (set while scrolling) re-lights it.
 */
export default function Atmosphere() {
  return (
    <div aria-hidden className="atmo pointer-events-none fixed inset-0 z-0 overflow-hidden bg-night">
      <div className="atmo-base absolute inset-0" />
      <div className="atmo-a drift-a absolute -left-[20vw] -top-[25vh] h-[90vh] w-[80vw]" />
      <div className="atmo-b drift-b absolute -right-[25vw] top-[30vh] h-[95vh] w-[75vw]" />
      <div className="atmo-c breathe absolute bottom-[-35vh] left-[10vw] h-[70vh] w-[70vw]" />
      <div className="atmo-leak absolute inset-0" />
      <div className="atmo-vignette absolute inset-0" />
      <div className="grain absolute inset-0" />
      <style>{`
        .atmo > div { transition: opacity 1.8s cubic-bezier(.22,1,.36,1), filter 1.8s; will-change: transform, opacity; }
        .atmo-base { background: radial-gradient(120% 80% at 50% 0%, #18050a 0%, #090204 60%); }
        .atmo-a { background: radial-gradient(closest-side, rgb(107 11 25 / .55), rgb(42 4 10 / .25) 55%, transparent 75%); }
        .atmo-b { background: radial-gradient(closest-side, rgb(134 25 45 / .32), rgb(42 4 10 / .2) 55%, transparent 75%); }
        .atmo-c { background: radial-gradient(closest-side, rgb(165 42 64 / .22), transparent 70%); }
        .atmo-leak { background: linear-gradient(115deg, transparent 30%, rgb(165 42 64 / .07) 46%, rgb(197 138 148 / .05) 50%, transparent 62%); mix-blend-mode: screen; }
        .atmo-vignette { background: radial-gradient(130% 100% at 50% 50%, transparent 55%, rgb(9 2 4 / .85) 100%); }

        html[data-tone="deep"] .atmo-a { opacity: .45; }
        html[data-tone="deep"] .atmo-b { opacity: .5; }
        html[data-tone="deep"] .atmo-leak { opacity: .4; }
        html[data-tone="dusk"] .atmo-a { opacity: .7; }
        html[data-tone="dusk"] .atmo-c { opacity: 1; }
        html[data-tone="flare"] .atmo-a { opacity: 1; filter: saturate(1.15); }
        html[data-tone="flare"] .atmo-b { opacity: 1; }
        html[data-tone="flare"] .atmo-c { opacity: 1; }
      `}</style>
    </div>
  );
}
