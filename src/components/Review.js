import React from "react";
import "../scss/UiComponents/_review.scss";

function Review({ img, name, jd, review }) {
  return (
    <>
      <div className="review">
        <div className="review_top">
          <img src={img} alt="user reviewS" />
          <div className="top_head">
            <h6 className="top_head_name">{name}</h6>
            <p className="top_head_paragraph">{jd}</p>
          </div>
        </div>

        <p className="review_message">{review}</p>
      </div>
    </>
  );
}

export default Review;
