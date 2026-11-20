import Link from "next/link";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  return (
    <div className="rounded-2xl border bg-card p-8 sm:p-10">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Find me online
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          Reach me by email, explore my code on GitHub, or follow my community work on LinkedIn.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={`mailto:${DATA.contact.email}`}
            className="inline-flex min-h-11 items-center rounded-full border border-border px-5 font-medium text-foreground hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Email
          </Link>
          <Link
            href={DATA.contact.social.GitHub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center rounded-full border border-border px-5 font-medium text-foreground hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            GitHub
          </Link>
          <Link
            href={DATA.contact.social.LinkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center rounded-full bg-primary px-5 font-medium text-primary-foreground hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
}

