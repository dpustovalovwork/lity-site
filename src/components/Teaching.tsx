import { teaching } from "@/lib/content";
import Reveal from "./Reveal";

const accents = ["text-lacquer", "text-jade", "text-gold", "text-lacquer"];

export default function Teaching() {
  return (
    <section id="teaching" className="relative bg-paper-warm py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
            <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-lacquer">
              04 — How I teach
            </p>
            <p className="font-display text-xl italic text-ink-soft">
              what every lesson is built on
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teaching.map((p, i) => (
            <Reveal key={p.title} delay={0.07 * i}>
              <article className="h-full rounded-3xl border-2 border-ink bg-paper p-7 shadow-[8px_8px_0_0_var(--color-ink)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[12px_12px_0_0_var(--color-ink)]">
                <span
                  className={`font-display text-5xl font-black italic tracking-tight ${accents[i % accents.length]}`}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-2xl font-black italic leading-tight tracking-tight text-ink">
                  {p.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                  {p.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
