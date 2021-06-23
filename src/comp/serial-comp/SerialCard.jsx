import { Link } from 'react-router-dom'

function SerialCard(props) {
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
        <Link to={'/serial/' + props.data.id} className="serial-card card">
            <div className="serial-card-top card-top">
                {
                    props.data.poster_path ? <img className="serial-card-img card-img" src={link + props.data.poster_path} alt="" /> : <img className="serial-card-img card-img" src={require('/Users/Ансар/Documents/react/ansa-app/src/img/images.png').default}></img>
                }
                <span className={`serial-card-vote_average card-vote_average ${setVoteClass(props.data.vote_average)}`}>{props.data.vote_average}</span>
                <p className="serial-card-overview card-overview">{`Описание: ${props.data.overview}`}</p>
            </div>
            <div className="serial-card-bottom card-bottom">
                <h1 className="serial-card-title card-title">{props.data.name}</h1>
                <p className="serial-card-release_date card-release_date">{props.data.first_air_date}</p>
            </div>
        </Link>
    )
}

export default SerialCard;