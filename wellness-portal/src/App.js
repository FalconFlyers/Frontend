import React, { useState } from "react";
import "./App.css";
import { NavBar, Header, Events, LogoBox } from "./Components";
import {
  Fitness,
  Yoga,
  Therapy,
  Meditation,
  Mindfulness,
  Home,
} from "./Containers";

import { Footer } from "./Components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addevent from "./Containers/Admin/Addevent";
import Removeevent from "./Containers/Admin/Removeevent";
function App() {
  const [isLogged, setIsLogged] = useState(false);
  const changedLogging = () => {
    setIsLogged(!isLogged);
  };
  return (
    <div className="App">
      <BrowserRouter>
<<<<<<< HEAD
        <NavBar changedLogging={changedLogging} isLogged={isLogged} />
=======
        <NavBar />
>>>>>>> eb1fe69f60b43d3168e745e5d3dc98d70ca1fe99
        <Routes>
          <Route
            exact
            path="/home"
            element={
              <>
                <Home changedLogging={changedLogging} isLogged={isLogged} />
              </>
            }
          />
          <Route
            exact
            path="/fitness"
            element={
              <>
              <LogoBox/>
                <Fitness />
              </>
            }
          />
          <Route
            exact
            path="/yoga"
            element={
              <>
              <LogoBox/>
                <Yoga />
              </>
            }
          />
          <Route
            exact
            path="/therapy"
            element={
              <>
              <LogoBox/>
                <Therapy />
              </>
            }
          />

          <Route
            exact
            path="/meditation"
            element={
              <>
              <LogoBox/>
                <Meditation />
              </>
            }
          />
          <Route
            exact
            path="/mindfulness"
            element={
              <>
              <LogoBox/>
                <Mindfulness />
              </>
            }
          />
<<<<<<< HEAD

          <Route exact path="/admin" element={<Addevent />} />
=======
          <Route exact path="/fitness" element={<> <LogoBox/><FitHead/><Fitness/></>}/>
          <Route exact path="/yoga" element={<> <LogoBox/><YogaHead/><Yoga/></>}/>
          <Route exact path="/admin" element={<Addevent />} />
          <Route exact path="/removeevent" element={<Removeevent/>} />
>>>>>>> eb1fe69f60b43d3168e745e5d3dc98d70ca1fe99
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
