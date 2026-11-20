import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ProjectsSection() {
    return (
        <section id="projects">
            <div className="flex min-h-0 flex-col gap-y-8">
                <div className="flex flex-col gap-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Projects</h2>
                    <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                        Web, cybersecurity, networking, and data projects.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr">
                    {DATA.projects.map((project) => (
                        <div
                            key={project.title}
                            className="h-full"
                        >
                            <ProjectCard
                                href={project.href}
                                title={project.title}
                                description={project.description}
                                dates={project.dates}
                                tags={project.technologies}
                                image={project.image}
                                video={project.video}
                                links={project.links}
                            />
                        </div>
                    ))}
                </div>
                <Link href={DATA.contact.social.GitHub.url} target="_blank" rel="noopener noreferrer" className="mx-auto inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
                    See more projects on GitHub <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
            </div>
        </section>
    );
}

