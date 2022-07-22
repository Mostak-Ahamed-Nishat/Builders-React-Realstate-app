import React from "react";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import "../../scss/styles/home.scss";

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

      <section className="section_team">
        <div className="section_team_content">
          <div className="section_team_img"></div>
          <div className="section_team_text container">
            <h2 className="section_team_text_heading">
              Living From <br /> The Team That Cares
            </h2>
            <span className="underline"></span>
            <p className="section_team_text_paragraph">
              Unto all set life creeping own set. Saw make multiply female watge
              deb all set life creeping own set. Saw make multiply female watge
              abund winged subdue dominion own night days second
            </p>
            <ul className="section_team_text_">
              <li>
                <span></span>Set dry signs spirit a kind First shall them
                windged creping
              </li>
              <li>
                <span></span>He two face one moved dominion man you're likeness
              </li>
              <li>
                <span></span> Sea forth fill have divide be dominion from life
                for feven
              </li>
            </ul>

            <Button type="button" text="Read More" />
          </div>
        </div>
        <img
          src={require("../../images/bgImg.webp")}
          alt="background dot img"
          className="section_team_bgImage"
        />
      </section>
    </>
  );
}

export default Home;