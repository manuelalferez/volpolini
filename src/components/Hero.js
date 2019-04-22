import React from "react";
import "./styles/Hero.css";
import data from "./myData/Hero__data";

function Hero() {
  return (
    <div className="Hero">
        {data.map(element => (
          <div key={element.key}>
            <img
              className="Hero__image"
              src={element.heroImg}
              alt={element.alt}
            />
            <h1 className={element.className}>{element.heroText}</h1>
          </div>
        ))}
    </div>
  );
}

export default Hero;
