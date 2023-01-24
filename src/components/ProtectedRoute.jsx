import React from 'react'
import { Navigate } from 'react-router'
import { UserAuth } from '../authorization/AuthContext'

export default function ProtectedRoute({children}) {

    const {user} = UserAuth()

    if (!user) {
        return <Navigate to='/' />
    } else {
        return children
    }

  return (
    <div>ProtectedRoute</div>
  )
}
