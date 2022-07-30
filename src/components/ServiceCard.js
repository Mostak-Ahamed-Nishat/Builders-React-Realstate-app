import React from "react";

import "../scss/UiComponents/_servicecard.scss";

function ServiceCard({ icon, title, paragraph }) {
  return (
    <>
      <div className="service_card_container">
        <div className="card_head">
          <icon>{icon}</icon>
          <h2>{title}</h2>
        </div>
        <p className="paragraph">{paragraph}</p>
      </div>
    </>
  );
}

export default ServiceCard;
