export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  href: string;
};

export const projects: Project[] = [
  {
    id: "lars",
    title: "Lars - Rust Linear Algebra",
    description:
      "Lars (Linear Algebra in Rust) is a learning-focused Rust crate that provides simple yet powerful linear algebra utilities built from first principles by a student currently going through Linear Algebra classes.",
    tech: ["Rust"],
    href: "/projects/neon-dashboard",
  },
];
