import React, { useState, } from "react";

import { Provider } from "jotai";

import { BrowserRouter, Routes, Route, } from "react-router-dom";

import NavBar from "./sharedComponents/navBar/navBar";
import ProgramPage from "./pages/program/programPage";
import ExerciseItemPage from "./pages/program/subPages/exerciseItemPage/exerciseItemPage";

import "./App.css";

function App() {

  const [navBarOpen, setNavBarOpen] = useState(false);

  return (
    <>
      <div className="App">
        <Provider>
          <BrowserRouter>
            <NavBar setNavBarOpen={setNavBarOpen} navBarOpen={navBarOpen} />
            <Routes>
                {/*
                  - individual header or a generic one for every page and pass props on every render/route?
                  - router component that just returns the pages based on a jotai atom specifying a route?
                  - save only one program on web version for the sake of simplicity and performance?
                  - change components inline style and className format to match what I do in M3's codes?
                  -
                */}
                <Route path="/" element={<ProgramPage setNavBarOpen={setNavBarOpen} />} />
                <Route path="/exerciseItemPage" element={<ExerciseItemPage />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    </>
  );
}

export default App;
