import Reveal from "./Reveal";
import { portfolioProjects } from "@/data/portfolio";

export default function Portfolio() {
  return (
    <section id="work" className="px-6 md:px-10 py-28 md:py-36">
      <div className="max-w-content mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="eyebrow mb-5">Portfolio</p>
              <h2 className="font-display text-4xl md:text-6xl text-ink text-balance">
                Selected Work
              </h2>
            </div>
            <p className="text-muted max-w-sm leading-relaxed">
              From performance ads to cinematic property content.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
          {portfolioProjects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 100}>
              <a href={`#${project.slug}`} className="group block">
                <div className="frame-corners relative aspect-[4/3] bg-surface border border-line overflow-hidden">
                  <div className="fc-tl" />
                  <div className="fc-tr" />
                  {/* PLACEHOLDER: replace with next/image or <video> — see README */}
                  <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface2 flex items-center justify-center transition-transform duration-700 ease-premium group-hover:scale-105">
                    <span className="font-display italic text-3xl text-faint">{project.title}</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-bg/40 transition-opacity duration-500 ease-premium">
                    <span className="w-14 h-14 rounded-full border border-brass flex items-center justify-center">
                      <span className="w-0 h-0 border-y-[7px] border-y-transparent border-l-[11px] border-l-brass ml-0.5" />
                    </span>
                  </div>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl text-ink group-hover:text-brass transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted text-sm mt-1.5 max-w-xs">{project.description}</p>
                  </div>
                  <span className="font-mono text-[11px] text-faint tracking-widest2 whitespace-nowrap pt-1">
                    {project.category}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
