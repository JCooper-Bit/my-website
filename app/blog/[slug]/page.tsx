import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "@/content/posts";

import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

const markdownComponents: Components = {
  h1({ node, ...props }) {
    return (
      <h1
        className="text-2xl sm:text-3xl font-semibold text-text mt-4 mb-3"
        {...props}
      />
    );
  },
  h2({ node, ...props }) {
    return (
      <h2
        className="text-xl sm:text-2xl font-semibold text-text mt-6 mb-2"
        {...props}
      />
    );
  },
  h3({ node, ...props }) {
    return (
      <h3
        className="text-lg sm:text-xl font-semibold text-text mt-5 mb-2"
        {...props}
      />
    );
  },
  p({ node, ...props }) {
    return (
      <p
        className="text-sm sm:text-text leading-relaxed text-text mb-3"
        {...props}
      />
    );
  },
  ul({ node, ...props }) {
    return (
      <ul
        className="list-disc list-inside space-y-1 text-sm sm:text-text text-text mb-4"
        {...props}
      />
    );
  },
  li({ node, ...props }) {
    return <li className="leading-relaxed" {...props} />;
  },
  a({ node, ...props }) {
    return (
      <a
        className="text-primary hover:text-accent underline underline-offset-2"
        {...props}
      />
    );
  },
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  // newest → oldest
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const index = sortedPosts.findIndex((p) => p.slug === slug);
  const post = sortedPosts[index];

  if (!post) {
    return notFound();
  }

  const previousPost = sortedPosts[index + 1] ?? null; // older
  const nextPost = sortedPosts[index - 1] ?? null;     // newer

  return (
    <main className="min-h-screen bg-base px-6 py-20">
      <div className="mx-auto w-full max-w-3xl space-y-10">
        {/* Header */}
        <header className="space-y-3 text-text">
          <p className="text-xs text-muted">
            <Link
              href="/blog"
              className="text-primary hover:text-accent transition"
            >
              ← Back to blog
            </Link>
          </p>

          <h1 className="text-2xl sm:text-3xl font-semibold">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-[0.75rem] text-muted">
            <span>
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>

            {post.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2">
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
          </div>
        </header>

        {/* Article */}
        <article className="text-text">
          <ReactMarkdown
            remarkPlugins={[remarkMath, remarkGfm]}
            rehypePlugins={[rehypeKatex]}
            components={markdownComponents}
          >
            {post.body}
          </ReactMarkdown>
        </article>

        {/* Prev / Next */}
        <nav className="pt-10 border-t border-primary/20">
          <div className="flex items-center justify-between gap-6 text-xs sm:text-sm">
            {previousPost ? (
              <Link
                href={`/blog/${previousPost.slug}`}
                className="group flex max-w-[45%] flex-col gap-1 text-muted hover:text-primary transition"
              >
                <span className="text-[0.65rem] uppercase tracking-wide opacity-70">
                  Previous
                </span>
                <span className="font-medium group-hover:underline underline-offset-4">
                  {previousPost.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group flex max-w-[45%] flex-col items-end gap-1 text-muted hover:text-primary transition text-right"
              >
                <span className="text-[0.65rem] uppercase tracking-wide opacity-70">
                  Next
                </span>
                <span className="font-medium group-hover:underline underline-offset-4">
                  {nextPost.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </nav>
      </div>
    </main>
  );
}
