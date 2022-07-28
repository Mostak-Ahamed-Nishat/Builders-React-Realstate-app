import React from "react";
import "../scss/UiComponents/_blogSmall.scss";
import { BsClock, BsHeart } from "react-icons/bs";

function BlogSmall({ img, type, title, date, like }) {
  return (
    <>
      <div className="blog_container">
        <div className="smb_left">
          <img src={img} alt="Apartment Blog" />
        </div>
        <div className="smb_right">
          <div className="smb_text_box">
            <div>
              <p className="smb_type">{type}</p>
              <h4 className="smb_title">{title}</h4>
            </div>
            <div className="smb_icon_box">
              <span>
                <BsClock className="smb_icon" />
              </span>
              <p className="smb_data">{date}</p>
              <span>
                <BsHeart className="smb_icon" />
              </span>
              <p className="smb_data">{like} Like</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogSmall;
