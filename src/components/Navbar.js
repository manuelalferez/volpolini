import React from "react";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";
import data from "./myData/Navbar__data";
import data__little from './myData/Navbar__Little__data';

function Navbar() {
  return (
    <div className="Navbar__bar">
      <nav className="Navbar__little__menu">
        <ul className="Navbar__little__menu-list">
          {data__little.map(data_ele => (
            <li className="Navbar__little__menu-item" key={data_ele.dir}>
              <Link className="Navbar__little__link" to={data_ele.dir}>
                {data_ele.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link to="/" className="Navbar__brand">
        <h1>Volpolini</h1>
      </Link>
      <nav className="Navbar__menu">
        <ul className="Navbar__menu-list">
          {data.map(data_ele => (
            <li className="Navbar__menu-item" key={data_ele.dir}>
              <Link className="Navbar__link" to={data_ele.dir}>
                {data_ele.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
