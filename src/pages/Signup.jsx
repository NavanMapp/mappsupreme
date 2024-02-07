import '../styles/login.css'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, Redirect } from 'react-router-dom'
import logo from '../images/logo.png'
import google from '../images/google-logo.png'
import microsoft from '../images/microsoft-logo.png'
import {
    getAuth, createUserWithEmailAndPassword,
    signInWithPopup, GoogleAuthProvider
} from 'firebase/auth'

export default function Signup() {
    const [userCredentials, setUserCredentials] = useState({})
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [auth, setAuth] = useState(false)
    const [token, setToken] = useState('')
    const [error, setError] = useState('')
    const [isSignedUp, setIsSignedUp] = useState(false)

    const navigate = useNavigate()

    function handleCredentials(e) {
        setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value })
        setError('')
    }

    function handleSignup(e) {
        e.preventDefault()

        const auth = getAuth()
        createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
            .then((userCredential) => {
                const user = userCredential.user
                setIsSignedUp(true)
            })
            .catch((error) => {
                setError(error.message)
            })
//      if credentials go through, page should redirect to '/login'
        // if (isSignedUp) {
        //     return <Redirect to='/login' />
        // }
    }

    const signInWithGoogle = async (e) => {
        e.preventDefault()

        const provider = new GoogleAuthProvider()

        try {
            const auth = getAuth();
            const result = await signInWithPopup(auth, provider); // signInWithPopup returns a Promise
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const userCred = result.user;
            setIsSignedUp(true)
            // Proceed with further actions after successful sign-in
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData?.email; // Accessing 'customData' if available
            const credential = GoogleAuthProvider.credentialFromError(error);
            // Handle error appropriately
        }
        if (isSignedUp) {
            return <Link to='/login' />
        }
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
                    onChange={(e) => handleCredentials(e)}
                />
                <input type='password'
                    name='password' required
                    placeholder='Password'
                    className='login-input'
                    onChange={(e) => handleCredentials(e)}
                />
                <button onClick={(e) => handleSignup(e)} className='login-submit' >Continue</button>
                {
                    error && <div className='error'>{error}</div>
                }
            </form>
            <label>Already have an account?</label>
            <Link to='/signup' className='login-link'>  Login</Link>
            <ul className='login-heading'> OR </ul>
            <form className='btn-container'>
                {auth ? (
                    <Link to='/login'></Link>
                ) : (
                    <button onClick={(e) => signInWithGoogle(e)} className='google-btn'>
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
