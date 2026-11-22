import React from "react";

export default function SectionHeading({ index, label, title, detail }) {
  return (
    <div className="p8-section-heading" data-reveal>
      <div className="p8-kicker">{index} / {label}</div>
      <div>
        <h2>{title}</h2>
        {detail && <p>{detail}</p>}
      </div>
    </div>
  );
}
