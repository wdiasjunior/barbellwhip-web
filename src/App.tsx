import React from "react";

import { Provider } from "jotai";

import NavBar from "./sharedComponents/navBar/navBar";
import ProgramPage from "./pages/program/programPage";

import "./App.css";

function App() {

  return (
    <>
      <Provider>
        <div className="App">
          <NavBar />
          <ProgramPage />
        </div>
      </Provider>
    </>
  );
}

export default App;
