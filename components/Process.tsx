import Reveal from "./Reveal";

const steps = [
  { n: "01", title: "Strategy", body: "We understand the brand, audience, offer and campaign objective." },
  { n: "02", title: "Concept", body: "We develop hooks, scripts, storyboards and creative directions." },
  { n: "03", title: "Production", body: "AI-powered production lets us create premium visual assets quickly." },
  { n: "04", title: "Edit", body: "We polish every creative — editing, sound, pacing, branding, platform fit." },
  { n: "05", title: "Variations", body: "We create multiple versions so brands can keep testing new creative." },
];

export default function Process() {
  return (
    <section className="px-6 md:px-10 py-28 md:py-36">
      <div className="max-w-content mx-auto">
        <Reveal>
          <p className="eyebrow mb-5">Process</p>
          <h2 className="font-display text-4xl md:text-6xl text-ink text-balance max-w-2xl mb-16 md:mb-20">
            From idea to finished creative.
          </h2>
        </Reveal>

        <div className="relative">
          <div className="hidden lg:block absolute top-[13px] left-0 right-0 h-px bg-line" />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-6">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 90}>
                <div className="relative">
                  <div className="hidden lg:block w-[7px] h-[7px] rounded-full bg-brass mb-6" />
                  <span className="font-mono text-[11px] text-faint tracking-widest2">{step.n}</span>
                  <h3 className="font-display text-2xl text-ink mt-2 mb-3">{step.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
