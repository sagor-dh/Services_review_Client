import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

function PriviteRoute({children}) {
    const {user} = useContext(AuthContext)
    const location = useLocation()

    if(user){
        return children
    }

    <Navigate to='/login' state={{from: location}} replace/>
}

export default PriviteRoute