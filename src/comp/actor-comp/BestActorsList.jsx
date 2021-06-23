import { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import ActorCard from './ActorCard';

function BestActorsList() {

    const [bestactors, setBestActors] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/trending/person/week?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&page=1')
            .then(res => res.json())
            .then(data => {
                setBestActors(data.results)
            })
    }, [])

    let properties = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive:
        [
            {
                breakpoint:580,
                settings:{
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint:280,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    }

    return (
        <>
            <div className="actors-title title">
                <h1>Persons Of The Week</h1>
            </div>
            <Slider className="actors-list" {...properties}>
                {
                    bestactors.map(item => (
                        <ActorCard data={item} />
                    ))
                }
            </Slider>
        </>
    )
}

export default BestActorsList;