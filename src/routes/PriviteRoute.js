import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

function PriviteRoute({children}) {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <div className="w-16 h-16 border-4 mx-auto my-20 border-dashed rounded-full animate-spin border-violet-400"></div>
    }

    if(user){
        return children
    }

    return <Navigate to='/login' state={{from: location}} replace/>
}

export default PriviteRoute