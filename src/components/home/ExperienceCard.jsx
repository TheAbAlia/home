import React from "react";

const ExperienceCard = ({ data, index, total }) => {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="career-v4__entry">
      <div className="career-v4__entry-index">
        <span>{number}</span>
        <span className="career-v4__index-line" aria-hidden="true" />
        <span>{String(total).padStart(2, "0")}</span>
      </div>

      <div className="career-v4__entry-main">
        <div className="career-v4__entry-heading">
          <span className="career-v4__entry-overline">
            PROFESSIONAL EXPERIENCE / {number}
          </span>

          <h3>{data.role}</h3>

          {data.company && (
            <div className="career-v4__organization">
              <span className="career-v4__organization-symbol" aria-hidden="true">
                ↳
              </span>
              <span>{data.company}</span>
            </div>
          )}
        </div>

        {data.summary && (
          <p className="career-v4__summary">
            {data.summary}
          </p>
        )}

        {Array.isArray(data.tags) && data.tags.length > 0 && (
          <div className="career-v4__disciplines">
            <span className="career-v4__disciplines-label">
              FOCUS AREAS
            </span>

            <ul className="career-v4__tags">
              {data.tags.map((tag, tagIndex) => (
                <li key={`${tag}-${tagIndex}`}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="career-v4__entry-aside">
        <span className="career-v4__date">
          {data.date}
        </span>

        <span className="career-v4__entry-arrow" aria-hidden="true">
          ↗
        </span>
      </div>
    </article>
  );
};

export default ExperienceCard;
