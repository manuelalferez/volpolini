import React from "react";
import "./styles/AboutUs.css";
import data from "../myData/Hero__AboutUs__data";
import Hero from "../Hero";
import History from "./AboutUs/History";

function AboutUs() {
  return (
    <div className="AboutUs">
      <Hero data={data} />
      <History />
    </div>
  );
}

export default AboutUs;
