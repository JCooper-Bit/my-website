export const post_lars_intro =  {
    slug: "lars-intro",
    title: "lars Part 1 - Intro & Setup",
    excerpt:
      "Episode 1 of the lars learning series, in this episode, we will get everything setup ready to develop our own LA crate.",
    date: "2025-10-30",
    tags: ["Rust", "Maths", "Linear Algebra", "Lars"],
}

export function post_lars_intro_component() {
     return (
    <div className="space-y-6">
      <p>
        This series is written to guide you through building your own linear
        algebra functionality from scratch.
      </p>

      <p>
        Each section of the series focuses on a small, contained piece of
        functionality. By the end, you'll have the foundation of a lightweight,
        modular linear algebra library that you can adapt for your own projects.
        You'll also gain a better understanding of the mathematics behind it.
      </p>

      <p>
        The examples are written in <strong>Rust</strong>, but the concepts are{" "}
        <strong>language-agnostic</strong>. If you're comfortable in another
        language, you can follow along just as easily.
      </p>

      <hr className="border-primary/20" />

      <h2 className="text-2xl font-semibold">What You'll Need</h2>

      <p>Before getting started, make sure you have the following:</p>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>A recent version of Rust installed</strong>
          <p>You can check with:</p>
          <pre className="overflow-x-auto rounded-2xl border border-primary/20 bg-base/40 p-4 text-sm">
            <code>rustc --version</code>
          </pre>
          <p>
            If it's not installed, visit:{" "}
            <a
              href="https://rustup.rs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent underline underline-offset-4"
            >
              https://rustup.rs
            </a>
          </p>
        </li>

        <li>
          <strong>A text editor or IDE that supports Rust</strong>
          <p>
            VS Code with the <code>rust-analyzer</code> extension is a good
            option.
          </p>
        </li>

        <li>
          <strong>Basic familiarity with programming concepts and some comfort with Rust syntax</strong>
          <p>
            You don't need to be an expert — we'll go step by step.
          </p>
        </li>
      </ul>

      <hr className="border-primary/20" />

      <h2 className="text-2xl font-semibold">Project Setup</h2>

      <p>Create a new Rust project to follow along:</p>
      <pre className="overflow-x-auto rounded-2xl border border-primary/20 bg-base/40 p-4 text-sm">
        <code>
          cargo new linear_algebra_from_scratch
          <br />
          cd linear_algebra_from_scratch
        </code>
      </pre>

      <p>
        This will generate a new folder with a basic <code>Cargo.toml</code> and{" "}
        <code>src/main.rs</code>.
      </p>

      <p>
        You can either implement everything directly in <code>main.rs</code> or
        create separate modules as the project grows. For example:
      </p>

      <pre className="overflow-x-auto rounded-2xl border border-primary/20 bg-base/40 p-4 text-sm">
        <code>
          src/
          <br />
          ├── main.rs
          <br />
          └── math/
          <br />
          &nbsp;&nbsp;├── vec2.rs
          <br />
          &nbsp;&nbsp;├── vec3.rs
          <br />
          &nbsp;&nbsp;└── matrix.rs
        </code>
      </pre>

      <p>We'll expand on this structure as we move through the guides.</p>

      <hr className="border-primary/20" />

      <h2 className="text-2xl font-semibold">How to Follow the Series</h2>

      <p>
        Each guide introduces one concept at a time — starting simple and
        building complexity gradually. You'll find three main sections in each:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Concepts / Mathematical Background</strong>
          <br />
          An explanation of the underlying math and how it's represented
          programmatically.
        </li>
        <li>
          <strong>Implementation</strong>
          <br />
          A series of tasks to write the code yourself.
        </li>
        <li>
          <strong>Solutions</strong>
          <br />
          A complete set of solutions showing one way to implement the concept.
        </li>
      </ul>

      <p>
        You're encouraged to write and test your own code <em>before</em>
        checking the solution. There's no single "right" way to implement these
        ideas, and exploring different approaches is part of the learning
        process.
      </p>

      <hr className="border-primary/20" />

      <h2 className="text-2xl font-semibold">Next Steps</h2>

      <p>
        When you're ready, continue to the first real task:{" "}
        <strong>implementing a 2D vector type</strong>.
      </p>

      <p>
        This will cover construction, basic arithmetic, and a few common
        operations used throughout linear algebra.
      </p>

      <p>
        <strong>
          <a href="/next-guide" className="text-primary hover:text-accent underline underline-offset-4">
            Continue to the next guide →
          </a>
        </strong>
      </p>
    </div>
  );
}
