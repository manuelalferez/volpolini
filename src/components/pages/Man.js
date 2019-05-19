import React from "react";
import data from '../myData/Sidebar__Man__data'
import PageContent from "../PageContent";
import products from '../myData/Products__man__data'

function Man() {
    return (
    <div className='Man'>
        <PageContent data={data} products={products} gender='Hombre'/>
    </div>
    );
}

export default Man;
