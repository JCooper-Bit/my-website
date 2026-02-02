import Dropdown from "@/components/Dropdown";
import KatexInline from "@/components/KatexInline";
import KatexSpan from "@/components/KatexSpan";
import Image from "next/image";
import Link from "next/link";

export const post_lars_vec3_component = () => {
  return (
    <div className="space-y-10">
      {/* Title */}
      <header className="space-y-3">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Building a 3D Vector Type in Rust
        </h2>
        <hr className="border-primary/20" />
      </header>
      {/* Intro */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Introduction</h3>

        <p>
          In the last part of this series, you built a <code>Vec2</code> type from scratch. You learned
          how to represent directions and positions in 2D space. You also added the vector operations
          you need most: addition, subtraction, scaling, length, normalization, and the dot product.
          Along the way, you practiced Rust operator traits and wrote unit tests to keep your code
          correct.
        </p>

        <p>Now you’ll build a 3D vector.</p>

        <p>
          A 3D vector works like a 2D vector, but you add one more component: <code>z</code>. That
          simple change makes everything alot more powerful. You can now represent real space, not just a flat plane. You
          can describe movement forward and backward, not only left and right, up and down.
        </p>

        <p>
          In this guide, you’ll build <code>Vec3</code> for the lars crate. You’ll implement the same
          core operations you already know from <code>Vec2</code>. Then you’ll add one operation that
          only makes sense in 3D: the cross product. It gives you a vector that points perpendicular
          to two others. You’ll use it later for things like surface normals and orientation.
        </p>

        <p>
          When you finish, you’ll have a clean, tested <code>Vec3</code> type you can build on in
          later parts.
        </p>

        <hr className="border-primary/20" />
      </section>
      {/* Learning Goals */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Learning Goals</h3>
        <p>By the end of this lesson, students will:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Understand 3D vectors mathematically and how they extend 2D vectors.
          </li>
          <li>
            Implement a <code className="px-1 py-0.5 rounded bg-base/60">Vec3</code>{" "}
            struct in Rust with <code className="px-1 py-0.5 rounded bg-base/60">(x, y, z)</code>{" "} components.
          </li>
          <li>Support operations like addition, subtraction, dot and cross product.</li>
          <li>Impliment  normalization and other utility methods.</li>
          <li>Write unit tests covering all methods and edge cases.</li>

        </ul>
      </section>
      <hr className="border-primary/20" />
      <section className="space-y-4">

        <h3 className="text-xl font-semibold">Recap</h3>

        <p>
          In Part 2, you built <code>Vec2</code>, a simple 2D vector type. You used it to represent
          positions and directions on a flat plane.
        </p>

        <p>
          You also implemented the basics you need for vector maths. You added addition and
          subtraction. You added scalar multiply and divide. You wrote functions to calculate length
          and normalize vectors. You implemented the dot product.
        </p>

        <p>
          Most importantly, you practiced the workflow you’ll keep using in this series. You wrote
          clean Rust code. You used operator traits to make your maths feel natural. You wrote unit
          tests to prove your implementation works.
        </p>
      </section>
      <hr className="border-primary/20" />

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Background: What is a Vector in 3D</h3>
          <p>
            Okay, so the same principles we discussed in the last part of the series also apply in 3D,
            If you haven't worked through the last part, you can either find it <Link href={"/blog/lars-vec2-guide"} >here</Link> or
             you can find a brilliant introduction to 2D vectors <Link href={"https://www.mathsisfun.com/algebra/vectors.html"}>here</Link>.
          </p>
          <p>
            The key difference between Vectors in 2D and 3D is simply that in 2D a vector has 2 components whereas in 3D, we must account for the extra possible direction with a third 
            component "z".
          </p>
          <div className="rounded-2xl border border-primary/20 bg-base/40 p-4 flex justify-center">
          <KatexSpan text={`\\mathbf v = \\begin{bmatrix} x \\\\ y \\\\ z \\end{bmatrix}`} className={undefined} />
          </div>
          <p>Equivalently, we can notate a 3D vector using the unit vectors <KatexInline text={`\\hat i`} className={undefined} />, <KatexInline text={`\\hat j`} className={undefined} /> and <KatexInline text={`\\hat k`} className={undefined} />
          </p>
          <div className="relative rounded-2xl border border-primary/20 bg-base/40 p-4 flex justify-center items-center">
            <h3 className="absolute top-4 left-4  font-semibold">
              Example 1
            </h3>

            <KatexSpan
              text={`\\mathbf v = \\begin{bmatrix} 3 \\\\ 4 \\\\ 5 \\end{bmatrix} = 3\\hat i + 4\\hat j + 5\\hat k`}
              className={undefined}
            />
          </div>

                  <hr className="border-primary/20" />

          <h3 className="text-xl font-semibold">Visual Intuition: But what does it look like?</h3>
          <p>
            This is a brilliant question. To me, the simplest way to understand the components visually is to picture yourself as a fly a room. <br></br>
            Firstly, you can move left/right, this represents a change in the x direction (or a change in the coefficient of  <KatexInline text={`\\hat i`} className={undefined} />).
            Next, you can move up and down (a change in the coefficient of  <KatexInline text={`\\hat j`} className={undefined} />).
            <br></br>Now this is the new bit: in 3D, we can also move deeper into the room, this is a represented mathematically as a change in the coefficient of  <KatexInline text={`\\hat k`} className={undefined} />.
            <br />Oh, and a coefficient is just the number before the variable (or vector in this case), such as the 3, 4 and 5 in example 1.
          </p>
      </section>
    </div>
  );
}

export const post_lars_vec3 = {
  slug: "lars-vec3-guide",
  title: "lars Learning Series – Part 3: 3D Vectors in Rust",
  excerpt:
    "A complete guide to implementing a 3D vector type in Rust, including vector arithmetic, magnitude, dot AND cross products, normalization, along with comprehensive unit tests.",
  date: "2026-2-1",
  tags: ["Rust", "Linear Algebra", "Lars"],
}

