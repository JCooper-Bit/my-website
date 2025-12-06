import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-primary/20">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-6 py-10 text-center text-xs text-muted">
        <div className="space-y-1">
          <p className="font-medium text-text">
            JayCee
          </p>
          <p className="text-muted">
            Developer • Hardware Hacker • Musician
          </p>
        </div>
<div className="h-px w-24 bg-primary shadow-[0_0_12px_rgba(137,180,250,0.6)]" />

        <p className="text-[0.7rem] text-muted">
          © {new Date().getFullYear()} JayCee. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
