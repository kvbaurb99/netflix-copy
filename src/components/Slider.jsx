import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'

export default function Slider({fetchURL, title}) {

    const [movies, setMovies] = useState([])
    const [like, setLike] = useState(false)

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
           <div className='w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap relative scrollbar-hide'>
              {movies.map((movie, id) => {
                return <div className='w-[170px] inline-block md:w-[240px] lg:w-[300px] relative p-2'>
                    <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} className='w-full block h-auto' />
                    <div className='absolute top-0 left-0  w-full h-full opacity-0 hover:bg-black/60 hover:opacity-100 flex justify-center items-center'>
                        <p className='font-bold text-lg'>{movie?.title}</p>
                        <p>
                            { like ? <FaHeart className='absolute top-6 left-6' onClick={() => setLike(false)} /> : <FaRegHeart className='absolute top-6 left-6' onClick={() => setLike(true)}/>}
                        </p>
                    </div>
                </div>
              })}  
           </div>
        </div>
    </div>
  )
}
