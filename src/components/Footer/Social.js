import React from "react";
import "./styles/Social.css";
import data from "../myData/Social__data";

function Social() {
  return (
    <div className="Social">
      {data.map(item => (
        <a key={item.key} className={item.className} href={item.dir} target="_blank" rel="noopener noreferrer"/>
      ))}
    </div>
  );
}

export default Social;
