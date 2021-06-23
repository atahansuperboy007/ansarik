import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Person() {
    const link = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/person/ ' + id + '?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU')
            .then(res => res.json())
            .then(person => {
                setPerson(person)
            })
    }, [])

    const { id } = useParams()

    const [person, setPerson] = useState(null)

    if (!person) return null

    return (
        <div className="person-card">
            <div className="person-card-top">
                {
                    person.profile_path ? (<img className="person-card-img" src={link + person.profile_path} alt="" />) : (<img className="person-card-img" src={require('/Users/Ансар/Documents/react/ansa-app/src/img/unknown-cast.jpg').default} alt="" />)
                }
            </div>
            <div className="person-card-bottom">
                <h1 className="person-card-name">{person.name}</h1>
                <h3 className="person-card-original-name">{person.also_known_as[0]}</h3>
                <p className="person-card-sphere">{`Сфера: ${person.known_for_department}`}</p>
                <p className="person-card-biography">{person.biography}</p>
                <div className="person-details">
                    <div className="person-details-column-one">
                        <div className="person-detail">
                            <p className="person-birthday">Дата рождения:</p><span>{person.birthday}</span>
                        </div>
                        <div className="person-detail">
                            <p className="person-birth_place">Место рождения:</p><span>{person.place_of_birth}</span>
                        </div>
                    </div>
                    <div className="person-details-column-two">
                        <div className="person-detail">
                            <p className="person-popularity">Популярность:</p><span>{person.popularity}</span>
                        </div>
                        <div className="person-detail">
                            <p className="person-deathday">Дата смерти:</p><span>{person.deathday}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Person;