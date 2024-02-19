import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function useAuth() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    function handleLoginPage(e) {
        e.preventDefault()
        if (token) {
            setIsLoggedIn(true)
            navigate('/ticket')
        } else {
            navigate('/login')
        }
    }

    return { isLoggedIn, handleLoginPage }
}