import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return DATA.projects.flatMap(({ caseStudy }) => caseStudy ? [{ slug: caseStudy.slug }] : []);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = DATA.projects.find(({ caseStudy }) => caseStudy?.slug === slug);
  if (!project) notFound();

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      url: `/projects/${slug}`,
      ...(project.image && { images: [{ url: project.image, alt: project.imageAlt }] }),
    },
  };
}

export default async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  const project = DATA.projects.find(({ caseStudy }) => caseStudy?.slug === slug);
  if (!project?.caseStudy) notFound();

  const { caseStudy } = project;

  return (
    <main className="mx-auto w-full max-w-4xl">
      <Link href="/#projects" className="inline-flex min-h-11 items-center text-sm font-medium text-primary underline-offset-4 hover:underline">Back to selected work</Link>
      <article className="mt-6 space-y-10 sm:space-y-14">
        <header className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold text-primary">{project.category}</p>
          <h1 className="text-4xl leading-tight tracking-tight sm:text-6xl">{project.title}</h1>
          <p className="mt-4 font-medium">{caseStudy.role}</p>
          <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tag) => <Badge key={tag} variant="outline">{tag}</Badge>)}
          </div>
        </header>
        {project.image && (
          <figure>
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-card">
              <Image src={project.image} alt={project.imageAlt ?? ""} fill sizes="(max-width: 1023px) 100vw, 896px" className="object-cover" />
            </div>
            <figcaption className="mt-2 text-sm text-muted-foreground">{project.imageCaption}</figcaption>
          </figure>
        )}
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
          <section>
            <h2 className="mb-3 text-2xl">The problem</h2>
            <p className="leading-relaxed text-muted-foreground">{caseStudy.problem}</p>
          </section>
          <section>
            <h2 className="mb-3 text-2xl">My contribution</h2>
            <p className="leading-relaxed text-muted-foreground">{caseStudy.approach}</p>
          </section>
        </div>
        <section>
          <h2 className="mb-4 text-2xl">The workflow</h2>
          <ol className="grid gap-3 sm:grid-cols-3">
            {caseStudy.workflow.map(({ title, description }) => (
              <li key={title} className="rounded-xl border border-border bg-card p-4">
                <h3 className="mb-2 text-xl">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
              </li>
            ))}
          </ol>
        </section>
        <section className="rounded-2xl border border-border bg-card p-5 sm:p-7">
          <h2 className="mb-3 text-2xl">Explore the demo</h2>
          <p className="max-w-2xl leading-relaxed text-muted-foreground">{caseStudy.demo}</p>
          <div className="intro-actions mt-5">
            <a className="intro-action-primary" href={caseStudy.demoGuide}>Local demo guide</a>
            {project.href && <a className="intro-action-secondary" href={project.href}>View source</a>}
          </div>
        </section>
      </article>
    </main>
  );
}
