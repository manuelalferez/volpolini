import React from "react";
import "./styles/Product.css";
import images from "./Product__images";

function isNew(item) {
  if (item.new) {
    return <p className="Product__new">Nueva colección</p>;
  }
}

function Product(props) {
  let path_img = "";
  if (props.gender === "Woman") {
    path_img = images[0];
  } else {
    path_img = images[1];
  }

  return (
      <div className="Product">
        <img
            className="Product__image"
            alt={props.item.title}
            src={path_img[props.item.key - 1]}
        />
        <div className="Product__description">
          <h1 className="Product__title">{props.item.title}</h1>
          <p className="Product__price">{props.item.price}</p>
          {isNew(props.item)}
          <ul className="Product__colors-list">
            {props.item.colors.map(color => {
              let styles = {
                background: color
              };
              return (
                  <li
                      key={color + `-` + props.item.key}
                      className="Product__colors-list-item"
                      style={styles}
                  />
              );
            })}
          </ul>
        </div>
      </div>
  );
}

export default Product;
