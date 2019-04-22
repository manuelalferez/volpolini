import React from "react";
import "./styles/Phone.css";

function Phone(props) {
  return (
    <div className="Phone">
      <h1>HORARIO DE APERTURA</h1>
      <h3> Lunes-Viernes: </h3>
      <p>
        Mañana: {props.scheduleData.weekday.morning.start}-
        {props.scheduleData.weekday.morning.end}h
      </p>
      <p>
        Tarde: {props.scheduleData.weekday.afternon.start}-
        {props.scheduleData.weekday.afternon.end}h
      </p>
      <h3>Sábados:</h3>
      <p>
        Mañana: {props.scheduleData.weekend.morning.start}-
        {props.scheduleData.weekend.morning.end}h
      </p>
      <div className="Phone__number">
        <h1>Por teléfono</h1>

        <p>
          <img src={props.image} alt="Phone" /> 665 21 18 42
        </p>
      </div>
    </div>
  );
}

export default Phone;
