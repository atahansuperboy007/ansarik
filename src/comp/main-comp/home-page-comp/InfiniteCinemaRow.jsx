import { useState, useEffect } from 'react'

import InfiniteCard from './InfiniteCard'

function InfiniteCinemaRow() {
    const [infiniteone, setInfiniteOne] = useState([])
    const [infinitetwo, setInfiniteTwo] = useState([])
    const [infinitethree, setInfiniteThree] = useState([])
    const [infinitefour, setInfiniteFour] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/trending/all/week?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&page=1')
            .then(res => res.json())
            .then(data => {
                setInfiniteOne(data.results)
            })
    }, [infiniteone])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/trending/all/week?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&page=2')
            .then(res => res.json())
            .then(data => {
                setInfiniteTwo(data.results)
            })
    }, [infinitetwo])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/trending/all/week?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&page=3')
            .then(res => res.json())
            .then(data => {
                setInfiniteThree(data.results)
            })
    }, [infinitethree])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/trending/all/week?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&page=4')
            .then(res => res.json())
            .then(data => {
                setInfiniteFour(data.results)
            })
    }, [infinitefour])

    if (!infiniteone) return null

    if (!infinitetwo) return null

    if (!infinitethree) return null

    if (!infinitefour) return null

    return (
        <>
            <section className="infinite-gallery">
                <div className="infinite-gallery-inner">
                    <div className="gallery-top">
                        <div className="gallery-title">
                            <h1>Всегда есть что посмотреть</h1>
                        </div>
                        <div className="gallery-info">
                            <p>Новые серии в день выхода и тысячи фильмов на вечер. Без рекламы, в хорошем качестве, с любимой озвучкой или в оригинале.</p>
                        </div>
                    </div>
                    <div className="infinite-posters">
                        <div className="infinite-poster-row">
                            {
                                infiniteone.map(item => (
                                    <InfiniteCard data={item} />
                                ))
                            }
                            {
                                infinitetwo.map(item => (
                                    <InfiniteCard data={item} />
                                ))
                            }
                            {
                                infiniteone.map(item => (
                                    <InfiniteCard data={item} />
                                ))
                            }
                        </div>
                        <div className="infinite-poster-row">
                            {
                                infinitethree.map(item => (
                                    <InfiniteCard data={item} />
                                ))
                            }
                            {
                                infinitefour.map(item => (
                                    <InfiniteCard data={item} />
                                ))
                            }
                            {
                                infinitethree.map(item => (
                                    <InfiniteCard data={item} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default InfiniteCinemaRow;