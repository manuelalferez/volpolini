import React from "react";
import data from '../myData/Sidebar__Man__data'
import PageContent from "../PageContent";
import products from '../myData/Products__man__data'

function Man() {
    let { data_items: productsItems, data_size: numProducts } = products;
    return (
    <div className='Man'>
        <PageContent data={data} products={productsItems} numProducts={numProducts} gender='Hombre'/>
    </div>
    );
}

export default Man;
