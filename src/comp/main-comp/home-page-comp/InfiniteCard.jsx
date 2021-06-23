import { Link } from 'react-router-dom'

function InfiniteCard(props) {
    const link = 'https://image.tmdb.org/t/p/original'

    return (
        <div className="infinite-card">
            <div className="infinite-poster">
                <img loading="lazy" src={link + props.data.backdrop_path} alt="" />
            </div>
        </div>
    )
}

export default InfiniteCard;