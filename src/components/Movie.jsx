import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import { faArrowRight, faArrowLeft  } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { UserAuth } from '../authorization/AuthContext'
import { db } from '../firebase/firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'

export default function Movie({movie, id}) {

    const [like, setLike] = useState(false)
    const [saved, setSaved] = useState(false)
    const { user } = UserAuth()

    const movieKey = doc(db, 'users', `${user?.email}`)

    // if you are logged in and click on heart icon a movie will be saved to your account in firebase data base
    const saveMovie = async () => {
      if (user?.email) {
        setLike(true)
        setSaved(true)
        await updateDoc(movieKey, {
          savedMovies: arrayUnion({
            id: movie.id,
            title: movie.title,
            img: movie.backdrop_path
          })
        })
      } else {
        alert('Please log in to save a movie.')
      }
    }

  return (
    <div className='w-[170px] inline-block md:w-[240px] lg:w-[400px] relative p-2'>
      <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} className='w-full block h-auto' />
      <div className='absolute top-0 left-0  w-full h-full opacity-0 hover:bg-black/60 hover:opacity-100 flex justify-center items-center'>
         <p className='font-bold text-xl tracking-wide'>{movie?.title}</p>
         <p onClick={saveMovie}>
            { like ? <FaHeart className='absolute top-6 left-6 text-2xl cursor-pointer text-red-500' onClick={() => setLike(false)} /> : <FaRegHeart className='absolute top-6 left-6 text-2xl cursor-pointer' onClick={() => setLike(true)}/>}
         </p>
      </div>
    </div>
  )
}
