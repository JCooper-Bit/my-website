import Dropdown from "@/components/Dropdown";
import KatexInline from "@/components/KatexInline";
import KatexSpan from "@/components/KatexSpan";
import VectorDiagram2D from "@/components/VectorDiagram2D";
import Image from "next/image";
import Link from "next/link";

export const post_lars_vec2_component = () =>  {
    return (
    <div className="space-y-10">
      {/* Title */}
      <header className="space-y-3">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Building a 2D Vector Type in Rust
        </h2>
        <hr className="border-primary/20" />
      </header>

      {/* Learning Goals */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Learning Goals</h3>
        <p>By the end of this lesson, students will:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Understand how 2D vectors are represented mathematically and in
            code.
          </li>
          <li>
            Implement a <code className="px-1 py-0.5 rounded bg-base/60">Vec2</code>{" "}
            struct in Rust that supports basic vector operations.
          </li>
          <li>
            Learn about traits, operator overloading, and code organization in a
            math-focused crate.
          </li>
          <li>Write unit tests to validate mathematical correctness.</li>
        </ul>
      </section>

      <hr className="border-primary/20" />

      {/* Background */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Background: What Is a Vector?</h2>

        <p>
          As you hopefully know from school, a{" "}
          <span className="font-semibold">vector</span> is a quantity that has
          both <span className="font-semibold">magnitude</span> (length) and{" "}
          <span className="font-semibold">direction</span>. If not, I will give
          you a whistlestop tour, or you can read an introductory article{" "}
          <Link
            href="https://www.mathsisfun.com/algebra/vectors.html"
            className="text-primary hover:text-accent transition underline underline-offset-4"
            target="_blank"
          >
            here
          </Link>
          .
        </p>

        <div className="space-y-3">
          <p>
            In 2D space, we have multiple ways to notate vectors. The main one I
            will use is <span className="font-semibold">column notation</span>,
            which shows a vector as:
          </p>

          <div className="rounded-2xl border border-primary/20 bg-base/40 p-4 flex justify-center">
            <KatexSpan text={`\\mathbf v = \\begin{bmatrix} x \\\\ y \\end{bmatrix}`} className={undefined} />
          </div>
        </div>

        <p>
          Another common way to represent vectors is using{" "}
          <span className="font-semibold">unit vectors and components</span>.
        </p>

        {/* Unit vectors */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Unit Vectors</h3>

          <p>
            <span className="font-semibold">Unit</span> vectors are vectors that
            have a magnitude of 1 in a specific direction. For example:
          </p>

          <div className="rounded-2xl border border-primary/20 bg-base/40 p-4 flex justify-center">
            <KatexSpan text={`\\hat x = \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}`} className={undefined} />
          </div>

            You will often see unit vectors denoted with a hat symbol (^) above
            the vector component name.
            <br />
            Additionally, you may see the unit vector for the x direction
            written as{" "}
            <span className="inline-flex items-center gap-2">
              <KatexSpan text={`\\hat i`} className={undefined} />
            </span>{" "}
            and for the y direction as{" "}
            <span className="inline-flex items-center gap-2">
              <KatexSpan text={`\\hat j`} className={undefined} />
            </span>
            .

          <p>
            Therefore, to express a vector with x-component 3 and y-component 4
            using unit vectors, we can write:
          </p>

          <div className="rounded-2xl border border-primary/20 bg-base/40 p-4 flex justify-center">
            <KatexSpan text={`\\mathbf v = 3\\hat i + 4\\hat j`} className={undefined} />
          </div>
        </div>

        {/* Magnitude */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Magnitude</h3>

          <figure className="space-y-3">
            <div className="relative w-full overflow-hidden rounded-2xl border border-primary/20 bg-base/40">
              <VectorDiagram2D
                width={900}
                height={520}
                range={5}
                vectors = {[{ x: 3, y: 4, label: "v", color: "#89b4fa" }] }
                show_decomp={true}
              />
            </div>
            <figcaption className="text-sm text-muted">
              Diagram showing vector magnitude.
            </figcaption>
          </figure>

          <p>
            <span className="font-semibold">Magnitude</span> (or length) of a
            vector is the distance from the origin to the point defined by the
            vector. As you should see from the diagram above, it is calculated
            using the Pythagorean theorem:
          </p>

          <div className="rounded-2xl border border-primary/20 bg-base/40 p-4 flex justify-center">
            <KatexSpan text={`|\\mathbf v| = \\sqrt{x^2 + y^2}`} className={undefined} />
          </div>

          <p>
            The notation for a vector <KatexInline text={`v`} className={undefined} />
            &apos;s magnitude is <KatexInline text={`|\\mathbf v|`} className={undefined} />.
          </p>
        </div>

        {/* Add/Sub */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            Vector Addition and Subtraction
          </h3>

          <p>
            Vectors can be added and subtracted component-wise. For example,
            given two vectors:
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-primary/20 bg-base/40 p-4 flex justify-center">
              <KatexSpan
                  text={`\\mathbf a = \\begin{bmatrix} a_x \\\\ a_y \\end{bmatrix}`} className={undefined}              />
            </div>
            <div className="rounded-2xl border border-primary/20 bg-base/40 p-4 flex justify-center">
              <KatexSpan
                  text={`\\mathbf b = \\begin{bmatrix} b_x \\\\ b_y \\end{bmatrix}`} className={undefined}              />
            </div>
          </div>

          <p>The addition and subtraction of these vectors is defined as:</p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-primary/20 bg-base/40 p-4 flex justify-center">
              <KatexSpan
                  text={`\\mathbf a + \\mathbf b = \\begin{bmatrix} a_x + b_x \\\\ a_y + b_y \\end{bmatrix}`} className={undefined}              />
            </div>
            <div className="rounded-2xl border border-primary/20 bg-base/40 p-4 flex justify-center">
              <KatexSpan
                  text={`\\mathbf a - \\mathbf b = \\begin{bmatrix} a_x - b_x \\\\ a_y - b_y \\end{bmatrix}`} className={undefined}              />
            </div>
          </div>
        </div>

        {/* Scalar */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            Scalar Multiplication and Division
          </h3>

          <p>
            Vectors can be multiplied or divided by a scalar (a single number)
            by multiplying or dividing each component of the vector by that
            scalar. For example, given a vector:
          </p>

          <div className="rounded-2xl border border-primary/20 bg-base/40 p-4 flex justify-center">
            <KatexSpan text={`\\mathbf a = \\begin{bmatrix} x \\\\ y \\end{bmatrix}`} className={undefined} />
          </div>

          <p>
            The scalar multiplication and division of this vector by a scalar{" "}
            <code className="px-1 py-0.5 rounded bg-base/60">k</code> is defined
            as:
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-primary/20 bg-base/40 p-4 flex justify-center">
              <KatexSpan
                  text={`k \\times \\mathbf a = \\begin{bmatrix} k \\times x \\\\ k \\times y \\end{bmatrix}`} className={undefined}              />
            </div>
            <div className="rounded-2xl border border-primary/20 bg-base/40 p-4 flex justify-center">
              <KatexSpan
                  text={`\\frac{\\mathbf a}{k} = \\begin{bmatrix} \\frac{x}{k} \\\\ \\frac{y}{k} \\end{bmatrix}`} className={undefined}              />
            </div>
          </div>
        </div>

        {/* Dot product */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">The Dot Product</h3>

          <p>
            The dot product is a method for multiplying 2 vectors, it is notated
            mathematically as follows:
          </p>

          <div className="rounded-2xl border border-primary/20 bg-base/40 p-4 flex justify-center">
            <KatexSpan text={`\\mathbf a \\cdot \\mathbf b`} className={undefined} />
          </div>

          <p>There are 2 methods to calculate the dot product.</p>

          <div className="space-y-3">
            <p className="font-semibold">The first method:</p>

            <div className="rounded-2xl border border-primary/20 bg-base/40 p-4 flex justify-center">
              <KatexSpan
                  text={`\\mathbf a \\cdot \\mathbf b = |\\mathbf a| \\times |\\mathbf b| \\times \\cos(\\theta) \\\\`} className={undefined}              />
            </div>
            <div className="rounded-2xl border border-primary/20 bg-base/40 p-4 flex justify-center">
            <div className="space-y-2 text-sm text-muted">
                <KatexSpan text={`|\\mathbf a|\\,\\text{ is the magnitude of }\\,\\mathbf a`} className={undefined} />
                <KatexSpan text={`|\\mathbf b|\\,\\text{ is the magnitude of }\\,\\mathbf b`} className={undefined} />
                <KatexSpan
                    text={`\\theta\\,\\text{ is the angle between }\\,\\mathbf a\\,\\text{ and }\\,\\mathbf b`} className={undefined}                />
                </div>
            </div>
          </div>

          <div className="space-y-3">
            <p className="font-semibold">The second method:</p>

            <div className="rounded-2xl border border-primary/20 bg-base/40 p-4 flex justify-center">
              <KatexSpan
                  text={`\\mathbf a \\cdot \\mathbf b = (\\mathbf a_x \\times \\mathbf b_x) + (\\mathbf a_y \\times \\mathbf b_y)`} className={undefined}              />
            </div>

            <p>
              Where <KatexInline text={`\\mathbf a_x`} className={undefined} /> and{" "}
              <KatexInline text={`\\mathbf a_y`} className={undefined} /> are the x and y components
              of vector <span className="font-semibold">a</span> respectively,
              and the same applies to vector <span className="font-semibold">b</span>.
            </p>
          </div>
        </div>

        <hr className="border-primary/20" />

        <div className="space-y-3">
          <p>Vectors are foundational in:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Geometry (lines, points, and normals)</li>
            <li>
              Physics (velocity, force, acceleration and pretty much everything
              else!)
            </li>
            <li>Computer graphics (movement, transformations)</li>
            <li>Game development (positions, rotations, collision detection)</li>
          </ul>

          <p>
            Let us now take our first step towards creating a 2D vector struct
            in Rust!
          </p>
        </div>
      </section>

      <hr className="border-primary/20" />

      {/* Task 1 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Task 1: Defining a 2D Vector Type</h2>

        <p>
          First off, we need to create a Rust struct called{" "}
          <code className="px-1 py-0.5 rounded bg-base/60">Vec2</code> to
          represent a 2D vector.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            It should contain <code className="px-1 py-0.5 rounded bg-base/60">(x, y)</code>{" "}
            variables
          </li>
          <li>
            You should{" "}
            <Link
              href="https://doc.rust-lang.org/rust-by-example/trait/derive.html"
              className="text-primary hover:text-accent transition underline underline-offset-4"
              target="_blank"
            >
              derive
            </Link>{" "}
            common traits such as{" "}
            <code className="px-1 py-0.5 rounded bg-base/60">
              Clone, Copy, Debug, PartialEq
            </code>{" "}
            and{" "}
            <code className="px-1 py-0.5 rounded bg-base/60">Constructor</code>
          </li>
          <li>
            Finally, you should define a few useful common constant vectors such
            as{" "}
            <code className="px-1 py-0.5 rounded bg-base/60">ZERO</code>,{" "}
            <code className="px-1 py-0.5 rounded bg-base/60">ONE</code> and{" "}
            <span className="font-semibold">unit</span> vectors for the x and y
            directions.
          </li>
        </ul>

        <p>This sets the foundation for all vector operations.</p>
        
        <Dropdown>  <pre className="overflow-x-auto rounded-2xl border border-primary/20 bg-base/40 p-4 text-sm">
          <code>{`#[derive(Clone, Copy, Debug, PartialEq, PartialOrd, Constructor)]
pub struct Vec2 {
    pub x: f64,
    pub y: f64,
}

impl Vec2 {
    pub const ZERO: Vec2 = Vec2 { x: 0.0, y: 0.0 };
    pub const ONE: Vec2 = Vec2 { x: 1.0, y: 1.0 };
    pub const UNIT_X: Vec2 = Vec2 { x: 1.0, y: 0.0 };
    pub const UNIT_Y: Vec2 = Vec2 { x: 0.0, y: 1.0 };
}`}</code>
        </pre></Dropdown>
      </section>

      <hr className="border-primary/20" />

      {/* Task 2 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Task 2: Computing Magnitude (Vector Length)
        </h2>

        <p>
          Using the Pythagorean theorem, implement a method on{" "}
          <code className="px-1 py-0.5 rounded bg-base/60">Vec2</code> to compute
          the magnitude (length) of the vector.
        </p>

        <Dropdown>
        <pre className="overflow-x-auto rounded-2xl border border-primary/20 bg-base/40 p-4 text-sm">
          <code>{`impl Vec2 {
    pub fn mag(&self) -> f64 {
        (self.x * self.x + self.y * self.y).sqrt()
    }
}`}</code>
        </pre>
        </Dropdown>
      </section>

      <hr className="border-primary/20" />

      {/* Task 3 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Task 3: Vector Arithmetic</h2>

        <p>
          Using Rust&apos;s operator overloading capabilities, implement
          addition and subtraction for{" "}
          <code className="px-1 py-0.5 rounded bg-base/60">Vec2</code> so that
          you can add and subtract vectors using the{" "}
          <code className="px-1 py-0.5 rounded bg-base/60">+</code> and{" "}
          <code className="px-1 py-0.5 rounded bg-base/60">-</code> operators.
        </p>

        <p>
          I would recommend using the{" "}
          <Link
            href="https://crates.io/crates/derive_more"
            className="text-primary hover:text-accent transition underline underline-offset-4"
            target="_blank"
          >
            derive_more
          </Link>{" "}
          crate to make this easier.
        </p>

        <h3 className="text-xl font-semibold">
          using derive_more for operator overloading
        </h3>
        <Dropdown>
        <pre className="overflow-x-auto rounded-2xl border border-primary/20 bg-base/40 p-4 text-sm">
          <code>{`use derive_more::{Add, Sub};

#[derive(Add, Sub, Div, Mul, Neg, Clone, Copy, Debug, PartialEq, PartialOrd, Constructor)]
// The same as Task 1 but with Add and Sub traits
pub struct Vec2 {
    pub x: f64,
    pub y: f64,
}`}</code>
        </pre>
</Dropdown>
        <h3 className="text-xl font-semibold">
        manually implementing Add and Sub traits
        </h3>
        <Dropdown>
        <pre className="overflow-x-auto rounded-2xl border border-primary/20 bg-base/40 p-4 text-sm">
          <code>{`impl std::ops::Add for Vec2 {
    type Output = Vec2;

    fn add(self, other: Vec2) -> Vec2 {
        Vec2 {
            x: self.x + other.x,
            y: self.y + other.y,
        }
    }
}

impl std::ops::Sub for Vec2 {
    type Output = Vec2;

    fn sub(self, other: Vec2) -> Vec2 {
        Vec2 {
            x: self.x - other.x,
            y: self.y - other.y,
        }
    }
}`}</code>
        </pre>
        </Dropdown>
      </section>

      <hr className="border-primary/20" />

      {/* Task 4 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Task 4: The Dot Product</h2>

        <p>
          Implement a method on{" "}
          <code className="px-1 py-0.5 rounded bg-base/60">Vec2</code> to compute
          the dot product between two vectors as we defined earlier.
          <br />
          I recommend implementing this as a method called{" "}
          <code className="px-1 py-0.5 rounded bg-base/60">dot</code> that takes{" "}
          <code className="px-1 py-0.5 rounded bg-base/60">&amp;self</code> and
          another <code className="px-1 py-0.5 rounded bg-base/60">Vec2</code>{" "}
          as an argument and returns an{" "}
          <code className="px-1 py-0.5 rounded bg-base/60">f64</code>.
        </p>

        <Dropdown>
        <pre className="overflow-x-auto rounded-2xl border border-primary/20 bg-base/40 p-4 text-sm">
          <code>{`impl Vec2 {
    pub fn dot(&self, other: &Vec2) -> f64 {
        (self.x * other.x) + (self.y * other.y)
    }
}`}</code>
        </pre>
        </Dropdown>
      </section>

      <hr className="border-primary/20" />

      {/* Task 5 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Task 5: Component Mapping</h2>

        <p>
          Implement a method on{" "}
          <code className="px-1 py-0.5 rounded bg-base/60">Vec2</code> called{" "}
          <code className="px-1 py-0.5 rounded bg-base/60">map</code> that takes
          a closure as an argument. This closure should take a single{" "}
          <code className="px-1 py-0.5 rounded bg-base/60">f64</code> and return
          an <code className="px-1 py-0.5 rounded bg-base/60">f64</code>. The{" "}
          <code className="px-1 py-0.5 rounded bg-base/60">map</code> method
          should apply this closure to both the x and y components of the vector
          and return a new{" "}
          <code className="px-1 py-0.5 rounded bg-base/60">Vec2</code> with the
          results.
        </p>

        <p>
          Mathematically speaking, we are applying a function{" "}
          <code className="px-1 py-0.5 rounded bg-base/60">f</code> to each
          component of the vector.
        </p>

        <Dropdown>
        <pre className="overflow-x-auto rounded-2xl border border-primary/20 bg-base/40 p-4 text-sm">
          <code>{`impl Vec2 {
    pub fn map<F>(&self, f: F) -> Vec2
    where
        F: Fn(f64) -> f64,
    {
        let fx = f(self.x);
        let fy = f(self.y);
        Vec2 { x: fx, y: fy }
    }
}`}</code>
        </pre>
        </Dropdown>
      </section>

      <hr className="border-primary/20" />

      {/* Task 6 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Task 6: Normalizing a Vector</h2>

        <p>
          Normalizing a vector means scaling it to have a magnitude of 1 while
          maintaining its direction. Implement a method on{" "}
          <code className="px-1 py-0.5 rounded bg-base/60">Vec2</code> called{" "}
          <code className="px-1 py-0.5 rounded bg-base/60">normalize</code> that
          returns a new{" "}
          <code className="px-1 py-0.5 rounded bg-base/60">Vec2</code> that is
          the normalized version of the original vector.
        </p>

        <p>
          The <code className="px-1 py-0.5 rounded bg-base/60">map</code>{" "}
          function from Task 5 may be useful here.
        </p>
<Dropdown>

        <pre className="overflow-x-auto rounded-2xl border border-primary/20 bg-base/40 p-4 text-sm">
          <code>{`impl Vec2 {
    pub fn normalize(&self) -> Vec2 {
        let m = self.mag();
        if m == 0.0 {
            return Vec2::ZERO; // or handle zero-length vector case as needed
        }
        self.map(|i| i / m)
    }
}`}</code>
        </pre>
        </Dropdown>

      </section>

      <hr className="border-primary/20" />

      {/* Task 7 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Task 7: Scalar Multiplication and Division
        </h2>

        <p>
          Implement scalar multiplication and division for{" "}
          <code className="px-1 py-0.5 rounded bg-base/60">Vec2</code> so that
          you can multiply and divide a vector by a scalar using the{" "}
          <code className="px-1 py-0.5 rounded bg-base/60">*</code> and{" "}
          <code className="px-1 py-0.5 rounded bg-base/60">/</code> operators.
          <br />
          You can use the{" "}
          <Link
            href="https://crates.io/crates/derive_more"
            className="text-primary hover:text-accent transition underline underline-offset-4"
            target="_blank"
          >
            derive_more
          </Link>{" "}
          crate again to make this easier.
        </p>

        <h3 className="text-xl font-semibold">
          Using derive_more for operatorations
        </h3>
        <Dropdown>
        <pre className="overflow-x-auto rounded-2xl border border-primary/20 bg-base/40 p-4 text-sm">
          <code>{`use derive_more::{Mul, Div, Add, Sub};

#[derive(Add, Sub, Div, Mul, Clone, Copy, Debug, PartialEq, PartialOrd, Constructor)]
// The same as Task 1 and 3 but with Mul and Div traits
pub struct Vec2 {
    pub x: f64,
    pub y: f64,
}`}</code>
        </pre>
</Dropdown>

        <h3 className="text-xl font-semibold">
          manually implementing Mul and Div traits
        </h3>
          <Dropdown>
        <pre className="overflow-x-auto rounded-2xl border border-primary/20 bg-base/40 p-4 text-sm">
          <code>{`impl std::ops::Mul<f64> for Vec2 {
    type Output = Vec2;

    fn mul(self, scalar: f64) -> Vec2 {
        Vec2 {
            x: self.x * scalar,
            y: self.y * scalar,
        }
    }
}

impl std::ops::Div<f64> for Vec2 {
    type Output = Vec2;

    fn div(self, scalar: f64) -> Vec2 {
        Vec2 {
            x: self.x / scalar,
            y: self.y / scalar,
        }
    }
}`}</code>
        </pre>
        </Dropdown>
      </section>

      <hr className="border-primary/20" />

      {/* Task 8 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Task 8: Using Vec2 as a Point</h2>

        <p>
          In many applications, 2D vectors are used to represent points in
          space. We should implement a method on{" "}
          <code className="px-1 py-0.5 rounded bg-base/60">Vec2</code> called{" "}
          <code className="px-1 py-0.5 rounded bg-base/60">dist</code> that
          takes another{" "}
          <code className="px-1 py-0.5 rounded bg-base/60">Vec2</code> as an
          argument and returns the distance between the two points represented
          by the vectors.
        </p>

        <p>
          Perhaps we could also add an alias type for{" "}
          <code className="px-1 py-0.5 rounded bg-base/60">Point2D</code> that
          is just a{" "}
          <code className="px-1 py-0.5 rounded bg-base/60">Vec2</code> to make
          the intent clearer when using it as a point.
        </p>

<Dropdown>
        <pre className="overflow-x-auto rounded-2xl border border-primary/20 bg-base/40 p-4 text-sm">
          <code>{`pub type Point2D = Vec2;

impl Vec2 {
    pub fn dist(&self, other: &Point2D) -> f64 {
        (*self - *other).mag().abs()
    }
}`}</code>
        </pre>
</Dropdown>      </section>

      <hr className="border-primary/20" />

      {/* Task 9 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Task 9: Testing and Validation</h2>

        <p>
          Write{" "}
          <Link
            href="https://doc.rust-lang.org/rust-by-example/testing/unit_testing.html"
            className="text-primary hover:text-accent transition underline underline-offset-4"
            target="_blank"
          >
            unit tests
          </Link>{" "}
          for all the methods and operator overloads you have implemented for{" "}
          <code className="px-1 py-0.5 rounded bg-base/60">Vec2</code>. Ensure
          that your tests cover various cases, including edge cases like
          zero-length vectors.
        </p>
          <Dropdown>
        <pre className="overflow-x-auto rounded-2xl border border-primary/20 bg-base/40 p-4 text-sm">
          <code>{`#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_add() {
        let v1 = Vec2::ZERO;
        let v2 = Vec2::ONE;
        assert_eq!(v1 + v2, Vec2::ONE);
    }

    #[test]
    fn test_sub() {
        let v1 = Vec2::new(5.0, 7.0);
        let v2 = Vec2::new(2.0, 3.0);
        assert_eq!(v1 - v2, Vec2::new(3.0, 4.0));
    }

    #[test]
    fn test_mag() {
        let v = Vec2::new(3.0, 4.0);
        assert_eq!(v.mag(), 5.0);
    }

    #[test]
    fn test_dot() {
        let a = Vec2::new(1.0, 2.0);
        let b = Vec2::new(3.0, 4.0);
        assert_eq!(a.dot(&b), 11.0);
    }

    #[test]
    fn test_map() {
        let v = Vec2::new(1.0, 2.0);
        let mapped = v.map(|x| x * 2.0);
        assert_eq!(mapped, Vec2::new(2.0, 4.0));
    }

    #[test]
    fn test_normalize() {
        let v = Vec2::new(3.0, 4.0);
        let n = v.normalize();
        assert!((n.mag() - 1.0).abs() < 1e-10);
    }

    #[test]
    fn test_scalar_mul() {
        let v = Vec2::new(1.0, 2.0);
        assert_eq!(2.0 * v, Vec2::new(2.0, 4.0));
    }

    #[test]
    fn test_scalar_div() {
        let v = Vec2::new(2.0, 4.0);
        assert_eq!(v / 2.0, Vec2::new(1.0, 2.0));
    }

    #[test]
    fn test_dist() {
        let a = Point2D::new(1.0, 2.0);
        let b = Point2D::new(1.0, 0.0);
        assert_eq!(a.dist(&b), 2.0);
    }

    #[test]
    fn test_zero_length_normalize() {
        let v = Vec2::ZERO;
        let n = v.normalize();
        assert_eq!(n, Vec2::ZERO); // or however you choose to handle this case
    }

    #[test]
    fn test_dot_perpendicular() {
        let a = Vec2::UNIT_X;
        let b = Vec2::UNIT_Y;
        assert_eq!(a.dot(&b), 0.0);
    }
}`}</code>
        </pre>
        </Dropdown>
      </section>
      

      <hr className="border-primary/20" />

      {/* Conclusion */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Conclusion and Next Steps</h2>

        <p>
          Congratulations! You have successfully implemented a basic 2D vector
          type in Rust with essential operations and tests. This{" "}
          <code className="px-1 py-0.5 rounded bg-base/60">Vec2</code> struct
          can now serve as a foundation for more complex mathematical operations
          and applications in graphics, physics, and game development.
        </p>

        <p>As next steps, consider exploring:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            Implementing additional vector operations such as the 2D cross
            product, angle between vectors, and projection.
          </li>
          <li>
            Extending the <code className="px-1 py-0.5 rounded bg-base/60">Vec2</code>{" "}
            struct to support more advanced features like interpolation (lerp).
          </li>
        </ul>

        <p>
          In the next part of this series, we will build upon this foundation to
          create a 3D vector type, improve our 2D vector slightly and explore
          more complex mathematical concepts.
        </p>

        <p>
          The code and ideas for this series is based on my{" "}
          <span className="font-semibold">lars</span> math crate, which you can
          find on{" "}
          <Link
            href="https://github.com/JCooper-Bit/lars"
            className="text-primary hover:text-accent transition underline underline-offset-4"
            target="_blank"
          >
            GitHub
          </Link>
          .
        </p>
      </section>
    </div>
  );
}  

export const post_lars_vec2 = {
  slug: "lars-vec2-guide",
  title: "lars Learning Series – Part 2: 2D Vectors in Rust",
  excerpt:
    "A complete guide to implementing a 2D vector type in Rust, including vector arithmetic, magnitude, dot product, normalization, and comprehensive unit tests.",
  date: "2025-12-07",
  tags: ["Rust", "Linear Algebra", "Lars"],
}

