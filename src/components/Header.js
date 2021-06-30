import React from 'react'
import logo from '../images/logo.svg'
import '../style/Header.scss'

function Header() {
    return (
        <header>
            <div className="container">
                <nav>
                    <div className="nav-logo">
                        <img src={logo} alt="Picture not found..." />
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header