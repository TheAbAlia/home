import React from "react";

const Footer = ({ children }) => {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="contact-section contact-section--v7"
      aria-labelledby="contact-heading"
    >
      <div className="site-container">
        {children}

        <div className="site-footer-v7">
          <div className="site-footer-v7__identity">
            <a href="#home" aria-label="Abdalla Alia — Back to top">
              A<span>.</span>
            </a>

            <div>
              <strong>ABDALLA ALIA</strong>
              <span>DATA / INTELLIGENCE / SYSTEMS</span>
            </div>
          </div>

          <div className="site-footer-v7__details">
            <span>© {year} ABDALLA ALIA</span>
            <span>INDEPENDENT THINKING / ENGINEERED SOLUTIONS</span>
          </div>

          <a className="site-footer-v7__back" href="#home">
            BACK TO TOP
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
