import React from "react";
import "./styles/Schedule.css";
import data from '../myData/Schedule__data'

function Schedule() {
  return (
    <div className="Schedule">
      <h2 class="Schedule_title">Horario</h2>
      <div class="Schedule__days">
        <div class="Schedule__weekday">
          <h3> Lunes-Viernes: </h3>
          <p>
            <strong>Mañana:</strong> {data.weekday.morning.start}-{data.weekday.morning.end}h
          </p>
          <p>
            <strong>Tarde:</strong> {data.weekday.afternon.start}-{data.weekday.afternon.end}h
          </p>
        </div>
        <div class="Schedule__weekend">
          <h3>Sábados:</h3>
          <p>
            <strong>Mañana:</strong> {data.weekend.morning.start}-{data.weekend.morning.end}h
          </p>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
