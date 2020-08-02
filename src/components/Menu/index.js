import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/img/ShimiFlix.png'
import Button from '../Button'
import './Menu.css'

export default props => {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Logo Shimiflix"></img>
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">Novo Vídeo</Button>
        </nav>
    )
}