"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function LangBar({ width }: { width: number }) {
  const reduce = useReducedMotion();

  return (
    <div
      className="h-2.5 w-full overflow-hidden rounded-full bg-ink/10"
      role="presentation"
    >
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-jade to-gold"
        initial={{ width: reduce ? `${width}%` : "0%" }}
        whileInView={{ width: `${width}%` }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      />
    </div>
  );
}
