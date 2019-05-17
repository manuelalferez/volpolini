import React from "react";
import data from '../myData/Sidebar__Man__data'
import PageContent from "../PageContent";

function Man() {
    return (
    <div className='Man'>
        <PageContent data={data} text='Hombre'/>
    </div>
    );
}

export default Man;
