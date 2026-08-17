export default function Hero() {
  return (
    <section id="top" className="relative pt-[150px] md:pt-[190px] pb-20 px-6 md:px-10">
      <div className="max-w-content mx-auto">
        <p className="eyebrow mb-6">AI Creative Agency</p>

        <h1 className="font-display text-balance text-[13vw] leading-[0.98] md:text-[6.4vw] lg:text-[110px] lg:leading-[0.96] text-ink max-w-5xl">
          Creative built
          <br />
          for <em className="italic text-brass font-normal">attention.</em>
        </h1>

        <div className="mt-10 md:mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <p className="text-muted text-lg md:text-xl max-w-md leading-relaxed">
            AI-powered ads, social content and visual campaigns for brands
            that want to stand out.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brass text-bg text-sm px-7 py-3.5 tracking-wide hover:bg-brassSoft transition-colors duration-300 ease-premium"
            >
              Book a Creative Call
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-ink text-sm px-7 py-3.5 tracking-wide border border-line hover:border-brass transition-colors duration-300 ease-premium"
            >
              View Our Work
            </a>
          </div>
        </div>

        {/* Showreel — signature viewfinder frame. Replace video source in README. */}
        <div className="frame-corners fc-active mt-16 md:mt-20 relative aspect-video w-full bg-surface border border-line overflow-hidden group">
          <div className="fc-tl" />
          <div className="fc-tr" />

          {/* PLACEHOLDER: swap for <video autoPlay muted loop playsInline poster="/showreel-poster.jpg"><source src="/showreel.mp4" /></video> */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-surface via-surface to-surface2">
            <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_30%_20%,#C9A15C,transparent_60%)]" />
            <button
              aria-label="Play showreel"
              className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full border border-brass/60 flex items-center justify-center group-hover:scale-105 group-hover:border-brass transition-all duration-500 ease-premium"
            >
              <span className="w-0 h-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-brass ml-1" />
            </button>
          </div>

          <div className="absolute bottom-5 left-5 eyebrow">Showreel — 2026</div>
          <div className="absolute bottom-5 right-5 font-mono text-[11px] text-faint tracking-widest2">
            01 / 06
          </div>
        </div>
      </div>
    </section>
  );
}
