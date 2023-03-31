import React, { useState, } from "react";

import { Routes, Route, useLocation, } from "react-router-dom";

import NavBar from "./sharedComponents/navBar/navBar";
import ProgramPage from "./pages/program/programPage";
import ExerciseItemPage from "./pages/program/subPages/exerciseItemPage/exerciseItemPage";
import RMReviewPage from "./pages/program/subPages/rmReviewPage/rmReviewPage";

import "./App.css";

function App() {

  const [navBarOpen, setNavBarOpen] = useState(false);

  let location = useLocation();
  // console.log("useLocation", location);

  const showNavBar = [
    "/",
    "/calculatorPage",
    "/plateMathPage",
    "/programEditorPage",
    "/prTrackerPage",
    "/settingsPage",
  ];

  const showBottomTabBar = [
    "/",
    "/calculatorPage",
    "/plateMathPage",
    "/step1",
    "/step2",
    "/step3",
  ];

  return (
    <>
      <div className="App">
        {showNavBar.includes(location.pathname) && <NavBar setNavBarOpen={setNavBarOpen} navBarOpen={navBarOpen} />}
        <Routes>
          {/*
            - individual header or a generic one for every page and pass props on every render/route?
            - router component that just returns the pages based on a jotai atom specifying a route?
            - save only one program on web version for the sake of simplicity and performance?
            - change components inline style and className format to match what I do in M3's codes?
            - conditional render bottom tabs for program and program edtitor page stacks
            -
          */}
          <Route path="/" element={<ProgramPage setNavBarOpen={setNavBarOpen} />} />
          <Route path="/exerciseItemPage" element={<ExerciseItemPage />} />
          <Route path="/rmReviewPage" element={<RMReviewPage />} />
          {/*<Route element={<h1>404 not found</h1>} />*/}
        </Routes>
        {/*{showBottomTabBar.includes(location.pathname) && <BottomTabBar />}*/}
      </div>
    </>
  );
}

export default App;
