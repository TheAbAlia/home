import React from "react";

const ArrowIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M4 16L16 4M6 4H16V14"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProjectVisual = ({ item, index }) => {
  const number = String(index + 1).padStart(2, "0");

  return (
    <div className="work-visual" aria-hidden="true">
      <div className="work-visual__top">
        <span>ALIA / SELECTED WORK</span>
        <span>FIG. {number}</span>
      </div>

      <div className="work-visual__stage">
        <div className="work-visual__orbit work-visual__orbit--one" />
        <div className="work-visual__orbit work-visual__orbit--two" />

        <div className="work-visual__cross work-visual__cross--one">
          +
        </div>
        <div className="work-visual__cross work-visual__cross--two">
          +
        </div>

        <div className="work-visual__center">
          <span className="work-visual__center-index">
            INDEPENDENT / SYSTEMS
          </span>

          <span className="work-visual__monogram">
            {item.visualMark || "A"}
            <span className="work-visual__monogram-dot">.</span>
          </span>

          <span className="work-visual__center-bottom">
            DESIGN × ENGINEERING
          </span>
        </div>
      </div>

      <div className="work-visual__bottom">
        <span>STRATEGY / ARCHITECTURE / DELIVERY</span>
        <span>© {item.year || "2026"}</span>
      </div>
    </div>
  );
};

const SelectedWork = ({ work }) => {
  const items = work?.items || [];

  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const elements = Array.from(
      section.querySelectorAll("[data-work-reveal]")
    );

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      elements.forEach((element) => {
        element.classList.add("is-visible");
      });
      return undefined;
    }

    section.classList.add("work-motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -40px 0px",
        threshold: 0.08,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [items.length]);

  if (!work?.show || items.length === 0) return null;

  return (
    <section
      id="work"
      ref={sectionRef}
      className="portfolio-section selected-work selected-work--editorial"
      aria-labelledby="selected-work-heading"
    >
      <div className="site-container">
        <header className="work-heading" data-work-reveal>
          <div className="work-heading__meta">
            <span>02 / SELECTED WORK</span>
            <span>AN ONGOING PRACTICE</span>
          </div>

          <div className="work-heading__body">
            <h2 id="selected-work-heading">
              Things worth
              <span>building<span className="work-heading__dot">.</span></span>
            </h2>

            <div className="work-heading__aside">
              <span className="work-heading__asterisk" aria-hidden="true">
                ✳
              </span>

              <p>
                A selection of ventures and technical work
                shaped by independent thinking, rigorous
                engineering and long-term usefulness.
              </p>

              <span className="work-heading__count">
                INDEX / {String(items.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </header>

        <div className="work-collection">
          {items.map((item, index) => (
            <article
              className="work-project"
              key={`${item.title}-${index}`}
              data-work-reveal
            >
              <div className="work-project__meta">
                <span>
                  PROJECT / {item.number ||
                    String(index + 1).padStart(3, "0")}
                </span>

                <span>{item.eyebrow}</span>
                <span>{item.year}</span>
              </div>

              <div className="work-project__grid">
                <div className="work-project__visual-wrap">
                  {item.image ? (
                    <div className="work-project__image">
                      <img
                        src={item.image}
                        alt={item.imageAlt || `${item.title} project preview`}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ) : (
                    <ProjectVisual item={item} index={index} />
                  )}
                </div>

                <div className="work-project__content">
                  <div className="work-project__content-top">
                    <span className="work-project__eyebrow">
                      {item.category || "INDEPENDENT VENTURE"}
                    </span>

                    <h3>{item.title}</h3>

                    <p className="work-project__description">
                      {item.description}
                    </p>
                  </div>

                  <div className="work-project__content-bottom">
                    {item.meta?.length > 0 && (
                      <div className="work-project__disciplines">
                        <span className="work-project__small-label">
                          AREAS OF PRACTICE
                        </span>

                        <div className="work-project__tags">
                          {item.meta.map((label) => (
                            <span key={label}>{label}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.link && (
                      <a
                        className="work-project__link"
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Explore ${item.title} (opens in a new tab)`}
                      >
                        <span>
                          {item.linkLabel || "Explore project"}
                        </span>
                        <span className="work-project__link-icon">
                          <ArrowIcon />
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="work-outro" data-work-reveal>
          <div className="work-outro__label">
            <span className="work-outro__line" />
            <span>THE WORK CONTINUES</span>
          </div>

          <p>
            Good systems begin with
            <em> better questions.</em>
          </p>

          <a href="#skills">
            Explore my expertise <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
