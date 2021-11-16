import React from 'react'
import "./Header.css"
import movieicon from "./film-slate.png"

const Header = () => {
    return (
        <div>
            <span className="header"><img src={movieicon} alt="photu" />
                MOVIES-HUB</span>
        </div>
    )
}

export default Header
