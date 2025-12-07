
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "@/content/posts";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";


type BlogPostPageProps = {
  // Next App Router passes params as a Promise
  params: Promise<{ slug: string }>;
};
const markdownComponents: Components = {
  h1({ node, ...props }) {
    return (
      <h1
        className="text-2xl sm:text-3xl font-semibold text-text"
        {...props}
      />
    );
  },
  h2({ node, ...props }) {
    return (
      <h2
        className="pt-6 text-base sm:text-lg font-semibold text-text"
        {...props}
      />
    );
  },
  h3({ node, ...props }) {
    return (
      <h3
        className="pt-4 text-sm sm:text-base font-semibold text-text"
        {...props}
      />
    );
  },
  p({ node, ...props }) {
    return (
      <p
        className="text-sm sm:text-base leading-relaxed text-text"
        {...props}
      />
    );
  },
  ul({ node, ...props }) {
    return (
      <ul
        className="mb-4 list-disc list-inside space-y-1 text-text"
        {...props}
      />
    );
  },
  li({ node, ...props }) {
    return (
      <li className="text-sm sm:text-base leading-relaxed" {...props} />
    );
  },
  a({ node, ...props }) {
    return (
      <a
        className="text-primary hover:text-accent underline underline-offset-2"
        {...props}
      />
    );
  },
  code({ node, inline, className, children, ...props }) {
    if (inline) {
      return (
        <code
          className="rounded bg-surface px-1 py-0.5 text-[0.85em] text-accent"
          {...props}
        >
          {children}
        </code>
      );
    }

    return (
      <code
        className="block rounded-2xl bg-surface/80 border border-primary/25 px-3 py-2 text-xs sm:text-sm text-text whitespace-pre-wrap"
        {...props}
      >
        {children}
      </code>
    );
  },
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  // Sort newest → oldest
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const postIndex = sortedPosts.findIndex((p) => p.slug === slug);
  const post = sortedPosts[postIndex];

  if (!post) {
    return notFound();
  }

  const previousPost = sortedPosts[postIndex + 1]; // older
  const nextPost = sortedPosts[postIndex - 1]; // newer

  return (
    <main className="min-h-screen bg-base px-6 py-20">
      <div className="mx-auto w-full max-w-3xl space-y-10">
        {/* HEADER */}
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

            {post.tags.length > 0 && (
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

        <article className="prose prose-invert max-w-none text-text prose-p:mb-4 prose-headings:mt-6 prose-headings:mb-2 prose-li:marker:text-primary">
<ReactMarkdown
  remarkPlugins={[remarkGfm, remarkMath]}
  rehypePlugins={[rehypeKatex]}
  components={{
    h1: ({ node, ...props }) => (
      <h1
        className="text-2xl sm:text-3xl font-semibold text-text"
        {...props}
      />
    ),
    h2: ({ node, ...props }) => (
      <h2
        className="pt-6 text-base sm:text-lg font-semibold text-text"
        {...props}
      />
    ),
    p: ({ node, ...props }) => (
      <p
        className="text-sm sm:text-base leading-relaxed text-text"
        {...props}
      />
    ),
    ul: ({ node, ...props }) => (
      <ul
        className="mb-4 list-disc list-inside space-y-1 text-text"
        {...props}
      />
    ),
    li: ({ node, ...props }) => (
      <li className="text-sm sm:text-base leading-relaxed" {...props} />
    ),
    a: ({ node, ...props }) => (
      <a
        className="text-primary hover:text-accent underline underline-offset-2"
        {...props}
      />
    ),
    code: ({ node, inline, ...props }) =>
      inline ? (
        <code
          className="rounded bg-surface px-1 py-0.5 text-[0.85em] text-accent"
          {...props}
        />
      ) : (
        <code
          className="block rounded-2xl bg-surface/80 border border-primary/25 px-3 py-2 text-xs sm:text-sm text-text whitespace-pre-wrap"
          {...props}
        />
      ),
  }}
>
  {post.body}
</ReactMarkdown>

        </article>

        {/* NEXT / PREVIOUS NAV */}
        <nav className="pt-10 border-t border-primary/20">
          <div className="flex items-center justify-between gap-6 text-xs sm:text-sm">
            {/* Previous (older) */}
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

            {/* Next (newer) */}
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
