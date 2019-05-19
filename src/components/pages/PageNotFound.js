import React from "react";
import { Link } from "react-router-dom";
import "./styles/PageNotFound.css";

function PageNotFound() {
  return (
    <div className="PageNotFound">
      <h1 className="PageNotFound__title">Página no encontrada</h1>
      <p className="PageNotFound__description">
        La página que estás buscando no está disponible en estos momentos.
      </p>

      <div className="PageNotFound__return">
        <Link className="PageNotFound__return__link" to="/">
          Ir a la página principal
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
