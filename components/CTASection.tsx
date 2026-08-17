import Reveal from "./Reveal";

export default function CTASection() {
  return (
    <section className="px-6 md:px-10 py-28 md:py-40">
      <div className="max-w-content mx-auto text-center">
        <Reveal>
          <p className="eyebrow mb-6">Let's Talk</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-ink text-balance leading-[1.02] max-w-4xl mx-auto">
            Have a brand? Let's create something worth watching.
          </h2>
          <p className="text-muted text-lg mt-8 max-w-md mx-auto">
            Tell us what you're selling. We'll show you what it could look like.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brass text-bg text-sm px-8 py-4 tracking-wide hover:bg-brassSoft transition-colors duration-300 ease-premium"
            >
              Book a Creative Call
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-ink text-sm px-8 py-4 tracking-wide border border-line hover:border-brass transition-colors duration-300 ease-premium"
            >
              Start a Project
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
