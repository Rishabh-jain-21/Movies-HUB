import React from 'react'
import "./Header.css"
import movieicon from "./film-slate.png"

const Header = () => {
    return (
        <div>
            <span onClick={() => { window.scrollTo(0, 0) }} className="header"><img src={movieicon} alt="photu" />
                MOVIES-HUB</span>
        </div>
    )
}

export default Header
