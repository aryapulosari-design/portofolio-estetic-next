import { DATA } from "@/data/resume";
import Link from "next/link";

export default function JourneySection() {
  return (
    <section id="experience" tabIndex={-1} className="journey-section scroll-reveal" aria-labelledby="journey-heading">
      <div className="journey-intro">
        <p className="intro-eyebrow">Experience</p>
        <h2 id="journey-heading">Cybersecurity, product building, and community.</h2>
      </div>
      <div className="journey-columns">
        <div id="education" className="journey-column">
          <h3>Education</h3>
          <ol className="journey-list">
            {DATA.education.map((item, index) => (
              <li className="journey-item" key={item.school}>
                <span className="journey-node" aria-hidden="true">{index + 1}</span>
                <div className="journey-entry">
                  <div className="journey-entry-top">
                    <div className="journey-identity">
                      <span className="journey-mark" aria-hidden="true">{item.monogram}</span>
                      {item.href ? <Link href={item.href} target="_blank" rel="noopener noreferrer">{item.school}</Link> : <strong>{item.school}</strong>}
                    </div>
                    <span className="journey-date">{item.start} – {item.end}</span>
                  </div>
                  <p className="journey-role">{item.degree}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="journey-column">
          <h3>Work &amp; community</h3>
          <ol className="journey-list">
            {DATA.work.map((item, index) => (
              <li className="journey-item" key={item.company}>
                <span className="journey-node" aria-hidden="true">{index + 1}</span>
                <div className="journey-entry">
                  <div className="journey-entry-top">
                    <div className="journey-identity">
                      <span className="journey-mark" aria-hidden="true">{item.monogram}</span>
                      <strong>{item.company}</strong>
                    </div>
                    <span className="journey-date">{item.start} – {item.end}</span>
                  </div>
                  <p className="journey-role">{item.title}</p>
                  <p className="journey-description">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
