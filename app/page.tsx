import Link from "next/link";
import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-base px-6 py-20">
      <div className="mx-auto w-full max-w-4xl flex flex-col gap-28 animate-[fade-in_600ms_ease-out]">
        {/* HERO */}
        <section
          id="hero"
          className="w-full text-center space-y-8 opacity-0 animate-[slide-up_700ms_ease-out_forwards] [animation-delay:80ms]"
        >
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              Hey, I'm{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                JayCee
              </span>
              .
              <br />
              <span className="text-text/90">
                I'm a UK-based developer, hardware hacker, student and musician
              </span>
            </h1>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm pt-4 transition-transform duration-300 ease-out hover:-translate-y-0.5">
            <Link
              href="/blog"
              className="text-primary hover:text-accent transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-primary hover:text-accent transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-primary hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </nav>
        </section>

        <section
          id="projects"
          className="w-full space-y-6 opacity-0 animate-[slide-up_700ms_ease-out_forwards] [animation-delay:200ms]"
        >
          <header className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-text">
              Projects
            </h2>
            <p className="text-sm text-muted max-w-md">
              A few things I've been tinkering with recently:
            </p>
          </header>

          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
