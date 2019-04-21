import React from "react";
import './styles/Hero.css';
import data from "./myData/Hero__data";
/* import { Carousel } from "react-responsive-carousel"; */

function Hero() {
  return (
    <div className="Hero">
   {/*      {data.map(image => (
          <div key={image.key}>
            <img className="Hero__image" src={image.heroImg} alt={image.alt} />
            <h1 className="Hero__motto">{image.heroText}</h1>
          </div>
        ))  } */}
    
            <img className="Hero__image" src={data[0].heroImg} alt={data[0].alt} />
            <h1 className={data[0].className}>{data[0].heroText}</h1>
    </div>
  );
}

export default Hero;
