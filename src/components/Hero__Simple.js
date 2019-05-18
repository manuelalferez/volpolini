import React from "react";
import "./styles/Hero__Simple.css";

function Hero__Simple(props) {
  return (
    <div className="Hero__simple">
      <div className="Hero__simple__imageContainer">
        <img
          className="Hero__simple__image"
          src={props.data.heroImg}
          alt={props.data.alt}
        />
      </div>
      <h1 className={props.data.className}>{props.data.heroText}</h1>
    </div>
  );
}

export default Hero__Simple;
