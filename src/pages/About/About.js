import React from "react";
import Button from "../../components/Button";

import Navbar from "../../components/Navbar";

import "../../scss/styles/about.scss";
import {
  BiPhoneCall,
  BiCurrentLocation,
  BiHomeAlt,
  BiDollarCircle,
} from "react-icons/bi";
import ServiceCard from "../../components/ServiceCard";
import { BsPencilSquare, BsAward, BsGraphUp } from "react-icons/bs";

function About() {
  return (
    <>
      <Navbar classes="fixed" />
      <div className="top">
        <div className="headerImg">
          <h2 className="aboutUs">About Us</h2>
        </div>
      </div>

      {/* Our service Section */}

      <section className="section_service">
        <div className="container card_container">
          <ServiceCard
            icon={<BsPencilSquare />}
            title={`Consulting`}
            paragraph={`Nulla aliquet bibendum sem, non placer risus venenatis at. Prae sent vulputate bibendum dictum.`}
          />
          <ServiceCard
            icon={<BsAward />}
            title={`Real estate sales`}
            paragraph={`Nulla aliquet bibendum sem, non placer risus venenatis at. Prae sent vulputate bibendum dictum.`}
          />
          <ServiceCard
            icon={<BiCurrentLocation />}
            title={`Renting`}
            paragraph={`Nulla aliquet bibendum sem, non placer risus venenatis at. Prae sent vulputate bibendum dictum.`}
          />
          <ServiceCard
            icon={<BsGraphUp />}
            title={`Meditation`}
            paragraph={`Nulla aliquet bibendum sem, non placer risus venenatis at. Prae sent vulputate bibendum dictum.`}
          />{" "}
          <ServiceCard
            icon={<BiHomeAlt />}
            title={`Evaluation`}
            paragraph={`Nulla aliquet bibendum sem, non placer risus venenatis at. Prae sent vulputate bibendum dictum.`}
          />
          <ServiceCard
            icon={<BiDollarCircle />}
            title={`Price Consulting`}
            paragraph={`Nulla aliquet bibendum sem, non placer risus venenatis at. Prae sent vulputate bibendum dictum.`}
          />
        </div>
      </section>

      {/* Apartment Section */}
      <section className="section_quotation">
        <div className="container">
          <div className="quotation_container">
            <div className="qtn_left">
              <h2>
                get a free <br /> question today !
              </h2>
              <p>Have any question in mind?</p>
              <Button text="Contact Us" />
            </div>
            <div className="qtn_right">
              <BiPhoneCall className="icon" />
              <div className="right_content">
                <p>Say Hello,</p>
                <h4>+8801778831339</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
