import React, { Component } from "react";
import Product from "./Product";
import './styles/ProductList.css'

class ProductList extends Component {
  constructor(props) {
    super();
    this.state = {
      products: props.products,
      numItem: 0
    };
    this.plusProduct = this.plusProduct.bind(this)
    this.noProduct = this.noProduct.bind(this)

  }

  plusProduct(){
      this.setState({numItem: this.state.numItem+1});
      console.log('Hola');
  }
  
  noProduct(){
      if(this.state.numItem === 0){
          return (
              <h1>Próximamente</h1>
          )
      }
  }

  render() {
    console.log(this.state.numItem);
    return (
      <div className="ProductList">
        {this.state.products.map(item => (
          <div key={item.key}>
            <Product item={item} gender={this.props.gender} category={this.props.category} plusProduct={this.plusProduct}/>
            {this.noProduct}
          </div>
        ))}
      </div>
    );
  }
}

export default ProductList;