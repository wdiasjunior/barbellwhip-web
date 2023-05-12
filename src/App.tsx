import React, { useState, } from "react";

import { Routes, Route, useLocation, } from "react-router-dom";

import NavBar from "./sharedComponents/navBar/navBar";
import BottomTabBar from "./sharedComponents/bottomTabBar/bottomTabBar";
import ProgramPage from "./pages/program/programPage";
import CalculatorPage from "./pages/calculator/calculatorPage";
import PlateMathPage from "./pages/plateMath/plateMathPage";
import ExerciseItemPage from "./pages/program/subPages/exerciseItemPage/exerciseItemPage";
import RMReviewPage from "./pages/program/subPages/rmReviewPage/rmReviewPage";
import NotFoundPage from "./pages/notFound/notFoundPage";

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
    "/exerciseItemPage",
    "/rmReviewPage",
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
            - save only one program on web version for the sake of simplicity and performance?
              - an atomWithStorage that holds every program and an atomWithStorage to hold the active program?
            -
          */}
          <Route path="/" element={<ProgramPage setNavBarOpen={setNavBarOpen} />} />
          <Route path="/exerciseItemPage" element={<ExerciseItemPage />} />
          <Route path="/rmReviewPage" element={<RMReviewPage />} />
          <Route path="/calculatorPage" element={<CalculatorPage setNavBarOpen={setNavBarOpen} />} />
          <Route path="/plateMathPage" element={<PlateMathPage setNavBarOpen={setNavBarOpen} />} />
          {/*<Route path="*" element={<NotFoundPage />} />*/}
        </Routes>
        {showBottomTabBar.includes(location.pathname) && <BottomTabBar isProgramPage={!location.pathname.includes("step") ? true : false} />}
      </div>
    </>
  );
}

export default App;
