import Reveal from "./Reveal";

const points = [
  { title: "Faster", body: "Create campaigns without traditional production timelines." },
  { title: "Flexible", body: "Produce creative for different industries, platforms and formats." },
  { title: "Scalable", body: "Turn one concept into multiple ads, hooks and content variations." },
  { title: "Cost Efficient", body: "Reduce dependence on expensive shoots and production crews." },
  { title: "Creative Freedom", body: "Produce ideas that would otherwise be difficult or expensive to film." },
];

export default function WhySyntora() {
  return (
    <section className="px-6 md:px-10 py-28 md:py-36 bg-surface border-y border-line">
      <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="eyebrow mb-5">Why Syntora</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink text-balance leading-[1.05]">
              More creative. Less production friction.
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-8 py-7 border-t border-line last:border-b items-baseline">
                <h3 className="font-display text-xl text-brass sm:col-span-1">{p.title}</h3>
                <p className="text-muted text-sm leading-relaxed sm:col-span-2">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
