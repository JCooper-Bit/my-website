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
    href: "https://github.com/JCooper-Bit/lars",

  },
  {
  id: "personal-portfolio",
  title: "Personal Portfolio",
  description:
    "A minimal, futuristic personal website built to showcase my projects, experiments and writing. Designed with a modern, simple palette, subtle animations and a fully data-driven project system.",
  tech: ["Next.js", "TypeScript", "TailwindCSS", "Lucide Icons"],
  href: "/",
},

];
