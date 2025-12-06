import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-primary/20">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-6 py-10 text-center text-xs text-muted">
        {/* Name + tagline */}
        <div className="space-y-1">
          <p className="font-medium text-text">
            JayCee
          </p>
          <p className="text-muted">
            Developer • Hardware Hacker • Musician
          </p>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6">
          <Link
            href="/projects"
            className="text-primary hover:text-accent transition"
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className="text-primary hover:text-accent transition"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-primary hover:text-accent transition"
          >
            Contact
          </Link>
          <Link
            href="https://github.com/JCooper-Bit"
            className="text-primary hover:text-accent transition"
          >
            GitHub
          </Link>
        </nav>

        {/* Divider line */}
<div className="h-px w-24 bg-primary shadow-[0_0_12px_rgba(137,180,250,0.6)]" />

        {/* Copyright */}
        <p className="text-[0.7rem] text-muted">
          © {new Date().getFullYear()} JayCee. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
