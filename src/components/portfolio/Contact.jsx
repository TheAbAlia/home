import { resumeLinks } from "../../data/resume";
import { useLanguage } from "../../i18n/LanguageContext";
import React from "react";
import { EMAIL, social } from "../../data/portfolio";

export default function Contact() {
  const { language, t } = useLanguage();
  return (
    <footer id="contact" className="p8-contact">
      <div className="p8-shell">
        <div className="p8-kicker" data-reveal>05 / {t.contact.label}</div>
        <div className="p8-contact__main" data-reveal>
          <h2>{t.contact.titleStart}<em>{t.contact.titleEm}</em></h2>
          <p>
            {t.contact.intro}
          </p>
          <a
            className="p12-resume-link"
            href={resumeLinks[language]}
            target="_blank"
            rel="noopener noreferrer"
            hrefLang={language}
            aria-label={
              language === "de"
                ? "Lebenslauf auf Deutsch öffnen (neuer Tab)"
                : "Open English résumé (new tab)"
            }
          >
            <span>
              {language === "de"
                ? "LEBENSLAUF ANSEHEN"
                : "VIEW MY RÉSUMÉ"}
            </span>
            <span aria-hidden="true">↗</span>
          </a>

          <a className="p8-contact__email" href={`mailto:${EMAIL}`}>
            <span>{EMAIL}</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="p8-contact__footer">
          <div className="p8-contact__identity">
            <strong>ABDALLA ALIA</strong>
            <span>© {new Date().getFullYear()}</span>
          </div>

          <div className="p8-contact__social">
            {social.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label} ↗
              </a>
            ))}
          </div>

          <a href="#home" className="p8-contact__top">{t.contact.top} ↑</a>
        </div>
      </div>
    </footer>
  );
}
