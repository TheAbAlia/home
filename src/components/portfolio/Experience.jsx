import { useLanguage } from "../../i18n/LanguageContext";
import React from "react";
import SectionHeading from "./SectionHeading";
import { getLocalizedPortfolio } from "../../data/portfolio";

export default function Experience() {
  const { language, t } = useLanguage();
  const { experience } = getLocalizedPortfolio(language);
  return (
    <section id="experience" className="p8-section p8-experience">
      <div className="p8-shell">
        <SectionHeading
          index="02"
          label={t.experience.label}
          title={<>{t.experience.titleStart}<em>{t.experience.titleEm}</em></>}
        />
        <div className="p8-timeline">
          {experience.map((item, index) => (
            <article className="p8-timeline__item" key={item.company} data-reveal>
              <div className="p8-timeline__date">
                <span>0{index + 1}</span>
                <span>{item.period}</span>
              </div>
              <div className="p8-timeline__content">
                <h3>{item.role}</h3>
                <p className="p8-timeline__company">
                  {item.company} <span>— {item.location}</span>
                </p>
                <p className="p8-timeline__description">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
