import React from 'react'
import NavBar from './NavBar'
import Home from './Home'
import Slider from './Slider'
import getMovies from '../api/apiRequest'

export default function Main({randomMovie}) {
  return (
    <div>
        <NavBar />
        <Home randomMovie={randomMovie} />
        <Slider title='Incoming Movies' fetchURL={getMovies.comingMovies} />
        <Slider title='Popular Now' fetchURL={getMovies.popularMovies} />
        <Slider title='Trending Now' fetchURL={getMovies.trendingMovies} />
        <Slider title='Top Rated Movies' fetchURL={getMovies.topMovies} />
    </div>
  )
}
