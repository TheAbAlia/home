import React from "react";
import { useLanguage } from "../../i18n/LanguageContext";

const content = {
  de: {
    eyebrow: "AUSGEWÄHLTE PROJEKTE",
    title: "Digitale Produkte. Von der Idee bis zur Umsetzung.",
    intro:
      "Eigenständig realisierte Softwarelösungen für konkrete betriebliche Anforderungen — von internen Managementsystemen bis zum E-Commerce.",
    private: "Privates Kundenprojekt",
    unavailable: "Live-Link nicht öffentlich",
    vela: {
      category: "FULL-STACK / BUSINESS SOFTWARE",
      title: "Vela",
      subtitle: "Salon Operations Platform",
      description:
        "Entwicklung einer integrierten Managementplattform für den Salonbetrieb. Die Anwendung vereint Terminplanung, Kunden- und Dienstleistungsverwaltung sowie Personalplanung, Zeiterfassung, Urlaubsverwaltung und Berichte.",
      role: "Konzeption, Full-Stack-Entwicklung und Systemarchitektur",
    },
    ayla: {
      category: "E-COMMERCE / FASHION",
      title: "Ayla",
      subtitle: "Fashion E-Commerce",
      description:
        "Entwicklung einer E-Commerce-Lösung für den Fashion-Bereich auf Basis von Medusa. Das Projekt verbindet eine markenorientierte digitale Einkaufserfahrung mit einer Headless-Commerce-Architektur.",
      role: "Full-Stack-Entwicklung und Commerce-Integration",
    },
    roleLabel: "LEISTUNGSUMFANG",
  },
  en: {
    eyebrow: "SELECTED PROJECTS",
    title: "Digital products. Built end to end.",
    intro:
      "Independently delivered software solutions for real business needs — from operational management platforms to e-commerce.",
    private: "Private client project",
    unavailable: "Live link not publicly available",
    vela: {
      category: "FULL-STACK / BUSINESS SOFTWARE",
      title: "Vela",
      subtitle: "Salon Operations Platform",
      description:
        "Built an integrated platform for salon operations, bringing together appointment scheduling, customer and service management, staff scheduling, attendance tracking, leave management, and reporting.",
      role: "Product architecture and full-stack engineering",
    },
    ayla: {
      category: "E-COMMERCE / FASHION",
      title: "Ayla",
      subtitle: "Fashion E-Commerce",
      description:
        "Developed a fashion e-commerce solution using Medusa, combining a brand-oriented shopping experience with a headless commerce architecture.",
      role: "Full-stack engineering and commerce integration",
    },
    roleLabel: "CONTRIBUTION",
  },
};

const projects = [
  {
    key: "vela",
    number: "01",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
    ],
  },
  {
    key: "ayla",
    number: "02",
    stack: ["Medusa", "Headless Commerce", "E-Commerce"],
  },
];

export default function Projects() {
  const { language } = useLanguage();
  const copy = content[language === "en" ? "en" : "de"];

  return (
    <section
      className="p13-projects"
      id="projects"
      aria-labelledby="p13-projects-title"
    >
      <div className="p8-shell">
        <div className="p13-projects__intro">
          <div className="p8-kicker">
            03 / {copy.eyebrow}
          </div>
          <div className="p13-projects__heading">
            <h2 id="p13-projects-title">{copy.title}</h2>
            <p>{copy.intro}</p>
          </div>
        </div>

        <div className="p13-projects__grid">
          {projects.map((project) => {
            const item = copy[project.key];

            return (
              <article
                className="p13-project"
                key={project.key}
              >
                <div className="p13-project__top">
                  <span>{project.number} / {item.category}</span>
                  <span className="p13-project__private">
                    {copy.private}
                  </span>
                </div>

                <div className="p13-project__body">
                  <div className="p13-project__identity">
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>

                  <p className="p13-project__description">
                    {item.description}
                  </p>

                  <div className="p13-project__contribution">
                    <span>{copy.roleLabel}</span>
                    <p>{item.role}</p>
                  </div>
                </div>

                <div className="p13-project__footer">
                  <ul aria-label="Technologies">
                    {project.stack.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <span className="p13-project__availability">
                    {copy.unavailable}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
