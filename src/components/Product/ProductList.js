import React, {Component} from "react";
import Product from "./Product";
import "./styles/ProductList.css";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products, //Array con info de productos
      totalProducts: props.numProducts //Total de productos existentes en el Array de datos
    };
    ProductList.noProducts = ProductList.noProducts.bind(this);
    this.selectProducts = this.selectProducts.bind(this);

  }

  static noProducts() {
    return <div className='ProductList__noProducts'>
      <h1>Próximamente</h1>
    </div>;
  }

  selectProducts(products, gender, category) {
    let productsDOM = new Array(this.state.totalProducts);
    let count = 0;
    for (let i = 0; i < this.state.totalProducts; i++) {
      if (category === 'Ver todo' || products[i].category === category) {
        count++;
        productsDOM.push((
            <div key={products[i].key}>
              <Product
                  item={products[i]}
                  gender={gender}
              />
            </div>));
      }
    }
    if (count === 0) {
      return ProductList.noProducts();
    } else {
      return (
          productsDOM.map(item => (item))
      );
    }
  }

  render() {
    return (
        <div className="ProductList">
          {
            this.selectProducts(this.props.products, this.props.gender, this.props.category)
          }
        </div>
    );
  }
}

export default ProductList;
