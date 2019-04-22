import React from 'react';
import './styles/Hero.css'

function Hero__Simple (props) {
    return(
        <React.Fragment>
            <img
                  className="Hero__image"
                  src={props.data.heroImg}
                  alt={props.data.alt}
            />
                <h1 className={props.data.className}>{props.data.heroText}</h1>
        </React.Fragment>
    )
}

export default Hero__Simple;