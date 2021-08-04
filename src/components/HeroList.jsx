import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Hero from './Hero';

function HeroList() {
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        axios
        .get("https://lit-badlands-40023.herokuapp.com/heros")
        .then((res) => res.data)
        .then((data) => setHeroes(data))
    }, [])

    return (
        <div className="HeroList">
            <div className="HeroContainer">
            {heroes
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
