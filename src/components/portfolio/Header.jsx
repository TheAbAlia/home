import { useLanguage } from "../../i18n/LanguageContext";
import React from "react";

const NAV_ITEMS = [
  { label: "Impact", href: "#impact", id: "impact" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Expertise", href: "#expertise", id: "expertise" },
  { label: "About", href: "#about", id: "about" },
];

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState("home");

  const headerRef = React.useRef(null);
  const toggleRef = React.useRef(null);
  const wasOpenRef = React.useRef(false);

  const closeMenu = React.useCallback(() => {
    setOpen(false);
  }, []);

  React.useEffect(() => {
    let frame = null;

    const update = () => {
      frame = null;
      setScrolled(window.scrollY > 16);

      const sections = [
        "home",
        ...NAV_ITEMS.map((item) => item.id),
        "contact",
      ];

      const marker = window.scrollY + Math.min(
        window.innerHeight * 0.35,
        220
      );

      let current = "home";

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= marker) {
          current = id;
        }
      });

      // Ensure the contact section becomes active at page end.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8;

      if (atBottom) current = "contact";

      setActive(current);
    };

    const onScroll = () => {
      if (frame === null) {
        frame = window.requestAnimationFrame(update);
      }
    };

    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  React.useEffect(() => {
    if (!open) {
      if (wasOpenRef.current) {
        wasOpenRef.current = false;
      }
      return undefined;
    }

    wasOpenRef.current = true;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    const onPointerDown = (event) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  React.useEffect(() => {
    const query = window.matchMedia("(min-width: 801px)");

    const onChange = () => {
      if (query.matches) setOpen(false);
    };

    if (query.addEventListener) {
      query.addEventListener("change", onChange);
      return () => query.removeEventListener("change", onChange);
    }

    query.addListener(onChange);
    return () => query.removeListener(onChange);
  }, []);

  return (
    <header
      ref={headerRef}
      className={[
        "p8-nav",
        "p11-nav",
        scrolled ? "is-scrolled" : "",
        open ? "is-menu-open" : "",
      ].filter(Boolean).join(" ")}
    >
      <div className="p8-shell p8-nav__inner">
        <a
          href="#home"
          className="p8-nav__brand"
          onClick={closeMenu}
          aria-label={`Abdalla Alia — ${t.nav.top}`}
        >
          A<span>.</span>
          <small>ABDALLA ALIA</small>
        </a>

        <nav
          id="p8-navigation"
          className={`p8-nav__links ${open ? "is-open" : ""}`}
          aria-label={t.nav.main}
        >
          {NAV_ITEMS.map(({ label, href, id }) => (
            <a
              key={id}
              href={href}
              className={active === id ? "is-active" : ""}
              aria-current={active === id ? "location" : undefined}
              onClick={closeMenu}
            >
              {t.nav[id] || label}
            </a>
          ))}

          <a
            href="#contact"
            className={[
              "p8-nav__mobile-contact",
              active === "contact" ? "is-active" : "",
            ].join(" ")}
            aria-current={
              active === "contact" ? "location" : undefined
            }
            onClick={closeMenu}
          >
            {t.nav.contact} <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <a
          href="#contact"
          className={[
            "p8-nav__cta",
            active === "contact" ? "is-active" : "",
          ].join(" ")}
          aria-current={
            active === "contact" ? "location" : undefined
          }
          onClick={closeMenu}
        >
          {t.nav.connect} <span aria-hidden="true">↗</span>
        </a>


        <div
          className="p12-language-switch"
          role="group"
          aria-label={t.nav.language}
        >
          <button
            type="button"
            lang="de"
            aria-label="Deutsch"
            aria-pressed={language === "de"}
            className={language === "de" ? "is-active" : ""}
            onClick={() => setLanguage("de")}
          >
            DE
          </button>
          <span aria-hidden="true">/</span>
          <button
            type="button"
            lang="en"
            aria-label="English"
            aria-pressed={language === "en"}
            className={language === "en" ? "is-active" : ""}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
        </div>

        <button
          ref={toggleRef}
          className="p8-nav__toggle"
          type="button"
          aria-label={open ? t.nav.close : t.nav.open}
          aria-expanded={open}
          aria-controls="p8-navigation"
          onClick={() => setOpen((previous) => !previous)}
        >
          <span>{open ? (language === "de" ? "SCHLIESSEN" : "CLOSE") : (language === "de" ? "MENÜ" : "MENU")}</span>
          <span className="p11-nav__toggle-icon" aria-hidden="true">
            {open ? "×" : "+"}
          </span>
        </button>
      </div>
    </header>
  );
}
