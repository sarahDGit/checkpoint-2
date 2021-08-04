import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Hero from './Hero';

function HeroList() {
    const [heroes, setHeroes] = useState([]);
    const [isBest, setIsBest] = useState(false);

    useEffect(() => {
        axios
        .get("https://a.nacapi.com/Hero")
        .then((res) => res.data)
        .then((data) => setHeroes(data))
    }, [])

    return (
        <div className="HeroList">
            <button className="FilterBtn" onClick={() => setIsBest(!isBest)}>
                {isBest ? 'Show All Heroes' : 'Show the Best Heroes'}
            </button>
            <div className="HeroContainer">
            {!isBest
                ? 
                heroes
                .map((hero) => (
                    <div key={hero.id}>
                        <Hero hero={hero} />
                    </div>
                ))
                :
                heroes
                .filter((hero) => hero.force > 70 && hero.speed > 50 && hero.stamina > 75)
                .map((hero) => (
                    <div key={hero.id}>
                        <Hero hero={hero} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HeroList
