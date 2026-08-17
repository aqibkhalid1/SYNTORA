import Reveal from "./Reveal";

const capabilities = [
  "Cinematic walkthroughs",
  "Luxury property reels",
  "AI-enhanced visuals",
  "Destination-style campaigns",
  "Paid property advertisements",
  "Social media content",
];

export default function PropertyFeature() {
  return (
    <section id="property" className="px-6 md:px-10 py-28 md:py-36">
      <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow mb-5">Property Creative</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink text-balance leading-[1.05] mb-6">
              Make the property feel like a destination.
            </h2>
            <p className="text-muted leading-relaxed mb-9 max-w-md">
              We turn Airbnbs, hotels and real estate into cinematic
              short-form content designed to inspire bookings, inquiries and
              attention.
            </p>

            <ul className="grid grid-cols-2 gap-y-3 gap-x-4 mb-10">
              {capabilities.map((c) => (
                <li key={c} className="text-sm text-muted flex items-center gap-2.5">
                  <span className="w-1 h-1 bg-brass shrink-0" />
                  {c}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-ink text-sm px-7 py-3.5 tracking-wide border border-brass/70 hover:bg-brass hover:text-bg transition-all duration-300 ease-premium"
            >
              Explore Property Creative
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-4">
              {/* PLACEHOLDER: swap each block for a property video/photo — see README */}
              <div className="frame-corners relative aspect-[3/4] bg-surface border border-line overflow-hidden col-span-1 row-span-2 mt-10">
                <div className="fc-tl" /><div className="fc-tr" />
                <div className="absolute inset-0 bg-gradient-to-b from-surface to-surface2" />
              </div>
              <div className="frame-corners relative aspect-square bg-surface border border-line overflow-hidden">
                <div className="fc-tl" /><div className="fc-tr" />
                <div className="absolute inset-0 bg-gradient-to-br from-surface2 to-surface" />
              </div>
              <div className="frame-corners relative aspect-square bg-surface border border-line overflow-hidden">
                <div className="fc-tl" /><div className="fc-tr" />
                <div className="absolute inset-0 bg-gradient-to-tr from-surface to-surface2" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
