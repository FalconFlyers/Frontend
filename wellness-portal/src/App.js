
import './App.css';
import Navbar from './components/Navbar';
import{
  BrowserRouter,
  Routes,
  Route
}from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Myevents from './components/Myevents';
import Login from './components/Login';
function App() {
  return (
    <>

     <Navbar/>
     <BrowserRouter>
     <Routes>
     <Route exact path="/" element={<Home/>}/>
     <Route exact path="/myevents" element={<Myevents/>}/>
     <Route exact path="/about" element={<About/>}/>
    <Route exact path='/login' element={<Login/>}/>
     </Routes>
     </BrowserRouter>

    </>
  );
}

export default App;
