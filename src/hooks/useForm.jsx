import userEvent from '@testing-library/user-event'
import React from 'react'
import { useState } from 'react'
import { Http } from '../services/Http'
import { useNavigate } from 'react-router-dom';

const useForm = () => {
    const [datos, setDatos] = useState({})
    const [logger, setLogger] = useState(false)

    const navigate = useNavigate();

    const handleChange =  (e) => {
         setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
       
            Http.post('/auth', {
                username: datos.username,
                password: datos.password
            }).then(res => {
                setDatos(datos)
                console.log(datos)
                localStorage.setItem('auth', res.data.token)
                navigate('/dashboard')
            })
            
    }


    return { datos, handleChange, handleSubmit }
}

export default useForm
