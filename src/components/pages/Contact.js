import React, { Component } from "react";
import "./styles/Contact.css";
import data from "../myData/Hero__Contact__data";
import Hero from "../Hero";

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <Hero data={data} />
      </div>
    );
  }
}

export default Contact;
