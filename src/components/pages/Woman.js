import React from "react";
import data from '../myData/Sidebar__Woman__data'
import PageContent from "../PageContent";
import products from '../myData/Products__Woman'
const PATH__IMAGES = '../images/Products__images/Woman/';

function Woman() {
    return (
      <div className="Woman">
        <PageContent data={data} text='Mujer' products={products} path={PATH__IMAGES}/>
      </div>
    );
}

export default Woman;
