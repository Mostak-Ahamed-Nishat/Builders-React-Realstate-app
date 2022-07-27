import React from "react";
import "../scss/UiComponents/_read_more_button.scss";

function ButtonNonBg({ color }) {
  return (
    <>
      <a
        href=""
        type="button"
        className="read_more"
        style={{ color: `${color}` }}
      >
        <span className="roundShape"></span> Read More &#8594;
      </a>
    </>
  );
}

export default ButtonNonBg;
