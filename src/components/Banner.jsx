import '../styles/banner.css'
import logo from '../images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '../auth/auth'
import Swal from 'sweetalert2'

export default function Banner() {

    // const [isLoggedIn, handleLoginPage] = useAuth()
    const [token, setToken] = useState(localStorage.getItem('token') || '')
    navigate = useNavigate()

    function handleSignout(e) {
        e.preventDefault()

        localStorage.removeItem('token')
        setToken('')
        Swal.fire('Signing Out!', 'You have successfully logged Out!', 'Continue')
        navigate('/')
        console.log('Signing Out!')
    }

    const scrolling = useRef < HTMLDivElement > (null)

    // useEffect(() => {
    //     function scrollToAbout() {
    //         if (scrolling.current) {
    //             scrolling.current.scrollTo({
    //                 top: 600,
    //                 behavior: 'smooth',
    //             });
    //         }
    //     }

    //     function scrollToServie() {
    //         if (scrolling.current) {
    //             scrolling.current.scrollTo({
    //                 top: 960,
    //                 behavior: 'smooth',
    //             });
    //         }
    //     }

    //     function scrollToHome() {
    //         if (scrolling.current) {
    //             scrolling.current.scrollTo({
    //                 top: 0,
    //                 behavior: 'smooth',
    //             });
    //         }
    //     }

    //     scrollToHome()
    // }, [])

    // function handleScrolling(e) {
    //     e.preventDefault()

    //     const sectionId = e.target.hash.substring(1)

    //     if (sectionId === 'home') {
    //         scrollToHome()
    //     } else if (sectionId === 'about') {
    //         scrollToAbout()
    //     } else if (sectionId === 'service') {
    //         scrollToServie()
    //     }
    // }

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
            <div className="navbar_menu">
                <a href="#home" className="navbar_links">
                    Home
                </a>
                <a href="#about" className="navbar_links">
                    About
                </a>
                <a href="#services" className="navbar_links">
                    Services
                </a>

                {/* { isLoggedIn ? (
                    <Link to="/logout" className="button">Signout</Link>
                ) : (
                    <Link onClick={handleLoginPage} className="button">Login</Link>
                )

                } */}

            </div>
        </div>
    )
}