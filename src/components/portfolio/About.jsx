import { useLanguage } from "../../i18n/LanguageContext";
import React from "react";
import { getLocalizedPortfolio } from "../../data/portfolio";

export default function About() {
  const { language, t } = useLanguage();
  const { education } = getLocalizedPortfolio(language);
  return (
    <section id="about" className="p8-section p8-about">
      <div className="p8-shell p8-about__grid">
        <div data-reveal>
          <div className="p8-kicker">04 / {t.about.label}</div>
          <h2>{t.about.titleStart}<em>{t.about.titleEm}</em></h2>
          <p className="p8-about__lead">
            {t.about.lead}
          </p>
          <p className="p8-about__support">
            {t.about.support}
          </p>
          <div className="p8-about__languages">
            <span>{t.about.languages}</span>
            <strong>{t.about.languageNames}</strong>
          </div>
        </div>

        <div className="p8-about__education" data-reveal>
          <div className="p8-kicker">{t.about.academic}</div>
          {education.map((item) => (
            <div className="p8-about__degree" key={item.school}>
              <span>{item.years}</span>
              <h3>{item.degree}</h3>
              <p>{item.school}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
