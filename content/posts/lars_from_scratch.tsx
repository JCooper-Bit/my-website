export const post_lars = {
    slug: "linear-algebra-from-scratch",
    title: "Linear Algebra from Scratch – A Guided Series",
    excerpt:
        "An overview of the Lars Learning Series: a set of guides that help you build your own linear algebra tools step by step, alongside the lars crate.",
    date: "2025-10-29",
    tags: ["Rust", "Maths", "Linear Algebra", "Lars"],

}

export function post_lars_component() {
    return (
        <div>
            <p>Welcome to the companion guides for the lars crate. <br /> <br />

                Alongside developing the crate itself, this series is designed to help you build your own linear algebra functionality from the ground up. Each guide focuses on a small, well-defined task so you can learn and implement concepts step by step. The idea is to make the process approachable, modular, and transferable whether you want to follow the full series or just complete a few parts.
            </p> <br /> <br />
            <h2 className="text-xl sm:text-3xl font-semibold">
                What the guides cover</h2>

            <section className="space-y-4">
                <br></br>
                <p>Each guide includes:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Conceptual and mathematical background</li>
                    <li>Step-by-step implementation tasks</li>
                    <li>Rust code examples and solutions</li>
                    <li>Notes on extending or adapting the ideas further</li>
                </ul>
            </section>
            <br></br>
            <section className="space-y-4">

                <p>Although the examples are written in Rust, the core ideas carry over to almost any language.</p>
            </section>            <br></br>


            <section className="space-y-4">

                <h2 className="text-xl sm:text-3xl font-semibold">Guides in the series</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li> Introduction and setup – project structure, environment, and how the series is organised. </li>
                    <li> 2D vector guide – implement a two-dimensional vector type, arithmetic, scaling, dot products, and normalisation.  </li>
                    <li> 3D vector guide (planned) – extend your implementation into 3D space, including cross products and vector magnituded. </li>
                    <li>Matrix guide (planned) – introduce matrices, transformations, and composition.  </li>
                    <li> Practical applications (planned) – apply everything to graphics, physics, or data transformations. </li>
                </ul><br></br>
                You can treat the guides as self-contained modules or as chapters in a longer course.
            </section>            <br></br>

            <section className="space-y-4">
                <h2 className="text-xl sm:text-3xl font-semibold">Modularity and design</h2>

                <p>Each guide is written to stand on its own. You can pick the parts you need or follow the whole sequence. This mirrors how the lars crate is structured: small, reusable components that can be combined into a full linear algebra library.</p>
            </section>            <br></br>

            <section className="space-y-4">
                <h2 className="text-xl sm:text-3xl font-semibold">Project</h2>
                <p>
                    The code and guides live in the lars repository on GitHub. Feedback, contributions and suggestions are very welcome.
                </p>
            </section>            <br></br>

        </div>
    )
}