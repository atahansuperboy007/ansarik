import { Link } from 'react-router-dom'

function MovieCard(props) {
    const link = 'https://image.tmdb.org/t/p/w500'
    const setVoteClass = (vote) => {
        if (vote >= 8) {
            return "green";
        } else if (vote >= 5) {
            return "orange";
        } else {
            return "red";
        }
    }

    return (
        <Link to={'/movie/' + props.data.id} className="movie-card card">
            <div className="movie-card-top card-top">
                {
                    props.data.poster_path ? <img className="movie-card-img card-img" src={link + props.data.poster_path} alt="" /> : <img className="movie-card-img card-img" src={require('/Users/Ансар/Documents/react/ansa-app/src/img/images.png').default}></img>
                }
                <span className={`movie-card-vote_average card-vote_average ${setVoteClass(props.data.vote_average)}`}>{props.data.vote_average}</span>
                <p className="movie-card-overview card-overview">{`Описание: ${props.data.overview}`}</p>
            </div>
            <div className="movie-card-bottom card-bottom">
                <h1 className="movie-card-title card-title">{props.data.title}</h1>
                <p className="movie-card-release_date card-release_date">{props.data.release_date}</p>
            </div>
        </Link>
    )
}

export default MovieCard;