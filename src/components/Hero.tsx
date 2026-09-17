"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile, marqueeItems } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const [qa, setQa] = useState(false);

  useEffect(() => {
    setQa(new URLSearchParams(window.location.search).has("qa"));
  }, []);

  if (qa) {
    return <div>{children}</div>;
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function MarqueeRow() {
  const row = [...marqueeItems, ...marqueeItems, ...marqueeItems];
  return (
    <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap pr-8">
      {[...row, ...row].map((item, i) => (
        <span key={i} className="flex items-center gap-8">
          <span className="font-display text-lg italic tracking-wide">{item}</span>
          <span className="text-[#1a1712]" aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Hero() {
  const [qa, setQa] = useState(false);

  useEffect(() => {
    setQa(new URLSearchParams(window.location.search).has("qa"));
  }, []);

  return (
    <section
      id="top"
      className={`relative flex flex-col overflow-hidden bg-ink text-paper ${
        qa ? "min-h-[900px]" : "min-h-svh"
      }`}
    >
      {/* soft glow */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full opacity-25"
        style={{ background: "radial-gradient(circle, #c73e1d 0%, transparent 65%)" }}
        aria-hidden="true"
      />
      {/* giant backdrop word */}
      <div
        className="pointer-events-none absolute -bottom-[3vw] right-0 select-none whitespace-nowrap font-display text-[17vw] font-black italic leading-none text-outline-paper"
        aria-hidden="true"
      >
        xin chào
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pt-28 sm:px-8">
        <FadeIn>
          <p className="mb-6 flex items-center gap-3 text-[13px] font-medium uppercase tracking-[0.22em] text-paper/70">
            <span className="inline-block h-2 w-2 rounded-full bg-jade" />
            Hanoi, Vietnam — open to ESL & interpretation work
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="font-display text-[15vw] font-black leading-[0.92] tracking-tight sm:text-[11vw] lg:text-[8.5rem]">
            Huong Giang
            <span className="block italic text-lacquer">“Lity”</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-8 max-w-xl font-display text-2xl italic leading-snug text-paper/85 sm:text-3xl">
            From the classroom to the diplomatic stage —{" "}
            <span className="font-semibold not-italic text-gold">{profile.role}</span>
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={profile.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-paper px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-ink transition-transform duration-300 hover:-translate-y-0.5 hover:bg-gold"
            >
              WhatsApp me
            </a>
            <a
              href="#experience"
              className="rounded-full border border-paper/40 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-paper transition-colors duration-300 hover:border-paper hover:bg-paper/10"
            >
              See experience
            </a>
          </div>
        </FadeIn>
      </div>

      {/* marquee band */}
      <div className="relative z-10 mt-16 overflow-hidden bg-lacquer py-3.5 text-paper">
        <MarqueeRow />
      </div>
    </section>
  );
}
