import React from "react";

import { Provider } from "jotai";

import NavBar from "./sharedComponents/NavBar/NavBar";

import "./App.css";

function App() {

  return (
    <>
      <Provider>
        <div className="App">
          <NavBar />
        </div>
      </Provider>
    </>
  );
}

export default App;
