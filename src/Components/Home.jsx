import React from "react";
import "./Home.css";
import img from "../assets/delivery.svg";
function Home() {
  return (
    // <div className="home">
    //   <input type="checkbox" />
    //   <span id="span11"></span>
    //   <span id="span22"></span>
    //   <span id="span33"></span>
    // </div>
    <>
      <section className="home" id="home">
        <div className="content">
          <h1>
            Order Your Product
            <span className="yellow"> Easier & Faster.</span>
          </h1>
          <p>
            Delivero is a leading global online food delivery marketplace,
            connecting consumers and restaurants through its platform in 24
            countries.
          </p>
          <a href="#" className="home-btn">
            Go to Menu
          </a>
        </div>
        <div className="image">
          <img src={img} alt="" />
        </div>
      </section>
    </>
  );
}

export default Home;
