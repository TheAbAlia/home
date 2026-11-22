import React from "react";

export const translations = {
  de: {
    nav: {
      impact: "Wirkung",
      experience: "Erfahrung",
      expertise: "Kompetenzen",
      about: "Über mich",
      contact: "Kontakt",
      connect: "KONTAKT AUFNEHMEN",
      open: "Menü öffnen",
      close: "Menü schließen",
      main: "Hauptnavigation",
      top: "Zurück zum Anfang",
      language: "Sprache wählen",
    },
    hero: {
      role: "EXPERTE FÜR DATENMANAGEMENT & KI",
      eyebrow: "MATHEMATISCHES DENKEN / PRAXISNAHE ENTWICKLUNG",
      title: ["Daten.", "Intelligenz.", "Wirkung."],
      intro:
        "Ich konzipiere unternehmensweite Datenlösungen und entwickle "
        + "KI-Anwendungen, die technische Komplexität in messbaren "
        + "geschäftlichen Mehrwert übersetzen.",
      work: "MEINE ARBEIT ENTDECKEN",
      contact: "KONTAKT AUFNEHMEN",
      location: "IN DEUTSCHLAND ANSÄSSIG",
      scroll: "MEHR ENTDECKEN",
    },
    impact: {
      label: "AUSGEWÄHLTE ERFOLGE",
      titleStart: "Technologie, die ",
      titleEm: "Wirkung zeigt.",
      detail:
        "Drei Beispiele dafür, wie technische Lösungen "
        + "konkreten geschäftlichen Nutzen schaffen.",
      note:
        "Ausgewählte Ergebnisse aus meiner Arbeit in Unternehmen. "
        + "Interne Systeme und proprietäre Implementierungen "
        + "sind nicht öffentlich zugänglich.",
    },
    experience: {
      label: "BERUFSERFAHRUNG",
      titleStart: "Wo Strategie ",
      titleEm: "zur Umsetzung wird.",
    },
    expertise: {
      label: "KOMPETENZEN",
      titleStart: "Expertise über ",
      titleEm: "Fachgrenzen hinweg.",
      detail:
        "Vier sich ergänzende Kompetenzfelder, "
        + "geprägt durch praktische Projekterfahrung.",
      areas: "Kompetenzbereiche",
      selected: "AUSGEWÄHLTE KOMPETENZEN",
      hint: "KOMPETENZBEREICH AUSWÄHLEN",
    },
    about: {
      label: "HINTERGRUND",
      titleStart: "Erst die Struktur, ",
      titleEm: "dann die Werkzeuge.",
      lead:
        "Mein mathematischer Hintergrund prägt meinen Umgang "
        + "mit Technologie: Probleme in ihrer Struktur verstehen, "
        + "geeignete Abstraktionen wählen und Lösungen entwickeln, "
        + "die langfristig Bestand haben.",
      support:
        "Heute verbinde ich unternehmensweites Datenmanagement, "
        + "angewandte KI, Softwareentwicklung und technische Führung.",
      languages: "SPRACHEN",
      languageNames: "Deutsch · Englisch · Arabisch",
      academic: "AKADEMISCHER WERDEGANG",
    },
    contact: {
      label: "KONTAKT",
      titleStart: "Eine komplexe ",
      titleEm: "Herausforderung?",
      intro:
        "Ich freue mich über anspruchsvolle technische Aufgaben, "
        + "ambitionierte Ideen und Gespräche, in denen gute "
        + "Technologie einen spürbaren Unterschied machen kann.",
      top: "NACH OBEN",
    },
    skip: "Zum Inhalt springen",
  },

  en: {
    nav: {
      impact: "Impact",
      experience: "Experience",
      expertise: "Expertise",
      about: "About",
      contact: "Contact",
      connect: "LET'S CONNECT",
      open: "Open navigation menu",
      close: "Close navigation menu",
      main: "Main navigation",
      top: "Back to top",
      language: "Select language",
    },
    hero: {
      role: "DATA MANAGEMENT & AI EXPERT",
      eyebrow: "MATHEMATICAL THINKING / PRODUCTION ENGINEERING",
      title: ["Data.", "Intelligence.", "Impact."],
      intro:
        "I design enterprise data systems and build applied AI "
        + "solutions that turn technical complexity into measurable "
        + "business outcomes.",
      work: "EXPLORE MY WORK",
      contact: "GET IN TOUCH",
      location: "BASED IN GERMANY",
      scroll: "SCROLL TO EXPLORE",
    },
    impact: {
      label: "SELECTED IMPACT",
      titleStart: "Work that ",
      titleEm: "moves things forward.",
      detail:
        "Three examples of turning technical capability into business value.",
      note:
        "Selected professional achievements in enterprise environments. "
        + "Proprietary systems and internal implementations are not "
        + "publicly linked.",
    },
    experience: {
      label: "EXPERIENCE",
      titleStart: "Where strategy ",
      titleEm: "meets delivery.",
    },
    expertise: {
      label: "EXPERTISE",
      titleStart: "Depth across ",
      titleEm: "disciplines.",
      detail:
        "Four complementary areas of expertise, grounded in real-world delivery.",
      areas: "Areas of expertise",
      selected: "SELECTED CAPABILITIES",
      hint: "SELECT AN AREA TO EXPLORE",
    },
    about: {
      label: "BACKGROUND",
      titleStart: "Structure before ",
      titleEm: "tools.",
      lead:
        "My background in mathematics shapes how I approach technology: "
        + "understand the structure of a problem, choose the right "
        + "abstractions, and build systems that remain useful beyond "
        + "their first release.",
      support:
        "Today, I work across enterprise data management, applied AI, "
        + "software engineering and technical leadership.",
      languages: "LANGUAGES",
      languageNames: "German · English · Arabic",
      academic: "ACADEMIC FOUNDATION",
    },
    contact: {
      label: "CONTACT",
      titleStart: "Have a complex ",
      titleEm: "problem?",
      intro:
        "I'm interested in meaningful technical challenges, "
        + "ambitious ideas and conversations where engineering "
        + "can make a tangible difference.",
      top: "BACK TO TOP",
    },
    skip: "Skip to content",
  },
};

const LanguageContext = React.createContext(null);

function getInitialLanguage() {
  try {
    const saved = window.localStorage.getItem("portfolio-language");
    if (saved === "de" || saved === "en") return saved;
  } catch (_) {
    // Storage may be unavailable in private browsing.
  }
  return "de";
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = React.useState(getInitialLanguage);

  React.useEffect(() => {
    document.documentElement.lang = language;
    document.title = language === "de"
      ? "Dr. Abdalla Alia | Datenmanagement & KI"
      : "Dr. Abdalla Alia | Data Management & AI";

    try {
      window.localStorage.setItem("portfolio-language", language);
    } catch (_) {
      // Language switching still works without storage.
    }
  }, [language]);

  const value = React.useMemo(() => ({
    language,
    setLanguage,
    t: translations[language],
  }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage requires LanguageProvider");
  }
  return context;
}
