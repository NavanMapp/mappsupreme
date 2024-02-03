import '../styles/login.css'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'
import google from '../images/google-logo.png'
import microsoft from '../images/microsoft-logo.png'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import firebase from '../config/firebase-config'

export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [auth, setAuth] = useState(false)
    const [token, setToken] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const userCred = await createUserWithEmailAndPassword(firebase.auth(), email, password)
            console.log(userCred)
            const user = userCred.user
            localStorage.setItem('token', user.accessToken)
            localStorage.setItem('token', JSON.stringify(user))
            navigate('/home')
        } catch (error) {
            console.log(error)
        }
    }

    const signInWithGoogle = async (e) => {
        e.preventDefault()

        try {
            const userCred = await signInWithPopup(new firebase.auth.googleAuthProvider())
                .then((userCred) => {
                    if (userCred) {
                        setAuth(userCred)
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='login-container'>
            <form className='login-form' onSubmit={handleSubmit}>
                <div className='login-heading'>
                    <Link to='/'>
                        <img src={logo} alt="MAPP SUPREME" className="logo" />
                    </Link>
                    <h1>Create an account</h1>
                </div>
                <input type='email' placeholder='Email address'
                    className='login-input' required value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input type='password' required value={password}
                    placeholder='Password' className='login-input'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='login-submit' >Continue</button>
            </form>
            <label>Already have an account?</label>
            <a href='/auth/login'>
                <Link to='/auth/login' className='login-link'>  Login</Link>
            </a>
            <ul className='login-heading'> OR </ul>
            <form className='btn-container'>
                <button className='google-btn'
                    onClick={signInWithGoogle}
                >
                    <img src={google} alt='Google Account' />Continue with Google
                </button>
                <button className='microsoft-btn'>
                    <img src={microsoft} alt='Google Account' />Continue with Microsoft Account
                </button>
            </form>
        </div>
    )
}
