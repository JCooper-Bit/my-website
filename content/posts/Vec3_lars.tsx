import Dropdown from "@/components/Dropdown";
import KatexInline from "@/components/KatexInline";
import KatexSpan from "@/components/KatexSpan";
import Image from "next/image";
import Link from "next/link";

export const post_lars_vec3_component = () =>  {
    return (
    <div className="space-y-10">
      {/* Title */}
      <header className="space-y-3">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Building a 3D Vector Type in Rust
        </h2>
        <hr className="border-primary/20" />
      </header>

      {/* Learning Goals */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Learning Goals</h3>
        <p>By the end of this lesson, students will:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Understand how 3D vectors are represented mathematically and in
            code, Including the differences and similarities with 2D Vectors.
          </li>
          <li>
            Implement a <code className="px-1 py-0.5 rounded bg-base/60">Vec3</code>{" "}
            struct in Rust that supports basic vector operations alongisde more advanced operations such as the cross product and normalisation
          </li>
          <li>Write unit tests to validate mathematical and logical correctness.</li>
        </ul>
      </section>
      <hr className="border-primary/20" />
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

