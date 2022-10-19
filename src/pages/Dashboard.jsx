
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Tittle from '../Components/Tittle/Tittle';
import Topbar from '../Components/Topbar/Topbar';
import {Http} from '../services/Http'


const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    Http.get('/booking')
    .then(res => setBooks(res.data))
    .catch(error => console.log(error))
  },[])


  return (
    <div className="container-fluid">
    <div className='row'>
      <div className="col-12">
        <div className="header d-flex justify-content-between">
        <Tittle type='h1'>Reservas</Tittle>
        <Topbar />
        </div>
        {
          books.map(data => {
            return(
              <div className="card" key={data.bookingid}>
                <div className="card-body">
                <li onClick={()=>{navigate('/booking/'+ data.bookingid)}}>{data.bookingid}</li>
                </div>
              </div>
              

            )
             
          })
        }
        
      </div>
    </div>
    </div>
  )
}

export default Dashboard