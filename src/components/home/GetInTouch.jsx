import React from "react";

const socialLinks = [
  {
    name: "LinkedIn",
    category: "PROFESSIONAL NETWORK",
    url: "https://www.linkedin.com/in/abalia/",
  },
  {
    name: "GitHub",
    category: "CODE & OPEN SOURCE",
    url: "https://github.com/TheAbAlia",
  },
  {
    name: "Independent Projects",
    category: "INDEPENDENT STUDIO",
    url: "#contact",
  },
  {
    name: "Xing",
    category: "PROFESSIONAL PROFILE",
    url: "https://www.xing.com/profile/Abdalla_Alia",
  },
];

const GetInTouch = ({ heading, message, email }) => {
  const validEmail =
    typeof email === "string" && email.trim().length > 0;

  return (
    <div className="contact-v7">
      <div className="contact-v7__overline">
        <span>07 / CONTACT</span>
        <span>THE NEXT CONVERSATION</span>
      </div>

      <div className="contact-v7__main">
        <div className="contact-v7__intro">
          <span className="contact-v7__symbol" aria-hidden="true">
            ✳
          </span>

          <p>
            GOOD WORK BEGINS
            <br />
            WITH A CONVERSATION.
          </p>
        </div>

        <h2 id="contact-heading" className="contact-v7__heading">
          {heading || (
            <>
              Have something
              <span>
                worth <em>building?</em>
              </span>
            </>
          )}
        </h2>

        <div className="contact-v7__description-row">
          <span className="contact-v7__index">
            OPEN TO MEANINGFUL COLLABORATIONS
          </span>

          <p className="contact-v7__description">
            {message ||
              "Whether it is a data platform, an intelligent system, a technical product or simply an interesting problem, start with a conversation."}
          </p>
        </div>
      </div>

      <div className="contact-v7__email-section">
        <div className="contact-v7__email-label">
          <span>DIRECT CONTACT</span>
          <span>01 / EMAIL</span>
        </div>

        {validEmail ? (
          <a
            href={`mailto:${email.trim()}`}
            className="contact-v7__email-link"
            aria-label={`Send an email to ${email}`}
          >
            <span className="contact-v7__email-text">
              {email}
            </span>

            <span className="contact-v7__email-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        ) : (
          <p className="contact-v7__email-missing">
            Contact email not configured.
          </p>
        )}
      </div>

      <div className="contact-v7__socials">
        <div className="contact-v7__socials-heading">
          <span>FIND ME ELSEWHERE</span>
          <span>02 / NETWORK</span>
        </div>

        <div className="contact-v7__social-grid">
          {socialLinks.map((link, index) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-v7__social"
              aria-label={`${link.name} (opens in a new tab)`}
            >
              <span className="contact-v7__social-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="contact-v7__social-info">
                <strong>{link.name}</strong>
                <small>{link.category}</small>
              </span>

              <span className="contact-v7__social-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
