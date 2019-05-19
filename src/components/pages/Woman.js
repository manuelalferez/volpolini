import React from "react";
import data from '../myData/Sidebar__Woman__data'
import PageContent from "../PageContent";
import products from '../myData/Products__woman__data'

function Woman() {
    return (
      <div className="Woman">
        <PageContent data={data} text='Mujer' products={products} gender='woman'/>
      </div>
    );
}

export default Woman;
