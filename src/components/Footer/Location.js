import React from 'react';
import './styles/Location.css'
const LOCATION = "https://www.google.com/maps/place/Calle+Real,+27,+23780+Lopera,+Ja%C3%A9n/@37.9456676,-4.2153734,17z/data=!3m1!4b1!4m5!3m4!1s0xd6c4d9ffdf695cb:0x94d629d2368a1fef!8m2!3d37.9456676!4d-4.2131847";

function Location () {
    return (
        <div className='Location'>
            <h1 className='Location__title'> Localización</h1>
            <a className='Location__link' href={LOCATION} target="_blank" rel="noopener">Calle Real 27, Lopera (Jaén)</a>
        </div>
    )
}

export default Location