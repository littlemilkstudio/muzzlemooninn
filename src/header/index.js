import React from "react";
import Button from "../button";
import logo from "../logo.svg";
import "./index.scss";

export default () => (
  <header className="header">
    <div className="wrapper header-inner">
      <img src={logo} className="header-logo" alt="logo" />
      <div className="cta-container">
        <Button
          target="_blank"
          href="https://www.google.com/maps/place/200+Green+Hollow+Dr+SW,+Pataskala,+OH+43062"
          alt
        >
          <i className="fas fa-map-marker-alt" />
        </Button>
        {/* <Button target="_blank" href="#" alt>
          <i className="fab fa-facebook-f" />
        </Button> */}
        <Button href="mailto: shariyinger@icloud.com">Contact Us</Button>
      </div>
    </div>
  </header>
);
