import React, { Component } from "react";
import "./styles/Product.css";
import dataImg from "../images/Products__images/Woman/item-image1.jpeg";

class Product extends Component {
  constructor(props) {
    super();
  }

  isNew() {
    if (this.props.item.new) {
      return <p className="Product__new">Nueva colección</p>;
    }
  }

  render() {
    var PATH__IMG = this.props.path.concat(
      "item-image",
      this.props.item.key,
      ".jpeg"
    );

    /* var path =  PATH__IMG.toString(); */
    var path = "../images/Products__images/Woman/item-image1.jpeg";
    console.log(`Soy el PATH_IMG:` + path);
    return (
      <div className="Product">
        <img className="Product__image" src={dataImg} />
        <div className="Product__description">
          <h1 className="Product__title">{this.props.item.title}</h1>
          <p className="Product__price">{this.props.item.price}</p>
          {this.isNew()}
          <ul className="Product__colors-list">
            {this.props.item.colors.map(color => (
              <li
                key={color + `-` + this.props.item.key}
                className="Product__colors-list-item"
                background={color}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Product;
