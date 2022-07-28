import React from "react";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import PassionCard from "../../components/PassionCard";
import "../../scss/styles/home.scss";
import apartment1 from "../../images/apartment1.webp";
import apartment2 from "../../images/apartment2.webp";
import apartment3 from "../../images/apartment3.webp";
import review1 from "../../images/review1.webp";
import review2 from "../../images/review2.webp";
import blogSM1 from "../../images/blogSM1.webp";
import blogSM2 from "../../images/blogSM2.webp";
import blogSM3 from "../../images/blogSM3.webp";
import blogBG from "../../images/blogBG.webp";
import { BiCommentDetail } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
import {
  AiOutlineBgColors,
  AiOutlineForm,
  AiOutlineSolution,
  AiOutlineHome,
  AiOutlineLaptop,
  AiOutlineCluster,
  AiOutlinePound,
} from "react-icons/ai";

import ApartmentCard from "../../components/ApartmentCard";
import ButtonNonBg from "../../components/ButtonNonBg";
import Review from "../../components/Review";
import BlogSmall from "../../components/BlogSmall";
import Underline from "../../components/Underline";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      {/* section hero */}

      <section className="section_hero_wrapper">
        <div className="section_hero">
          <div className="hero-content container">
            <div className="hero-content-left">
              <h5 className="heading_secondary">BEAUTIFUL INVESTMENTS</h5>
              <h1 className="heading_primary">
                Everyone Deserves the Opportunity of the Home
              </h1>
              <h5 className="heading_tertiary">
                Enim a, scelerisque aliquet vivamus neque diam sed at pede do
                laos orci. Potenti vel in sagittis nulla augue vitae et tempus
                torquent dicid Lacinia neque mus maleware poside
              </h5>

              <div className="button_view">
                <Button type="button" text="View Property" />
              </div>
            </div>
            <div className="hero-content-right"></div>
          </div>
        </div>
      </section>
      {/* section team */}
      <section className="section_team_wrapper">
        <div className="section_team">
          <div className="section_team_content">
            <div className="section_team_img"></div>
            <div className="section_team_text container">
              <h2 className="section_team_text_heading">
                Living From <br /> The Team That Cares
              </h2>
              <span className="underline"></span>
              <p className="section_team_text_paragraph">
                Unto all set life creeping own set. Saw make multiply female
                watge deb all set life creeping own set. Saw make multiply
                female watge abund winged subdue dominion own night days second
              </p>
              <ul className="section_team_text_">
                <li>
                  <span>
                    <AiOutlineBgColors className="icon" />
                  </span>
                  Set dry signs spirit a kind First shall them windged creping
                </li>
                <li>
                  <span>
                    <AiOutlineForm className="icon" />
                  </span>
                  He two face one moved dominion man you're likeness
                </li>
                <li>
                  <span>
                    <AiOutlineSolution className="icon" />
                  </span>
                  Sea forth fill have divide be dominion from life for feven
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
        </div>
      </section>
      {/* section passion */}
      <section className="section_passion_wrapper">
        <div className="section_passion">
          <div className="container passion_content">
            <h1 className="passion_heading">
              Our Passion is
              <br /> People What’s Yours?
            </h1>
            <div className="passion_cards">
              <div className="card_single">
                <PassionCard
                  icon={<AiOutlineHome className="passion_card_logo" />}
                  heading="Creative Design"
                  paragraph="Hac facilisi ac vitae consec tetu commod vel magna suspen disse on senectus pharetra magnfauc bed"
                />
              </div>
              <div className="card_single">
                <PassionCard
                  icon={<AiOutlineLaptop className="passion_card_logo" />}
                  heading="Experience Style"
                  paragraph="Hac facilisi ac vitae consec tetu commod vel magna suspen disse on senectus pharetra magnfauc bed"
                />
              </div>
              <div className="card_single">
                <PassionCard
                  icon={<AiOutlineCluster className="passion_card_logo" />}
                  heading="Product Research"
                  paragraph="Hac facilisi ac vitae consec tetu commod vel magna suspen disse on senectus pharetra magnfauc bed"
                />
              </div>
              <div className="card_single">
                <PassionCard
                  icon={<AiOutlinePound className="passion_card_logo" />}
                  heading="Affordable Price"
                  paragraph="Hac facilisi ac vitae consec tetu commod vel magna suspen disse on senectus pharetra magnfauc bed"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section apartment */}
      <section className="section_apartment_wrapper">
        <div className="container apartment_head_container">
          <div className="apartment_head">
            <h2>
              Provide The <br /> Beautiful Apartment
              <Underline />
            </h2>
          </div>
          <ButtonNonBg color="#cfb578" />
        </div>

        <div className="section_apartment container">
          <ApartmentCard
            imgUrl={apartment1}
            subheading="HOME,APARTMENT"
            heading="Detached House For Sale"
            bath="2"
            room="3"
            space="2400"
          />

          <ApartmentCard
            imgUrl={apartment2}
            subheading="HOME,APARTMENT"
            heading="Detached House For Sale"
            bath="2"
            room="3"
            space="2400"
          />
          <ApartmentCard
            imgUrl={apartment3}
            subheading="HOME,APARTMENT"
            heading="Detached House For Sale"
            bath="2"
            room="3"
            space="2400"
          />
        </div>
      </section>
      {/* section ready */}

      <section>
        <div className="ready_wrapper">
          <div className="container ready_text_box">
            <h2 className="ready_title">Are You Ready For Move?</h2>
            <p className="ready_subtitle">
              Lights had saw moving saw female blessed
            </p>
            <Button text="Sing up" />
          </div>
        </div>
      </section>
      {/* section customer Review */}

      <section className="section_customer">
        <div className="container">
          <h2 className="review_title">
            Our Happy Customer Says <br /> About us
            <Underline />
          </h2>

          <div className="review_wrapper">
            <Review
              img={review1}
              name="Mount Alezaber"
              jd="Project manager"
              review=" Enim a, scelerisque aliquet. Vivamus neque diam sed at, pede laoreet
          orci. Potenti vel In sagittis nulla augue vitae et tempus torquent.
          Lacinia neque mus taciti ante prsent at facilisis. Enim a, scelerisque
          aliquet. Vivamus neque diam sed at, pede laoreet orci Potti, vel. In
          sagittis nulla augue vitae et tempus torquent."
            />

            <Review
              img={review2}
              name="Alex Costanja"
              jd="Software engineer"
              review=" Enim a, scelerisque aliquet. Vivamus neque diam sed at, pede laoreet
          orci. Potenti vel In sagittis nulla augue vitae et tempus torquent.
          Lacinia neque mus taciti ante prsent at facilisis. Enim a, scelerisque
          aliquet. Vivamus neque diam sed at, pede laoreet orci Potti, vel. In
          sagittis nulla augue vitae et tempus torquent."
            />
          </div>
        </div>
      </section>
      {/* section read out blog */}

      <section className="section_blog ">
        <h2 className="bb_title container">
          Read Latest News <br /> From Our Blog
          <Underline />
        </h2>

        <div className="container blog">
          <div className="blog_left">
            <div className="blog_left_content">
              <img src={blogBG} alt="Builders blog img" />
              <div className="blog_left_textBox">
                <p className="bbg_type">
                  APARMENT <span>/ July 28,2022</span>
                </p>
                <h2 className="bbg_subtitle">
                  Doee lights without darkness that said <br /> good deep years
                  very.
                </h2>
                <div className="comment">
                  <BiCommentDetail className="bb_icon" />
                  <p className="bb_icon_text">2 comment</p>
                  <BsHeart className="bb_icon" />
                  <p className="bb_icon_text">8 like</p>
                </div>
              </div>
            </div>
          </div>
          <div className="blog_right">
            <BlogSmall
              img={blogSM1}
              type="Home"
              title={"Green very from for rule stars season"}
              date={"Mar 12"}
              like={0}
            />
            <BlogSmall
              img={blogSM2}
              type="apartment"
              title={"Moveth wherein subdue of brought"}
              date={"June 05"}
              like={0}
            />
            <BlogSmall
              img={blogSM3}
              type="Home"
              title={"Firmament heaven can't him night rule"}
              date={"Mar 12"}
              like={0}
            />
          </div>
        </div>
      </section>

      {/* section footer*/}

      <Footer />
    </>
  );
}

export default Home;
