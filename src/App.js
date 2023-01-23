import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
</BrowserRouter>
  );
}

export default App;
