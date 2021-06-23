import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function Nav() {
    const [sidebar, setSideBar] = useState(false)
    const showSideBar = () => setSideBar(!sidebar)

    return (
        <>
            <header>
                <div className="container">
                    <div className="header-inner">
                        <div className="header-logo" onClick={showSideBar}>
                            <img src={require('/Users/Ансар/Documents/react/ansa-app/src/img/target.svg').default} alt="" className="header-logo-img" />
                        </div>
                    </div>
                </div>
            </header>
            <aside className={sidebar ? 'side-bar active' : 'side-bar'}>
                <div className="side-bar-inner">
                    <div className="side-bar-logo">
                        <img className="side-bar-logo-img" src={require('/Users/Ансар/Documents/react/ansa-app/src/img/target.svg').default} alt="" />
                        <h1 className="side-bar-logo-title">ansagang</h1>
                    </div>
                    <div className="side-bar-links">
                        <NavLink active className="side-bar-link" to="/welcome">Main</NavLink>
                        <NavLink className="side-bar-link" to="/movies">Movies</NavLink>
                        <NavLink className="side-bar-link" to="/serials">Serials</NavLink>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Nav;