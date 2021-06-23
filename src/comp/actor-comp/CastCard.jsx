import { Link } from 'react-router-dom'

function CastCard(props) {
    const link = 'https://image.tmdb.org/t/p/w500'

    return (
        <Link to={'/person/' + props.cast.id} className="actor-card card">
            <div className="actor-card-top card-top">
                {
                    props.cast.profile_path ? (<img className="actor-card-profile card-img" src={link + props.cast.profile_path} alt="" />) : (<img className="actor-card-profile card-img" src={require('/Users/Ансар/Documents/react/ansa-app/src/img/unknown-cast.jpg').default} alt="" />)
                }
            </div>
            <div className="actor-card-info card-bottom">
                <h1 className="actor-card-name card-title">{props.cast.name}</h1>
                <p className="actor-card-character">{props.cast.character}</p>
                <p className="actor-card-sphere">{`Trending For ${props.cast.known_for_department}`}</p>
            </div>
        </Link>
    )
}

export default CastCard;