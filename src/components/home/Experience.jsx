import React from "react";
import ExperienceCard from "./ExperienceCard";

const Experience = ({ experiences }) => {
  const entries = experiences?.data || [];

  if (!entries.length) return null;

  return (
    <section
      id="experiences"
      className="career-v4"
      aria-labelledby="career-heading"
    >
      <div className="site-container">
        <header className="career-v4__header">
          <div className="career-v4__eyebrow">
            <span>04 / EXPERIENCE</span>
            <span>PROFESSIONAL PRACTICE</span>
          </div>

          <div className="career-v4__heading-grid">
            <h2 id="career-heading">
              Built in
              <span>the real world<span className="career-v4__period">.</span></span>
            </h2>

            <div className="career-v4__intro">
              <span className="career-v4__symbol" aria-hidden="true">
                ↗
              </span>

              <p>
                Applying analytical rigor and technical
                expertise to real business challenges,
                from data foundations to intelligent
                decision-support systems.
              </p>

              <span className="career-v4__intro-label">
                SELECTED PROFESSIONAL HISTORY
              </span>
            </div>
          </div>
        </header>

        <div className="career-v4__timeline">
          <div className="career-v4__timeline-header">
            <span>INDEX / ROLE</span>
            <span>ORGANIZATION & CONTRIBUTION</span>
            <span>PERIOD</span>
          </div>

          <div className="career-v4__entries">
            {entries.map((entry, index) => (
              <ExperienceCard
                key={`${entry.role}-${entry.company}-${index}`}
                data={entry}
                index={index}
                total={entries.length}
              />
            ))}
          </div>
        </div>

        <footer className="career-v4__footer">
          <div className="career-v4__footer-note">
            <span className="career-v4__footer-mark" aria-hidden="true">
              ✳
            </span>

            <span>
              MATHEMATICAL THINKING.
              <br />
              PRACTICAL ENGINEERING.
            </span>
          </div>

          <a href="#aboutme" className="career-v4__next">
            More about my background
            <span aria-hidden="true">↗</span>
          </a>
        </footer>
      </div>
    </section>
  );
};

export default Experience;
