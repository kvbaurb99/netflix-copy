import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='w-full h-[50px] flex justify-center bg-black mt-[5rem] items-center rounded-tl-xl rounded tr-xl'>
        <div className='text-white text-3xl flex gap-6'>  
            <a href='https://github.com/kvbaurb99' target='_blank'><FaGithub className='cursor-pointer opacity-70 hover:opacity-100'  /></a>
            <a href='https://www.linkedin.com/in/jakub-urba%C5%84ski-74903524a/' target='_blank'><FaLinkedin className='cursor-pointer opacity-70 hover:opacity-100'  /></a>
        </div>
    </div>
  )
}
