import React, { Component } from "react";
import "./styles/Contact.css";
import data from "../myData/Hero__Contact__data";
import Hero from "../Hero";
import scheduleData from "../myData/Schedule__data";
import phoneImage from "../../images/Contact__images/phone.svg";
import Message from "./Contact/Message";

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <Hero data={data} />
        <Message scheduleData={scheduleData} image={phoneImage} />
      </div>
    );
  }
}

export default Contact;
