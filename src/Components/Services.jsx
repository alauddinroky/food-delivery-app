import React from "react";
import "./services.css";
import deliveryIcon from "../assets/delivery-man.png";
import foodIcon from "../assets/fast-food.png";
import orderIcon from "../assets/order-food.svg";
import vectorIcon from "../assets/Vector.png";
function Services() {
  return (
    <section className="services" id="services">
      <div className="top">
        <h2>
          <span className="yellow">Why</span> We are the Best
        </h2>
        <p>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
          Lorem ipsum is placeholder.
        </p>
      </div>

      <div className="bottom">
        <div className="box">
          <img src={deliveryIcon} alt="" />
          <h4>Free Delivery</h4>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
            Lorem
          </p>
          <a href="#">
            View More <img src={vectorIcon} alt="" />{" "}
          </a>
        </div>
        <div className="box">
          <img src={foodIcon} alt="" />
          <h4>Healthy Foods</h4>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
            Lorem
          </p>
          <a href="#">
            View More <img src={vectorIcon} alt="" />{" "}
          </a>
        </div>
        <div className="box">
          <img src={orderIcon} alt="" />
          <h4>Online Ordering</h4>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
            Lorem
          </p>
          <a href="#">
            View More <img src={vectorIcon} alt="" />{" "}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
