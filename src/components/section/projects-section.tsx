import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ProjectsSection() {
  const featuredProjects = DATA.projects.slice(0, 2);
  const otherProjects = DATA.projects.slice(2);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="mx-auto w-full max-w-4xl">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-x-6 gap-y-3 border-b border-border pb-5 sm:mb-8">
        <div>
          <h2 id="projects-heading" className="text-4xl leading-none sm:text-5xl">Projects</h2>
          <p className="mt-3 text-muted-foreground">Web, cybersecurity, networking, and data projects.</p>
        </div>
        <Link
          href={DATA.contact.social.GitHub.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-4 text-sm font-medium hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          GitHub <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} {...project} tags={project.technologies} featured />
        ))}
      </div>
      <h3 className="mb-4 mt-10 text-xl">More projects</h3>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {otherProjects.map((project) => (
          <ProjectCard key={project.title} {...project} tags={project.technologies} />
        ))}
      </div>
    </section>
  );
}
