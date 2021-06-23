import { Link } from 'react-router-dom'

function ActorCard(props) {
    const link = 'https://image.tmdb.org/t/p/w500'

    return (
        <Link to={'person/' + props.data.id} className="actor-card card">
            <div className="actor-card-top card-top">
                {
                    props.data.profile_path ? (<img className="actor-card-profile card-img" src={link + props.data.profile_path} alt="" />) : (<img className="actor-card-profile card-img" src={require('/Users/Ансар/Documents/react/ansa-app/src/img/unknown-cast.jpg').default} alt="" />)
                }
            </div>
            <div className="actor-card-info card-bottom">
                <h1 className="actor-card-name card-title">{props.data.name}</h1>
                <p className="actor-card-movies">{props.data.known_for[0].title}, {props.data.known_for[1].title}...</p>
                <p className="actor-card-sphere">{`Trending For ${props.data.known_for_department}`}</p>
            </div>
        </Link>
    )
}

export default ActorCard;