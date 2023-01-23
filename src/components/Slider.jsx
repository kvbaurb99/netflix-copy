import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
           <div id={'slider'}>
              {movies.map((item, id) => {
                return <div className='w-[170px] inline-block md:w-[240px] lg:w-[300px]'>
                    <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                </div>
              })}  
           </div>
        </div>
    </div>
  )
}
