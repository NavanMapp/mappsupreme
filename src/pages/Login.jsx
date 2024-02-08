import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'
import '../styles/login.css'
import google from '../images/google-logo.png'
import '../firebase/config.js'
import microsoft from '../images/microsoft-logo.png'
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail
} from 'firebase/auth'


export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [auth, setAuth] = useState(false)
  const [token, setToken] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  // useEffect(() => {
  //   firebaseApp.auth().onAuthStateChanged((userCred) => {
  //     if (userCred) {
  //       setAuth(true)
  //       userCred.getIdToken().then((token) => {
  //         setToken(token)
  //       })
  //     }
  //   })
  // }, [])

  const handleLogin = async (e) => {
    e.preventDefault()

    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        const user = userCred.user
        localStorage.setItem('token', user.accessToken)
        localStorage.setItem('token', JSON.stringify(user))
        navigate('/home')
        setError('')
        console.log('logged in')
      }).catch((error) => {
        setError(error.message)
      })
  }

  const loginWithGoogle = async (e) => {
    e.preventDefault()

    const auth = getAuth()
    signInWithPopup(auth)
      .then((result) => {
        const userCred = GoogleAuthProvider.credentialFromResult(result)
        const token = userCred.accessToken
        const user = result.user
      }).catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.customData.email
        const userCred = GoogleAuthProvider.credentialFromError(error)
      })
  }

  function handlePasswordReset() {
    const email = prompt('Please enter your email!')
    sendPasswordResetEmail(auth, email)
    alert('Email link sent, check your email inbox!')
  }

  return (
    <div className='login-container'>
      <form className='login-form'>
        <div className='login-heading'>
          <Link to='/'>
            <img src={logo} alt="MAPP SUPREME" className="logo" />
          </Link>
          <h1>Welcome back</h1>
          <h2>Login !!!😁</h2>
        </div>
        <input type='text'
          name='Your email' required
          placeholder='Email address'
          className='login-input'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type='password'
          name='password' required
          placeholder='Password'
          className='login-input'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={(e) => handleLogin(e)} className='login-submit' >Continue</button>
        <Link onClick={handlePasswordReset} className='login-link'> Forgot Password?</Link>
      </form>
      <label>Don't have an account?</label>
      <Link to='/signup' className='login-link'>  Sign up</Link>
      <ul className='login-heading'> OR </ul>
      <form className='btn-container'>
        {auth ? (
          <Link to='/home'></Link>
        ) : (
          <button onClick={loginWithGoogle} className='google-btn'>
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

