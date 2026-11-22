import React from "react";

const Arrow = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M5 12H19M13 6L19 12L13 18"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Skills = ({ categories = [] }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const tabRefs = React.useRef([]);
  const uid = React.useId().replace(/:/g, "");

  if (!categories.length) return null;

  const safeIndex = Math.min(activeIndex, categories.length - 1);
  const active = categories[safeIndex];

  const selectTab = (index, focus = false) => {
    setActiveIndex(index);

    if (focus) {
      tabRefs.current[index]?.focus();
    }
  };

  const handleKeyDown = (event, index) => {
    let next = index;

    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        next = (index + 1) % categories.length;
        break;
      case "ArrowUp":
      case "ArrowLeft":
        next = (index - 1 + categories.length) % categories.length;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = categories.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    selectTab(next, true);
  };

  return (
    <section
      id="skills"
      className="expertise-v3"
      aria-labelledby="expertise-heading"
    >
      <div className="site-container">
        <header className="expertise-v3__header">
          <div className="expertise-v3__overline">
            <span>03 / EXPERTISE</span>
            <span>DISCIPLINES & CAPABILITIES</span>
          </div>

          <div className="expertise-v3__intro">
            <h2 id="expertise-heading">
              Depth across
              <span>disciplines<span className="expertise-v3__period">.</span></span>
            </h2>

            <div className="expertise-v3__intro-aside">
              <span className="expertise-v3__asterisk" aria-hidden="true">
                ✳
              </span>

              <p>
                From mathematical foundations to production
                systems. A practice connecting engineering,
                analytical thinking and applied intelligence.
              </p>

              <span className="expertise-v3__aside-note">
                SELECT A DISCIPLINE TO EXPLORE
              </span>
            </div>
          </div>
        </header>

        <div className="expertise-v3__workspace">
          <div className="expertise-v3__selector">
            <div className="expertise-v3__column-heading">
              <span>CAPABILITY INDEX</span>
              <span>
                {String(categories.length).padStart(2, "0")} AREAS
              </span>
            </div>

            <div
              className="expertise-v3__tabs"
              role="tablist"
              aria-label="Professional capabilities"
              aria-orientation="vertical"
            >
              {categories.map((category, index) => {
                const selected = index === safeIndex;

                return (
                  <button
                    key={category.title}
                    ref={(element) => {
                      tabRefs.current[index] = element;
                    }}
                    id={`${uid}-tab-${index}`}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls={`${uid}-panel`}
                    tabIndex={selected ? 0 : -1}
                    className={
                      "expertise-v3__tab" +
                      (selected ? " expertise-v3__tab--active" : "")
                    }
                    onClick={() => selectTab(index)}
                    onKeyDown={(event) =>
                      handleKeyDown(event, index)
                    }
                  >
                    <span className="expertise-v3__tab-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="expertise-v3__tab-name">
                      {category.shortTitle || category.title}
                    </span>

                    <span className="expertise-v3__tab-arrow">
                      <Arrow />
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="expertise-v3__selector-footer">
              <span>DATA / SOFTWARE / INTELLIGENCE</span>
              <span>ALIA / PRACTICE</span>
            </div>
          </div>

          <div
            id={`${uid}-panel`}
            role="tabpanel"
            aria-labelledby={`${uid}-tab-${safeIndex}`}
            tabIndex={0}
            className="expertise-v3__panel"
          >
            <div
              className="expertise-v3__panel-content"
              key={safeIndex}
            >
              <div className="expertise-v3__panel-top">
                <span>AREA OF EXPERTISE</span>

                <div className="expertise-v3__fraction">
                  <strong>
                    {String(safeIndex + 1).padStart(2, "0")}
                  </strong>
                  <span>/</span>
                  <span>
                    {String(categories.length).padStart(2, "0")}
                  </span>
                </div>
              </div>

              <div className="expertise-v3__panel-main">
                <h3>{active.title}</h3>

                {active.description && (
                  <p className="expertise-v3__description">
                    {active.description}
                  </p>
                )}
              </div>

              <div className="expertise-v3__details">
                <div className="expertise-v3__detail-group">
                  <div className="expertise-v3__detail-label">
                    <span>01</span>
                    <span>TOOLS & TECHNOLOGIES</span>
                  </div>

                  <div className="expertise-v3__technology-list">
                    {(active.technologies || []).map((tech) => (
                      <span
                        key={tech}
                        className="expertise-v3__technology"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="expertise-v3__detail-group">
                  <div className="expertise-v3__detail-label">
                    <span>02</span>
                    <span>AREAS OF PRACTICE</span>
                  </div>

                  <ul className="expertise-v3__practice-list">
                    {(active.expertise || []).map((skill) => (
                      <li key={skill}>
                        <span aria-hidden="true">↗</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="expertise-v3__panel-footer">
                <span>TECHNICAL PRACTICE / {String(safeIndex + 1).padStart(2, "0")}</span>
                <span>BUILT ON FUNDAMENTALS</span>
              </div>
            </div>
          </div>
        </div>

        <footer className="expertise-v3__footer">
          <span>THINKING IN SYSTEMS</span>
          <a href="#experiences">
            Professional experience
            <span aria-hidden="true">↗</span>
          </a>
        </footer>
      </div>
    </section>
  );
};

export default Skills;
