// app/blog/page.tsx

import Link from "next/link";
import { posts } from "@/content/posts";

export default function BlogPage() {
  // latest first
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="min-h-screen bg-base px-6 py-20">
      <div className="mx-auto w-full max-w-4xl space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-semibold text-text">
            Blog
          </h1>
          <p className="text-sm text-muted max-w-xl">
            Notes on hardware, web dev, experiments and whatever else I&apos;m
            playing with.
          </p>
        </header>

        <section className="space-y-4">
          {sortedPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl bg-surface/80 border border-primary/25 p-5 hover:border-accent/70 transition"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-sm sm:text-base font-semibold text-text">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-accent transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
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

          {sortedPosts.length === 0 && (
            <p className="text-sm text-muted">
              No posts yet. Check back soon.
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
