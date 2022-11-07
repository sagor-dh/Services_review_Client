import React, { createContext } from 'react'

export const AuthContext = createContext()
function AuthProvider({children}) {
    const user = {name:'Sagor'}
    const userInfo = {
        user
    }
  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider