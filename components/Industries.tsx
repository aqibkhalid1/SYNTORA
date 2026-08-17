import Reveal from "./Reveal";
import { industries } from "@/data/industries";

export default function Industries() {
  return (
    <section id="industries" className="px-6 md:px-10 py-28 md:py-36 bg-surface border-y border-line">
      <div className="max-w-content mx-auto">
        <Reveal>
          <p className="eyebrow mb-5">Industries</p>
          <h2 className="font-display text-4xl md:text-6xl text-ink text-balance max-w-2xl mb-4">
            Creative without industry limits.
          </h2>
          <p className="text-muted max-w-lg leading-relaxed mb-16 md:mb-20">
            Great creative works everywhere. We adapt our strategy and
            production to the audience, offer and platform.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 border-t border-l border-line">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 3) * 60}>
              <div className="group relative border-r border-b border-line px-6 py-9 h-full overflow-hidden">
                <div className="absolute inset-0 bg-brass translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-premium" />
                <div className="relative z-10">
                  <h3 className="font-display text-lg md:text-xl text-ink group-hover:text-bg transition-colors duration-300">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-faint group-hover:text-bg/70 mt-1.5 transition-colors duration-300">
                    {ind.note}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
