import React from "react";
import mobile from "../assets/mobile.svg";
import appStore from "../assets/app-store.svg";
import gStore from "../assets/g10.png";
import "./download.css";
function Download() {
  return (
    <section className="app" id="contact">
      <div className="image">
        <img src={mobile} alt="" />
      </div>
      <div className="content">
        <h3>Place your order through our app</h3>
        <p>
          You can easily place your order using our mobile app. Now you can
          download our app for both IOS and Android mobiles.
        </p>
        <div className="links">
          <img src={appStore} alt="" />
          <img src={gStore} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Download;
