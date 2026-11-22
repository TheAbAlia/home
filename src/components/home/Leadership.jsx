import React from "react";

const Leadership = ({ img = [] }) => {
  if (!Array.isArray(img) || img.length === 0) return null;

  return (
    <section
      id="background"
      className="education-v6"
      aria-labelledby="education-heading"
    >
      <div className="site-container">
        <header className="education-v6__header">
          <div className="education-v6__overline">
            <span>06 / ACADEMIC BACKGROUND</span>
            <span>FOUNDATIONS OF THE PRACTICE</span>
          </div>

          <div className="education-v6__intro">
            <div className="education-v6__headline">
              <span className="education-v6__headline-index">
                AN INTELLECTUAL FOUNDATION
              </span>

              <h2 id="education-heading">
                Mathematics
                <span>
                  before <em>machines.</em>
                </span>
              </h2>
            </div>

            <div className="education-v6__intro-aside">
              <span
                className="education-v6__asterisk"
                aria-hidden="true"
              >
                ✳
              </span>

              <p>
                Mathematics shaped how I approach complexity:
                finding structure, questioning assumptions,
                and reasoning from first principles.
              </p>

              <span className="education-v6__intro-note">
                THEORY AS A FOUNDATION FOR PRACTICE
              </span>
            </div>
          </div>
        </header>

        <div className="education-v6__records">
          <div className="education-v6__records-heading">
            <span>ACADEMIC RECORD</span>
            <span>
              {String(img.length).padStart(2, "0")} ENTRIES
            </span>
          </div>

          {img.map((item, index) => (
            <article
              className="education-v6__record"
              key={`${item.name}-${index}`}
            >
              <div className="education-v6__index">
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="education-v6__index-line" />
              </div>

              <div className="education-v6__record-main">
                <span className="education-v6__record-label">
                  {index === 0
                    ? "DOCTORAL EDUCATION"
                    : index === 1
                    ? "GRADUATE EDUCATION"
                    : "ACADEMIC EDUCATION"}
                </span>

                <h3>{item.degree}</h3>

                <p className="education-v6__university">
                  {item.name}
                </p>

                {item.mark && (
                  <div className="education-v6__qualification">
                    <span className="education-v6__qualification-symbol">
                      ↳
                    </span>
                    <span>{item.mark}</span>
                  </div>
                )}
              </div>

              <div className="education-v6__record-aside">
                <div className="education-v6__metadata">
                  {item.timeline && (
                    <span>{item.timeline}</span>
                  )}
                  {item.ort && (
                    <span>{item.ort}</span>
                  )}
                </div>

                <span
                  className="education-v6__record-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="education-v6__outro">
          <div className="education-v6__outro-label">
            <span className="education-v6__outro-line" />
            <span>FROM THEORY TO PRACTICE</span>
          </div>

          <div className="education-v6__outro-content">
            <p>
              The tools change.
              <span> The principles endure.</span>
            </p>

            <a href="#contact">
              Let's build something meaningful
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <footer className="education-v6__footer">
          <span>RIGOR / ABSTRACTION / SYSTEMS</span>
          <span>ALIA / PERSONAL</span>
        </footer>
      </div>
    </section>
  );
};

export default Leadership;
