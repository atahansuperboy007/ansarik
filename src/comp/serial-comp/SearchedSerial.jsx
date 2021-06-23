
import { useState, useEffect, } from 'react'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Pagination from '../main-comp/Pagination'

import SerialCard from './SerialCard'

function SearchedMovie() {
    const { q } = useParams()

    const [searchedserials, setSearchedSerials] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    let [totalResults, setTotalResults] = useState(0)
    let [currentPage, setCurrentPage] = useState(1)
    let [numberPages, setTotalPages] = useState(0)
    const history = useHistory()

    useEffect(() => {
        if (q) {
            fetch('https://api.themoviedb.org/3/search/tv?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&query=' + q + '')
                .then(res => res.json())
                .then(data => {
                    setSearchedSerials(data.results)
                    setTotalResults(totalResults = data.total_results)
                    setTotalPages(numberPages = data.total_pages)
                })
        }
    }, [q])


    function handleOnSubmit() {
        history.push('/searchserial/' + searchTerm)
    }

    let nextPage = (pageNumber) => {
        if (q) {
            fetch('https://api.themoviedb.org/3/search/tv?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&query=' + q + '&page=' + pageNumber + '')
                .then(res => res.json())
                .then(data => {
                    setSearchedSerials(data.results)
                    setCurrentPage(currentPage = pageNumber)
                })
        }
    }

    return (
        <>
            <div className="search-bar">
                <form onSubmit={handleOnSubmit} className="search-bar-form" action="">
                    <input onChange={e => setSearchTerm(e.target.value)} placeholder="Search a Serial" value={searchTerm} className="search-bar-input" type="search" />
                </form>
            </div>
            <div className="searched-movie-info">
                <h1>{`Вы искали: ${q}`}</h1>
                <p>{`Найдено записей на сайте: ${totalResults}`}</p>
            </div>
            <div className="searched-movies-list">
                {
                    searchedserials.map(item => (
                        <SerialCard data={item} />
                    ))
                }
            </div>
            {
                totalResults > 20 ? <Pagination pages={numberPages} nextPage={nextPage} currentPage={currentPage} /> : ''
            }
        </>
    )
}

export default SearchedMovie;