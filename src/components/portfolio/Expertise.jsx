import { useLanguage } from "../../i18n/LanguageContext";
import React from "react";
import SectionHeading from "./SectionHeading";
import { getLocalizedPortfolio } from "../../data/portfolio";

export default function Expertise() {
  const { language, t } = useLanguage();
  const { capabilities } = getLocalizedPortfolio(language);
  const [active, setActive] = React.useState(0);
  const tabsRef = React.useRef([]);
  const prefix = React.useId().replace(/:/g, "");

  const selected = capabilities[active];

  if (!selected) return null;

  const panelId = `${prefix}-expertise-panel`;

  const handleKeyDown = (event, index) => {
    const count = capabilities.length;
    let next;

    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        next = (index + 1) % count;
        break;
      case "ArrowUp":
      case "ArrowLeft":
        next = (index - 1 + count) % count;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = count - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    setActive(next);
    tabsRef.current[next]?.focus();
  };

  return (
    <section
      id="expertise"
      className="p8-section p8-expertise p10-expertise"
    >
      <div className="p8-shell">
        <SectionHeading
          index="03"
          label={t.expertise.label}
          title={<>{t.expertise.titleStart}<em>{t.expertise.titleEm}</em></>}
          detail={t.expertise.detail}
        />

        <div className="p8-expertise__layout" data-reveal>
          <div
            className="p8-expertise__menu"
            role="tablist"
            aria-label={t.expertise.areas}
            aria-orientation="vertical"
          >
            {capabilities.map((capability, index) => {
              const isActive = index === active;

              return (
                <button
                  key={capability.name}
                  ref={(element) => {
                    tabsRef.current[index] = element;
                  }}
                  type="button"
                  role="tab"
                  id={`${prefix}-expertise-tab-${index}`}
                  aria-selected={isActive}
                  aria-controls={panelId}
                  tabIndex={isActive ? 0 : -1}
                  className={isActive ? "is-active" : ""}
                  onClick={() => setActive(index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                >
                  <span className="p10-expertise__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>{capability.name}</strong>

                  <span className="p10-expertise__indicator" aria-hidden="true">
                    {isActive ? "↗" : "+"}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id={panelId}
            className="p8-expertise__panel p10-expertise__panel"
            role="tabpanel"
            aria-labelledby={`${prefix}-expertise-tab-${active}`}
            tabIndex={0}
          >
            <div className="p8-kicker">
              {t.expertise.selected} / {String(active + 1).padStart(2, "0")}
            </div>

            <div
              key={active}
              className="p10-expertise__content"
            >
              <h3>{selected.name}</h3>
              <p>{selected.summary}</p>

              <div className="p8-tags p8-tags--light">
                {selected.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            <div className="p10-expertise__footer" aria-hidden="true">
              <span>{t.expertise.hint}</span>
              <span>
                {String(active + 1).padStart(2, "0")}
                {" / "}
                {String(capabilities.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
