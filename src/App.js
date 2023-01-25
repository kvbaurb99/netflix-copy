import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import getMovies from "./api/apiRequest";
import Main from "./components/Main";
import { AuthContextProvider } from "./authorization/AuthContext";
import LogIn from "./auth page/LogIn";
import SignUp from "./auth page/SignUp";
import Account from "./auth page/Account";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {

  const [movies, setMovies] = useState([]);

  const randomMovie = movies[Math.floor(Math.random() * movies.length)]

  useEffect(() => {
      axios.get(getMovies.popularMovies).then((res) => {
          setMovies(res.data.results)
      })
  }, [])


  return (
<AuthContextProvider>
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main randomMovie={randomMovie} />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />
      </Routes>
  </BrowserRouter>
</AuthContextProvider>
  );
}

export default App;
