import { useEffect, useMemo, useState } from "react";
import {
  ABOUT,
  CONTACT,
  EDUCATION,
  EXPERTISE,
  PROFILE,
  PROJECTS,
  SKILLS_ROW_1,
  SKILLS_ROW_2,
  STATEMENTS,
} from "./data";
import {
  ArrowRight,
  BoltIcon,
  DocIcon,
  GithubIcon,
  GithubStrokeIcon,
  LayersIcon,
  LinesIcon,
  LinkedinIcon,
  MailIcon,
  MediaIcon,
  PhoneIcon,
  PlusIcon,
  StackIcon,
} from "./components/Icons";
import Portrait from "./components/Portrait";
import { useNavScroll, useReveal } from "./hooks";

/** Renders a paragraph with **bold** segments converted to <strong>. */
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("**") && p.endsWith("**") ? (
          <strong key={i}>{p.slice(2, -2)}</strong>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}

function projectIcon(name: string) {
  if (name === "media") return <MediaIcon />;
  return <GithubIcon />;
}

function expertiseIcon(name: string) {
  switch (name) {
    case "plus":
      return <PlusIcon />;
    case "lines":
      return <LinesIcon />;
    case "stack":
      return <StackIcon />;
    case "doc":
      return <DocIcon />;
    case "layers":
      return <LayersIcon />;
    case "bolt":
      return <BoltIcon />;
    default:
      return <PlusIcon />;
  }
}

