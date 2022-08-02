import React, { useState } from "react";
import "./App.css";
import { NavBar, LogoBox } from "./Components";
import { Fitness, Yoga, Therapy, Home } from "./Containers";
import { YogaHead, FitHead, TherapyHead } from "./Containers";
import { Footer } from "./Components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addevent from "./Containers/Admin/Addevent";
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
                <FitHead />
                <Fitness />
              </>
            }
          />
          <Route
            exact
            path="/yoga"
            element={
              <>
                <YogaHead />
                <Yoga />
              </>
            }
          />
          <Route
            exact
            path="/therapy"
            element={
              <>
                <TherapyHead />
                <Therapy />
              </>
            }
          />

          <Route exact path="/admin" element={<Addevent />} />
        </Routes>
        {/* <Fitness/> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
