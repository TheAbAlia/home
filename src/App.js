import { LanguageProvider, useLanguage } from "./i18n/LanguageContext";
import React from "react";
import useReveal from "./hooks/usePortfolioReveal";
import Header from "./components/portfolio/Header";
import Hero from "./components/portfolio/Hero";
import Impact from "./components/portfolio/Impact";
import Projects from "./components/portfolio/Projects";
import Experience from "./components/portfolio/Experience";
import Expertise from "./components/portfolio/Expertise";
import About from "./components/portfolio/About";
import Contact from "./components/portfolio/Contact";

function PortfolioPage() {
  const { t } = useLanguage();
  useReveal();

  return (
    <div className="portfolio-v8">
      <a className="p8-skip" href="#main-content">{t.skip}</a>
      <Header />
      <main id="main-content">
        <Hero />
        <Impact />
        <Projects />
        <Experience />
        <Expertise />
        <About />
      </main>
      <Contact />
    </div>
  );
}


export default function App() {
  return (
    <LanguageProvider>
      <PortfolioPage />
    </LanguageProvider>
  );
}
