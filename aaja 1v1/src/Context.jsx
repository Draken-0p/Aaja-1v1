import React, { createContext, useState } from 'react'

export const userinfo = createContext()
const Context = ({children}) => {

   
const [user, setUser] = useState("test");
console.log("context" , user)
  return (
    <userinfo.Provider value={{user, setUser}}>{children}</userinfo.Provider>
  )
}

export default Context