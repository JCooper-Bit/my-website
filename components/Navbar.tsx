"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-4 z-50 px-4">
      <div
        className="max-w-7xl mx-auto flex items-center justify-between 
                   bg-surface text-white px-6 py-4 rounded-2xl shadow-md"
      >
        <Link href="/" className="text-xl font-bold text-primary">
          JayCee
        </Link>

        <div className="flex gap-6 text-sm font-medium">
          <Link href="/#projects" className="text-text hover:opacity-80 hover:text-primary transition">
            Projects
          </Link>
          <Link href="/blog" className="text-text hover:opacity-80 hover:text-primary transition">
            Blog
          </Link>
          <Link href="/#contact" className="text-text hover:opacity-80 hover:text-primary transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
