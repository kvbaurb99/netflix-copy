import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../authorization/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {user, signUp} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signUp (email, password)
            navigate('/')
        }  catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='h-screen w-full login z-20'>
    <div className='absolute top-0 left-0 bg-black/50 w-full h-full'></div>
    <div className='p-4 w-full'>
        <Link to='/'><h1 className='logo text-red-600 text-5xl md:text-6xl tracking-wider font-bold ml-[2rem] cursor-pointer z-40 relative'>NETFLIX</h1></Link>
    </div>
    <div className='w-full flex justify-center'>
        <div className='w-[475px] h-[550px] bg-black/70 flex flex-col rounded relative'>
            <h1 className='relative left-[15%] text-4xl font-bold mt-[3rem]'>Sign Up</h1>
            <form onSubmit={handleSubmit} className='w-full flex flex-col items-center'>
                <input onChange={(e) => setEmail(e.target.value)} autoComplete='email' type="text" placeholder='E-mail' className='w-[70%] py-3 rounded mt-[2rem] px-4 bg-gray-700/60 border-none outline-none focus:bg-gray-700/90' />
                <input onChange={(e) => setPassword(e.target.value)} autoComplete='password' type="password" placeholder='Password' className='w-[70%] mt-[1rem] py-3 rounded px-4 bg-gray-700/60 border-none outline-none focus:bg-gray-700/90' />
                <input type="submit" value="Log In" className='mt-[2rem] bg-red-600 w-[70%] py-3 rounded' />
            </form>
            <div className='w-[70%]  mt-[1.5rem] flex justify-between m-auto'>
                <div>
                    <input type="checkbox" name="" id="remember" className=' w-3 h-3 outline-none border-none rounde' />
                    <label htmlFor="remember" className='text-sm ml-[0.5rem] text-gray-500 '>Remember me</label>
                </div>
                <div>
                    <p className='text-sm mt-[3px] text-gray-500'>Need help ? </p>
                </div>    
            </div>
            <div className='w-70% relative bottom-[20%] left-[15%] text-sm'>
                <p className='text-gray-500 '>Already have Netflix account? </p>
                <Link to='/login'><p className='text-lg font-bold cursor-pointer hover:border-solid '>Log in.</p></Link>
            </div>
        </div>
    </div>
</div>
  )
}
