import React, { useEffect, useState } from 'react'
import { Http } from '../services/Http';
import {useParams} from 'react-router-dom';


const Booking = ({bookings}) => {
  const [getBookId, setGetBookId] = useState([]);
  const { id } = useParams();

  
  useEffect(()=> {
    Http.get('/booking/' + id).
    then(bookings=> console.log(bookings.data))
  })




  return (
    <div>
      booking
    </div>
  )
}

export default Booking
