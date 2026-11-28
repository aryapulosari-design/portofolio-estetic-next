import { DATA } from "@/data/resume";

export default function CertificatesSection() {
  return (
    <ul id="certificates" tabIndex={-1} className="grid gap-2">
      {DATA.certificates.map(({ title, issuer, issued, href }) => (
        <li key={title}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 flex-wrap items-center justify-between gap-x-4 gap-y-2 rounded-xl border border-border bg-card/55 px-4 py-3 hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <span className="min-w-0">
              <span className="block font-semibold">{title}</span>
              <span className="block text-sm text-muted-foreground">{issuer} · {issued}</span>
            </span>
            <span className="text-sm font-medium text-primary">View certificate</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
