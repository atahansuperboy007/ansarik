import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import CastCard from '../comp/actor-comp/CastCard'
import SimilarMovieCard from '../comp/movie-comp/SimilarMovieCard'

function Movie() {
    const link = 'https://image.tmdb.org/t/p/original'
    const videolink = 'https://www.youtube.com/embed/'
    const setVoteClass = (vote) => {
        if (vote >= 8) {
            return "green";
        } else if (vote >= 5) {
            return "orange";
        } else {
            return "red";
        }
    }

    const { id } = useParams()

    const [movie, setMovie] = useState(null)

    const [videos, setVideo] = useState(null)

    const [cast, setCast] = useState(null)

    const [crew, setCrew] = useState(null)

    const [similarmovies, setSimilarMovies] = useState(null)

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/ ' + id + '?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU')
            .then(res => res.json())
            .then(data => {
                setMovie(data)
            })
    }, [id])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/' + id + '/videos?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&page=1')
            .then(res => res.json())
            .then(videos => {
                setVideo(videos)
            })
    }, [id])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/' + id + '/credits?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&page=1')
            .then(res => res.json())
            .then(cast => {
                setCast(cast)
            })
    }, [id ])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/' + id + '/credits?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&page=1')
            .then(res => res.json())
            .then(crew => {
                setCrew(crew)
            })
    }, [id])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/' + id + '/similar?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&page=1')
            .then(res => res.json())
            .then(similar => {
                setSimilarMovies(similar.results)
            })
    }, [id])

    if (!movie) return null

    if (!videos) return null

    if (!cast) return null

    if (!crew) return null

    if (!similarmovies) return null

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

    const genreList = movie.genres.map((g, i) => {
        return (
            <>
                <li className="movie-genre-list" key={i}>
                    <a href="" className="movie-genre-name">
                        {g.name}
                    </a>
                </li>
            </>
        )
    })

    return (
        <div className="movie">
            <div className="movie-trailer">
                <img className="movie-backdrop" src={link + movie.backdrop_path} />
                {
                    movie.backdrop_path ? (<img className="movie-backdrop" src={link + movie.backdrop_path} />) : (<img className="movie-backdrop" src={require('/Users/Ансар/Documents/react/ansa-app/src/img/cool-background.png').default} alt="" />)
                }
                {
                    videos.results.length > 0 ? (<iframe frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src={videolink + videos.results[0].key}></iframe>) : (<></>)
                }
            </div>
            <div className="movie-section">
                <div className="movie-left">
                    <div className="movie-pictures">
                        {
                            movie.poster_path ? <img className="movie-poster" src={link + movie.poster_path} alt="" /> : <img className="movie-poster" src={require('/Users/Ансар/Documents/react/ansa-app/src/img/images.png').default}></img>
                        }
                        <span className={`movie-vote-average ${setVoteClass(movie.vote_average)}`}>{movie.vote_average}</span>
                    </div>
                </div>
                <div className="movie-right">
                    <div className="movie-info">
                        <h1 className="movie-title">{movie.title}</h1>
                        <h1 className="movie-original-title">{movie.original_title}</h1>
                        <h3 className="movie-original-tagline">{movie.tagline}</h3>
                        <p className="movie-release-date">{movie.release_date}</p>
                        <ol className="movie-genre">{movie.genres && genreList}</ol>
                        <p className="movie-overview">{movie.overview}</p>
                        <div className="movie-details">
                            <div className="movie-detail">
                                <p className="movie-overview">Время: </p><span>{`${movie.runtime} минут`}</span>
                            </div>
                            <div className="movie-detail">
                                <p className="movie-original-lang">Оригинальный язык: </p><span>{movie.original_language}</span>
                            </div>
                            <div className="movie-detail">
                                <p className="movie-popularity">Популярность: </p><span>{movie.popularity}</span>
                            </div>
                            <div className="movie-detail">
                                <p className="movie-budget">Бюджет: </p><span>{`${movie.budget}$`}</span>
                            </div>
                            <div className="movie-detail">
                                <p className="movie-homepage">Страница: </p><span><a href={movie.homepage}>{movie.title}</a></span>
                            </div>
                            <div className="movie-detail">
                                <p className="movie-production-country">Производство: </p>
                                {
                                    movie.production_countries.length > 0 ? (<span>{movie.production_countries[0].name}</span>) : (<></>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="movie-cast">
                <div className="cast-title title">
                    <h1>The Cast</h1>
                </div>
                <Slider className="actors-list" {...properties}>
                    {
                        cast.cast.map(item => (
                            <CastCard cast={item} />
                        ))
                    }
                </Slider>
            </div>
            <div className="movie-crew">
                <div className="crew-title title">
                    <h1>The Crew</h1>
                </div>
                <Slider className="actors-list" {...properties}>
                    {
                        cast.crew.map(item => (
                            <CastCard cast={item} />
                        ))
                    }
                </Slider>
            </div>
            <div className="similar-movies">
                <div className="similar-movie-title title">
                    <h1>Similar Movies</h1>
                </div>
                <Slider className="movie-list" {...properties}>
                    {
                        similarmovies.map(item => (
                            <SimilarMovieCard similar={item} />
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Movie;