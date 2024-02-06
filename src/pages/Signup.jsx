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
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const [auth, setAuth] = useState(false)
    const [token, setToken] = useState('')

    const navigate = useNavigate()

    function handleCredentials(e) {
        // e.preventDefault()
        setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value })
        console.log(userCredentials)
    }

    const handleSignup = async (e) => {
        e.preventDefault()

        // const auth = getAuth()
        // createUserWithEmailAndPassword(auth, email, password)
        //     .then((userCredential) => {
        //         // Signed up 
        //         const user = userCredential.user
        //         // ...
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code
        //         const errorMessage = error.message
        //         // ..
        //     })
        console.log(userCredentials)

    }

    const signInWithGoogle = async (e) => {
        // e.preventDefault()

        // try {
        //     const userCred = await signInWithPopup(new firebaseApp.auth.googleAuthProvider())
        //         .then((userCred) => {
        //             if (userCred) {
        //                 setAuth(userCred)
        //             }
        //         })
        // } catch (error) {
        //     console.log(error)
        // }
    }

    return (
        <div className='login-container'>
            <form className='login-form'>
                <div className='login-heading'>
                    <Link to='/'>
                        <img src={logo} alt="MAPP SUPREME" className="logo" />
                    </Link>
                    <h1>Create your account</h1>
                </div>
                <input type='text'
                    name='email' required
                    placeholder='Your email'
                    className='login-input'
                    // value={email}
                    onChange={(e) => handleCredentials(e)}
                />
                <input type='password'
                    name='password' required
                    placeholder='Password'
                    className='login-input'
                    // value={password}
                    onChange={(e) => handleCredentials(e)}
                />
                <button onClick={(e) => handleSignup(e)} className='login-submit' >Continue</button>
            </form>
            <label>Already have an account?</label>
            <Link to='/signup' className='login-link'>  Login</Link>
            <ul className='login-heading'> OR </ul>
            <form className='btn-container'>
                {auth ? (
                    <Link to='/login'></Link>
                ) : (
                    <button onClick={signInWithGoogle} className='google-btn'>
                        <img src={google} alt='Google Account' />
                        Continue with Google
                    </button>
                )}
                <button className='microsoft-btn'>
                    <img src={microsoft} alt='Google Account' />
                    Continue with Microsoft Account
                </button>
            </form>
        </div>
    )
}
