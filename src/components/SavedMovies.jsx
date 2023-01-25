import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { UserAuth } from '../authorization/AuthContext'
import { useState,useEffect } from 'react'
import { db } from '../firebase/firebase'
import { updateDoc, doc, onSnapshot } from 'firebase/firestore'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function SavedMovies() {

    const [movies, setMovies] = useState([])
    const {user} = UserAuth()

    const movieData = doc(db, 'users', `${user?.email}`)
    const deleteMovie =   (movieId) => {
        const arr = movies.filter((movie) => movie.id !== movieId)
         updateDoc(movieData, {
            savedMovies: arr,
        })
    }  

    const slideLeft = () => {
        let imageSlider = document.getElementById(`imageslider`);
        imageSlider.scrollLeft -= 500;
      }
  
      const slideRight = () => {
        let imageSlider = document.getElementById(`imageslider`);
        imageSlider.scrollLeft += 500;
      }

     useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedMovies)
        })
     }, [user?.email])

  return (
    <div>
        <h2 className='font-bold md:text-2xl p-5 tracking-wide'>Favorite Movies</h2>
        <div className='flex items-center relative' >
            <FontAwesomeIcon onClick={slideLeft} icon={faArrowLeft} size='xl' className='bg-white rounded-full opacity-50 text-black p-2 absolute left-0 z-20 hover:opacity-100 cursor-pointer' />
           <div id={`imageslider`} className='w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap relative  scrollbar-hide'>
              {movies.map((movie) => {
                return <div key={movie.id} className='w-[170px] inline-block md:w-[240px] lg:w-[400px] relative p-2'>
                    <img src={`https://image.tmdb.org/t/p/original/${movie?.img}`} alt={movie?.title} className='w-full block h-auto' />
                    <div className='absolute top-0 left-0  w-full h-full opacity-0 hover:bg-black/60 hover:opacity-100 flex justify-center items-center'>
                        <p className='font-bold text-xl tracking-wide'>{movie?.title}</p>
                        <p><FontAwesomeIcon onClick={() => deleteMovie(movie?.id)} icon={faXmark} className='absolute top-4 right-6 cursor-pointer' size='lg' /></p>
                    </div>
                </div>
              })}  
           </div>
           <FontAwesomeIcon onClick={slideRight} icon={faArrowRight} size='xl' className='bg-white rounded-full opacity-50 text-black p-2 absolute right-0 z-20 hover:opacity-100 cursor-pointer' />
        </div>
    </div>
  )
}
