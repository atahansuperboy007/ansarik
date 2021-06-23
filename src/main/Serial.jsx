import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import CastCard from '../comp/actor-comp/CastCard'
import SimilarSerialCard from '../comp/serial-comp/SimilarSerialCard'

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

    const [serial, setSerial] = useState(null)

    const [videos, setVideo] = useState(null)

    const [cast, setCast] = useState(null)

    const [crew, setCrew] = useState(null)

    const [similarserials, setSimilarSerials] = useState(null)

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/tv/ ' + id + '?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU')
            .then(res => res.json())
            .then(data => {
                setSerial(data)
            })
    }, [id])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/tv/' + id + '/videos?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&page=1')
            .then(res => res.json())
            .then(videos => {
                setVideo(videos)
            })
    }, [id])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/tv/' + id + '/credits?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&page=1')
            .then(res => res.json())
            .then(cast => {
                setCast(cast)
            })
    }, [id])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/tv/' + id + '/credits?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&page=1')
            .then(res => res.json())
            .then(crew => {
                setCrew(crew)
            })
    }, [id])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/tv/' + id + '/similar?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&page=1')
            .then(res => res.json())
            .then(similar => {
                setSimilarSerials(similar.results)
            })
    }, [id])

    if (!serial) return null

    if (!videos) return null

    if (!cast) return null

    if (!crew) return null

    if (!similarserials) return null

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

    const genreList = serial.genres.map((g, i) => {
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
                {
                    serial.backdrop_path ? (<img className="movie-backdrop" src={link + serial.backdrop_path} />) : (<img className="movie-backdrop" src={require('/Users/Ансар/Documents/react/ansa-app/src/img/cool-background.png').default} alt="" />)
                }
                {
                    videos.results.length > 0 ? (<iframe frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src={videolink + videos.results[0].key}></iframe>) : (<></>)
                }
            </div>
            <div className="movie-section">
                <div className="movie-left">
                    <div className="movie-pictures">
                        {
                            serial.poster_path ? <img className="movie-poster" src={link + serial.poster_path} alt="" /> : <img className="movie-poster" src={require('/Users/Ансар/Documents/react/ansa-app/src/img/images.png').default}></img>
                        }
                        <span className={`movie-vote-average ${setVoteClass(serial.vote_average)}`}>{serial.vote_average}</span>
                    </div>
                </div>
                <div className="movie-right">
                    <div className="movie-info">
                        <h1 className="movie-title">{serial.name}</h1>
                        <h1 className="movie-original-title">{serial.original_name}</h1>
                        <h3 className="movie-original-tagline">{serial.tagline}</h3>
                        <p className="movie-release-date">{serial.release_date}</p>
                        <ol className="movie-genre">{serial.genres && genreList}</ol>
                        <p className="movie-overview">{serial.overview}</p>
                        <div className="movie-details">
                            <div className="movie-detail">
                                <p className="movie-overview">Количество Серии: </p><span>{`${serial.number_of_episodes}`}</span>
                            </div>
                            <div className="movie-detail">
                                <p className="movie-overview">Количество Сезонов: </p><span>{`${serial.number_of_seasons}`}</span>
                            </div>
                            <div className="movie-detail">
                                <p className="movie-original-lang">Оригинальный язык: </p><span>{serial.original_language}</span>
                            </div>
                            <div className="movie-detail">
                                <p className="movie-popularity">Популярность: </p><span>{serial.popularity}</span>
                            </div>
                            <div className="movie-detail">
                                <p className="movie-homepage">Страница: </p><span><a href={serial.homepage}>{serial.name}</a></span>
                            </div>
                            <div className="movie-detail">
                                <p className="movie-status">Статус: </p><span>{serial.status}</span>
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
            <div className="similar-serials">
                <div className="similar-serials-title title">
                    <h1>Similar Serials</h1>
                </div>
                <Slider className="movie-list" {...properties}>
                    {
                        similarserials.map(item => (
                            <SimilarSerialCard similar={item} />
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Movie;