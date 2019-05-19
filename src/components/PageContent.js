import React, { Component } from "react";
import "./styles/PageContent.css";
import Sidebar from "./Sidebar";
import ProductList from "./Product/ProductList";

class PageContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "Ver todo"
    };
    this.changeCategory = this.changeCategory.bind(this);
  }

  changeCategory(newCategory) {
    this.setState({ category: newCategory });
  }

  componentWillUnmount() {
    this.setState({ category: "Ver todo" });
  }

  render() {
    return (
      <div className="PageContent">
        <Sidebar data={this.props.data} changeCategory={this.changeCategory} />
        <h1 className='PageContent__category'>{this.state.category}</h1>
        <ProductList
          products={this.props.products}
          gender={this.props.gender}
          category={this.state.category}
        />
      </div>
    );
  }
}

export default PageContent;
