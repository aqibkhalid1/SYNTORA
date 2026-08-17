import Reveal from "./Reveal";

const items = [
  {
    title: "Faster Production",
    body: "Campaigns in days, not the weeks a traditional shoot requires.",
  },
  {
    title: "More Creative",
    body: "Multiple concepts, hooks and variations from a single brief.",
  },
  {
    title: "Built for Performance",
    body: "Designed for how paid social and digital platforms actually work.",
  },
  {
    title: "Premium Quality",
    body: "High-end visual production without the production complexity.",
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-line px-6 md:px-10">
      <div className="max-w-content mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 80}>
            <div
              className={`py-10 md:py-14 pr-6 h-full ${
                i !== 0 ? "lg:border-l lg:border-line" : ""
              } ${i % 2 === 1 ? "border-l border-line sm:border-l lg:border-l" : ""}`}
            >
              <span className="font-mono text-[11px] text-faint tracking-widest2">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl mt-3 mb-2 text-ink">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
