import React from "react";
import "../scss/UiComponents/_passion_card.scss";
import ButtonNonBg from "./ButtonNonBg";

function PassionCard({ heading, paragraph, icon }) {
  return (
    <>
      <div className="passion_card">
        <div className="card_content">
          <span>{icon}</span>
          <h4 className="card_heading">{heading}</h4>
          <div>
            <p className="card_paragraph">{paragraph}</p>
          </div>
        </div>
        <div>
          <ButtonNonBg color="#fff" />
        </div>
      </div>
    </>
  );
}

export default PassionCard;
