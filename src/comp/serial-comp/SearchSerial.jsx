import { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import SerialCard from './SerialCard';

function SearchSerial() {
    const [searchserials, setSearchSerials] = useState([])
    const [searchTerm, setSearchTerm] = useState([])

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            fetch('https://api.themoviedb.org/3/search/tv?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&query=' + searchTerm + '&page=1')
                .then(res => res.json())
                .then(data => {
                    setSearchSerials(data.results)
                })
        }
    }

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
            <div className="search-bar">
                <form onSubmit={handleOnSubmit} className="search-bar-form" action="">
                    <input onChange={handleOnChange} placeholder="Search a Serial" value={searchTerm} className="search-bar-input" type="search" />
                </form>
            </div>
            <Slider className="search-serials-list list" {...properties}>
                {
                    searchserials.map(item => (
                        <SerialCard data={item} />
                    ))
                }
            </Slider>
        </>
    )
}

export default SearchSerial;