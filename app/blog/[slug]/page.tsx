import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "@/content/posts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  // Sort posts newest → oldest
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const postIndex = sortedPosts.findIndex((p) => p.slug === slug);
  const post = sortedPosts[postIndex];

  if (!post) {
    return notFound();
  }

  const previousPost = sortedPosts[postIndex + 1]; // older
  const nextPost = sortedPosts[postIndex - 1];     // newer

  const paragraphs = post.body.split(/\n\s*\n/);

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

        {/* MAIN POST CONTENT */}
        <article className="space-y-4 text-sm sm:text-text leading-relaxed text-text">
          {paragraphs.map((para, i) => {
            if (para.startsWith("## ")) {
              const headingText = para.replace(/^##\s*/, "");
              return (
                <h2
                  key={i}
                  className="pt-6 text-text sm:text-lg font-semibold text-text"
                >
                  {headingText}
                </h2>
              );
            }

            if (para.startsWith("- ")) {
              const items = para
                .split("\n")
                .filter((line) => line.trim().length > 0);
              return (
                <ul
                  key={i}
                  className="list-disc list-inside space-y-1 text-text"
                >
                  {items.map((line, idx) => (
                    <li key={idx}>{line.replace(/^-+\s*/, "")}</li>
                  ))}
                </ul>
              );
            }

            return <p key={i}>{para}</p>;
          })}
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
