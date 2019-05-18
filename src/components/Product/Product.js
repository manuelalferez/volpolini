import React, { Component } from "react";
import "./styles/Product.css";
import images from './Product__images'

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
     var path_img = ''
    if(this.props.category==='woman'){
      path_img = images[0]
    }else{
      path_img = images[1]
    }
    return (
      <div className="Product">
        <img className="Product__image" src={path_img[this.props.item.key-1]} />
        <div className="Product__description">
          <h1 className="Product__title">{this.props.item.title}</h1>
          <p className="Product__price">{this.props.item.price}</p>
          {this.isNew()}
          <ul className="Product__colors-list">
            {this.props.item.colors.map((color) => {
                var styles = {
                  background: color
                }
              return(
                <li
                  key={color + `-` + this.props.item.key}
                  className="Product__colors-list-item"
                  style={styles}
                />
              )
            }
           )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Product;