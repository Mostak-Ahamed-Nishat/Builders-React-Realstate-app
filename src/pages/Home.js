import React from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import "../scss/styles/home.scss";
import "../scss/styles/home.scss";

function Home() {
  return (
    <>
      <Navbar />
      <section className="section_hero">
        <div className="hero-content container">
          <div className="hero-content-left">
            <h5 className="heading_secondary">BEAUTIFUL INVESTMENTS</h5>
            <h1 className="heading_primary">
              Everyone Deserves the Opportunity of the Home
            </h1>
            <h5 className="heading_tertiary">
              Enim a, scelerisque aliquet vivamus neque diam sed at pede do laos
              orci. Potenti vel in sagittis nulla augue vitae et tempus torquent
              dicid Lacinia neque mus maleware poside
            </h5>

            <div className="button_view">
              <Button type="button" text="View Property" />
            </div>
          </div>
          <div className="hero-content-right"></div>
        </div>
      </section>
    </>
  );
}

export default Home;
