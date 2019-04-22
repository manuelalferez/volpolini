import React from "react";
import "./styles/History.css";

function History() {
  return (
    <div className="History">
      <div className="History__start">
        <h1 className="History__title History__start__title">
          Nuestra aventura
        </h1>
        <div className="History__text History__start__text__container">
          <p className="History__start__text">
            Nuestra aventura comenzó en el verano de 2018, cuando nos propusimos
            crear una tienda de moda lo más accesible y cómoda para que nuestros
            clientes puedan encontrar todo tipo de modelos y tallas. Después
            pensamos en seleccionar una gran variedad de productos de la mayor
            calidad con los precios más competitivos para nuestros clientes más
            exigentes.
          </p>
          <p className="History__start__text">
            Tras varios meses de mucho apoyo conseguimos traer más por mucho
            menos. Por ahora, toda nuestra colección se encuentra en nuestra
            tienda física y en un futuro deseamos crear un sistema de venta
            online.
          </p>
        </div>
      </div>
      <div className="History__team">
        <h1 className="History__title History__team__title">Equipo</h1>
        <p className="History__text History__team__text">
          Somos especialistas en moda textil para hombre y mujer, una empresa
          local con mucha experiencia en el sector. Mimamos cada detalle y
          buscamos ofrecer un buen servicio a nuestros clientes, con confianza y
          garantías. También adaptamos la prenda al cliente para tu figura
          perfecta.
        </p>
      </div>
    </div>
  );
}

export default History;
