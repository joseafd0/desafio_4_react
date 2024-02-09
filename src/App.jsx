import React from "react";
import Buscador from "./components/Buscador";
import MiApi from "./components/MiApi";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="app-main">
        <h1 className="title">Marvel Comics Search</h1>
        <Buscador />
        <MiApi />
      </div>
    </>
  );
};

export default App;
