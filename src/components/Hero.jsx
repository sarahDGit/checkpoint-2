import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Hero.css'

function Hero({hero}) {
    return (
        <div className="Hero">
            <article className="HeroCard">
                <img classname="HeroImg" src={hero.image} alt={hero.name} />
                <div className="HeroCardContent">
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={{ pathname: `/${hero.id}`}}>
                    <h2>{hero.name}</h2>
                </Link>
                    <span>{hero.race} {hero.gender}</span>
                <div className="HeroAttributes">
                    <h2>Attributes : </h2>
                    <span>Speed : {hero.speed}</span>
                    <span>Force : {hero.force}</span>                    
                    <span>Stamina : {hero.stamina} </span>
                </div>
                </div>
            </article>            
        </div>
    )
}

export default Hero
