import React from 'react';
import "./hero.scss";
import { ReactComponent as Tank } from '../svg/tank.svg';
import { ReactComponent as Support } from '../svg/support.svg';
import { ReactComponent as Dmg } from '../svg/dmg.svg';

const findIcon = (role) => {
    if (role === 'defense') {
        return Dmg;
    }

    if (role === 'support') {
        return Support;
    }

    return Tank;
}

const Hero = ({ role, img, name}) => {
    const Icon = findIcon(role);

    return (
        <div className="hero">
            <img src={img} className="hero__img" alt={name} />
            <div className="hero__details">
                <Icon />
                <h2>{name}</h2>
            </div>
        </div>
    )
}

export default Hero;