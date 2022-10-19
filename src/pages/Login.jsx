import React from 'react'
import BoxC from '../Components/Box/Box'
import Tittle from '../Components/Tittle/Tittle'
import FormLogin from '../Components/FormLogin/FormLogin'
import Form from '../Components/Form/Form'
import useForm from '../hooks/useForm'
const Login = (props) => {
  
  return (
        <div className='vh-100 d-flex justify-content-center align-items-center'>
           <BoxC>
            <Tittle type='h2'>Bienvenido</Tittle>
            <FormLogin/>
           </BoxC>
            
        </div>
  )
}

export default Login
