import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [isAuth,setIsAuth] = useState(false);

    const handleAuth = (state) => {
        setIsAuth(state);
    }
  return (
      <AuthContext.Provider value={{isAuth,handleAuth}}>{child}</AuthContext.Provider>
  )
}
