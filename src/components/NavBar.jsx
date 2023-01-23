import React from 'react'

export default function NavBar() {
  return (
    <div className='w-full flex justify-between p-7 absolute z-20'>
        <h1 className='logo text-red-600 text-6xl tracking-wider font-bold ml-[2rem] cursor-pointer'>NETFLIX</h1>
        <div className='mr-[2rem]'>
            <button className='bg-white px-9 py-2 text-black mr-[2rem] rounded hover:bg-gray-200'>Log In</button>
            <button className='bg-red-600 px-9 py-2 rounded hover:bg-red-700'>Sign Up</button>
        </div>
    </div>
  )
}
