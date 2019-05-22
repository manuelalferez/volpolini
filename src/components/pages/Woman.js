import React from "react";
import data from "../myData/Sidebar__Woman__data";
import PageContent from "../PageContent";
import products from "../myData/Products__woman__data";

function Woman() {
  let { data_items: productsItems, data_size: numProducts } = products;
  return (
    <div className="Woman">
      <PageContent
        data={data}
        text="Mujer"
        products={productsItems}
        gender="Woman"
        numProducts={numProducts}
      />
    </div>
  );
}

export default Woman;
