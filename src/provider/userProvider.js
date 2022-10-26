import React, {createContext, useState} from 'react'
import { Http } from '../services/Http';

export const UserContext = createContext();


export const UserProvider = ({children}) => {
  


  return (
    <UserContext.Provider>
    {children}
    </UserContext.Provider>
  )
}

