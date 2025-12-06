
export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO date
  tags: string[];
  body: string;
};

export const posts: Post[] = [
  {
    slug: "linear-algebra-from-scratch",
    title: "Linear Algebra from Scratch – A Guided Series",
    excerpt:
      "An overview of the Lars Learning Series: a set of guides that help you build your own linear algebra tools step by step, alongside the lars crate.",
    date: "2025-10-29",
    tags: ["Rust", "Maths", "Linear Algebra", "Lars"],
    body: `
Welcome to the companion guides for the lars crate.

Alongside developing the crate itself, this series is designed to help you build your own linear algebra functionality from the ground up. Each guide focuses on a small, well-defined task so you can learn and implement concepts step by step. The idea is to make the process approachable, modular, and transferable whether you want to follow the full series or just complete a few parts.

## What the guides cover

Each guide includes:

- Conceptual and mathematical background
- Step-by-step implementation tasks
- Rust code examples and solutions
- Notes on extending or adapting the ideas further

Although the examples are written in Rust, the core ideas carry over to almost any language.

## Guides in the series

1. Introduction and setup – project structure, environment, and how the series is organised. \n
2. 2D vector guide – implement a two-dimensional vector type, arithmetic, scaling, dot products, and normalisation. \n
3. 3D vector guide (planned) – extend your implementation into 3D space, including cross products and vector magnitude. \n
4. Matrix guide (planned) – introduce matrices, transformations, and composition. \n
5. Practical applications (planned) – apply everything to graphics, physics, or data transformations. \n

You can treat the guides as self-contained modules or as chapters in a longer course.

## Modularity and design

Each guide is written to stand on its own. You can pick the parts you need or follow the whole sequence. This mirrors how the lars crate is structured: small, reusable components that can be combined into a full linear algebra library.

## Project and author

The code and guides live in the lars repository on GitHub. Feedback, contributions and suggestions are very welcome.

    `.trim(),
  },

   {
    slug: "lars-intro",
    title: "lars Part 1 - Intro & Setup",
    excerpt:
      "Episode 1 of the lars learning series, in this episode, we will get everything setup ready to develop our own LA crate.",
    date: "2025-10-29",
    tags: ["Rust", "Maths", "Linear Algebra", "Lars"],
    body: `## Introduction and Setup

This series is written to guide you through building your own linear
algebra functionality from scratch.

Each section of the series focuses on a small, contained piece of
functionality. By the end, you'll have the foundation of a lightweight,
modular linear algebra library that you can adapt for your own projects.
You'll also gain a better understanding of the mathematics behind it.

The examples are written in **Rust**, but the concepts are
**language-agnostic**. If you're comfortable in another language, you
can follow along just as easily.

------------------------------------------------------------------------

## What You'll Need

Before getting started, make sure you have the following:

-   **A recent version of Rust installed**

    You can check with:

    \`\`\` bash
    rustc --version
    \`\`\`

    If it's not installed, visit:\
    https://rustup.rs

-   **A text editor or IDE that supports Rust**

    VS Code with the \`rust-analyzer\` extension is a good option.

-   **Basic familiarity with programming concepts and some comfort with
    Rust syntax**

    You don't need to be an expert --- we'll go step by step.

------------------------------------------------------------------------

## Project Setup

Create a new Rust project to follow along:

\`\`\` bash
cargo new linear_algebra_from_scratch
cd linear_algebra_from_scratch
\`\`\`

This will generate a new folder with a basic \`Cargo.toml\` and
\`src/main.rs\`.

You can either implement everything directly in \`main.rs\` or create
separate modules as the project grows.

For example:

\`\`\` text
src/
├── main.rs
└── math/
    ├── vec2.rs
    ├── vec3.rs
    └── matrix.rs
\`\`\`

We'll expand on this structure as we move through the guides.

------------------------------------------------------------------------

## How to Follow the Series

Each guide introduces one concept at a time --- starting simple and
building complexity gradually. You'll find three main sections in each:

-   **Concepts / Mathematical Background**\
    An explanation of the underlying math and how it's represented
    programmatically.

-   **Implementation**\
    A series of tasks to write the code yourself.

-   **Solutions**\
    A complete set of solutions showing one way to implement the
    concept.

You're encouraged to write and test your own code *before* checking the
solution.\
There's no single "right" way to implement these ideas, and exploring
different approaches is part of the learning process.

------------------------------------------------------------------------

## Next Steps

When you're ready, continue to the first real task: **implementing a 2D
vector type**.

This will cover construction, basic arithmetic, and a few common
operations used throughout linear algebra.

**Continue to the next guide →**
`
   },

];
