
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
Welcome to the companion guides for the \`lars\` crate.

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

Each guide is written to stand on its own. You can pick the parts you need or follow the whole sequence. This mirrors how the \`lars\` crate is structured: small, reusable components that can be combined into a full linear algebra library.

## Project and author

The code and guides live in the \`lars\` repository on GitHub. Feedback, contributions and suggestions are very welcome.

    `.trim(),
  },
  {
  slug: "lars-introduction",
  title: "Lars: Introduction & Design Goals",
  excerpt:
    "An introduction to the lars project — a modular linear algebra crate designed to be built and understood from the ground up.",
  date: "2025-10-30",
  tags: ["Rust", "Linear Algebra", "Lars", "Open Source"],
  body: `
This post introduces the lars project: a modular, from-scratch linear algebra crate designed to be both practical and educational.

The goal of lars is not just to provide a usable math library, but to act as a guided learning tool for developers who want to understand how linear algebra is implemented at a low level.

## What is lars?

lars is a Rust crate focused on:

- Clean, minimal linear algebra primitives
- Strong type safety
- Extensible, modular design
- Educational value alongside real-world usage

It is intended for use in graphics, physics, simulation and general mathematical computation.

## Design philosophy

The crate is designed around a few core ideas:

- Small, composable building blocks
- Clear mathematical correctness
- Readable implementations over clever tricks
- Extensibility over monolithic design

Rather than hiding the maths behind heavy abstractions, lars tries to expose the structure in a way that encourages learning.

## Relationship to the guide series

The lars learning series mirrors the internal structure of the crate. Each guide walks through building a mathematical concept from scratch, while the crate provides the polished, reusable implementation.

You can follow the guides as tutorials, use the crate directly, or do both side-by-side.

## External reference

The original introduction and guide structure can be found here:
https://jcooper-bit.github.io/lars-site/intro/

That page acts as the conceptual root for the entire Lars learning series.

## What’s next

Future posts will dive deeper into:
- 2D and 3D vector implementations
- Matrices and transformations
- Real-world applications such as graphics and physics simulation

If you’re interested in Rust, maths, or low-level numerical tooling, this series is for you.
`.trim(),
},


];
