// Central source of truth for portfolio content.

export const EMAIL = "abdalla.alia@hotmail.com";

export const impact = [
  {
    number: "01",
    type: "AUTOMATION / PLATFORM ENGINEERING",
    title: "Replacing complexity with ownership.",
    metric: "€100K",
    metricLabel: "ANNUAL COST SAVINGS",
    description:
      "Developed an in-house automation platform that replaced an external provider, reducing recurring costs while bringing critical capabilities under internal control.",
    tags: ["Platform Engineering", "Python", "Automation"],
  },
  {
    number: "02",
    type: "GENERATIVE AI / ENTERPRISE SYSTEMS",
    title: "Making enterprise data conversational.",
    metric: "AI",
    metricLabel: "PRODUCTION ASSISTANT",
    description:
      "Led the development of a production AI assistant enabling management to query enterprise databases in natural language and automate reporting.",
    tags: ["Generative AI", "Natural Language to SQL", "Enterprise Data"],
  },
  {
    number: "03",
    type: "DATA ARCHITECTURE / INTEGRATION",
    title: "Connecting systems that were never designed to meet.",
    metric: "3+",
    metricLabel: "ENTERPRISE DATA TECHNOLOGIES",
    description:
      "Architected data solutions integrating SAP S/4HANA, Oracle and PostgreSQL through Python services and modern web applications.",
    tags: ["SAP S/4HANA", "Oracle", "PostgreSQL"],
  },
];

export const experience = [
  {
    company: "Süwag Vertrieb AG & Co. KG",
    role: "Data Management & AI Expert",
    period: "2022 — PRESENT",
    location: "FRANKFURT AM MAIN",
    description:
      "Enterprise data architecture, AI applications, predictive machine learning, automation and technical leadership. Led teams of up to three developers and advised senior management on data and AI strategy.",
  },
  {
    company: "Veeva Systems GmbH",
    role: "Data Analyst (Working Student)",
    period: "2019",
    location: "FRANKFURT",
    description:
      "Developed automated data acquisition and ETL pipelines, including web scraping and scalable analytics workflows.",
  },
];

export const capabilities = [
  {
    name: "Data architecture",
    summary:
      "Designing reliable data foundations and connecting enterprise systems.",
    technologies: [
      "SAP S/4HANA", "SAP BW", "Oracle", "PostgreSQL",
      "MongoDB", "ETL / ELT", "Data Modeling",
      "Data Governance"
    ],
  },
  {
    name: "Applied AI",
    summary:
      "Moving machine learning and language models into useful business applications.",
    technologies: [
      "Azure OpenAI", "OpenAI API", "RAG",
      "Natural Language to SQL", "Hugging Face",
      "Vector Databases", "Predictive ML",
      "AI Evaluation"
    ],
  },
  {
    name: "Software engineering",
    summary:
      "Building services, applications and automation around real operational needs.",
    technologies: [
      "Python", "TypeScript", "JavaScript", "React",
      "Next.js", "FastAPI", "SQL", "Git",
      "CI/CD", "Automated Testing"
    ],
  },
  {
    name: "Analytics & platforms",
    summary:
      "Delivering analytics products, distributed pipelines and decision-support systems.",
    technologies: [
      "Apache Airflow", "Apache Spark", "Apache Kafka",
      "Power BI", "SAP Analytics Cloud",
      "R", "R Shiny", "R Markdown"
    ],
  },
];

export const education = [
  {
    degree: "PhD in Mathematics",
    school: "Philipps-Universität Marburg",
    years: "2018 — 2022",
  },
  {
    degree: "MSc in Mathematics",
    school: "University of Bonn",
    years: "2015 — 2018",
  },
  {
    degree: "BSc",
    school: "University of Damascus",
    years: "2009 — 2014",
  },
];

