import React, {useState} from 'react'

function Hero({hero}) {
    return (
        <div className="Hero">
            <article className="HeroCard">
                <img src={hero.image} alt={hero.name} />
                <div className="HeroCardContent">
                    <h2>{hero.name}</h2>
                    <span>{hero.race} {hero.gender}</span>
                    <h2 className="HeroAttributes">Attributes</h2>
                    <span>Speed : {hero.speed}</span>
                    <span>Force : {hero.force}</span>                    
                    <span>Stamina : {hero.stamina} </span>
                </div>
            </article>            
        </div>
    )
}

export default Hero
