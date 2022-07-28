import React from "react";
import "../scss/UiComponents/_footer.scss";
import { FiSend } from "react-icons/fi";

function Footer() {
  return (
    <>
      <footer className="section_footer">
        <div className="row container">
          <div className="col1">
            <h4>About Us</h4>
            <p>
              Heaven fruitful doesn't over lesser days appear creeping seasons
              so behold bearing days open
            </p>
            <img
              src={require("../images/LogoE.png")}
              alt="Builder real state log"
              className="footer_log"
            />
          </div>
          <div className="col2">
            <h4>Contact Info</h4>
            <ul>
              <li>Address:Dhaka Bangladesh</li>
              <li>Phone:+8801778831339</li>
              <li>Email:info@gmail.com</li>
            </ul>
          </div>
          <div className="col3">
            <h4>Important Link</h4>
            <ul>
              <li>
                <a href="#">WHMCS-bridge</a>
              </li>
              <li>
                <a href="#">Search Domain</a>
              </li>
              <li>
                <a href="#">My Account</a>
              </li>
              <li>
                <a href="#">Shopping Cart</a>
              </li>
              <li>
                <a href="#">Our Shop</a>
              </li>
            </ul>
          </div>

          <div className="col4">
            <h4>Newsletter</h4>
            <p>
              Heaven fruitful doesn't over lesser in days. Appear creeping
              seasons deve behold bearing days open
            </p>
            <div className="newsletter">
              <input
                className="inputBox"
                type="input"
                placeholder="Email Address"
              />
              <FiSend className="send_icon" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
