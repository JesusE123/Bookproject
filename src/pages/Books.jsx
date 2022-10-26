import React from 'react'
import Tittle from '../Components/Tittle/Tittle'
import useBooks from '../hooks/useBooks';


const Books = () => {

  const {handleChange, submitForm} = useBooks();

  return (
    <>
    <Tittle type='h1'>Crea tu reserva</Tittle>
   <form>
   <div className='form-group'>
    <input type="text" name="name" placeholder='Ingrese su nombre' onChange={handleChange}  />
    <input type="text" name='lastName' placeholder='Ingrese su apellido' onChange={handleChange} />
    <input type="text" name="age" placeholder='Ingrese su edad' onChange={handleChange} />

    <button className='btn btn-success' onClick={submitForm}>Crear Reserva</button>
    </div>
   </form>
   
   </>
  )
}

export default Books
