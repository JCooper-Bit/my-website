import Link from "next/link";
import type { Project } from "@/content/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-2xl bg-surface/80 border border-primary/25 p-5 transition hover:border-accent hover:-translate-y-0.5">
      <h3 className="text-sm font-semibold text-text">
        {project.title}
      </h3>

      <p className="mt-2 text-xs text-muted">
        {project.description}
      </p>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[0.7rem] text-muted">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full bg-base/70 px-2 py-1"
            >
              {item}
            </span>
          ))}
        </div>

        <Link
          href={project.href}
          className="text-primary hover:text-accent transition"
        >
          View →
        </Link>
      </div>
    </article>
  );
}
