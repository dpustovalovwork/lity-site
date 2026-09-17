import Link from "next/link";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#achievements", label: "Achievements" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 text-[#faf6ef] sm:px-8">
        <Link
          href="/#top"
          className="font-display text-xl italic tracking-tight"
        >
          Lity
        </Link>
        <div className="flex items-center gap-5 text-[13px] font-medium uppercase tracking-[0.14em]">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hidden transition-opacity hover:opacity-60 sm:inline">
              {l.label}
            </a>
          ))}
          <Link
            href="/cv"
            className="rounded-full border border-current px-4 py-1.5 transition-colors hover:bg-[#faf6ef] hover:text-[#1a1712]"
          >
            CV
          </Link>
        </div>
      </nav>
    </header>
  );
}
