import { Link } from 'react-router-dom'

function SimilarSerialCard(props) {
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
        <Link to={'/serial/' + props.similar.id} className="serial-card card">
            <div className="movie-card-top card-top">
                <img className="movie-card-img card-img" src={link + props.similar.poster_path} alt="" />
                <span className={`movie-card-vote_average card-vote_average ${setVoteClass(props.similar.vote_average)}`}>{props.similar.vote_average}</span>
                <p className="movie-card-overview card-overview">{`Описание: ${props.similar.overview}`}</p>
            </div>
            <div className="movie-card-bottom card-bottom">
                <h1 className="movie-card-title card-title">{props.similar.name}</h1>
                <p className="movie-card-release_date card-release_date">{props.similar.first_air_date}</p>
            </div>
        </Link>
    )
}

export default SimilarSerialCard;