import Image from "next/image";
import { stats, summaryShort, summaryLong } from "@/lib/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-10 text-[13px] font-bold uppercase tracking-[0.22em] text-lacquer">
            01 — About me
          </p>
        </Reveal>

        <div className="grid items-start gap-14 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <Reveal delay={0.06}>
              <p className="font-display text-3xl leading-[1.2] tracking-tight text-ink sm:text-5xl">
                I teach English to children aged{" "}
                <em className="text-lacquer">3–15</em> and interpret for{" "}
                <em className="text-jade">diplomatic delegations</em> — including
                events attended by the{" "}
                <em className="text-lacquer">President and Prime Minister</em>{" "}
                of Timor-Leste.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
                {summaryLong}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.18} className="mx-auto w-full max-w-sm lg:mx-0">
            <figure className="relative rotate-2 rounded-2xl border-2 border-ink bg-paper-warm p-3 pb-5 shadow-[10px_10px_0_0_var(--color-ink)] transition-transform duration-500 hover:rotate-0">
              <span
                className="absolute -top-3 left-1/2 h-7 w-24 -translate-x-1/2 -rotate-3 bg-gold/80"
                aria-hidden="true"
              />
              <Image
                src="/portrait.png"
                alt="Photo of Huong Giang (Lity)"
                width={801}
                height={798}
                className="w-full rounded-lg border border-ink/10"
                priority
              />
              <figcaption className="mt-3 text-center font-display text-lg italic text-ink">
                Huong Giang — “Lity”
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={0.05 * i} className="bg-paper">
              <div className="flex h-full flex-col justify-between gap-6 p-6 sm:p-8">
                <span className="font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
                  {s.value}
                </span>
                <span className="text-sm font-medium uppercase tracking-[0.12em] text-ink-soft">
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
