import '../styles/banner.css'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import React, { useEffect, useRef } from 'react'

export default function Banner() {

    const scrolling = useRef < HTMLDivElement > (null)

    useEffect(() => {
        function scrollToAbout() {
            if (scrolling.current) {
                scrolling.current.scrollTo({
                    top: 600,
                    behavior: 'smooth',
                });
            }
        }

        function scrollToServie() {
            if (scrolling.current) {
                scrolling.current.scrollTo({
                    top: 960,
                    behavior: 'smooth',
                });
            }
        }

        function scrollToHome() {
            if (scrolling.current) {
                scrolling.current.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            }
        }

        scrollToHome()
    }, [])

    function handleScrolling(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault()

        const sectionId = e.target.hash.substring(1)

        if (sectionId === 'home') {
            scrollToHome()
        } else if (sectionId === 'about') {
            scrollToAbout()
        } else if (sectionId === 'service') {
            scrollToServie()
        }
    }

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
                {/* <Link to="/login" className="button">Sign In</Link> */}
            </div>
        </div>
    )
}