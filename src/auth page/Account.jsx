import React from 'react'
import NavBar from '../components/NavBar'
import SavedMovies from '../components/SavedMovies'

export default function Account() {
  return (
    <div className='w-full text-white'>
        <NavBar />
        <img src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/netflixteaser.png" alt="" className='object-cover h-[500px] w-full' />
        <div className='fixed top-0 left-0 w-full bg-black/60 h-[500px]'></div>
        <div className='absolute top-[25%] p-8 text-3xl font-bold tracking-wide'>
          <h1>Favorite Movies</h1>
        </div>
        <SavedMovies />
    </div>
  )
}