export default function App() {
  useReveal();
  useNavScroll();

  // Rotating statement
  const [sIdx, setSIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setSIdx((i) => (i + 1) % STATEMENTS.length),
      3400
    );
    return () => clearInterval(id);
  }, []);

  // Pre-build marquee HTML (duplicated for seamless loop)
  const marquee1 = useMemo(
    () =>
      [...SKILLS_ROW_1, ...SKILLS_ROW_1]
        .map((s, i) => `<span class="${i % 3 === 0 ? "hi" : ""}">${s}</span>`)
        .join(""),
    []
  );
  const marquee2 = useMemo(
    () =>
      [...SKILLS_ROW_2, ...SKILLS_ROW_2]
        .map((s, i) => `<span class="${i % 3 === 0 ? "hi" : ""}">${s}</span>`)
        .join(""),
    []
  );

  return (
    <>
      <div className="grain" aria-hidden="true" />

      {/* NAV */}
      <header className="nav" id="nav">
        <div className="nav-inner">
          <div className="logo">{PROFILE.name}</div>
          <nav className="navlinks">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#expertise">Expertise</a>
            <a href="#education">Education</a>
          </nav>
          <a href="#contact" className="nav-cta">
            Contact
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <Portrait />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-bg" aria-hidden="true" />
          <div className="hero-scrim" aria-hidden="true" />
          <div className="hero-vignette" aria-hidden="true" />
          <div className="hero-content">
            <div className="wrap">
              <div className="hero-left reveal">
                <span className="hero-eyebrow">{PROFILE.tagline}</span>
                <h1>
                  <span className="line">
                    <span>NAMITH</span>
                  </span>
                  <span className="line">
                    <span>J</span>
                  </span>
                </h1>
                <ul className="hero-roles">
                  {PROFILE.roles.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="scroll-cue">
            <span>Scroll</span>
            <span className="bar" />
          </div>
        </section>

        {/* ROTATING STATEMENT */}
        <section className="statement">
          <div className="wrap">
            <div className="statement-inner">
              {STATEMENTS.map((parts, i) => (
                <div
                  key={i}
                  className={`statement-line ${i === sIdx ? "active" : ""}`}
                >
                  {parts[0]}
                  <em>{parts[1]}</em>
                  {parts[2]}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about">
          <div className="wrap">
            <div className="about-grid">
              <div className="reveal">
                <span className="eyebrow">About</span>
                <h3>
                  {ABOUT.heading.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h3>
              </div>
              <div className="reveal">
                {ABOUT.paragraphs.map((p, i) => (
                  <p key={i}>
                    <RichText text={p} />
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="marquee-outer reveal">
            <div className="marquee-row">
              <div
                className="marquee left"
                dangerouslySetInnerHTML={{ __html: marquee1 }}
              />
            </div>
            <div className="marquee-row" style={{ borderBottom: "none" }}>
              <div
                className="marquee right"
                dangerouslySetInnerHTML={{ __html: marquee2 }}
              />
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">Selected Work</span>
              <h2>Projects & Systems</h2>
            </div>
          </div>
          <div className="wrap">
            <div className="work-grid reveal">
              {PROJECTS.map((proj) => (
                <article className="work-card" key={proj.title}>
                  <div className="work-card-head">
                    <div className="project-icon" aria-hidden="true">
                      {projectIcon(proj.icon)}
                    </div>
                    <span className="work-badge">{proj.badge}</span>
                  </div>
                  <h3>{proj.title}</h3>
                  <p>{proj.description}</p>
                  <div className="work-tags">
                    {proj.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="work-card-footer">
                    <span className="work-category">{proj.category}</span>
                    <span className="work-year mono">{proj.year}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERTISE */}
        <section id="expertise">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">Expertise</span>
              <h2>Skills & Capabilities</h2>
            </div>
          </div>
          <div className="wrap">
            <div className="exp-grid reveal">
              {EXPERTISE.map((e) => (
                <a className="exp-card" href="#contact" key={e.title}>
                  <div className="exp-card-top">
                    <span className="exp-icon" aria-hidden="true">
                      {expertiseIcon(e.icon)}
                    </span>
                  </div>
                  <h4>{e.title}</h4>
                  <p>{e.description}</p>
                  <div className="exp-card-footer">
                    <span>Explore</span>
                    <span className="arrow">→</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">Record</span>
              <h2>Education & Credentials</h2>
            </div>
            <div className="tl reveal">
              {EDUCATION.map((item) => (
                <div className="tl-item" key={item.title}>
                  <div className="tlmeta">{item.meta}</div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact">
          <div className="wrap">
            <div className="cta-banner reveal">
              <div>
                <span className="eyebrow" style={{ color: "#c9b8ff" }}>
                  Start a Project
                </span>
                <h2 className="cta-title">
                  Have an idea?
                  <br />
                  Let's make it real.
                </h2>
                <p className="cta-sub">
                  Computer vision, data, or full-stack — I move fast and ship
                  clean.
                </p>
              </div>
              <a className="cta-btn" href={`mailto:${CONTACT.email}`}>
                <MailIcon width={18} height={18} />
                Drop a mail
                <ArrowRight width={16} height={16} />
              </a>
            </div>

            <div className="contact-cards reveal">
              <a className="ccard" href={`mailto:${CONTACT.email}`}>
                <span className="ci">
                  <MailIcon width={20} height={20} />
                </span>
                <span className="ck">Email</span>
                <span className="cv">{CONTACT.email}</span>
                <span className="ca">↗</span>
              </a>
              <a className="ccard" href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>
                <span className="ci">
                  <PhoneIcon width={20} height={20} />
                </span>
                <span className="ck">Phone</span>
                <span className="cv">{CONTACT.phone}</span>
                <span className="ca">↗</span>
              </a>
              <a
                className="ccard"
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ci">
                  <LinkedinIcon width={20} height={20} />
                </span>
                <span className="ck">LinkedIn</span>
                <span className="cv">Namith J</span>
                <span className="ca">↗</span>
              </a>
              <a
                className="ccard"
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ci">
                  <GithubStrokeIcon width={20} height={20} />
                </span>
                <span className="ck">GitHub</span>
                <span className="cv">@Namithj09</span>
                <span className="ca">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footer-inner">
          <span>© 2026 {PROFILE.name}. All rights reserved.</span>
          <span>{CONTACT.location}</span>
        </div>
      </footer>
    </>
  );
}
