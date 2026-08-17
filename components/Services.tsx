import Reveal from "./Reveal";

const services = [
  {
    n: "01",
    title: "AI Advertising Creative",
    description:
      "High-impact video and visual ads built for Meta, Instagram, TikTok and digital campaigns.",
    items: ["Video ads", "Product commercials", "UGC-style creatives", "Image ads", "Hooks & variations", "Retargeting creative"],
  },
  {
    n: "02",
    title: "Short-Form Content",
    description:
      "Content built to capture attention and keep brands relevant across social platforms.",
    items: ["Instagram Reels", "TikTok content", "YouTube Shorts", "Promotional content", "Branded social videos"],
  },
  {
    n: "03",
    title: "Property & Hospitality Creative",
    description:
      "Cinematic content that turns properties into experiences people want to visit.",
    items: ["Airbnb walkthroughs", "Real estate reels", "Luxury property videos", "Hotel campaigns", "Lifestyle visuals"],
  },
  {
    n: "04",
    title: "Creative Campaigns",
    description: "Complete creative campaigns built around an offer, product or brand.",
    items: ["Creative strategy", "Concept development", "Scripts & storyboards", "Creative variations", "Campaign asset production"],
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 md:px-10 py-28 md:py-36 bg-surface border-y border-line">
      <div className="max-w-content mx-auto">
        <Reveal>
          <p className="eyebrow mb-5">What We Create</p>
          <h2 className="font-display text-4xl md:text-6xl text-ink text-balance max-w-2xl mb-16 md:mb-20">
            Four ways we put your brand in front of an audience.
          </h2>
        </Reveal>

        <div>
          {services.map((s, i) => (
            <Reveal key={s.n}>
              <div className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-10 md:py-12 border-t border-line last:border-b items-start">
                <div className="lg:col-span-1 font-mono text-brass text-sm pt-1">{s.n}</div>
                <div className="lg:col-span-4">
                  <h3 className="font-display text-2xl md:text-3xl text-ink group-hover:text-brass transition-colors duration-300">
                    {s.title}
                  </h3>
                </div>
                <div className="lg:col-span-4">
                  <p className="text-muted leading-relaxed">{s.description}</p>
                </div>
                <div className="lg:col-span-3 flex flex-wrap gap-x-4 gap-y-2">
                  {s.items.map((item) => (
                    <span key={item} className="text-xs text-faint border border-line px-3 py-1.5 whitespace-nowrap">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
