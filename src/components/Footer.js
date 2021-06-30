import React from 'react'
import '../style/Footer.scss'
import Button from './Button'
import logo from '../images/logo-light.svg'

function Footer() {
    return (
        <footer>
            <div className="get-started">
                <div className="container">
                    <h1>Boost your links today</h1>
                    <div className="button-wrapper">
                        <Button type="anchor" link="#">
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="container">
                    <div className="logo">
                        <img src={logo} alt="Picture not found..." />
                    </div>
                    <ul className="links">
                        <h3>Features</h3>
                        <li>
                            <a>Branded Links</a>
                        </li>
                        <li>
                            <a>Statistics</a>
                        </li>
                    </ul>
                    <ul className="social">
                        <li>
                            <i className="fab fa-facebook-square"></i>
                        </li>
                        <li>
                            <i className="fab fa-twitter"></i>
                        </li>
                        <li>
                            <i className="fab fa-pinterest"></i>
                        </li>
                        <li>
                            <i className="fab fa-instagram"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer