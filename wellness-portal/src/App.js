import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Auth from "./components/Auth";
function App() {
  return (
    <>
     <Navbar />  
     cd 
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/auth" element={<Auth/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
