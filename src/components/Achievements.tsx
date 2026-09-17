import { achievements } from "@/lib/content";
import Reveal from "./Reveal";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-paper-warm py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
            <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-lacquer">
              02 — Achievements
            </p>
            <p className="font-display text-xl italic text-ink-soft">
              the moments that matter
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={0.08 * i}>
              <article
                className={`group relative h-full rounded-3xl border-2 border-ink bg-paper p-8 shadow-[8px_8px_0_0_var(--color-ink)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[12px_12px_0_0_var(--color-ink)] sm:p-10 ${
                  i % 2 === 0 ? "-rotate-1" : "rotate-1"
                } hover:rotate-0`}
              >
                <div className="mb-8 flex items-center justify-between">
                  <span
                    className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-paper ${
                      a.accent === "lacquer" ? "bg-lacquer" : "bg-jade"
                    }`}
                  >
                    {a.year}
                  </span>
                  <svg
                    viewBox="0 0 48 48"
                    className={`h-12 w-12 animate-seal-spin ${
                      a.accent === "lacquer" ? "text-lacquer" : "text-jade"
                    }`}
                    aria-hidden="true"
                  >
                    <defs>
                      <path
                        id={`seal-circle-${i}`}
                        d="M24,24 m-17,0 a17,17 0 1,1 34,0 a17,17 0 1,1 -34,0"
                      />
                    </defs>
                    <circle
                      cx="24"
                      cy="24"
                      r="23"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <text
                      fontSize="7.2"
                      letterSpacing="2.4"
                      fill="currentColor"
                      fontWeight="700"
                    >
                      <textPath href={`#seal-circle-${i}`}>
                        AWARDED · WITH HONOR ·
                      </textPath>
                    </text>
                    <circle cx="24" cy="24" r="5" fill="currentColor" />
                  </svg>
                </div>
                <h3 className="font-display text-3xl font-black italic leading-tight tracking-tight text-ink sm:text-4xl">
                  {a.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-ink-soft">
                  {a.detail}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
