export default function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink py-8 text-paper/55">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 text-sm sm:px-8">
        <p>
          © 2026 Huong Giang <span className="font-display italic">“Lity”</span>{" "}
          · Hanoi, Vietnam
        </p>
        <a
          href="#top"
          className="font-semibold uppercase tracking-[0.14em] transition-colors hover:text-paper"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
