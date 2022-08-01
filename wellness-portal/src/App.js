import React from "react";
import "./App.css";
import { NavBar, Header, Events, LogoBox } from "./Components";
import { Fitness, Yoga} from "./Containers";
import {YogaHead,FitHead} from "./Containers";
import { Footer } from "./Components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addevent from "./Containers/Admin/Addevent";
import Removeevent from "./Containers/Admin/Removeevent";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/home"
            element={
              <>
                <Header />
                <Events />
              </>
            }
          />
          <Route exact path="/fitness" element={<> <LogoBox/><FitHead/><Fitness/></>}/>
          <Route exact path="/yoga" element={<> <LogoBox/><YogaHead/><Yoga/></>}/>
          <Route exact path="/admin" element={<Addevent />} />
          <Route exact path="/removeevent" element={<Removeevent/>} />
        </Routes>
        {/* <Fitness/> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
