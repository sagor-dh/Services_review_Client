import React, { createContext, useEffect, useState } from 'react'
import app from '../fairbase/fairbase.config'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)

function AuthProvider({children}) {
    const [user, setUser] =useState(null)
    const [loading, setLoading] = useState(true)

    const userRegister = (email, password) =>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) =>{
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }

    const userLogout = () =>{
      setLoading(true)
      return signOut(auth)
    }

    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        console.log(auth)
        console.log(currentUser)
        setUser(currentUser)
        setLoading(false)
      })

      return ()=> unSubscribe()
    }, [])

    const userInfo = {
        user,
        loading,
        userRegister,
        userLogin,
        userLogout

    }
  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider