import { notFound } from "next/navigation";
import Link from "next/link";
import { postComponents, posts } from "@/content/posts";
type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
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

  const PostComponent = postComponents[slug as keyof typeof postComponents];

  if (!PostComponent) return notFound();

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
            <PostComponent />
        </article>
       
      {/* Author panel */}
      <section className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 border-t border-primary/20 pt-6 text-text">
        <img
          src="/favicon.ico" // replace with your author avatar path
          alt="John Doe"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1 space-y-1">
          <p className="font-semibold">JayCee</p>
          <p className="text-sm text-muted">
            JayCee is a  UK-based developer, hardware hacker, student and musician
          </p>
          <a
            href="https://jayc.me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent text-sm transition"
          >
            Visit website
          </a>
        </div>
      </section> 
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