import { DATA } from "@/data/resume";
import Link from "next/link";

export default function CertificatesSection() {
  return (
    <section id="certificates" className="certificates-section scroll-reveal" aria-labelledby="certificates-heading">
      <div className="certificates-heading">
        <div>
          <h2 id="certificates-heading">Certificates</h2>
        </div>
        <p>Courses and achievements backed by the original certificates.</p>
      </div>
      <div className="certificates-grid">
        {DATA.certificates.map(({ title, issuer, issued, href }) => (
          <Link className="certificate-folder" href={href} key={title} target="_blank" rel="noopener noreferrer">
            <div className="certificate-folder-top">
              <span className="certificate-issuer">{issuer}</span>
              <span className="certificate-issued">{issued}</span>
            </div>
            <h3>{title}</h3>
            <span className="text-sm font-semibold">View certificate ↗</span>
          </Link>
        ))}
      </div>
      <Link className="certificates-source" href={DATA.contact.social.LinkedIn.url} target="_blank" rel="noopener noreferrer">
        View my LinkedIn profile
      </Link>
    </section>
  );
}
