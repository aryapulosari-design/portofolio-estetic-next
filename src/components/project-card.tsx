"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

function ProjectImage({ src, alt, sizes, animated }: { src: string; alt: string; sizes: string; animated: boolean }) {
  const [failedSrc, setFailedSrc] = useState<string>();

  if (failedSrc === src) return null;

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      onError={() => setFailedSrc(src)}
      className={cn(
        "object-cover",
        animated && "motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.025] motion-safe:group-focus-within:scale-[1.025]"
      )}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates?: string;
  tags: readonly string[];
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  featured?: boolean;
  caseStudy?: { slug: string; role: string };
}

export function ProjectCard({
  title, href, description, dates, tags, image, imageAlt = "", imageCaption, video, links, featured = false, caseStudy,
}: Props) {
  const projectHref = caseStudy ? `/projects/${caseStudy.slug}` : href;

  return (
    <article className={cn(
      "group min-w-0 overflow-hidden border border-border bg-card/55",
      featured
        ? "flex h-full flex-col rounded-[1.35rem]"
        : "grid grid-cols-[5rem_minmax(0,1fr)] items-start gap-3 rounded-2xl p-3 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-4 sm:p-4",
      projectHref && "hover:border-primary/60 focus-within:border-primary motion-safe:transition-colors"
    )}>
      <figure className={cn(
        "relative overflow-hidden bg-muted",
        featured ? "aspect-[2/1] border-b border-border sm:aspect-auto sm:h-48 lg:h-56" : "aspect-[4/3] rounded-lg"
      )}>
        {video ? (
          <video src={video} controls preload="metadata" playsInline className="absolute inset-0 size-full object-cover" />
        ) : image ? (
          <ProjectImage
            src={image}
            alt={featured ? imageAlt : ""}
            sizes={featured ? "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 512px" : "80px"}
            animated={Boolean(projectHref)}
          />
        ) : null}
        {featured && image && imageCaption && !video && (
          <figcaption className="absolute bottom-2 left-2 rounded-md bg-background/90 px-2.5 py-1 text-xs text-foreground">
            {imageCaption}
          </figcaption>
        )}
      </figure>
      <div className={cn("flex min-w-0 flex-col", featured ? "flex-1 gap-3 p-5 sm:p-6" : "gap-2")}>
        <h3 className={featured ? "text-2xl leading-tight sm:text-3xl" : "text-lg leading-tight"}>
          {title}
        </h3>
        {featured && caseStudy && <p className="text-sm font-medium text-primary">{caseStudy.role}</p>}
        {dates && <time className="text-xs text-muted-foreground">{dates}</time>}
        <div className="text-pretty text-sm leading-relaxed text-muted-foreground">
          <Markdown>{description}</Markdown>
        </div>
        <div className={cn("flex flex-wrap gap-1.5", featured && "mt-auto pt-1")}>
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="h-auto min-h-6 border-border px-2 text-[11px] font-medium">
              {tag}
            </Badge>
          ))}
        </div>
        {projectHref && (
          <Link
            href={projectHref}
            target={caseStudy ? undefined : "_blank"}
            rel={caseStudy ? undefined : "noopener noreferrer"}
            aria-label={`${caseStudy ? "Read case study" : "View source"}: ${title}`}
            className="inline-flex min-h-11 w-fit items-center rounded-md text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            {caseStudy ? "Read case study" : "View source"}
          </Link>
        )}
        {links?.map(({ href, icon, type }) => (
          <Link key={href} href={href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 w-fit items-center gap-2 rounded-md text-sm text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
            {icon}{type}
          </Link>
        ))}
      </div>
    </article>
  );
}
