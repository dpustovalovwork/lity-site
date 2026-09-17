import { services } from "@/lib/content";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="relative bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
            <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-lacquer">
              05 — Services
            </p>
            <p className="font-display text-xl italic text-ink-soft">
              classes, interpretation, and what’s next
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={0.08 * i}>
              <article
                className={`flex h-full flex-col rounded-3xl border-2 p-8 transition-all duration-300 hover:-translate-y-1.5 sm:p-9 ${
                  s.featured
                    ? "border-ink bg-lacquer text-paper shadow-[8px_8px_0_0_var(--color-ink)] hover:shadow-[12px_12px_0_0_var(--color-ink)]"
                    : "border-ink bg-paper-warm text-ink shadow-[8px_8px_0_0_var(--color-ink)] hover:shadow-[12px_12px_0_0_var(--color-ink)]"
                }`}
              >
                <h3 className="font-display text-3xl font-black italic leading-tight tracking-tight">
                  {s.title}
                </h3>
                <p
                  className={`mt-2.5 text-sm font-bold uppercase tracking-[0.14em] ${
                    s.featured ? "text-gold" : "text-jade"
                  }`}
                >
                  {s.audience}
                </p>
                <ul className="mt-7 flex-1 space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[15px] leading-relaxed opacity-90">
                      <span
                        className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                          s.featured ? "bg-gold" : "bg-lacquer"
                        }`}
                        aria-hidden="true"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href={s.ctaHref}
                  target={s.ctaHref.startsWith("http") ? "_blank" : undefined}
                  rel={s.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`mt-9 inline-block rounded-full px-6 py-3.5 text-center text-sm font-bold uppercase tracking-[0.12em] transition-transform duration-300 hover:-translate-y-0.5 ${
                    s.featured
                      ? "bg-paper text-ink"
                      : "bg-ink text-paper"
                  }`}
                >
                  {s.cta}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
