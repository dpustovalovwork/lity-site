import Link from "next/link";
import { profile } from "@/lib/content";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 text-paper sm:py-32">
      <div
        className="pointer-events-none absolute -left-48 -top-48 h-[30rem] w-[30rem] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #1f6f5c 0%, transparent 65%)" }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-10 text-[13px] font-bold uppercase tracking-[0.22em] text-gold">
            05 — Contact
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="max-w-3xl font-display text-5xl font-black leading-[1.02] tracking-tight sm:text-7xl">
            Let’s <em className="text-lacquer">talk</em>.
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-paper/75">
            ESL teaching, interpretation assignments, or executive support in an
            international team — I’m one message away.{" "}
            <span className="text-paper/55">Based in {profile.location}.</span>
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href={profile.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-jade px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-paper transition-transform duration-300 hover:-translate-y-0.5 hover:brightness-110"
            >
              WhatsApp · {profile.phoneDisplay}
            </a>
            <a
              href={profile.emailHref}
              className="rounded-full bg-lacquer px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-paper transition-transform duration-300 hover:-translate-y-0.5 hover:brightness-110"
            >
              Email me
            </a>
            <Link
              href="/cv"
              className="rounded-full border border-paper/40 px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-paper transition-colors duration-300 hover:bg-paper/10"
            >
              Printable CV ↗
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
