import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export function useAuth() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [token, setToken] = useState(localStorage.getItem('token') || '')
    const navigate = useNavigate()

    function handleLoginPage(e) {
        e.preventDefault()

        if (token) {
            setIsLoggedIn(true)
            navigate('/ticket')
        } else {
            navigate('/login')
            setIsLoggedIn(false)
        }
    }

    function handleSignout(e) {
        e.preventDefault()

        try {
            localStorage.removeItem('token')
            setToken('')
            Swal.fire('Signing Out!', 'You have successfully logged Out!', 'Continue')
            navigate('/')
        } catch (error) {
            Swal.fire('Error', error.message, 'error')
        }
    }

    return { isLoggedIn, handleLoginPage, handleSignout, setIsLoggedIn }
}