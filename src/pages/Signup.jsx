import '../styles/login.css'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'
import google from '../images/google-logo.png'
import microsoft from '../images/microsoft-logo.png'
import { auth } from '../firebase/config.js'
import { getAuth, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import firebaseApp from '../firebase/config'

export default function Signup() {
    const [userCredentials, setUserCredentials] = useState({})
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [auth, setAuth] = useState(false)
    const [token, setToken] = useState('')

    const navigate = useNavigate()

    function handleCredentials(e) {
        setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user
                // ...
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                // ..
            })
    }

    const signInWithGoogle = async (e) => {
        e.preventDefault()

        try {
            const userCred = await signInWithPopup(new firebaseApp.auth.googleAuthProvider())
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
                <input
                    type='email' placeholder='Email address'
                    name='email'
                    className='login-input' required value={email}
                    onChange={(e) => {handleCredentials(e)}}
                />
                <input
                    type='password' required value={password}
                    name='password'
                    placeholder='Password' className='login-input'
                    onChange={(e) => {handleCredentials(e)}}

                />
                <button onClick={(e) => handleSubmit(e)} className='login-submit' >Continue</button>
            </form>
            <label>Already have an account?</label>
            <a href='/login'>
                <Link to='/login' className='login-link'>  Login</Link>
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
