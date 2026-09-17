import { experience } from "@/lib/content";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="relative bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-14 text-[13px] font-bold uppercase tracking-[0.22em] text-lacquer">
            03 — Experience
          </p>
        </Reveal>

        <div className="relative ml-2 border-l-2 border-ink/15 pl-8 sm:ml-4 sm:pl-12">
          {experience.map((job, i) => (
            <Reveal key={job.role} delay={0.06 * i}>
              <article className="relative pb-16 last:pb-0">
                <span
                  className="absolute -left-[41px] top-2 h-4 w-4 rounded-full border-2 border-paper bg-lacquer sm:-left-[57px]"
                  aria-hidden="true"
                />
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-3xl font-black italic tracking-tight text-ink sm:text-4xl">
                    {job.role}
                  </h3>
                  <span className="rounded-full border border-ink/25 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.14em] text-ink-soft">
                    {job.period}
                  </span>
                </div>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-jade">
                  {job.org} — {job.place}
                </p>
                <ul className="mt-6 space-y-3.5">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3 text-base leading-relaxed text-ink-soft sm:text-lg">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
