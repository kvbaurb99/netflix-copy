import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import getMovies from "./api/apiRequest";
import { Nav } from "react-bootstrap";


function App() {

  const [movies, setMovies] = useState([]);

  const randomMovie = movies[Math.floor(Math.random() * movies.length)]

  useEffect(() => {
      axios.get(getMovies.popularMovies).then((res) => {
          setMovies(res.data.results)
      })
  }, [])

  console.log(movies)

  return (
<BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home randomMovie={randomMovie} />} />
    </Routes>
</BrowserRouter>
  );
}

export default App;
