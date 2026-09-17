import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "@/components/PrintButton";
import {
  profile,
  summaryLong,
  achievements,
  experience,
  languages,
  skillTags,
  education,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Printable CV of Huong Giang (Lity) — English teacher and interpreter, Hanoi.",
};

export default function CvPage() {
  return (
    <div className="min-h-svh bg-paper-warm py-10">
      <div className="no-print mx-auto mb-8 flex max-w-3xl items-center justify-between px-5">
        <Link
          href="/"
          className="text-sm font-bold uppercase tracking-[0.14em] text-ink-soft transition-colors hover:text-lacquer"
        >
          ← Back to site
        </Link>
        <PrintButton />
      </div>

      <article className="cv-sheet mx-auto w-[210mm] max-w-full bg-white px-[14mm] py-[10mm] font-body text-[10pt] leading-snug text-ink shadow-2xl print:w-full print:shadow-none">
        {/* header */}
        <header className="border-b-2 border-ink pb-3">
          <h1 className="font-display text-[22pt] font-black italic leading-none tracking-tight">
            Huong Giang <span className="text-lacquer">“Lity”</span>
          </h1>
          <p className="mt-2 font-display text-[13pt] italic text-ink-soft">
            {profile.role}
          </p>
          <address className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[9.5pt] font-medium not-italic text-ink-soft">
            <span>{profile.location}</span>
            <a href={profile.phoneHref} className="underline decoration-jade decoration-2 underline-offset-2">
              {profile.phoneDisplay} (WhatsApp)
            </a>
            <a href={profile.emailHref} className="underline decoration-lacquer decoration-2 underline-offset-2">
              {profile.email}
            </a>
          </address>
        </header>

        {/* summary */}
        <section className="mt-3.5">
          <h2 className="text-[10pt] font-bold uppercase tracking-[0.22em] text-lacquer">
            Summary
          </h2>
          <p className="mt-2">{summaryLong}</p>
        </section>

        {/* achievements */}
        <section className="mt-3.5">
          <h2 className="text-[10pt] font-bold uppercase tracking-[0.22em] text-lacquer">
            Achievements
          </h2>
          <ul className="mt-2 space-y-1.5">
            {achievements.map((a) => (
              <li key={a.title} className="flex gap-2">
                <span className="font-bold">{a.title}</span>
                <span className="text-ink-soft">
                  ({a.year}) — {a.detail}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* experience */}
        <section className="mt-3.5">
          <h2 className="text-[10pt] font-bold uppercase tracking-[0.22em] text-lacquer">
            Experience
          </h2>
          <div className="mt-2 space-y-3">
            {experience.map((job) => (
              <div key={job.role}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-[12.5pt] font-bold italic">
                    {job.role}
                  </h3>
                  <span className="text-[9.5pt] font-semibold text-jade">
                    {job.period} · {job.place}
                  </span>
                </div>
                <p className="text-[9.5pt] font-semibold uppercase tracking-[0.08em] text-ink-soft">
                  {job.org}
                </p>
                <ul className="mt-1 list-disc space-y-0.5 pl-5 marker:text-gold">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* education */}
        <section className="mt-3.5">
          <h2 className="text-[10pt] font-bold uppercase tracking-[0.22em] text-lacquer">
            Education
          </h2>
          <div className="mt-2 flex flex-wrap items-baseline justify-between gap-2">
            <p>
              <span className="font-bold">{education.degree}</span> —{" "}
              {education.school}
            </p>
            <span className="text-[9.5pt] font-semibold text-jade">
              {education.period} · {education.place}
            </span>
          </div>
        </section>

        {/* languages & skills */}
        <section className="mt-3.5">
          <h2 className="text-[10pt] font-bold uppercase tracking-[0.22em] text-lacquer">
            Languages & Skills
          </h2>
          <ul className="mt-2 space-y-1">
            {languages.map((lang) => (
              <li key={lang.name}>
                <span className="font-bold">{lang.name}</span> — {lang.level}
              </li>
            ))}
          </ul>
          <p className="mt-2">
            <span className="font-bold">Skills: </span>
            {skillTags.join(" · ")}
          </p>
        </section>
      </article>
    </div>
  );
}
