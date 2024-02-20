import '../styles/banner.css'
import logo from '../images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useRef, useState } from 'react'
import Service from './Service'
import { useAuth } from '../auth/auth'

export default function Banner() {

    const { isLoggedIn, handleLoginPage, handleSignout, token } = useAuth()
    const navigate = useNavigate()
    const scrolling = useRef(null)
    const homeRef = useRef(null)
    // const aboutRef = useRef < HTMLDivElement > (null)
    // const serviceRef = useRef < Service > (null)

    useEffect(() => {
        homeRef.current?.scrollIntoView()
    })

    const scrollToAbout = () => {
        console.log('scrolling')
        scrolling.current?.scrollIntoView({
            behavior: 'smooth',
        });
    }

    const scrollToServices = () => {
        console.log('scrolling')
        scrolling.current?.scrollIntoView({
            behavior: 'smooth',
        });
    }

    const scrollToHome = () => {
        console.log('scrolling');
        scrolling.current?.scrollIntoView({
            behavior: 'smooth',
        });
    };

    function handleScrolling(e) {
        e.preventDefault()

        const sectionId = e.target.hash.substring(1)

        if (sectionId === 'home') {
            // scrollToHome()
        } else if (sectionId === 'about') {
            scrollToAbout()
        } else if (sectionId === 'service') {
            scrollToServices()
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
                <div ref={homeRef}></div>
                <Link to='/'
                    onClick={scrollToHome}
                    className="navbar_links">
                    Home
                </Link>

                <Link to='/' onClick={scrollToAbout} className="navbar_links">
                    About
                </Link>
                <Link to='/' onClick={scrollToServices} className="navbar_links">
                    Services
                </Link>
                {isLoggedIn ?
                    (
                        <Link onClick={handleSignout}
                            className="button1">
                            Signout
                        </Link>
                    ) : (
                        <Link onClick={handleLoginPage}
                            className="button1">
                            Login
                        </Link>
                    )}
            </div>
        </div >
    )
}