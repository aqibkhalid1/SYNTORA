const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Property Creative", href: "#property" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "TikTok", href: "#" },
];

export default function Footer() {
  return (
    <footer className="px-6 md:px-10 pt-20 pb-10 border-t border-line">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16">
          <div className="md:col-span-5">
            <span className="font-display text-2xl text-ink">SYNTORA</span>
            <p className="eyebrow mt-4">AI Creative Agency</p>
          </div>

          <div className="md:col-span-4 md:col-start-7">
            <span className="font-mono text-[11px] text-faint tracking-widest2 uppercase">Sitemap</span>
            <ul className="mt-5 space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-muted hover:text-ink text-sm transition-colors duration-300">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <span className="font-mono text-[11px] text-faint tracking-widest2 uppercase">Social</span>
            <ul className="mt-5 space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-muted hover:text-ink text-sm transition-colors duration-300">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-faint text-xs">© {new Date().getFullYear()} Syntora. All rights reserved.</p>
          <a href="#top" className="text-faint text-xs hover:text-ink transition-colors duration-300">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
