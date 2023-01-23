import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import { faArrowRight, faArrowLeft  } from '@fortawesome/free-solid-svg-icons'
import Movie from './Movie'

export default function Slider({fetchURL, title}) {

    const [movies, setMovies] = useState([])
  

    useEffect(() => {
        axios.get(fetchURL).then((res) => {
            setMovies(res.data.results)
        })
    }, [fetchURL])

    console.log(movies)

  return (
    <div>
        <h2 className='font-bold md:text-xl p-5'>{title}</h2>
        <div className='flex items-center relative'>
            <FontAwesomeIcon icon={faArrowLeft} size='xl' className='bg-white rounded-full opacity-70 text-black p-2 absolute left-0 z-20 hover:opacity-100 cursor-pointer' />
           <div className='w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap relative scrollbar-hide'>
              {movies.map((movie, id) => {
                return <Movie movie={movie} id={id} />
              })}  
           </div>
           <FontAwesomeIcon icon={faArrowRight} size='xl' className='bg-white rounded-full opacity-70 text-black p-2 absolute right-0 z-20 hover:opacity-100 cursor-pointer' />
        </div>
    </div>
  )
}
