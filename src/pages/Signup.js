import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import '../styles/login.css'
import google from '../images/google-logo.png'
import microsoft from '../images/microsoft-logo.png'

function Signup() {
    return (
        <div className='login-container'>
            <form className='login-form'>
                <div className='login-heading'>
                    <a href='/'>
                        <Link to='/'>
                            <img src={logo} alt="MAPP SUPREME" className="logo" />
                        </Link>
                    </a>
                    <h1>Create an account</h1>
                </div>
                <input type='text' name='Email Address'
                    placeholder='Email address' className='login-input' />
                <input type='password' name='password'
                    placeholder='Password' className='login-input' />
                <button className='login-submit' >Continue</button>
            </form>
            <label>Already have an account?</label>
            <a href='/auth/login'><Link to='/auth/login' className='login-link'>  Login</Link></a>
            <ul className='login-heading'> OR </ul>
            <form className='btn-container'>
                <button className='google-btn'><img src={google} alt='Google Account' />Continue with Google</button>
                <button className='microsoft-btn'><img src={microsoft} alt='Google Account' />Continue with Microsoft Account</button>
            </form>
        </div>
    )
}

export default Signup