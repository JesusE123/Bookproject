import React from 'react'
import useForm from '../../hooks/useForm'
import  Avatar  from '@mui/material/Avatar'

const Topbar = () => {
    const {datos} = useForm()
    
  
    const getUser = () => {
       if (datos?.username){
        return datos.username
       } 
       return '';

    }

  return (
    <>
    <div className='d-flex'>
      <Avatar>{getUser()}</Avatar>
    </div>
    </>
  )
}

export default Topbar
