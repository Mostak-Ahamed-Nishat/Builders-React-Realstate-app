import React from "react";
import "../scss/UiComponents/_subheader.scss";
function Subheader({ text }) {
  return (
    <div>
      <h2 className="subheading">{text}</h2>
    </div>
  );
}

export default Subheader;
