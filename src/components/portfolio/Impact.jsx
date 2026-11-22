import { useLanguage } from "../../i18n/LanguageContext";
import React from "react";
import SectionHeading from "./SectionHeading";
import { getLocalizedPortfolio } from "../../data/portfolio";

export default function Impact() {
  const { language, t } = useLanguage();
  const { impact } = getLocalizedPortfolio(language);
  return (
    <section id="impact" className="p8-section p8-impact p10-impact">
      <div className="p8-shell">
        <SectionHeading
          index="01"
          label={t.impact.label}
          title={<>{t.impact.titleStart}<em>{t.impact.titleEm}</em></>}
          detail={t.impact.detail}
        />

        <div className="p8-impact__grid">
          {impact.map((item, index) => (
            <article
              className="p8-impact__card p10-impact__card"
              key={item.number}
              data-reveal
              style={{ "--p10-order": index }}
            >
              <div className="p8-impact__top">
                <span>{item.number} / {String(impact.length).padStart(2, "0")}</span>
                <span>{item.type}</span>
              </div>

              <div className="p8-impact__metric">
                <strong>{item.metric}</strong>
                <span>{item.metricLabel}</span>
              </div>

              <div className="p8-impact__body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <div className="p8-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <span className="p10-impact__corner" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>

        <p className="p8-impact__note">
          {t.impact.note}
        </p>
      </div>
    </section>
  );
}
