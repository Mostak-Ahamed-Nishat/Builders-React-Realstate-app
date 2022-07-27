import React from "react";
import "../scss/UiComponents/_apartmentCard.scss";

import { GiBathtub, GiHouse, GiConvergenceTarget } from "react-icons/gi";
function ApartmentCard({ imgUrl, subheading, heading, bath, room, space }) {
  return (
    <>
      <div className="card_wrapper">
        <div className="apartment_card_content">
          <div className="card_img">
            <img src={imgUrl} alt="apartment picture" />
            <div></div>
          </div>
          <div className="card_text">
            <p className="apartment_subheading">{subheading}</p>
            <h4 className="apartment_heading">{heading}</h4>
            <hr />
            <div className="card_list">
              <ul>
                <div className="list">
                  <div>
                    <li>
                      <span>
                        <GiBathtub className="icon" />
                      </span>
                      {bath}
                    </li>
                  </div>
                  <div>
                    <li>
                      <span>
                        <GiHouse className="icon" />
                      </span>
                      {room}
                    </li>
                  </div>
                  <div>
                    <li>
                      <span>
                        <GiConvergenceTarget className="icon" />
                      </span>
                      {space} sqft
                    </li>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApartmentCard;
