import '../styles/banner.css'
import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom'

export default function Banner() {
    return (
        <div className="navbar">
            <div className="logo_container">
                <a href='/'>
                    <img src={logo} alt="MAPP SUPREME" className="App-logo" />
                </a>
            </div>
            <div className="navbar_toggle" id="mobile-menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul className="navbar_menu">
                <a href="#home" className="navbar_links">
                    Home
                </a>
                <a href="#about" className="navbar_links">
                    About
                </a>
                <a href="#services" className="navbar_links">
                    Services
                </a>
                <a>
                    <NavLink to="/auth/login" className="button">Sign In</NavLink>
                </a>
            </ul>
        </div>
    )
}