import React from "react";
import Phone from "./Phone";
import GoogleForm from "./GoogleForm";
import "./styles/Message.css";

function Message(props) {
  return (
    <div className="Message__grouper">
      <div class="Message__grouper__info">
        <h1>Siempre que lo desees, podrás contactar con nosotros.</h1>
        <h2>MEDIANTE MENSAJE DIRECTO</h2>
        <p>Intentaremos responderte en un plazo máximo de 24 horas.</p>
        <h2>POR TELÉFONO</h2>
        <p>Responderemos dentro del horario de atención al cliente.</p>
      </div>
      <Phone scheduleData={props.scheduleData} image={props.image} />
      <GoogleForm />
    </div>
  );
}

export default Message;
