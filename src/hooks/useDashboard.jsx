import React, {useState, useEffect} from 'react'
import {Http} from '../services/Http'

const useDashboard = () => {
    const [dataBooks, setDataBooks] = useState([]);
    const [message, setMessage] = useState('no tiene reservaciones')

    useEffect(()=>{
        Http.get('/booking').
        then(res => setDataBooks(res.data)).
        catch(err => console.log(err))
      },[])
      

     
      
  return {dataBooks, message}
    
  
}

export default useDashboard