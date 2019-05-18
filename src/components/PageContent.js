import React, { Component } from "react";
import "./styles/PageContent.css";
import Sidebar from "./Sidebar";
import Product from "./Product/Product";

class PageContent extends Component {
  render() {
    return (
      <div className="PageContent">
        <Sidebar data={this.props.data} />
        {/* <h1 className='PageContent__products'>{this.props.text}</h1> */}
        <div className='PageContent__products'>
            {
                this.props.products.map(item=>(
                    <div key={item.key}>
                        <Product item={item} category={this.props.category}/>
                    </div>
                ))
            }
        </div>
      </div>
    );
  }
}

export default PageContent;