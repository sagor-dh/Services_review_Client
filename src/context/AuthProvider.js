import React, { createContext, useEffect, useState } from 'react'
import app from '../fairbase/fairbase.config'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)

function AuthProvider({children}) {
    const [user, setUser] =useState(null)

    const userRegister = (email, password) =>{
      return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) =>{
      return signInWithEmailAndPassword(auth, email, password)
    }

    const userLogout = () =>{
      return signOut(auth)
    }

    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
        console.log(currentUser)
      })

      return ()=> unSubscribe()
    }, [])

    const userInfo = {
        user,
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