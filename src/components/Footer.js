import React from "react";
import "./styles/Footer.css";
import Location from "./Footer/Location";
import Schedule from "./Footer/Schedule";
import Social from "./Footer/Social";
import { Link } from "react-router-dom";
import heart from "../images/Footer__images/heart.svg";

function Footer() {
  return (
    <div className="Footer">
      <Schedule />
      <Location />
      <Social />
      <p className="Footer__firm">Volpolini &copy; 2019 </p>
      <p className="Footer__made">
        Made with <img src={heart} width="10px " alt="Heart" className='Footer__made__heart'/> by
        <a
          href="http://www.manuelalferez.com"
          target="_blank"
          className="Footer__made__Link"
        >
          @manuelalferez
        </a>
      </p>
    </div>
  );
}

export default Footer;
