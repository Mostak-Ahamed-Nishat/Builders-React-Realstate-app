import React from "react";
import "../scss/UiComponents/_button.scss";

function Button({ text, type }) {
  return (
    <>
      <button type={type} className="button">
        {text}
      </button>
    </>
  );
}

export default Button;
