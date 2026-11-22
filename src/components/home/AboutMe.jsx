import React from "react";

const facts = [
  { label: "PRACTICE", value: "Data & AI Consulting" },
  { label: "FOUNDATION", value: "Ph.D. Mathematics" },
  { label: "APPROACH", value: "Structure before tools" },
];

const AboutMe = ({ message, link, resume }) => {
  return (
    <section
      id="aboutme"
      className="about-v5"
      aria-labelledby="about-v5-heading"
    >
      <div className="site-container">
        <header className="about-v5__header">
          <div className="about-v5__overline">
            <span>05 / ABOUT</span>
            <span>THE PERSON BEHIND THE PRACTICE</span>
          </div>

          <div className="about-v5__headline">
            <h2 id="about-v5-heading">
              Structure first.
              <span>
                Technology <em>second.</em>
              </span>
            </h2>

            <div className="about-v5__header-aside">
              <span aria-hidden="true" className="about-v5__symbol">
                ✳
              </span>
              <p>
                A mathematical foundation.
                An engineering mindset.
                A focus on building things that matter.
              </p>
            </div>
          </div>
        </header>

        <div className="about-v5__composition">
          <div className="about-v5__portrait-column">
            <figure className="about-v5__figure">
              <div className="about-v5__image-frame">
                {link ? (
                  <img
                    src={link}
                    alt="Portrait of Abdalla Alia"
                    className="about-v5__portrait"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="about-v5__image-fallback">
                    <span>A.</span>
                  </div>
                )}

                <span className="about-v5__image-index">
                  FIG. 01 / PORTRAIT
                </span>
              </div>

              <figcaption className="about-v5__caption">
                <span>ABDALLA ALIA, PH.D.</span>
                <span>PERSONAL / PROFILE</span>
              </figcaption>
            </figure>

            <div className="about-v5__portrait-note">
              <span className="about-v5__note-rule" />
              <span>MATHEMATICS / DATA / SYSTEMS</span>
            </div>
          </div>

          <div className="about-v5__content">
            <div className="about-v5__content-top">
              <div className="about-v5__content-label">
                <span>01</span>
                <span>THE APPROACH</span>
              </div>

              <p className="about-v5__lead">
                I work at the intersection of
                <span> analytical thinking,</span>
                {" "}software engineering and
                applied intelligence.
              </p>

              <p className="about-v5__body">
                {message ||
                  "I work across data, software and applied AI, with a particular interest in problems where the technical challenge is only part of the picture. My background in mathematics taught me to look for structure before tools, and that still shapes how I work today."}
              </p>
            </div>

            <div className="about-v5__profile">
              <div className="about-v5__content-label">
                <span>02</span>
                <span>AT A GLANCE</span>
              </div>

              <dl className="about-v5__facts">
                {facts.map((fact) => (
                  <div className="about-v5__fact" key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}

                <div className="about-v5__fact">
                  <dt>FOUNDER</dt>
                  <dd>
                    <a
                      href="#contact"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Independent Projects <span aria-hidden="true">↗</span>
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="about-v5__actions">
              {resume && (
                <a
                  className="about-v5__resume"
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View curriculum vitae</span>
                  <span className="about-v5__action-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              )}

              <a className="about-v5__next" href="#contact">
                Start a conversation
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        <footer className="about-v5__footer">
          <span>RIGOR IN THINKING / CLARITY IN EXECUTION</span>
          <span>ALIA / PERSONAL</span>
        </footer>
      </div>
    </section>
  );
};

export default AboutMe;
