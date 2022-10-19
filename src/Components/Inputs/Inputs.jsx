import React from 'react'

const Inputs = ({type, name, placeholder, change}) => {
  return (
    <input 
    type={type} 
    placeholder={placeholder} 
    name={name} 
    onChange={change}
    className="form-control"
    />
  )
}

export default Inputs
