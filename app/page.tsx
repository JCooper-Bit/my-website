"use client";

import { posts } from "@/content/posts";

import Link from "next/link";
import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";
import { Github, Mail, Disc3 } from "lucide-react";
import { useSearchParams } from "next/navigation";

const recentPosts = [
  {
    slug: "coming-soon-1",
    title: "Blog coming soon",
    description:
      "I’ll be writing about hardware projects, web dev experiments, and the occasional music / audio rabbit hole.",
    tag: "Update",
  },
];

export default function Home() {
const recentPosts = [...posts]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 2);

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
              Hey, I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                JayCee
              </span>
              .
              <br />
              <span className="text-text/90">
                I&apos;m a UK-based developer, hardware hacker, student and musician
              </span>
            </h1>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 pt-4">
            <Link
              href="https://github.com/JCooper-BIt"
              aria-label="GitHub"
              className="text-muted hover:text-primary transition 
                        hover:drop-shadow-[0_0_10px_rgba(137,180,250,0.7)]
                        hover:-translate-y-0.5"
            >
              <Github size={20} />
            </Link>

            <Link
              href="mailto:hello@jayc.me"
              aria-label="Email"
              className="text-muted hover:text-primary transition 
                        hover:drop-shadow-[0_0_10px_rgba(137,180,250,0.7)]
                        hover:-translate-y-0.5"
            >
              <Mail size={20} />
            </Link>

            {/*<Link*/}
            {/*  href="/music"*/}
            {/*  aria-label="Music"*/}
            {/*  className="text-muted hover:text-primary transition */}
            {/*            hover:drop-shadow-[0_0_10px_rgba(137,180,250,0.7)]*/}
            {/*            hover:-translate-y-0.5"*/}
            {/*>*/}
            {/*  <Disc3 size={20} />*/}
            {/*</Link>   */}
          </nav>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="w-full space-y-6 opacity-0 animate-[slide-up_700ms_ease-out_forwards] [animation-delay:200ms]"
        >
          <header className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-text">
              Projects
            </h2>
            <p className="text-sm text-muted max-w-md">
              A few things I&apos;ve been tinkering with recently:
            </p>
          </header>

          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

      {/* RECENT BLOG POSTS */}
      <section
        id="recent-posts"
        className="w-full space-y-6 opacity-0 animate-[slide-up_700ms_ease-out_forwards] [animation-delay:260ms]"
      >
        <header className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-semibold text-text">
            Recent posts
          </h2>
          <p className="text-sm text-muted max-w-md">
            Latest writing on development, hardware, and experiments.
          </p>
        </header>

  <div className="space-y-4">
    {recentPosts.map((post) => (
      <article
        key={post.slug}
        className="rounded-2xl bg-surface/80 border border-primary/25 p-5 hover:border-accent/70 transition"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-sm sm:text-base font-semibold text-text">
            <Link
              href={`/blog/${post.slug}`}
              className="hover:text-accent transition-colors"
            >
              {post.title}
            </Link>
          </h3>

          <span className="text-[0.7rem] text-muted">
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>

        <p className="mt-2 text-xs sm:text-sm text-muted">
          {post.excerpt}
        </p>

        {post.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2 text-[0.65rem] text-muted">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-base/70 px-2 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    ))}

    {/* Link to full blog */}
    <div className="pt-2">
      <Link
        href="/blog"
        className="text-sm text-primary hover:text-accent transition"
      >
        View all posts →
      </Link>
    </div>
  </div>
</section>

      </div>
    </main>
  );
}
