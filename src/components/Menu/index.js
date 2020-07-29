import React from 'react'
import Logo from '../../assets/img/ShimiFlix.png'
import './Menu.css'

export default props => {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo Shimiflix"></img>
            </a>
            <a className="ButtonLink" href="/">Novo Vídeo</a>
        </nav>
    )
}