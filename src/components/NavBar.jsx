import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../authorization/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {

  const {user, logOut} = UserAuth()
  const navigate = useNavigate()
  
  const handleLogout = async () => {
    try {
      await logOut()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-full flex justify-between md:p-7 absolute z-20 p-4'>
        <Link to='/' className='logo text-red-600 text-5xl md:text-6xl tracking-wider font-bold ml-[2rem] cursor-pointer'>NETFLIX</Link>
      {user?.email ? 
          <div className='mr-[2rem]'>
            <Link to='/account'><button className='bg-white px-1 md:px-10 md:py-2 text-black mr-[1rem] md:mr-[2rem] rounded hover:bg-gray-200'>Account</button></Link>
            <button onClick={handleLogout} className='bg-red-600 px-1 md:px-12 md:py-2 rounded hover:bg-red-700'>Log Out</button>
          </div>
          :
          <div className='mr-[2rem]'>
            <Link to='/login'><button className='bg-white px-1 md:px-10 md:py-2 text-black mr-[1rem] md:mr-[2rem] rounded hover:bg-gray-200'>Log In</button></Link>
            <Link to='/signup'><button className='bg-red-600 px-1 md:px-12 md:py-2 rounded hover:bg-red-700'>Sign Up</button></Link>
          </div>
    }
    </div>
  )
}
