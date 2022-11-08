import React, { createContext, useEffect, useState } from 'react'
import app from '../fairbase/fairbase.config'
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
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

    const userLoginWithGoogle = () =>{
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
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
        userLogout,
        userLoginWithGoogle

    }
  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider