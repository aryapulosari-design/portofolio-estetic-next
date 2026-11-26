import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import ScrollPortrait from "@/components/scroll-portrait";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import CertificatesSection from "@/components/section/certificates-section";
import JourneySection from "@/components/section/journey-section";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="relative flex min-h-dvh flex-col gap-20 sm:gap-28">
      <div className="intro-story">
        <section id="hero" className="intro-hero">
          <h1>Hi, I&apos;m <span>Arya.</span></h1>
          <p className="intro-description">{DATA.description}</p>
          <div className="intro-actions">
            <Link href="/#projects" className="intro-action-primary">View projects</Link>
            <Link href="/#about" className="intro-action-secondary">About me</Link>
          </div>
        </section>
        <ScrollPortrait src={DATA.avatarUrl} alt="Potret Arya Kharisudin Irfani mengenakan jaket hitam" />
        <section id="about" className="intro-about scroll-reveal">
          <p className="intro-eyebrow">About</p>
          <h2>Networks, logs, and the code behind them.</h2>
          <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
            <Markdown>{DATA.summary}</Markdown>
          </div>
        </section>
      </div>
      <div className="mx-auto w-full max-w-4xl"><JourneySection /></div>
      <section id="skills" className="mx-auto w-full max-w-2xl">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                  <span className="text-foreground text-sm font-medium">{skill}</span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <ProjectsSection />
      <div className="mx-auto w-full max-w-2xl">
        <CertificatesSection />
      </div>
      <section id="contact" className="mx-auto w-full max-w-2xl">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
