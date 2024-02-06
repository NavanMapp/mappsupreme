import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'
import '../styles/login.css'
import google from '../images/google-logo.png'
import microsoft from '../images/microsoft-logo.png'
import { auth } from '../firebase/config.js'
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'


export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [auth, setAuth] = useState(false)
  const [token, setToken] = useState('')

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
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password)
      console.log(userCred)
      const user = userCred.user
      localStorage.setItem('token', user.accessToken)
      localStorage.setItem('token', JSON.stringify(user))
      navigate('/home')
    } catch (error) {
      console.log(error)
    }
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

  return (
    <div className='login-container'>
      <form className='login-form' onSubmit={handleLogin}>
        <div className='login-heading'>
          <a href='/'>
            <Link to='/'>
              <img src={logo} alt="MAPP SUPREME" className="logo" />
            </Link>
          </a>
          <h1>Welcome back</h1>
          <h2>Get started !!!😁</h2>
        </div>
        <input type='text'
          name='Your email'
          placeholder='Email address'
          className='login-input'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type='password'
          name='password'
          placeholder='Password'
          className='login-input'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='login-submit' >Continue</button>
      </form>
      <label>Don't have an account?</label>
      <a href='/signup'><Link to='/signup' className='login-link'>  Sign up</Link></a>
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

