import React from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Expertise", href: "#skills" },
  { label: "Experience", href: "#experiences" },
  { label: "About", href: "#aboutme" },
];

const Navigation = React.forwardRef((props, ref) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    if (!expanded) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setExpanded(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [expanded]);

  const closeMenu = () => setExpanded(false);

  return (
    <header
      className={[
        "site-nav",
        scrolled ? "site-nav--scrolled" : "",
        expanded ? "site-nav--expanded" : "",
      ].filter(Boolean).join(" ")}
    >
      <div className="site-nav__inner">
        <a
          href="#home"
          className="site-nav__brand"
          onClick={closeMenu}
          aria-label="Abdalla Alia — Back to top"
        >
          <span className="site-nav__brand-mark">A<span>.</span></span>
          <span className="site-nav__brand-name">ABDALLA ALIA</span>
        </a>

        <nav
          id="main-navigation"
          className={[
            "site-nav__navigation",
            expanded ? "site-nav__navigation--open" : "",
          ].filter(Boolean).join(" ")}
          aria-label="Main navigation"
        >
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="site-nav__link"
              onClick={closeMenu}
            >
              <span className="site-nav__link-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="site-nav__link site-nav__link--external"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Independent Projects <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <a className="site-nav__contact" href="#contact">
          LET'S TALK <span aria-hidden="true">↗</span>
        </a>

        <button
          type="button"
          className="site-nav__toggle"
          aria-expanded={expanded}
          aria-controls="main-navigation"
          aria-label={expanded ? "Close navigation" : "Open navigation"}
          onClick={() => setExpanded((value) => !value)}
        >
          <span className="site-nav__toggle-text">
            {expanded ? "CLOSE" : "MENU"}
          </span>
          <span className="site-nav__toggle-icon" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>
    </header>
  );
});

Navigation.displayName = "Navigation";

export default Navigation;