export const social = [
  { label: "GitHub", href: "https://github.com/TheAbAlia" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abalia/" },
  { label: "Xing", href: "https://www.xing.com/profile/Abdalla_Alia" },
];


// German editorial copy. Product names and technology names
// remain unchanged where those are established technical terms.
export const portfolioDE = {
  impact: [
    {
      type: "AUTOMATISIERUNG / PLATTFORMENTWICKLUNG",
      title: "Komplexität reduzieren. Eigenständigkeit stärken.",
      metricLabel: "JÄHRLICHE KOSTENEINSPARUNG",
      description:
        "Entwicklung einer internen Automatisierungsplattform, "
        + "die einen externen Dienstleister ablöste. Das senkte "
        + "laufende Kosten und brachte zentrale Funktionen "
        + "unter die eigene Kontrolle.",
      tags: ["Plattformentwicklung", "Python", "Automatisierung"],
    },
    {
      type: "GENERATIVE KI / UNTERNEHMENSSYSTEME",
      title: "Unternehmensdaten im Dialog erschließen.",
      metricLabel: "PRODUKTIVER KI-ASSISTENT",
      description:
        "Leitung der Entwicklung eines produktiven KI-Assistenten, "
        + "mit dem Führungskräfte Unternehmensdatenbanken "
        + "in natürlicher Sprache abfragen und Berichte "
        + "automatisiert erstellen können.",
      tags: ["Generative KI", "Natural Language to SQL", "Unternehmensdaten"],
    },
    {
      type: "DATENARCHITEKTUR / INTEGRATION",
      title: "Systeme verbinden. Daten nutzbar machen.",
      metricLabel: "UNTERNEHMENS-DATENTECHNOLOGIEN",
      description:
        "Konzeption von Datenlösungen zur Integration von "
        + "SAP S/4HANA, Oracle und PostgreSQL über Python-Dienste "
        + "und moderne Webanwendungen.",
      tags: ["SAP S/4HANA", "Oracle", "PostgreSQL"],
    },
  ],
  experience: [
    {
      role: "Experte für Datenmanagement & KI",
      period: "2022 — HEUTE",
      location: "FRANKFURT AM MAIN",
      description:
        "Unternehmensweite Datenarchitektur, KI-Anwendungen, "
        + "prädiktives Machine Learning, Automatisierung und "
        + "technische Führung. Leitung von Teams mit bis zu "
        + "drei Entwicklern sowie Beratung des Managements "
        + "zur Daten- und KI-Strategie.",
    },
    {
      role: "Datenanalyst (Werkstudent)",
      period: "2019",
      location: "FRANKFURT",
      description:
        "Entwicklung automatisierter Datenerfassungs- und "
        + "ETL-Prozesse, einschließlich Web Scraping "
        + "und skalierbarer Analyse-Workflows.",
    },
  ],
  capabilities: [
    {
      name: "Datenarchitektur",
      summary:
        "Zuverlässige Datenfundamente gestalten und "
        + "Unternehmenssysteme miteinander verbinden.",
      technologies: [
        "SAP S/4HANA", "SAP BW", "Oracle", "PostgreSQL",
        "MongoDB", "ETL / ELT", "Datenmodellierung",
        "Data Governance",
      ],
    },
    {
      name: "Angewandte KI",
      summary:
        "Machine Learning und Sprachmodelle in "
        + "produktive Geschäftsanwendungen überführen.",
      technologies: [
        "Azure OpenAI", "OpenAI API", "RAG",
        "Natural Language to SQL", "Hugging Face",
        "Vektordatenbanken", "Prädiktives ML",
        "KI-Evaluierung",
      ],
    },
    {
      name: "Softwareentwicklung",
      summary:
        "Dienste, Anwendungen und Automatisierungen "
        + "für konkrete betriebliche Anforderungen entwickeln.",
      technologies: [
        "Python", "TypeScript", "JavaScript", "React",
        "Next.js", "FastAPI", "SQL", "Git",
        "CI/CD", "Automatisierte Tests",
      ],
    },
    {
      name: "Analytics & Datenplattformen",
      summary:
        "Analyseprodukte, verteilte Datenpipelines "
        + "und Systeme zur Entscheidungsunterstützung realisieren.",
      technologies: [
        "Apache Airflow", "Apache Spark", "Apache Kafka",
        "Power BI", "SAP Analytics Cloud",
        "R", "R Shiny", "R Markdown",
      ],
    },
  ],
  education: [
    { degree: "Promotion in Mathematik" },
    { degree: "Master of Science in Mathematik" },
    { degree: "Bachelorabschluss" },
  ],
};

export function getLocalizedPortfolio(language) {
  if (language !== "de") {
    return { impact, experience, capabilities, education };
  }

  const merge = (items, localized) =>
    items.map((item, index) => ({
      ...item,
      ...localized[index],
    }));

  return {
    impact: merge(impact, portfolioDE.impact),
    experience: merge(experience, portfolioDE.experience),
    capabilities: merge(capabilities, portfolioDE.capabilities),
    education: merge(education, portfolioDE.education),
  };
}
