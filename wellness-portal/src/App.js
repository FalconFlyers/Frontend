import React, { useState } from "react";
import "./App.css";
import { NavBar, Header, Events, LogoBox } from "./Components";
import { Fitness, Yoga,Therapy,Meditation,Mindfulness,Home} from "./Containers";
import {YogaHead,TherapyHead,MeditationHead,MindfulnessHead} from "./Containers";
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
          <Route exact path="/fitness" element={<><Fitness/></>}/>
          <Route exact path="/yoga" element={<><YogaHead/><Yoga/></>}/>
          <Route exact path="/therapy" element={<><TherapyHead/><Therapy/></>}/>
          <Route exact path="/meditation" element={<><MeditationHead/><Meditation/></>}/>
          <Route exact path="/mindfulness" element={<><MindfulnessHead/><Mindfulness/></>}/>

          <Route exact path="/admin" element={<Addevent />} />
        </Routes>
        {/* <Fitness/> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
