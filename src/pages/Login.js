import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import '../styles/login.css'
import google from '../images/google-logo.png'
import microsoft from '../images/microsoft-logo.png'

function Login() {
  return (
    <div className='login-container'>
      <form className='login-form'>
        <div className='login-heading'>
          <a href='/'>
            <Link to='/'>
              <img src={logo} alt="MAPP SUPREME" className="logo" />
            </Link>
          </a>
          <h1>Welcome back</h1>
          <h2>Get started !!!😁</h2>
        </div>
        <input type='text' name='Email Address'
              placeholder='Email address' className='login-input' />
        <input type='password' name='password'
          placeholder='Password' className='login-input'/>
        <button className='login-submit' >Continue</button>
      </form>
      <label>Don't have an account?</label>
      <a href='/auth/signup'><Link to='/auth/signup' className='login-link'>  Sign up</Link></a>
      <ul className='login-heading'> OR </ul>
      <form className='btn-container'>
        <button className='google-btn'><img src={google} alt='Google Account'/>Continue with Google</button>
        <button className='microsoft-btn'><img src={microsoft} alt='Google Account'/>Continue with Microsoft Account</button>
      </form>
    </div>
  )
}

export default Login