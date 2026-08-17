import Reveal from "./Reveal";

// NOTE: All figures below are explicitly marked as placeholders in the UI.
// Do not replace with invented numbers — only with verified client results.
const stats = [
  { value: "XX%", label: "Increase in CTR" },
  { value: "XX%", label: "Decrease in CPL" },
  { value: "XX", label: "Leads generated" },
];

export default function CaseStudy() {
  return (
    <section className="px-6 md:px-10 py-28 md:py-36">
      <div className="max-w-content mx-auto">
        <Reveal>
          <p className="eyebrow mb-5">Results</p>
          <h2 className="font-display text-4xl md:text-6xl text-ink text-balance max-w-2xl mb-16 md:mb-20">
            Creative that performs.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="border border-line">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-line">
                <span className="font-mono text-[11px] text-faint tracking-widest2">Home Services Campaign</span>
                <div className="mt-8 space-y-7">
                  <div>
                    <h3 className="font-display text-lg text-brass mb-2">Challenge</h3>
                    <p className="text-muted text-sm leading-relaxed">
                      The brand needed stronger paid social creative to lower acquisition cost.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-brass mb-2">Solution</h3>
                    <p className="text-muted text-sm leading-relaxed">
                      Syntora developed a new creative direction featuring multiple hooks and
                      short-form advertisements.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-brass mb-2">Creative Delivered</h3>
                    <ul className="text-muted text-sm leading-relaxed space-y-1">
                      <li>4 concepts</li>
                      <li>12 variations</li>
                      <li>Multiple hooks</li>
                      <li>Meta-ready formats</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center gap-8">
                <span className="font-mono text-[10px] text-faint tracking-widest2 uppercase">
                  Placeholder — pending verified client results
                </span>
                {stats.map((s) => (
                  <div key={s.label} className="flex items-baseline justify-between border-b border-line pb-5">
                    <span className="font-display text-4xl md:text-5xl text-ink/40">{s.value}</span>
                    <span className="text-muted text-sm">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
