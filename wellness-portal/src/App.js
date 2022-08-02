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
        <NavBar changedLogging={changedLogging} isLogged={isLogged} />
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
          <Route exact path="/admin" element={<Addevent />} />
          <Route exact path="/removeevent" element={<Removeevent/>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
