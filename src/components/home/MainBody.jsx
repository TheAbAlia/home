import React from "react";

const socialNames = {
  "fa-github": "GitHub",
  "fa-linkedin": "LinkedIn",
  "fa-xing": "Xing",
};

const MainBody = React.forwardRef(({ icons = [] }, ref) => {
  return (
    <section id="home" className="hero">
      <div className="site-container hero__inner">
        <div className="hero__topline">
          <div className="hero__identity">
            <span className="alia-label">ABDALLA ALIA, PH.D.</span>
            <span className="alia-label">Data Management & AI Expert</span>
          </div>

          <div className="hero__status">
            <span className="hero__status-dot" aria-hidden="true" />
            <span className="alia-label">
              DATA / INTELLIGENCE / SYSTEMS
            </span>
          </div>
        </div>

        <div className="hero__content">
          <div className="hero__headline">
            <p className="hero__eyebrow hero-animate">
              INDEPENDENT THINKING. ENGINEERED SOLUTIONS.
            </p>

            <h1 ref={ref} className="hero__title">
              <span className="hero__title-line">
                <span className="hero__title-text">Data,</span>
              </span>

              <span className="hero__title-line hero__title-line--indent">
                <span className="hero__title-text">
                  intelligence
                </span>
              </span>

              <span className="hero__title-line">
                <span className="hero__title-text">
                  &amp; systems<span className="hero__period">.</span>
                </span>
              </span>
            </h1>
          </div>

          <div className="hero__lower hero-animate">
            <div className="hero__index" aria-hidden="true">
              <span>01 / 06</span>
              <span className="hero__index-rule" />
              <span>INTRODUCTION</span>
            </div>

            <div className="hero__intro">
              <p className="hero__statement">
                I design data platforms, intelligent systems
                and technical products around problems that
                deserve more than an off-the-shelf answer.
              </p>

              <p className="hero__byline">
                Founder of <strong>Independent Projects</strong> and
                senior data &amp; AI consultant.
              </p>

              <div className="hero__actions">
                <a className="hero__primary-link" href="#work">
                  <span>Explore selected work</span>
                  <span className="hero__link-arrow" aria-hidden="true">↗</span>
                </a>

                <a className="hero__secondary-link" href="#contact">
                  Get in touch <span aria-hidden="true">↗</span>
                </a>
              </div>

              <div className="hero__socials" aria-label="Social profiles">
                {icons.map((icon) => (
                  <a
                    key={icon.url}
                    href={icon.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero__social"
                  >
                    {socialNames[icon.image] || "Profile"}
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}

                <a
                  href="#contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__social"
                >
                  Independent Projects <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="hero__bottom hero-animate">
          <span className="alia-label">ALIA / PERSONAL</span>

          <a className="hero__scroll" href="#work">
            <span>SCROLL TO EXPLORE</span>
            <span className="hero__scroll-arrow" aria-hidden="true">↓</span>
          </a>

          <span className="alia-label hero__bottom-right">
            INDEPENDENT / EUROPE
          </span>
        </div>
      </div>
    </section>
  );
});

MainBody.displayName = "MainBody";

export default MainBody;
