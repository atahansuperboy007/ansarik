import { useState} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieCard from './MovieCard'

function MovieFilterList() {

    const [findmovies, setMoviesBy] = useState([])

    function FindMovie(selectedGenre) {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=9122d3e99f5cf10f65b111a1dcd51b20&with_genres=' + selectedGenre + '&language=ru-RU&page=1')
            .then(res => res.json())
            .then(data => {
                setMoviesBy(data.results)
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
                    FindMovie(selectedGenre)
                }}>
                    <option className="movie-option" value="1">Select Genre</option>
                    <option className="movie-option" value="28">Action</option>
                    <option className="movie-option" value="16">Animation</option>
                    <option className="movie-option" value="99">Documentary</option>
                    <option className="movie-option" value="18">Drama</option>
                    <option className="movie-option" value="10751">Family</option>
                    <option className="movie-option" value="14">Fantasy</option>
                    <option className="movie-option" value="36">History</option>
                    <option className="movie-option" value="35">Comedy</option>
                    <option className="movie-option" value="10752">War</option>
                    <option className="movie-option" value="80">Crime</option>
                    <option className="movie-option" value="10402">Music</option>
                    <option className="movie-option" value="9648">Mystery</option>
                    <option className="movie-option" value="10749">Romance</option>
                    <option className="movie-option" value="878">Sci-fi</option>
                    <option className="movie-option" value="27">Horror</option>
                    <option className="movie-option" value="12">Adventure</option>
                    <option className="movie-option" value="37">Western</option>
                    <option className="movie-option" value="53">Thriller</option>
                    <option className="movie-option" value="10770">TV movie</option>
                </select>
            </div>
            <Slider className="filter-movies-list list" {...properties}>
                {
                    findmovies.map(item => (
                        <MovieCard data={item} />
                    ))
                }
            </Slider>
        </>
    )
}

export default MovieFilterList;