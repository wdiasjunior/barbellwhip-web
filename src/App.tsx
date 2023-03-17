import React, { useState, } from "react";

import { Provider } from "jotai";

import NavBar from "./sharedComponents/navBar/navBar";
import ProgramPage from "./pages/program/programPage";

import "./App.css";

function App() {

  const [navBarOpen, setNavBarOpen] = useState(false);

  return (
    <>
      <Provider>
        <div className="App">
          <NavBar setNavBarOpen={setNavBarOpen} navBarOpen={navBarOpen} />
          <ProgramPage setNavBarOpen={setNavBarOpen} />
        </div>
      </Provider>
    </>
  );
}

export default App;
