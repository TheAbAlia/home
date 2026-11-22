import { useLanguage } from "../../i18n/LanguageContext";
import React from "react";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section id="home" className="p8-hero p10-hero">
      <div className="p8-shell p8-hero__inner">
        <div className="p8-hero__meta p8-enter">
          <span>DR. ABDALLA ALIA</span>
          <span>{t.hero.role}</span>
        </div>

        <div className="p8-hero__main">
          <p className="p8-hero__eyebrow p8-enter">
            {t.hero.eyebrow}
          </p>

          <h1 className="p8-hero__title">
            <span className="p8-enter">{t.hero.title[0]}</span>
            <span className="p8-enter">{t.hero.title[1]}</span>
            <span className="p8-enter p8-hero__title-last">
              <em>{t.hero.title[2]}</em>
            </span>
          </h1>
        </div>

        <div className="p8-hero__bottom p8-enter">
          <p>
            {t.hero.intro}
          </p>

          <div className="p8-hero__actions">
            <a className="p8-button p10-primary-cta" href="#impact">
              <span>{t.hero.work}</span>
              <span aria-hidden="true">↗</span>
            </a>

            <a className="p8-text-link" href="#contact">
              {t.hero.contact} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="p8-hero__foot p8-enter">
          <span>{t.hero.location}</span>
          <a href="#impact" className="p10-scroll-cue">
            {t.hero.scroll}
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
