import React, { useState } from "react";

function Header() {
  const [nav, setNav] = useState(false);
  function toggle() {
    setNav(!nav);
  }
  return (
    <div className="header">
      <div className="logo">
        <a href="">
          Deleve<span className="yellow">roo</span>
        </a>
      </div>
      <nav className={nav ? "navbar show" : "navbar"}>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact Us</a>
        <a href="" className="btn">
          Make an Order
        </a>
      </nav>
      <div id="menuToggle" onClick={toggle}>
        <input placeholder="" type="checkbox" />
        <span id="span1"></span>
        <span id="span2"></span>
        <span id="span3"></span>
      </div>
    </div>
  );
}

export default Header;
