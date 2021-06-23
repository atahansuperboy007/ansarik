import { useState} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import SerialCard from './SerialCard'

function SerialFilterList() {

    const [findserials, setSerialsBy] = useState([])

    function FindSerial(selectedGenre) {
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=9122d3e99f5cf10f65b111a1dcd51b20&with_genres=' + selectedGenre + '&primary_release_year=&language=ru-RU&page=1')
            .then(res => res.json())
            .then(data => {
                setSerialsBy(data.results)
            })
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
                breakpoint:320,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    }
    return (
        <>
            <div className="selector">
                <select id="genres" onChange={(e) => {
                    const selectedGenre = e.target.value
                    FindSerial(selectedGenre)
                }}>
                    <option className="movie-option" value="1">Select Genre</option>
                    <option className="movie-option" value="10759">Action & Adventure</option>
                    <option className="movie-option" value="16">Animation</option>
                    <option className="movie-option" value="99">Documentary</option>
                    <option className="movie-option" value="18">Drama</option>
                    <option className="movie-option" value="10751">Family</option>
                    <option className="movie-option" value="10762">Kids</option>
                    <option className="movie-option" value="36">History</option>
                    <option className="movie-option" value="35">Comedy</option>
                    <option className="movie-option" value="10768">War & Politics</option>
                    <option className="movie-option" value="80">Crime</option>
                    <option className="movie-option" value="10402">Music</option>
                    <option className="movie-option" value="9648">Mystery</option>
                    <option className="movie-option" value="10749">Romance</option>
                    <option className="movie-option" value="10765">Sci-fi & Fantasy</option>
                    <option className="movie-option" value="10767">Talk</option>
                    <option className="movie-option" value="10766">Soap</option>
                    <option className="movie-option" value="37">Western</option>
                    <option className="movie-option" value="10763">News</option>
                    <option className="movie-option" value="10764">Reality</option>
                </select>
            </div>
            <Slider className="serial-list list" {...properties}>
                {
                    findserials.map(item => (
                        <SerialCard data={item} />
                    ))
                }
            </Slider>
        </>
    )
}

export default SerialFilterList;