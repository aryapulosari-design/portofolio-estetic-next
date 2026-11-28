import { ProjectCard } from "@/components/project-card";
import CertificatesSection from "@/components/section/certificates-section";
import { DATA, projectCategories } from "@/data/resume";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

const categoryCovers: Record<(typeof projectCategories)[number], string> = {
  "Security & Networking": "/projects/archive-security-rack.webp",
  "Web Products": "/projects/archive-web-sundays.webp",
  "Python & Data": "/projects/archive-data-dashboard.webp",
};

export default function ProjectsSection() {
  return (
    <section id="projects" tabIndex={-1} aria-labelledby="projects-heading" className="mx-auto w-full max-w-4xl">
      <header className="work-handoff mb-6 pt-6 sm:mb-8 sm:pt-8">
        <h2 id="projects-heading" className="text-4xl leading-none sm:text-5xl">Selected Work</h2>
      </header>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
        {DATA.projects.filter((project) => project.caseStudy).map((project) => (
          <ProjectCard key={project.title} {...project} tags={project.technologies} featured />
        ))}
      </div>
    </section>
  );
}

function ArchiveFolder({ title, label, cover, children }: {
  title: string;
  label: string;
  cover: string;
  children: ReactNode;
}) {
  return (
    <details className="group archive-folder min-w-0">
      <summary className="archive-folder-summary">
        <span className="archive-folder-cover" aria-hidden="true">
          <Image src={cover} alt="" fill sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) 50vw, 440px" className="object-cover" />
        </span>
        <span className="flex min-h-18 items-center justify-between gap-3 px-4 py-3">
          <span className="flex min-w-0 flex-col gap-1.5">
            <span className="text-lg leading-tight font-semibold sm:text-xl">{title}</span>
            <span className="text-sm text-muted-foreground">{label}</span>
          </span>
          <ChevronDown className="size-4 shrink-0 text-muted-foreground group-open:rotate-180 motion-safe:transition-transform" aria-hidden="true" />
        </span>
      </summary>
      <div className="archive-folder-content">{children}</div>
    </details>
  );
}

export function ProjectArchive() {
  return (
    <section id="archive" tabIndex={-1} aria-labelledby="archive-heading" className="mx-auto w-full max-w-4xl">
      <header className="mb-8 flex flex-wrap items-baseline justify-between gap-3 border-b border-border pb-5">
        <h2 id="archive-heading" className="text-4xl leading-none sm:text-5xl">Archive</h2>
        <a href={DATA.contact.social.GitHub.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-full border border-border px-4 text-sm font-medium hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">GitHub</a>
      </header>
      <div className="grid items-start gap-x-4 gap-y-6 sm:grid-cols-2">
        {projectCategories.map((category) => {
          const projects = DATA.projects.filter((project) => project.category === category);
          return (
            <ArchiveFolder key={category} title={category} label={`${projects.length} projects`} cover={categoryCovers[category]}>
              <div className="grid gap-3">
                {projects.map((project) => (
                  <ProjectCard key={project.title} {...project} tags={project.technologies} />
                ))}
              </div>
            </ArchiveFolder>
          );
        })}
        <ArchiveFolder title="Credentials" label={`${DATA.certificates.length} certificates`} cover="/projects/archive-credentials-tryhackme.webp">
          <CertificatesSection />
        </ArchiveFolder>
      </div>
    </section>
  );
}
