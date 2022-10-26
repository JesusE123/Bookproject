
import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Tittle from '../Components/Tittle/Tittle';
import Topbar from '../Components/Topbar/Topbar';
import useDashboard from '../hooks/useDashboard';


const Dashboard = () => {
 const {dataBooks, message} = useDashboard()
 console.log(dataBooks)
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
    <div className='row'>
      <div className="col-12">
        <div className="header d-flex justify-content-between">
        <Tittle type='h1'>Reservas</Tittle>
        <Topbar />
        </div>
        <p>no tiene reservaciones</p>
        <button className='btn btn-primary' onClick={()=>{navigate('/books')}}>Crear Reserva</button>
      </div>
    </div>
    </div>
  )
}

export default Dashboard