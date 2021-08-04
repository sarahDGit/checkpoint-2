import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from './Hero';
import { Link } from 'react-router-dom';
import './HeroDetails.css';

function HeroDetails(props) {
    const [name, setName] = useState();
    const [image, setImage] = useState();
    const heroId = props.match.params.id

    useEffect(() => {
        axios
        .get(`https://a.nacapi.com/Hero/${heroId}`)
        .then((res) =>  {
            setImage(res.data.image)
            setName(res.data.name)
    })
    }, [heroId])

    return (
        <div className='HeroDetails'>
            <span className="HeroName">{name}</span>
            <img src={image} />
            <Link to={{pathname: '/'}}><button className="HomeBtn">Go back to homepage</button></Link>
        </div>
    )
}

export default HeroDetails
