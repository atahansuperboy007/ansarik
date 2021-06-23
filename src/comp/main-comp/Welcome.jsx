import { useEffect, useState } from 'react'

import InfiniteCinemaRow from './home-page-comp/InfiniteCinemaRow'

function Welcome() {
    const [offsetY, setOffsetY] = useState(0)
    const handleScroll = () => setOffsetY(window.pageYOffset)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return() => window.addEventListener('scroll', handleScroll)
    })
    

    return (
        <>
            <section className="welcome">
                <div className="container">
                    <div className="welcome-inner">
                        <div className="welcome-left">
                            <div className="welcome-title title">
                                <h1>Ansagang Movies</h1>
                            </div>
                            <div className="welcome-info">
                                <p>На ansagang вы можете не только найти информацию об интересующих вас фильмах, но и посмотреть их бесплатно онлайн в течение 7 дней или всего за 1 рубль. Мы предлагаем нашим пользователям смотреть фильмы и телесериалы легально и в хорошем качестве, выбрав их из нашей обширной базы данных, насчитывающей тысячи наименований. </p>
                            </div>
                        </div>
                        <div className="welcome-right">
                            <div className="welcome-imgs">
                                <img className="welcome-img" style={{ transform: `rotate(${offsetY * 0.2}deg)` }} src={require('/Users/Ансар/Documents/react/ansa-app/src/img/target.svg').default} alt="" />
                                <img className="welcome-img-back" style={{ transform: `rotate(${offsetY * 0.2}deg)` }} src={require('/Users/Ансар/Documents/react/ansa-app/src/img/target-white.svg').default} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <InfiniteCinemaRow />
        </>
    )
}

export default Welcome;