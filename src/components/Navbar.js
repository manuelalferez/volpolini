import React from "react";
import "./styles/Navbar.css";
import {Link} from "react-router-dom";
import data from "./myData/Navbar__data";
import data__little from './myData/Navbar__Little__data';
import bag_image from '../images/Navbar__images/shopping-bag.svg';
import user_image from '../images/Navbar__images/user.svg';

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
        <div className='Navbar__user__bag'>
          <div className='Navbar__user'>
            <img src={user_image} alt='Imagen de usuario' />
            <p className='Navbar__user__text'>Iniciar sesión</p>
          </div>
          <div className='Navbar__bag'>
            <img src={bag_image} alt='Bolsa de la compra'/>
          </div>
        </div>
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
