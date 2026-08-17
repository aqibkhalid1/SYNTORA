import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-28 md:py-36 bg-surface border-y border-line">
      <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow mb-5">About</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink text-balance leading-[1.05]">
              Built for the new era of creative.
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal delay={120}>
            <div className="space-y-6 text-muted leading-relaxed">
              <p>
                Traditional production can be slow, expensive and difficult to
                scale. Syntora combines strong creative strategy with modern
                AI-powered production to help brands create more content,
                test more ideas and move faster.
              </p>
              <p>We believe AI should enhance creativity — not replace it.</p>
              <p className="text-ink font-display text-xl italic pt-2">
                Our goal is simple: make exceptional creative easier to
                produce.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
