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
        <Slider title='Incoming Movies' fetchURL={getMovies.comingMovies} sliderId='1' />
        <Slider title='Popular Now' fetchURL={getMovies.popularMovies} sliderId='2' />
        <Slider title='Trending Now' fetchURL={getMovies.trendingMovies} sliderId='3' />
        <Slider title='Top Rated Movies' fetchURL={getMovies.topMovies} sliderId='4' />
    </div>
  )
}
