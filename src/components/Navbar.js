import React from "react";
import Button from "./Button";
import "../scss/UiComponents/_navbar.scss";

function Navbar({ classes }) {
  return (
    <>
      <div className={`section_navbar ${classes}`}>
        <div className="container">
          <div className="navbar">
            <div className="navbar_logo">
              <img src={require("../images/LogoE.png")} className="logo" />
            </div>
            <div className="navbar_content">
              <div className="navbar_menu">
                <ul className="navbar_list">
                  <li className="navbar_item">Home</li>
                  <li className="navbar_item">About</li>
                  <li className="navbar_item">Properties</li>
                  <li className="navbar_item">Blog</li>
                  <li className="navbar_item">Contact Us</li>
                </ul>
              </div>
              <div className="navbar_button">
                <Button type="button" text="Submit Property" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
