## Introduction and Setup

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

    ``` bash
    rustc --version
    ```

    If it's not installed, visit:\
    https://rustup.rs

-   **A text editor or IDE that supports Rust**

    VS Code with the `rust-analyzer` extension is a good option.

-   **Basic familiarity with programming concepts and some comfort with
    Rust syntax**

    You don't need to be an expert --- we'll go step by step.

------------------------------------------------------------------------

## Project Setup

Create a new Rust project to follow along:

``` bash
cargo new linear_algebra_from_scratch
cd linear_algebra_from_scratch
```

This will generate a new folder with a basic `Cargo.toml` and
`src/main.rs`.

You can either implement everything directly in `main.rs` or create
separate modules as the project grows.

For example:

``` text
src/
├── main.rs
└── math/
    ├── vec2.rs
    ├── vec3.rs
    └── matrix.rs
```

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
