import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from './Hero';
import { Link } from 'react-router-dom';

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
            <span>{name}</span>
            <img src={image} />
            <Link to={{pathname: '/'}}>Go back to homepage</Link>
        </div>
    )
}

export default HeroDetails
