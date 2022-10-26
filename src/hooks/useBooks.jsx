import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Http } from '../services/Http';

const useBooks = () => {

    const [data, setData] = useState({});
    const navigate = useNavigate();

    const handleChange =  (e) => {
        setData({
           ...data,
           [e.target.name]: e.target.value
       })
   }
   console.log(data)
   const submitForm = (e) => {
    e.preventDefault()
    Http.post('/booking', {
        name: data.name,
        lastname: data.lastName,
        age: data.age
    }).
    then((res)=> {
        navigate('/dashboard')
        setData(res.data)
    }).
    catch(err => console.log(err))
   }
  
  return (
    {handleChange, submitForm}
  )
}

export default useBooks
