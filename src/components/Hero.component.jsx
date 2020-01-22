import React from 'react';
import "./hero.scss";

const Hero = (props) => {

    return (
        <div className="hero">
            <img className="hero__img" src={props.img} alt={props.name} />
            <div className="hero__details">
                <h2>{props.name}</h2>
            </div>
        </div>
    
    )
};

export default Hero;