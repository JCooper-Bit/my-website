import Dropdown from "@/components/Dropdown";
import KatexInline from "@/components/KatexInline";
import KatexSpan from "@/components/KatexSpan";
import Image from "next/image";
import Link from "next/link";
import VectorDiagram2D from "@/components/VectorDiagram2D";

export const post_lars_vec3_component = () => {
    return (
        <div className="space-y-10">
            {/* Title */}
            <header className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-semibold">
                    Building a 3D Vector Type in Rust
                </h2>
                <hr className="border-primary/20"/>
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
                    simple change makes everything alot more powerful. You can now represent real space, not just a flat
                    plane. You
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

                <hr className="border-primary/20"/>
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
                        struct in Rust with <code className="px-1 py-0.5 rounded bg-base/60">(x, y,
                        z)</code>{" "} components.
                    </li>
                    <li>Support operations like addition, subtraction, dot and cross product.</li>
                    <li>Impliment normalization and other utility methods.</li>
                    <li>Write unit tests covering all methods and edge cases.</li>

                </ul>
            </section>
            <hr className="border-primary/20"/>
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
            <hr className="border-primary/20"/>

            <section className="space-y-4">
                <h3 className="text-xl font-semibold">Background: What is a Vector in 3D</h3>
                <p>
                    Okay, so the same principles we discussed in the last part of the series also apply in 3D,
                    If you haven't worked through the last part, you can either find it <Link
                    href={"/blog/lars-vec2-guide"}>here</Link> or
                    you can find a brilliant introduction to 2D vectors <Link
                    href={"https://www.mathsisfun.com/algebra/vectors.html"}>here</Link>.
                </p>
                <p>
                    The key difference between Vectors in 2D and 3D is simply that in 2D a vector has 2 components
                    whereas in 3D, we must account for the extra possible direction with a third
                    component "z".
                </p>
                <div className="rounded-2xl border border-primary/20 bg-base/40 p-4 flex justify-center">
                    <KatexSpan text={`\\mathbf v = \\begin{bmatrix} x \\\\ y \\\\ z \\end{bmatrix}`}
                               className={undefined}/>
                </div>
                <p>Equivalently, we can notate a 3D vector using the unit vectors <KatexInline text={`\\hat i`}
                                                                                               className={undefined}/>, <KatexInline
                    text={`\\hat j`} className={undefined}/> and <KatexInline text={`\\hat k`} className={undefined}/>
                </p>
                <div
                    className="relative rounded-2xl border border-primary/20 bg-base/40 p-4 flex justify-center items-center">
                    <h3 className="absolute top-4 left-4  font-semibold">
                        Example 1
                    </h3>

                    <KatexSpan
                        text={`\\mathbf v = \\begin{bmatrix} 3 \\\\ 4 \\\\ 5 \\end{bmatrix} = 3\\hat i + 4\\hat j + 5\\hat k`}
                        className={undefined}
                    />
                </div>

                <hr className="border-primary/20"/>

                <h3 className="text-xl font-semibold">Visual Intuition: But what does it look like?</h3>
                <p>
                    This is a brilliant question. To me, the simplest way to understand the components visually is to
                    picture yourself as a fly a room. <br></br>
                    Firstly, you can move left/right, this represents the x offset (the
                    coefficient of <KatexInline text={`\\hat i`} className={undefined}/>).
                    Next, you can move up and down (the coefficient of <KatexInline text={`\\hat j`}
                                                                                    className={undefined}/>).
                    <br></br>Now this is the new bit: in 3D, we can also move deeper into the room, this is a
                    represented mathematically as a the value in the coefficient of <KatexInline text={`\\hat k`}
                                                                                                 className={undefined}/>.
                    <br/>Oh, and to be clear: the coefficient is just the number before the variable (or vector in this
                    case), such as the 3, 4 and 5 in example 1.
                </p>

                <hr className="border-primary/20"/>
                <h3 className="text-xl font-semibold">Magnitude in 3D</h3>
                <p>
                    As we discussed in the previous part, the <span className="font-semibold">Magnitude</span> (or
                    length) of a vector is the distance from the origin to the point defined by the vector, below we
                    have a recap of this concept in 2 dimensions in the form of a diagram
                </p>
                <figure className="space-y-3">
                    <div className="relative w-full overflow-hidden rounded-2xl border border-primary/20 bg-base/40">
                        <VectorDiagram2D
                            width={900}
                            height={520}
                            range={5}
                            vectors={[{x: 3, y: 4, label: "v", color: "#89b4fa"}]}
                            show_decomp={true}
                        />
                    </div>
                    <figcaption className="text-sm text-muted">
                        Diagram showing vector magnitude in 2D.
                    </figcaption>
                </figure>

                <p>
                    With 2 dimensions, we use the handy pythagorean theorem to calculate the magnitude, in 3D, we must
                    undertake a similar process.
                </p>

                <div className="rounded-2xl border border-primary/20 bg-base/40 p-4 flex justify-center">
                    <KatexSpan text={`|\\mathbf v| = \\sqrt{x^2 + y^2 +z^2}`}
                               className={undefined}/>
                </div>


                <hr className="border-primary/20"/>

                <h3 className="text-xl font-semibold">The Dot Product in 3D</h3>
                <p>
                    The dot product in 3D works the same way it did in 2D. It takes two vectors and gives you back a
                    single number (a scalar).
                </p>
                <p>
                    If you have two vectors <KatexInline text={"a"}></KatexInline> and <KatexInline
                    text={"b"}></KatexInline>, the dot product looks like this:
                </p>
                <pre>
                    <div className="rounded-2xl border border-primary/20 bg-base/40 p-4 flex justify-center">

                    <KatexInline text={`\\mathbf{a} \\cdot \\mathbf{b} = a_x b_x + a_y b_y + a_z b_z`}></KatexInline>
                    </div>
</pre>
                <p>
                    So you simply multiply matching components and add them up.
                </p>
                <p>
                    The dot product tells you how to what extent two vectors point in the same direction. If the result
                    is
                    positive, they point mostly the same way. If it’s negative, they point in opposite directions.
                    If it’s zero, they’re perpendicular.
                </p>
                <p>
                    You’ll use this a lot. It helps you check angles, test if vectors are perpendicular, and project
                    one vector onto another. In 3D graphics and physics, it shows up everywhere.
                </p>

                <hr className="border-primary/20"/>

                <h3 className="text-xl font-semibold">A new challenger approaches: The Cross Product</h3>
                <p>
                    The cross product is where 3D starts to feel different. Unlike the dot product, it doesn’t give
                    you a number. It gives you a new vector.
                </p>

                <p>
                    If you take two vectors <KatexInline text={`\\mathbf{a}`} /> and{" "}
                    <KatexInline text={`\\mathbf{b}`} />, the cross product returns a vector that points perpendicular
                    to both of them.
                </p>

                <p>Here’s the formula:</p>
                <div className="rounded-2xl border border-primary/20 bg-base/40 p-4 flex justify-center">

                <KatexSpan
                    text={`\\mathbf{a} \\times \\mathbf{b} =
\\begin{bmatrix}
a_y b_z - a_z b_y \\\\
a_z b_x - a_x b_z \\\\
a_x b_y - a_y b_x
\\end{bmatrix}`}
                /></div>

                <p>
                    Admittedly this looks a bit scary at first, but it’s just a pattern. You combine the components in a fixed
                    order to get the new <KatexInline text={`x`} />, <KatexInline text={`y`} />, and{" "}
                    <KatexInline text={`z`} /> values.
                </p>

                <p>
                    The direction of the result depends on the order.{" "}
                    <KatexInline text={`\\mathbf{a} \\times \\mathbf{b}`} /> points the opposite way of{" "}
                    <KatexInline text={`\\mathbf{b} \\times \\mathbf{a}`} />.
                </p>

                <p>
                    You can use the <Link href={"https://en.wikipedia.org/wiki/Right-hand_rule"}>right hand rule </Link>to remember this. Point your index finger in the direction of{" "}
                    <KatexInline text={`\\mathbf{a}`} />, your middle finger in the direction of{" "}
                    <KatexInline text={`\\mathbf{b}`} />, and your thumb shows the direction of the cross product.
                </p>

                <p>
                    You’ll use the cross product a lot in 3D work. It helps you compute surface normals, build
                    coordinate systems, and figure out which way something is facing.
                </p>


                <hr className="border-primary/20"/>

                <h3 className="text-xl font-semibold">A handy tool: Normalization</h3>
                <p>
                    Normalization is one of those things you’ll use all the time. It takes a vector and scales it so
                    its length becomes 1.
                </p>

                <p>
                    When you normalize a vector, you keep its direction but throw away its magnitude. That’s useful
                    when you only care about where something points, not how long the vector is.
                </p>

                <p>
                    To normalize a vector <KatexInline text={`\\mathbf{v}`} />, you divide it by its length:
                </p>

                <div className="rounded-2xl border border-primary/20 bg-base/40 p-4 flex justify-center">
                    <KatexSpan text={`\\text{normalize}(\\mathbf{v}) = \\frac{\\mathbf{v}}{\\|\\mathbf{v}\\|}`} />
                </div>

                <p>You can also write it like this:</p>

                <div className="rounded-2xl border border-primary/20 bg-base/40 p-4 flex justify-center">
                    <KatexSpan text={`\\hat{\\mathbf{v}} = \\frac{\\mathbf{v}}{\\|\\mathbf{v}\\|}`} />
                </div>

                <p>
                    There’s one catch. You can’t normalize the zero vector. If{" "}
                    <KatexInline text={`\\mathbf{v} = (0,0,0)`} />, then{" "}
                    <KatexInline text={`\\|\\mathbf{v}\\| = 0`} />, and dividing by zero breaks everything. So in
                    code, you always need to handle that case.
                </p>

                <p>
                    In practice, normalization shows up everywhere. You’ll use it for directions, surface normals,
                    camera movement, lighting, and lots of physics math.
                </p>

                <hr className="border-primary/20"/>

                <h3 className="text-xl font-semibold">Summary</h3>

                <p>
                    Overall, 3D vectors work just like 2D vectors, but you add a third component,{" "}
                    <KatexInline text={`z`} />. That lets you represent real space instead of a flat plane.
                </p>

                <p>
                    You can still add, subtract, and scale vectors the same way. You can still compute length and
                    normalize vectors. The dot product still gives you a number that tells you how closely two
                    vectors point in the same direction.
                </p>

                <p>
                    The big new idea in 3D is the cross product. It gives you a vector perpendicular to two others.
                    You’ll use it constantly in graphics and physics.
                </p>

                <p>
                    With that background out of the way, you’re ready to start building <code>Vec3</code> in Rust.
                </p>
                <hr className="border-primary/20"/>
                {/* Task 1 */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Task 1: Defining a 3D Vector Type</h2>
                    Task 1
                    <Dropdown>  <pre
                        className="overflow-x-auto rounded-2xl border border-primary/20 bg-base/40 p-4 text-sm">
          <code>{``}</code>
        </pre>
                    </Dropdown>
                </section>

                <hr className="border-primary/20"/>


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

