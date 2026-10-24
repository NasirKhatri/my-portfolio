import Image from "next/image";
import photo from "../../public/static/muhammadNasir.jpg";
import { about, courses, education, experience, profile, projects, skills, stats } from "@/content";
import { CopyEmail, RevealObserver, StickyHeader } from "@/components/Client";
import {
  ArrowUpRightIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/Icons";

function Section({
  id,
  index,
  label,
  title,
  children,
}: {
  id: string;
  index: string;
  label: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container section-grid">
        <p className="section-label reveal">
          <span>{index}</span>
          {label}
        </p>
        <div className="section-body">
          <h2 id={`${id}-title`} className="section-title reveal">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </section>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags" aria-label="Technologies">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <>
      <StickyHeader name={profile.name} role={profile.role} email={profile.email} resume={profile.resume} photo={photo} />
      <RevealObserver />

      <main id="top">
        {/* Hero */}
        <section className="hero" id="hero">
          <div className="hero-bg" aria-hidden />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="pill reveal">
                <span className="dot" aria-hidden />
                Currently at {profile.currentCompany}
              </p>
              <h1 className="reveal">
                <span className="hero-name">
                  Hi, I’m {profile.shortName}<span className="accent">.</span>
                </span>
                I build <em className="serif">interfaces</em> people enjoy using.
              </h1>
              <p className="lead reveal">
                {profile.role} crafting fast, accessible web apps with Angular, React and Next.js. Before writing code I
                spent a decade in procurement and supply chain, so I build software with the business problem in mind.
              </p>
              <div className="cta-row reveal">
                <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                  <MailIcon /> Get in touch
                </a>
                <a className="btn btn-ghost" href={profile.resume} download>
                  <DownloadIcon /> Download résumé
                </a>
              </div>
              <ul className="socials reveal" aria-label="Social links">
                <li>
                  <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <GitHubIcon />
                  </a>
                </li>
                <li>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <LinkedInIcon />
                  </a>
                </li>
                <li className="location">
                  <MapPinIcon /> {profile.location}
                </li>
              </ul>
            </div>

            <figure className="hero-photo reveal">
              <div className="photo-frame">
                <Image
                  src={photo}
                  alt={`Portrait of ${profile.name}`}
                  priority
                  placeholder="blur"
                  sizes="(max-width: 960px) 70vw, 400px"
                />
              </div>
              <figcaption className="photo-caption">
                <span className="mono">Since 2019</span>
                <span>Angular · React · Next.js</span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* About */}
        <Section
          id="about"
          index="01"
          label="About"
          title={
            <>
              From supply chains to <em className="serif">user interfaces</em>
            </>
          }
        >
          <div className="prose reveal">
            {about.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <dl className="stats reveal">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* Experience */}
        <Section id="experience" index="02" label="Experience" title="Where I’ve worked">
          <ol className="jobs">
            {experience.map((job) => (
              <li key={job.company} className="job reveal">
                <p className="mono period">{job.period}</p>
                <h3>
                  {job.role} <span className="at">· {job.company}</span>
                </h3>
                <p className="job-summary">{job.summary}</p>
                <ul className="bullets">
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <Tags items={job.tech} />
              </li>
            ))}
          </ol>
        </Section>

        {/* Projects */}
        <Section
          id="projects"
          index="03"
          label="Projects"
          title={
            <>
              Things I’ve <em className="serif">built</em>
            </>
          }
        >
          <div className="projects">
            {projects.map((p, i) => (
              <article key={p.title} className={`project reveal${p.featured ? " featured" : ""}`}>
                <div className="project-head">
                  <span className="mono project-num">{String(i + 1).padStart(2, "0")}</span>
                  {p.featured && <span className="badge">Live project</span>}
                </div>
                <h3>{p.title}</h3>
                <p className="tagline">{p.tagline}</p>
                <p className="project-desc">{p.description}</p>
                <ul className="bullets">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <div className="project-foot">
                  <Tags items={p.tech} />
                  {p.links.length > 0 && (
                    <div className="project-links">
                      {p.links.map((l) => (
                        <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="link">
                          {l.label} <ArrowUpRightIcon width={16} height={16} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" index="04" label="Skills" title="My toolkit">
          <dl className="skills">
            {skills.map((s) => (
              <div key={s.group} className="skill-row reveal">
                <dt>{s.group}</dt>
                <dd>
                  <ul className="chips">
                    {s.items.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* Education */}
        <Section
          id="education"
          index="05"
          label="Education"
          title={
            <>
              Always <em className="serif">learning</em>
            </>
          }
        >
          <div className="edu-grid">
            <div className="reveal">
              <h3 className="sub">Degrees</h3>
              <ul className="edu-list">
                {education.map((e) => (
                  <li key={e.title}>
                    <div>
                      <strong>{e.title}</strong>
                      <span>
                        {e.place} · {e.detail}
                      </span>
                    </div>
                    <span className="mono period">{e.period}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal">
              <h3 className="sub">Courses</h3>
              <ul className="edu-list">
                {courses.map((c) => (
                  <li key={c.place}>
                    <div>
                      <strong>{c.title}</strong>
                      <span>{c.place}</span>
                    </div>
                    <span className="mono period">{c.period}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Contact */}
        <section id="contact" className="contact" aria-labelledby="contact-title">
          <div className="container">
            <div className="contact-card reveal">
              <p className="section-label">
                <span>06</span>Contact
              </p>
              <h2 id="contact-title">
                Let’s build something <em className="serif">great</em> together.
              </h2>
              <p className="lead">Have a role, a project or just a question? My inbox is always open.</p>
              <div className="email-row">
                <a className="email" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
                <CopyEmail email={profile.email} />
              </div>
              <ul className="contact-links">
                <li>
                  <a href={`tel:${profile.phoneHref}`}>
                    <PhoneIcon /> {profile.phone}
                  </a>
                </li>
                <li>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    <LinkedInIcon /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    <GitHubIcon /> GitHub
                  </a>
                </li>
                <li>
                  <a href={profile.resume} download>
                    <DownloadIcon /> Résumé
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <a href="#top" className="mono">
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}
