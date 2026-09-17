"use client";

import { useState } from "react";
import { profile } from "@/lib/content";

const topics = [
  "English classes for my child",
  "Interpretation (EN ↔ VI)",
  "Job offer / collaboration",
  "Something else",
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState(topics[0]);
  const [message, setMessage] = useState("");

  const waHref = () => {
    const text = `Hi Lity! I'm ${name || "…"} — ${topic.toLowerCase()}.\n\n${message}`;
    return `${profile.whatsappHref}?text=${encodeURIComponent(text)}`;
  };

  const inputCls =
    "w-full rounded-xl border-2 border-ink/20 bg-paper px-4 py-3 text-base text-ink placeholder:text-ink/40 outline-none transition-colors focus:border-jade";

  return (
    <form
      className="rounded-3xl border-2 border-ink bg-paper-warm p-7 text-ink shadow-[10px_10px_0_0_rgba(250,246,239,0.25)] sm:p-9"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(waHref(), "_blank", "noopener,noreferrer");
      }}
    >
      <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-lacquer">
        Quick message
      </p>
      <div className="mt-6 space-y-4">
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className={inputCls}
        />
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className={inputCls}
          aria-label="Topic"
        >
          {topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me a little about what you need…"
          className={`${inputCls} resize-none`}
        />
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-jade px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-paper transition-transform duration-300 hover:-translate-y-0.5 hover:brightness-110"
      >
        Send via WhatsApp
      </button>
      <p className="mt-4 text-center text-xs leading-relaxed text-ink/55">
        Opens WhatsApp with your message ready to send — no data is stored on
        this site.
      </p>
    </form>
  );
}
