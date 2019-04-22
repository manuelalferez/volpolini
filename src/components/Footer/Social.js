import React from 'react';
import './styles/Social.css'
import data from '../myData/Social__data'

function Social () {
    return (
        <div className='Social'>
        {
           data.map(item => (
               <a className={item.className} href={item.dir}/>
           ))
        }
        </div>
    )
}

export default Social