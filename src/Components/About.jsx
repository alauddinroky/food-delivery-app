import React from "react";
import aboutIcon from "../assets/illus.svg";
import aboutIcon2 from "../assets/about.svg";
import aboutIcon3 from "../assets/about3.svg";

import "./about.css";
function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="image">
          <img src={aboutIcon} alt="" />
        </div>
        <div className="content">
          <h3>
            <span className="yellow">Order</span> anytime and anywhere
          </h3>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts Lorem ipsum is
            placeholder text commonly used in the graphic, print, publishing
            industries for previewing layouts Lorem ipsum is placeholder text
            commonly used in the graphic, print,
          </p>
          <a href="#" className="btn">
            Make an Offer
          </a>
        </div>
      </section>
      <section className="about about-2">
        <div className="content">
          <h3>
            <span className="yellow">Deliver</span> the products with best
            safety
          </h3>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts Lorem ipsum is
            placeholder text commonly used in the graphic, publishing industries
            for previewing layouts Lorem ipsum is placeholder text commonly used
            in the graphic, print,
          </p>
          <a href="#" className="btn">
            Make an Offer
          </a>
        </div>

        <div className="image">
          <img src={aboutIcon2} alt="" />
        </div>
      </section>
      <section className="about about-3" style={{ gap: "3rem 13rem" }}>
        <div className="image">
          <img src={aboutIcon3} alt="" />
        </div>

        <div className="content">
          <h3>
            <span className="yellow">Track</span> your order very easily
          </h3>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts Lorem ipsum is
            placeholder text publishing industries for previewing layouts Lorem
            ipsum is placeholder text commonly used in the graphic, print,
          </p>
          <a href="#" className="btn">
            Track Now
          </a>
        </div>
      </section>
    </>
  );
}

export default About;
