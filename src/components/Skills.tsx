import { education, languages, skillTags } from "@/lib/content";
import Reveal from "./Reveal";
import LangBar from "./LangBar";

export default function Skills() {
  return (
    <section id="skills" className="relative bg-paper-warm py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-14 text-[13px] font-bold uppercase tracking-[0.22em] text-lacquer">
            04 — Languages, skills & education
          </p>
        </Reveal>

        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <h3 className="font-display text-2xl font-black italic text-ink">
                Languages
              </h3>
            </Reveal>
            <div className="mt-7 space-y-7">
              {languages.map((lang, i) => (
                <Reveal key={lang.name} delay={0.06 * i}>
                  <div>
                    <div className="mb-2.5 flex items-baseline justify-between gap-4">
                      <span className="font-display text-xl font-bold text-ink">
                        {lang.name}
                      </span>
                      <span className="text-sm font-medium text-ink-soft">
                        {lang.level}
                      </span>
                    </div>
                    <LangBar width={lang.width} />
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <h3 className="mt-14 font-display text-2xl font-black italic text-ink">
                Skills
              </h3>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {skillTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-ink/25 bg-paper px-4 py-2 text-sm font-semibold text-ink transition-colors duration-200 hover:border-lacquer hover:bg-lacquer hover:text-paper"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl bg-ink p-8 text-paper sm:p-10">
              <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-gold">
                Education
              </p>
              <h3 className="mt-6 font-display text-3xl font-black italic leading-tight tracking-tight sm:text-4xl">
                {education.degree}
              </h3>
              <p className="mt-4 text-lg font-semibold">{education.school}</p>
              <p className="mt-1.5 text-paper/65">
                {education.period} · {education.place}
              </p>
              <div className="mt-10 border-t border-paper/15 pt-8">
                <p className="font-display text-lg italic leading-relaxed text-paper/80">
                  “A languages graduate who turned her degree into two careers
                  — teaching the next generation and interpreting for heads of
                  state.”
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
