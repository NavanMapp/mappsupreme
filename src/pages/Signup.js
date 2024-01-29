import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

function Signup() {
    return (
        <div>
            <a href='/'>
                <img src={logo} alt="MAPP SUPREME" className="App-logo" />
            </a>
            <h1>Welcome back</h1>
            <h2>Get started !!!😁</h2>
            <form>
                <input type='text' name='Email Address' placeholder='Email address' />
                <input type='password' name='password' placeholder='Password' />
                <button className='button' >Continue</button>
            </form>
            <label>Already have an account?</label>
            <a><Link to='/login' className=''>Login</Link></a>
            <ul>OR</ul>
            <form>
                <button className=''>Continue with Google</button>
                <button className=''>Continue with Microsoft Account</button>
            </form>
        </div>
    )
}

export default Signup