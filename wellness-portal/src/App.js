import React from "react";
import './App.css';
import {NavBar, Header, Events,LogoBox,Fitness,Yoga} from './Components';
import FitHead from './Components/Events/FitHead';
import YogaHead from './Components/Events/YogaHead';
import {Footer} from './Components';
import {
  BrowserRouter,         
  Routes,
  Route
} from "react-router-dom";
import Addevent from "./Containers/Admin/Addevent";
function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/home" element={<><Header/><Events/></>}/>
        {/* <Route exact path="#home" element={<Events/>}/> */}
        <Route exact path="/admin" element={<Addevent/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
