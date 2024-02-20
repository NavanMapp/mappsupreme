import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'
import '../styles/login.css'
import google from '../images/google-logo.png'
import '../firebase/config.js'
import microsoft from '../images/microsoft-logo.png'
import axios from 'axios'
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail
} from 'firebase/auth'
import Swal from 'sweetalert2'


export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [auth, setAuth] = useState(false)
  const [token, setToken] = useState(localStorage.getItem('token') || '')
  const [error, setError] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    try {

      const auth = getAuth()
      const userCred = await signInWithEmailAndPassword(auth, email, password)
      const user = userCred.user
      localStorage.setItem('token', user.accessToken)
      localStorage.setItem('token', JSON.stringify(user))
      axios.defaults.headers.common['Authorization'] = `Bearer ${user.accessToken}`
      setIsLoggedIn(true)
      Swal.fire('Success!', 'You have successfully logged In!', 'Success')
      navigate('/ticket')
      setError('')
      console.log('logged in')

    } catch (error) {
      Swal.fire('Error', error.message, 'error')
      setError(error.message)
    }
  }

  const loginWithGoogle = async (e) => {
    e.preventDefault()

    const provider = new GoogleAuthProvider()
    const auth = getAuth()

    signInWithPopup(auth, provider)
      .then((result) => {
        const userCred = GoogleAuthProvider.credentialFromResult(result)
        const token = userCred.accessToken
        const user = result.user
        localStorage.setItem('token', user.accessToken)
        localStorage.setItem('token', JSON.stringify(user))
        axios.defaults.headers.common['Authorization'] = `Bearer ${user.accessToken}`
        setIsLoggedIn(true)
        Swal.fire('Success!', 'You have successfully logged In!', 'Success')
        navigate('/ticket')
        setError('')
      }).catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.customData.email
        const userCred = GoogleAuthProvider.credentialFromError(error)
        Swal.fire('Error', error.message, 'error')
      })
  }

  function handlePasswordReset() {
    Swal.fire({
      title: 'Please enter your email!',
      input: 'email',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'Cancel',
      preConfirm: (email) => {
        sendPasswordResetEmail(auth, email)
      }
    }).then(() => {
      Swal.fire('Success', 'Email link sent, check your email inbox!', 'Ok')
    })
  }

  return (
    <div className='login-container'>
      <form className='login-form'>
        <div className='login-heading'>
          <a href='/'>
            <img src={logo} alt="MAPP SUPREME" className="App-logo" />
          </a>
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
          <Link to='/ticket'></Link>
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

