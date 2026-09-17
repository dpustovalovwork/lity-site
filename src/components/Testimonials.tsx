import { testimonials } from "@/lib/content";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-paper-warm py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
            <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-lacquer">
              06 — Kind words
            </p>
            <p className="font-display text-xl italic text-ink-soft">
              from parents and organizers
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={0.08 * i}>
              <figure
                className={`flex h-full flex-col rounded-3xl border-2 border-ink bg-paper p-8 shadow-[8px_8px_0_0_var(--color-ink)] ${
                  i % 2 === 0 ? "-rotate-1" : "rotate-1"
                } transition-transform duration-300 hover:rotate-0 sm:p-9`}
              >
                <span
                  className="font-display text-6xl font-black italic leading-none text-gold"
                  aria-hidden="true"
                >
                  “
                </span>
                <blockquote className="mt-3 flex-1 font-display text-xl italic leading-relaxed text-ink">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-7 border-t border-ink/15 pt-5 text-sm font-bold uppercase tracking-[0.14em] text-jade">
                  {t.author}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
