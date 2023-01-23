import React, { useEffect, useState } from 'react'
import getMovies from '../api/apiRequest';
import axios from 'axios';
import NavBar from './NavBar';


export default function Home({randomMovie}) {

  return (
    <div className='w-full h-full'>
        <img src={`https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`} alt="" />
    </div>
  )
}
