import { useState, useEffect, } from 'react'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function MovieSearchBar() {
    const [searchTerm, setSearchTerm] = useState('')
    const history = useHistory()


function handleOnSubmit() {
    history.push('/searchmovies/' + searchTerm)
}

return (
    <>
        <div className="search-bar">
            <form onSubmit={handleOnSubmit} className="search-bar-form" action="">
                <input onChange={e => setSearchTerm(e.target.value)} placeholder="Search a Movie" value={searchTerm} className="search-bar-input" type="search" />
            </form>
        </div>
    </>
)
}

export default MovieSearchBar;